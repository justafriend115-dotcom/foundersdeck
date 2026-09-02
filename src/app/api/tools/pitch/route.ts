import { NextRequest, NextResponse } from "next/server";

import { generateDeckSlides } from "@/lib/ai/deck";
import type { DeckSlide, PitchInput } from "@/lib/ai/types";
import { requireUser } from "@/lib/auth/server";
import { prisma } from "@/lib/db";
import { checkDailySpendCap, checkHourlyLimit, logGeneration } from "@/lib/generation-limiter";
import { LIMITS, normalizePlan } from "@/lib/plans";
import { readJsonBody } from "@/lib/request";

const FIELD_MAX = 500;
const PITCH_FIELDS = [
  "companyName",
  "mission",
  "problem",
  "solution",
  "industry",
  "targetMarket",
  "businessModel",
  "stage",
  "location",
  "foundingYear",
  "founderName",
  "founderBackground",
] as const;

function cleanPitchInput(value: unknown): PitchInput | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return null;
  const cleaned: Record<string, string> = {};
  for (const field of PITCH_FIELDS) {
    const raw = (value as Record<string, unknown>)[field];
    if (raw === undefined || raw === null) continue;
    if (typeof raw !== "string") return null;
    if (raw.length > FIELD_MAX) return null;
    cleaned[field] = raw.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "");
  }
  return {
    companyName: cleaned.companyName ?? "",
    industry: cleaned.industry ?? "",
    mission: cleaned.mission ?? "",
    problem: cleaned.problem ?? "",
    solution: cleaned.solution ?? "",
  };
}

function parseSlides(content: string): DeckSlide[] {
  try {
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function deckDto(deck: {
  id: string;
  title: string;
  content: string;
  regenCount: number;
  watermarked: boolean;
  createdAt: Date;
}) {
  return {
    id: deck.id,
    title: deck.title,
    slides: parseSlides(deck.content),
    regenCount: deck.regenCount,
    watermarked: deck.watermarked,
    createdAt: deck.createdAt.toISOString(),
  };
}

export async function GET() {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const decks = await prisma.pitchDeck.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: "desc" },
    take: 20,
  });
  return NextResponse.json({ ok: true, decks: decks.map(deckDto) });
}

export async function POST(request: NextRequest) {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const body = (await readJsonBody(request, 64 * 1024)) as Record<string, unknown> | null;
  const input = cleanPitchInput(body?.input);
  if (!input) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const plan = normalizePlan(user.plan);
  const isFree = plan === "free";
  const limit = LIMITS[plan].pitchDeckCreations;

  if (!user.bypassCaps && limit !== null) {
    const deckCount = await prisma.pitchDeck.count({ where: { userId: user.id } });
    if (deckCount >= limit) {
      return NextResponse.json(
        { ok: false, code: "generation_cap", error: "Free plan deck limit reached. Upgrade to create more decks." },
        { status: 402 },
      );
    }
  }

  const [hourly, spend] = await Promise.all([
    checkHourlyLimit(user.id, user.bypassCaps),
    checkDailySpendCap(user.id, plan, user.bypassCaps),
  ]);
  if (!hourly.allowed || !spend.allowed) {
    return NextResponse.json(
      { ok: false, code: "rate_limited", error: "Generation limit reached. Please try again later." },
      { status: 429 },
    );
  }

  const { slides, inputTokens, outputTokens } = await generateDeckSlides(input);
  const title = String(input.companyName ?? "Untitled deck").slice(0, 120);
  const watermarked = isFree && !user.bypassCaps;

  const deck = await prisma.pitchDeck.create({
    data: { userId: user.id, title, content: JSON.stringify(slides), watermarked },
  });

  await logGeneration(user.id, "pitch_deck", inputTokens, outputTokens);

  return NextResponse.json({ ok: true, deck: deckDto(deck) });
}

import { NextRequest, NextResponse } from "next/server";

import { generateDeckSlides } from "@/lib/ai/deck";
import type { DeckSlide, PitchInput } from "@/lib/ai/types";
import { requireUser } from "@/lib/auth/server";
import { prisma } from "@/lib/db";
import { FREE_DECK_LIMIT } from "@/lib/plans";
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
  return NextResponse.json({
    ok: true,
    decks: decks.map((deck) => ({
      id: deck.id,
      title: deck.title,
      slides: parseSlides(deck.content),
      createdAt: deck.createdAt.toISOString(),
    })),
  });
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

  const isFree = user.plan !== "pro" && user.plan !== "enterprise";
  if (isFree) {
    const deckCount = await prisma.pitchDeck.count({ where: { userId: user.id } });
    if (deckCount >= FREE_DECK_LIMIT) {
      return NextResponse.json(
        { ok: false, code: "plan_limit", error: "Free plan limit reached." },
        { status: 402 },
      );
    }
  }

  const slides = await generateDeckSlides(input);
  const title = String(input.companyName ?? "Untitled deck").slice(0, 120);

  const deck = await prisma.pitchDeck.create({
    data: { userId: user.id, title, content: JSON.stringify(slides) },
  });

  return NextResponse.json({
    ok: true,
    deck: {
      id: deck.id,
      title: deck.title,
      slides: parseSlides(deck.content),
      createdAt: deck.createdAt.toISOString(),
    },
  });
}

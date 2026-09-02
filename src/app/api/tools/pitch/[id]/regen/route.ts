import { NextRequest, NextResponse } from "next/server";

import { generateDeckSlides } from "@/lib/ai/deck";
import type { DeckSlide, PitchInput } from "@/lib/ai/types";
import { requireUser } from "@/lib/auth/server";
import { prisma } from "@/lib/db";
import { LIMITS, normalizePlan } from "@/lib/plans";
import { readJsonBody } from "@/lib/request";

const FIELD_MAX = 500;
const PITCH_FIELDS = ["companyName", "mission", "problem", "solution", "industry"] as const;

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

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const deck = await prisma.pitchDeck.findUnique({ where: { id: params.id } });

  if (!deck || deck.userId !== user.id) {
    return NextResponse.json({ ok: false, error: "Not found." }, { status: 404 });
  }

  const plan = normalizePlan(user.plan);
  const isFree = plan === "free";
  const regenLimit = LIMITS[plan].pitchDeckRegens;

  if (!user.bypassCaps && regenLimit !== null && deck.regenCount >= regenLimit) {
    return NextResponse.json(
      {
        ok: false,
        code: "regen_cap",
        error: "Regeneration limit reached. Upgrade to continue refining your deck.",
      },
      { status: 402 },
    );
  }

  const body = (await readJsonBody(request, 64 * 1024)) as Record<string, unknown> | null;
  const input = cleanPitchInput(body?.input);
  if (!input) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const slides = await generateDeckSlides(input);
  const watermarked = isFree && !user.bypassCaps;

  const updated = await prisma.pitchDeck.update({
    where: { id: deck.id },
    data: {
      content: JSON.stringify(slides),
      regenCount: { increment: 1 },
      watermarked,
    },
  });

  return NextResponse.json({
    ok: true,
    deck: {
      id: updated.id,
      title: updated.title,
      slides: parseSlides(updated.content),
      regenCount: updated.regenCount,
      watermarked: updated.watermarked,
      createdAt: updated.createdAt.toISOString(),
    },
  });
}

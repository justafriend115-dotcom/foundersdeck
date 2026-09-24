import { NextRequest, NextResponse } from "next/server";

import type { DeckSlide } from "@/lib/ai/types";
import { requireUser } from "@/lib/auth/server";
import { prisma } from "@/lib/db";

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

export async function POST(_request: NextRequest) {
  return NextResponse.json(
    { ok: false, code: "coming_soon", error: "Pitch Deck Generator is coming soon." },
    { status: 503 },
  );
}

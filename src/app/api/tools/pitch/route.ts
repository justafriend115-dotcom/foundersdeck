import { NextRequest, NextResponse } from "next/server";

import { generateDeckSlides } from "@/lib/ai/deck";
import type { DeckSlide } from "@/lib/ai/types";
import { requireUser } from "@/lib/auth/server";
import { prisma } from "@/lib/db";
import { FREE_DECK_LIMIT } from "@/lib/plans";

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
  const body = await request.json().catch(() => null);
  const input = body?.input;
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
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

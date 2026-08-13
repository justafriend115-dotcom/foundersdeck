import { NextRequest, NextResponse } from "next/server";

import { generateSlideImage, refineSlideImage } from "@/lib/ai/image";
import { requireUser } from "@/lib/auth/server";
import { prisma } from "@/lib/db";
import { readJsonBody } from "@/lib/request";

const PROMPT_MAX = 600;

type Slide = { title: string; bullets: string[]; narrative: string; image?: string };

function parseSlides(content: string): Slide[] | null {
  try {
    const parsed = JSON.parse(content) as unknown;
    return Array.isArray(parsed) ? (parsed as Slide[]) : null;
  } catch {
    return null;
  }
}

function buildPrompt(deckTitle: string, slide: Slide, action: "generate" | "edit"): string {
  const topic = `${slide.title}: ${slide.bullets.join(", ")}`.slice(0, 400);
  const base = `Professional pitch deck slide visual for "${deckTitle}" — ${topic}. Abstract, clean composition, premium fintech aesthetic in charcoal black and warm gold, soft depth of field, no text, no words, no letters.`;
  return action === "edit"
    ? `Refine this slide visual so it looks more premium and cohesive with the deck: ${base}`
    : base;
}

export async function POST(request: NextRequest) {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await readJsonBody(request, 16 * 1024)) as Record<string, unknown> | null;
  const deckId = String(body?.deckId ?? "");
  const slideIndex = Number(body?.slideIndex ?? -1);
  const action = body?.action;

  if (
    !deckId ||
    !Number.isInteger(slideIndex) ||
    slideIndex < 0 ||
    (action !== "generate" && action !== "edit" && action !== "remove")
  ) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const deck = await prisma.pitchDeck.findFirst({ where: { id: deckId, userId: user.id } });
  if (!deck) {
    return NextResponse.json({ ok: false, error: "Deck not found." }, { status: 404 });
  }

  const slides = parseSlides(deck.content);
  if (!slides || slideIndex >= slides.length) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  if (action === "remove") {
    delete slides[slideIndex].image;
    await prisma.pitchDeck.update({
      where: { id: deck.id },
      data: { content: JSON.stringify(slides) },
    });
    return NextResponse.json({ ok: true });
  }

  const slide = slides[slideIndex];
  const prompt = buildPrompt(deck.title, slide, action);
  if (prompt.length > PROMPT_MAX) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const image =
    action === "edit" && slide.image
      ? await refineSlideImage(prompt, slide.image)
      : await generateSlideImage(prompt);

  if (!image) {
    return NextResponse.json(
      { ok: false, error: "Image generation is unavailable right now. Please try again." },
      { status: 503 },
    );
  }

  slides[slideIndex].image = image;
  await prisma.pitchDeck.update({
    where: { id: deck.id },
    data: { content: JSON.stringify(slides) },
  });

  return NextResponse.json({ ok: true, image });
}

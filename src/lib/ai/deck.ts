import { generatePitchDeck } from "@/lib/mock-ai";
import { generateAiText, getProviderInfo } from "@/lib/ai/provider";
import type { DeckSlide, PitchInput } from "@/lib/ai/types";

const DECK_SYSTEM =
  "You are a world-class startup pitch deck strategist. You distill founder input into a clear, investor-grade narrative. Always respond with raw JSON only  no markdown, no code fences, no commentary.";

const DECK_SLIDE_TITLES = [
  "Cover",
  "Problem",
  "Solution",
  "Market Opportunity",
  "Business Model",
  "Traction & Roadmap",
  "The Ask",
];

function buildDeckPrompt(input: PitchInput): string {
  return [
    `Company: ${input.companyName || "(not provided)"}`,
    `Industry: ${input.industry || "(not provided)"}`,
    `Mission: ${input.mission || "(not provided)"}`,
    `Problem: ${input.problem || "(not provided)"}`,
    `Solution: ${input.solution || "(not provided)"}`,
    "",
    `Generate a JSON array with exactly 7 slide objects, in this order: ${DECK_SLIDE_TITLES.join(", ")}.`,
    "Each slide object must have exactly this shape:",
    '{"title": string, "bullets": string[] (3-5 punchy bullet points), "narrative": string (2-3 sentences, spoken-leadership tone)}',
    "Bullets must be specific to the company input  never generic filler. Keep every bullet under 20 words.",
  ].join("\n");
}

function parseDeckJson(text: string): DeckSlide[] | null {
  const start = text.indexOf("[");
  const end = text.lastIndexOf("]");
  if (start === -1 || end === -1 || end <= start) return null;

  let parsed: unknown;
  try {
    parsed = JSON.parse(text.slice(start, end + 1));
  } catch {
    return null;
  }
  if (!Array.isArray(parsed) || parsed.length < 5) return null;

  const slides: DeckSlide[] = [];
  for (const item of parsed) {
    if (typeof item !== "object" || item === null) return null;
    const { title, bullets, narrative } = item as Record<string, unknown>;
    if (typeof title !== "string" || !title.trim()) return null;
    if (typeof narrative !== "string" || !narrative.trim()) return null;
    const bulletList = Array.isArray(bullets)
      ? bullets.filter((b): b is string => typeof b === "string" && b.trim().length > 0).slice(0, 5)
      : [];
    if (bulletList.length === 0) return null;
    slides.push({ title: title.trim(), bullets: bulletList, narrative: narrative.trim() });
  }
  return slides;
}

export async function generateDeckSlides(input: PitchInput): Promise<DeckSlide[]> {
  const text = await generateAiText(DECK_SYSTEM, buildDeckPrompt(input), 3000);
  if (text) {
    const slides = parseDeckJson(text);
    if (slides) return slides;
  }
  return generatePitchDeck(input);
}

export function currentAiProvider() {
  return getProviderInfo().provider;
}

import { generateAiText, getProviderInfo } from "@/lib/ai/provider";
import type { SuggestionKind } from "@/lib/ai/types";
import { generateBusinessPlanSuggestion, generatePitchSuggestion } from "@/lib/mock-ai";

const SUGGEST_SYSTEM =
  "You are a pragmatic startup coach helping founders draft their materials. Write in plain, confident language. Respond with 2-3 sentences only  no headers, no markdown, no commentary.";

function buildSuggestPrompt(kind: SuggestionKind, section: string): string {
  if (kind === "business-plan") {
    return [
      `The founder is writing the "${section}" section of a business plan.`,
      "Draft 2-3 sentences they can paste directly, specific enough to be useful but general enough to be a starting point.",
      "End with a concrete example or metric the founder can customize.",
    ].join("\n");
  }
  return [
    `The founder is answering the "${section}" question of a pitch deck intake form.`,
    section === "problem" &&
      "Describe the pain: what it costs teams in time and money today, and why incumbents fail to solve it.",
    section === "solution" &&
      "Describe the fix: how it works, why it is better, and how fast it delivers value.",
    section === "mission" && "Write a one-sentence mission with ambition and clarity.",
    "Write 2-3 sentences the founder can paste directly.",
  ]
    .filter(Boolean)
    .join("\n");
}

export async function generateSuggestion(
  kind: SuggestionKind,
  section: string,
): Promise<{ text: string; provider: string }> {
  const provider = getProviderInfo().provider;
  const text = await generateAiText(SUGGEST_SYSTEM, buildSuggestPrompt(kind, section), 250);
  if (text) return { text, provider };

  const fallback =
    kind === "business-plan"
      ? generateBusinessPlanSuggestion(section)
      : generatePitchSuggestion(section);
  return { text: fallback, provider: "mock" };
}

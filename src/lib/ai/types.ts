export interface PitchInput {
  companyName: string;
  industry: string;
  mission: string;
  problem: string;
  solution: string;
}

export interface DeckSlide {
  title: string;
  bullets: string[];
  narrative: string;
}

export type SuggestionKind = "business-plan" | "pitch";

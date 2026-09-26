"use client";

import { useEffect } from "react";

import { storageKey, useLocalStorage } from "@/lib/storage";
import type { User } from "@/lib/auth/types";

/* ------------------------------------------------------------------ */
/* Onboarding profile — collected via the welcome screen               */
/* ------------------------------------------------------------------ */

export type FounderStage = "idea" | "pre-revenue" | "revenue" | "raising";
export type FounderGoal = "validate" | "launch" | "raise" | "grow";

export interface Profile {
  stage: FounderStage;
  goal: FounderGoal;
}

export const STAGE_OPTIONS: { value: FounderStage; label: string; hint: string }[] = [
  { value: "idea", label: "Just an idea", hint: "Exploring, nothing built yet" },
  { value: "pre-revenue", label: "Building, pre-revenue", hint: "MVP in progress" },
  { value: "revenue", label: "Early revenue", hint: "First customers coming in" },
  { value: "raising", label: "Actively raising", hint: "Talking to investors now" },
];

export const GOAL_OPTIONS: { value: FounderGoal; label: string; hint: string }[] = [
  { value: "validate", label: "Validate the idea", hint: "Sharpen the concept and plan" },
  { value: "launch", label: "Get to launch", hint: "Business plan and first customers" },
  { value: "raise", label: "Raise funding", hint: "Deck, investor list, outreach" },
  { value: "grow", label: "Grow revenue", hint: "Model numbers, plan scenarios" },
];

/* ------------------------------------------------------------------ */
/* Journey steps — persistent checklist + next-action engine           */
/* ------------------------------------------------------------------ */

export type StepId =
  | "profile"
  | "pitch"
  | "gauntlet"
  | "business-plan"
  | "financials"
  | "term-sheet"
  | "investor-match"
  | "outreach"
  | "cap-table"
  | "crm"
  | "data-room";

export interface JourneyStep {
  id: StepId;
  title: string;
  blurb: string;
  href: string;
  cta: string;
  emptyOneLiner: string;
}

export const JOURNEY_STEPS: Record<StepId, JourneyStep> = {
  profile: {
    id: "profile",
    title: "Set up your founder profile",
    blurb: "Tell us your stage and goal so every tool points you at the right next step.",
    href: "/dashboard",
    cta: "Answer 2 quick questions",
    emptyOneLiner: "Two quick questions power your whole roadmap.",
  },
  pitch: {
    id: "pitch",
    title: "Generate your pitch deck",
    blurb: "Answer a few questions and get a structured, investor-ready deck.",
    href: "/dashboard/pitch",
    cta: "Start the pitch generator",
    emptyOneLiner: "No decks yet — one sentence about your startup is all it takes to start.",
  },
  gauntlet: {
    id: "gauntlet",
    title: "Run The Gauntlet",
    blurb: "Have your pitch critiqued by a skeptical investor, a market realist and a technical reviewer, then get one synthesized report.",
    href: "/dashboard/gauntlet",
    cta: "Send your pitch into The Gauntlet",
    emptyOneLiner: "The panel is waiting — bring a deck (or paste your pitch) and let them tear into it.",
  },
  "business-plan": {
    id: "business-plan",
    title: "Build your business plan",
    blurb: "A guided 7-step wizard from executive summary to milestones.",
    href: "/dashboard/business-plan",
    cta: "Open the business plan builder",
    emptyOneLiner: "An empty plan is just a blank page — step one takes two minutes.",
  },
  financials: {
    id: "financials",
    title: "Model your finances",
    blurb: "Turn rough assumptions into a real 12-month revenue projection.",
    href: "/dashboard/financials",
    cta: "Open the financial model builder",
    emptyOneLiner: "Plug in four rough numbers and see a year of revenue play out.",
  },
  "term-sheet": {
    id: "term-sheet",
    title: "Understand your term sheet",
    blurb: "SAFEs and term sheets broken down clause by clause in plain language.",
    href: "/dashboard/term-sheet",
    cta: "Open the term sheet explainer",
    emptyOneLiner: "Paste a clause you don't understand and get it explained like a human wrote it for you.",
  },
  "investor-match": {
    id: "investor-match",
    title: "Find your investor fit",
    blurb: "Match your stage, sector and location against the investor types that actually fund you.",
    href: "/dashboard/investor-match",
    cta: "Run the investor match",
    emptyOneLiner: "Three inputs — stage, sector, location — and you'll know who to talk to.",
  },
  outreach: {
    id: "outreach",
    title: "Draft investor outreach",
    blurb: "Cold emails and follow-ups engineered to actually get replies.",
    href: "/dashboard/outreach",
    cta: "Draft your first cold email",
    emptyOneLiner: "Write one email investors will want to answer — pick an investor and go.",
  },
  "cap-table": {
    id: "cap-table",
    title: "Simulate your cap table",
    blurb: "See exactly how much each funding round dilutes you before you sign anything.",
    href: "/dashboard/cap-table",
    cta: "Open the cap table simulator",
    emptyOneLiner: "Add your founders' split and first round to see what you really own later.",
  },
  crm: {
    id: "crm",
    title: "Track investors in your CRM",
    blurb: "Move leads from cold to closed with meetings and follow-ups logged.",
    href: "/dashboard/crm",
    cta: "Add your first investor",
    emptyOneLiner: "Your pipeline is empty — add the first investor you'd love to meet.",
  },
  "data-room": {
    id: "data-room",
    title: "Prepare your data room",
    blurb: "Work through the due-diligence checklist investors will ask for.",
    href: "/dashboard/data-room",
    cta: "Open the data room checklist",
    emptyOneLiner: "A tidy data room wins deals — tick off the first document today.",
  },
};

/** Ordered master list used for the progress rail on any dashboard page. */
const MASTER_ORDER: StepId[] = [
  "profile",
  "pitch",
  "gauntlet",
  "business-plan",
  "financials",
  "term-sheet",
  "investor-match",
  "outreach",
  "cap-table",
  "crm",
  "data-room",
];

/** Recommended journeys keyed by the founder's goal from the welcome screen. */
const GOAL_JOURNEYS: Record<FounderGoal, StepId[]> = {
  validate: ["profile", "business-plan", "financials", "pitch", "gauntlet"],
  launch: ["profile", "business-plan", "financials", "data-room", "crm"],
  raise: ["profile", "pitch", "gauntlet", "investor-match", "outreach", "crm", "term-sheet", "cap-table"],
  grow: ["profile", "financials", "cap-table", "term-sheet", "crm", "data-room"],
};

export function journeyForGoal(goal: FounderGoal | undefined): StepId[] {
  return GOAL_JOURNEYS[goal ?? "raise"];
}

/**
 * Chained next-step suggestions shown after finishing a tool:
 * the next items in the founder's journey, falling back to the
 * master order if they've completed everything.
 */
export function getNextSteps(
  justCompleted: StepId,
  profile: Profile | null,
  completed: CompletedMap,
): JourneyStep[] {
  const journey = journeyForGoal(profile?.goal);
  const idx = journey.indexOf(justCompleted);
  const chain = (idx >= 0 ? journey.slice(idx + 1) : []).filter((id) => !completed[id]);
  const fallback = MASTER_ORDER.filter((id) => id !== justCompleted && !completed[id]);
  return [...chain, ...fallback].slice(0, 3).map((id) => JOURNEY_STEPS[id]);
}

/* ------------------------------------------------------------------ */
/* Completion tracking (per user, localStorage-backed)                 */
/* ------------------------------------------------------------------ */

export type CompletedMap = Partial<Record<StepId, true>>;

export function useJourney(userId: string) {
  const [profile, setProfile] = useLocalStorage<Profile | null>(storageKey(userId, "profile"), null);
  const [completed, setCompleted] = useLocalStorage<CompletedMap>(storageKey(userId, "completed"), {});

  const complete = (id: StepId) => setCompleted({ ...completed, [id]: true });
  const reset = () => {
    setCompleted({});
    setProfile(null);
  };

  return { profile, setProfile, completed, setCompleted, complete, reset };
}

/**
 * Marks a journey step as completed when the underlying tool has real
 * output. Call once per dashboard page with the page's step id.
 */
export function useAutoComplete(stepId: StepId, hasOutput: boolean, userId: string) {
  const { completed, setCompleted } = useJourney(userId);
  useEffect(() => {
    if (hasOutput && !completed[stepId]) {
      setCompleted({ ...completed, [stepId]: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasOutput, userId]);
}

/**
 * Server-side completion hints derived from existing data, merged into
 * the client-side checklist so returning users don't see stale gaps.
 */
export function serverCompletionHints(user: User): CompletedMap {
  const hints: CompletedMap = {};
  if (user.businessPlanCompleted) hints["business-plan"] = true;
  return hints;
}

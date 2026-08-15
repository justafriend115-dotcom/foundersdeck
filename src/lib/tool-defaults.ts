import { REVENUE_MODELS } from "./financials";
import type { ContingencyState, FinancialState, Investor, Scenario } from "./tool-types";

export function emptyBusinessPlan(): Record<string, string> {
  return {};
}

const defaultScenarios: Scenario[] = [
  {
    id: "best",
    label: "Best case",
    description: "Everything goes right  hockey stick growth.",
    years: ["", "", "", "", ""],
  },
  {
    id: "realistic",
    label: "Realistic",
    description: "The plan you're actually executing.",
    years: ["", "", "", "", ""],
  },
  {
    id: "worst",
    label: "Worst case",
    description: "Fundraising stalls, growth slows, runway shortens.",
    years: ["", "", "", "", ""],
  },
];

export function defaultContingencyState(): ContingencyState {
  return {
    scenarios: defaultScenarios,
    risks: [
      {
        id: "r1",
        name: "Fundraise takes longer than expected",
        likelihood: 4,
        impact: 5,
        mitigation: "Keep 12+ months of runway; warm investors continuously.",
      },
      {
        id: "r2",
        name: "Key competitor launches first",
        likelihood: 3,
        impact: 3,
        mitigation: "Ship fast; defend with community and service quality.",
      },
      {
        id: "r3",
        name: "Co-founder departure",
        likelihood: 2,
        impact: 4,
        mitigation: "Clear vesting terms, documented responsibilities, succession plan.",
      },
    ],
    pivots: { best: "", realistic: "", worst: "" },
  };
}

export function defaultFinancialState(): FinancialState {
  return {
    model: REVENUE_MODELS[0].id,
    ...REVENUE_MODELS[0].defaults,
  };
}

export const DEFAULT_CRM: Investor[] = [];

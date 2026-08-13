export type Plan = "free" | "pro" | "enterprise";

export interface PlanInfo {
  name: string;
  priceLabel: string;
  deckLimit: number | null;
  description: string;
}

export const PLANS: Record<Plan, PlanInfo> = {
  free: {
    name: "Free",
    priceLabel: "$0/mo",
    deckLimit: 3,
    description: "For validating your idea",
  },
  pro: {
    name: "Pro",
    priceLabel: "$29/mo",
    deckLimit: null,
    description: "For founders ready to raise",
  },
  enterprise: {
    name: "Enterprise",
    priceLabel: "Custom",
    deckLimit: null,
    description: "For accelerators & funds",
  },
};

export const FREE_DECK_LIMIT = PLANS.free.deckLimit as number;

export function normalizePlan(plan: string | null | undefined): Plan {
  return plan === "pro" || plan === "enterprise" ? plan : "free";
}

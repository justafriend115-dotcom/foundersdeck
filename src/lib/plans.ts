export type Plan = "free" | "pro" | "enterprise";

export interface PlanInfo {
  name: string;
  priceLabel: string;
  description: string;
}

export const PLANS: Record<Plan, PlanInfo> = {
  free: {
    name: "Free",
    priceLabel: "$0/mo",
    description: "For validating your idea",
  },
  pro: {
    name: "Pro",
    priceLabel: "$29/mo",
    description: "For founders ready to raise",
  },
  enterprise: {
    name: "Enterprise",
    priceLabel: "Custom",
    description: "For accelerators & funds",
  },
};

export const LIMITS = {
  free: {
    pitchDeckCreations: 1,
    pitchDeckRegens: 3,
    businessPlanCompletions: 1,
  },
  pro: {
    pitchDeckCreations: null as number | null,
    pitchDeckRegens: Number(process.env.PRO_REGEN_LIMIT ?? "4"),
    businessPlanCompletions: null as number | null,
  },
  enterprise: {
    pitchDeckCreations: null as number | null,
    pitchDeckRegens: null as number | null,
    businessPlanCompletions: null as number | null,
  },
};

export function normalizePlan(plan: string | null | undefined): Plan {
  return plan === "pro" || plan === "enterprise" ? plan : "free";
}

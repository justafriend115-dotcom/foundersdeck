export type Plan = "free" | "starter" | "raise_pass" | "pro" | "enterprise";

export interface PlanInfo {
  name: string;
  priceLabel: string;
  description: string;
}

export const PLANS: Record<Plan, PlanInfo> = {
  free: {
    name: "Preview",
    priceLabel: "$0",
    description: "Try every tool, watermarked exports",
  },
  starter: {
    name: "Starter",
    priceLabel: "$9/mo",
    description: "For early-stage founders",
  },
  raise_pass: {
    name: "Raise Pass",
    priceLabel: "$79",
    description: "Everything for your raise. Once.",
  },
  pro: {
    name: "Pro",
    priceLabel: "$19/mo",
    description: "For ongoing fundraising & portfolio updates",
  },
  enterprise: {
    name: "Accelerator",
    priceLabel: "Custom",
    description: "For accelerators & pre-seed funds",
  },
};

export const LIMITS = {
  free: {
    // Unlimited creation — gate is at distribution (watermarked export)
    pitchDeckCreations: null as number | null,
    pitchDeckRegens: 5,
    businessPlanCompletions: null as number | null,
  },
  starter: {
    pitchDeckCreations: null as number | null,
    pitchDeckRegens: 5,
    businessPlanCompletions: null as number | null,
  },
  raise_pass: {
    pitchDeckCreations: null as number | null,
    pitchDeckRegens: null as number | null,
    businessPlanCompletions: null as number | null,
  },
  pro: {
    pitchDeckCreations: null as number | null,
    pitchDeckRegens: Number(process.env.PRO_REGEN_LIMIT ?? "10"),
    businessPlanCompletions: null as number | null,
  },
  enterprise: {
    pitchDeckCreations: null as number | null,
    pitchDeckRegens: null as number | null,
    businessPlanCompletions: null as number | null,
  },
};

export function normalizePlan(plan: string | null | undefined): Plan {
  if (
    plan === "pro" ||
    plan === "enterprise" ||
    plan === "starter" ||
    plan === "raise_pass"
  )
    return plan;
  return "free";
}

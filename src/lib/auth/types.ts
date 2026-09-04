export interface User {
  id: string;
  name: string;
  email: string;
  plan: "free" | "starter" | "raise_pass" | "pro" | "enterprise";
  deckademyPlan: "free" | "member";
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  bypassCaps: boolean;
  businessPlanCompleted: boolean;
  isAdmin: boolean;
  suspiciousActivity: boolean;
  orgId: string | null;
  createdAt: number;
}

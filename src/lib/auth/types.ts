export interface User {
  id: string;
  name: string;
  email: string;
  plan: "free" | "pro" | "enterprise";
  deckademyPlan: "free" | "member";
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  bypassCaps: boolean;
  businessPlanCompleted: boolean;
  createdAt: number;
}

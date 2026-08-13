export interface User {
  id: string;
  name: string;
  email: string;
  plan: "free" | "pro" | "enterprise";
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  createdAt: number;
}

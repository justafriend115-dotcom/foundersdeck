import "server-only";

import Stripe from "stripe";

let cached: Stripe | null | undefined;

export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export function getStripe(): Stripe | null {
  if (!isStripeConfigured()) return null;
  if (cached === undefined) {
    cached = new Stripe(process.env.STRIPE_SECRET_KEY as string);
  }
  return cached;
}

export function resolvePriceId(plan: "pro" | "enterprise"): string | null {
  const priceId = process.env.STRIPE_PRICE_PRO_MONTHLY;
  return plan === "pro" ? (priceId ?? null) : null;
}

export function appOrigin(request: Request): string {
  return process.env.NEXT_PUBLIC_APP_URL ?? new URL(request.url).origin;
}

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

export function resolvePriceId(plan: "pro" | "enterprise" | "deckademy"): string | null {
  if (plan === "pro") return process.env.STRIPE_PRICE_PRO_MONTHLY ?? null;
  if (plan === "deckademy") return process.env.STRIPE_PRICE_DECKADEMY_MONTHLY ?? null;
  return null;
}

export function appOrigin(request: Request): string {
  return process.env.NEXT_PUBLIC_APP_URL ?? new URL(request.url).origin;
}

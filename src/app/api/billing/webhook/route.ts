import { NextResponse } from "next/server";

import { getStripe, isStripeConfigured } from "@/lib/billing/stripe";
import { prisma } from "@/lib/db";

function isDeckademySubscription(subscription: {
  items?: { data?: Array<{ price?: { id?: string | null } | null }> };
}): boolean {
  const deckademyPriceId = process.env.STRIPE_PRICE_DECKADEMY_MONTHLY;
  if (!deckademyPriceId) return false;
  return subscription.items?.data?.some((item) => item.price?.id === deckademyPriceId) ?? false;
}

export async function POST(request: Request) {
  if (!isStripeConfigured()) {
    return NextResponse.json({ ok: true, ignored: "stub mode" });
  }

  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!stripe || !secret) {
    return NextResponse.json({ ok: false, error: "Webhook not configured." }, { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ ok: false, error: "Missing signature." }, { status: 400 });
  }

  let event: import("stripe").Stripe.Event;
  try {
    const payload = await request.text();
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid signature." }, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const userId = typeof session.metadata?.userId === "string" ? session.metadata.userId : null;
      const customerId = typeof session.customer === "string" ? session.customer : null;
      const subscriptionId = typeof session.subscription === "string" ? session.subscription : null;
      if (userId) {
        const data =
          session.metadata?.plan === "deckademy"
            ? { deckademyPlan: "member" }
            : { plan: "pro" };
        await prisma.user.update({
          where: { id: userId },
          data: { ...data, stripeCustomerId: customerId, stripeSubscriptionId: subscriptionId },
        });
      }
      break;
    }
    case "customer.subscription.deleted": {
      const subscription = event.data.object;
      const customerId = typeof subscription.customer === "string" ? subscription.customer : null;
      if (customerId) {
        const deckademy = isDeckademySubscription(subscription);
        await prisma.user.updateMany({
          where: { stripeCustomerId: customerId },
          data: deckademy
            ? { deckademyPlan: "free", stripeSubscriptionId: null }
            : { plan: "free", stripeSubscriptionId: null },
        });
      }
      break;
    }
    case "customer.subscription.updated": {
      const subscription = event.data.object;
      const customerId = typeof subscription.customer === "string" ? subscription.customer : null;
      if (customerId) {
        const deckademy = isDeckademySubscription(subscription);
        const active = ["active", "trialing"].includes(subscription.status);
        await prisma.user.updateMany({
          where: { stripeCustomerId: customerId },
          data: deckademy
            ? { deckademyPlan: active ? "member" : "free", stripeSubscriptionId: subscription.id }
            : { plan: active ? "pro" : "free", stripeSubscriptionId: subscription.id },
        });
      }
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ ok: true });
}
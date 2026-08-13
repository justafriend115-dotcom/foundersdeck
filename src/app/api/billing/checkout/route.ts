import { NextRequest, NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/server";
import { appOrigin, getStripe, isStripeConfigured, resolvePriceId } from "@/lib/billing/stripe";

export async function POST(request: NextRequest) {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const plan = body?.plan === "pro" ? "pro" : body?.plan === "enterprise" ? "enterprise" : null;
  if (!plan) {
    return NextResponse.json({ ok: false, error: "Invalid plan." }, { status: 400 });
  }

  if (!isStripeConfigured()) {
    const sessionId = `stub_${user.id}_${Date.now()}`;
    return NextResponse.json({
      ok: true,
      mode: "stub",
      url: `/billing/complete?session_id=${sessionId}&plan=${plan}`,
    });
  }

  const stripe = getStripe();
  const priceId = resolvePriceId(plan);
  if (!stripe || !priceId) {
    return NextResponse.json(
      { ok: false, error: "Billing is not configured for this plan." },
      { status: 500 },
    );
  }

  const origin = appOrigin(request);
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/billing/complete?session_id={CHECKOUT_SESSION_ID}&plan=${plan}`,
    cancel_url: `${origin}/#pricing`,
    customer: user.stripeCustomerId ?? undefined,
    customer_email: user.stripeCustomerId ? undefined : user.email,
    metadata: { userId: user.id, plan },
  });

  return NextResponse.json({ ok: true, mode: "live", url: session.url });
}

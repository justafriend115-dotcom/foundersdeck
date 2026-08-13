import { NextRequest, NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/server";
import { appOrigin, getStripe, isStripeConfigured } from "@/lib/billing/stripe";

export async function POST(request: NextRequest) {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  if (!isStripeConfigured() || !user.stripeCustomerId) {
    return NextResponse.json({ ok: true, mode: "stub", url: "/dashboard" });
  }

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ ok: false, error: "Billing is not configured." }, { status: 500 });
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: user.stripeCustomerId,
    return_url: `${appOrigin(request)}/dashboard`,
  });

  return NextResponse.json({ ok: true, mode: "live", url: session.url });
}

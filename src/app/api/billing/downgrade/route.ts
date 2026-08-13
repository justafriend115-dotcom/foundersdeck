import { NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/server";
import { isStripeConfigured } from "@/lib/billing/stripe";
import { prisma } from "@/lib/db";

export async function POST() {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  if (isStripeConfigured()) {
    return NextResponse.json(
      { ok: false, error: "Cancel via the Stripe billing portal." },
      { status: 400 },
    );
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { plan: "free" },
  });

  return NextResponse.json({ ok: true, plan: "free" });
}

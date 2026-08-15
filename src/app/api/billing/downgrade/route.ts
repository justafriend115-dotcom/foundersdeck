import { NextRequest, NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/server";
import { isStripeConfigured } from "@/lib/billing/stripe";
import { prisma } from "@/lib/db";
import { readJsonBody } from "@/lib/request";

export async function POST(request: NextRequest) {
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

  const body = (await readJsonBody(request, 16 * 1024)) as Record<string, unknown> | null;
  if (body?.plan === "deckademy") {
    await prisma.user.update({
      where: { id: user.id },
      data: { deckademyPlan: "free" },
    });
    return NextResponse.json({ ok: true, plan: "free" });
  }

  await prisma.user.update({
    where: { id: user.id },
    data: { plan: "free" },
  });

  return NextResponse.json({ ok: true, plan: "free" });
}
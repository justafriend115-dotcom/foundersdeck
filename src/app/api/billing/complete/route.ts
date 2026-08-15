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
      { ok: false, error: "Payments are handled by Stripe." },
      { status: 400 },
    );
  }

  const body = (await readJsonBody(request, 16 * 1024)) as Record<string, unknown> | null;
  const sessionId = String(body?.sessionId ?? "");
  const plan = body?.plan === "enterprise" ? "enterprise" : body?.plan === "deckademy" ? "deckademy" : "pro";
  const expected = `stub_${user.id}`;
  if (!sessionId.startsWith(expected)) {
    return NextResponse.json({ ok: false, error: "Invalid session." }, { status: 400 });
  }

  if (plan === "deckademy") {
    await prisma.user.update({
      where: { id: user.id },
      data: { deckademyPlan: "member" },
    });
  } else {
    await prisma.user.update({
      where: { id: user.id },
      data: { plan },
    });
  }

  return NextResponse.json({ ok: true, plan });
}
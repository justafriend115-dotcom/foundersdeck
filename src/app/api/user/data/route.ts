import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { requireUser } from "@/lib/auth/server";
import { prisma } from "@/lib/db";
import { SESSION_COOKIE, SESSION_COOKIE_OPTIONS } from "@/lib/auth/constants";

export async function DELETE() {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  // Delete all user-owned data. The cascade constraints on related tables handle
  // PitchDeck, BusinessPlan, ContingencyPlan, FinancialProjection, Investor,
  // AcademyProgress, and GenerationLog rows automatically.
  await prisma.user.delete({ where: { id: user.id } });

  // Clear session cookie so the browser isn't left with a dangling token.
  cookies().set(SESSION_COOKIE, "", {
    ...SESSION_COOKIE_OPTIONS,
    maxAge: 0,
  });

  return NextResponse.json({ ok: true });
}

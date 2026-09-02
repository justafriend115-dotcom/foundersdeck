import { NextRequest, NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/server";
import { prisma } from "@/lib/db";
import { readJsonBody } from "@/lib/request";
import { getToolValue, setToolValue } from "@/lib/tool-store";

export async function GET() {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const value = await getToolValue<Record<string, string>>("businessPlan", user.id, {});
  return NextResponse.json({ ok: true, value });
}

export async function PUT(request: NextRequest) {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const body = (await readJsonBody(request)) as Record<string, unknown> | null;
  const value = body?.value;
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }
  await setToolValue("businessPlan", user.id, value);

  // Track first completion for future AI gating — when AI generation is added to this
  // route, check !user.bypassCaps && user.businessPlanCompleted before calling AI.
  if (!user.businessPlanCompleted) {
    await prisma.user.update({
      where: { id: user.id },
      data: { businessPlanCompleted: true },
    });
  }

  return NextResponse.json({ ok: true });
}

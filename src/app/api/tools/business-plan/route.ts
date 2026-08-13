import { NextRequest, NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/server";
import { getToolValue, setToolValue } from "@/lib/tool-store";
import { readJsonBody } from "@/lib/request";

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
  return NextResponse.json({ ok: true });
}

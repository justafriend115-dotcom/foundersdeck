import { NextRequest, NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/server";
import { defaultFinancialState } from "@/lib/tool-defaults";
import { getToolValue, setToolValue } from "@/lib/tool-store";
import type { FinancialState } from "@/lib/tool-types";

export async function GET() {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const value = await getToolValue<FinancialState>("financials", user.id, defaultFinancialState());
  return NextResponse.json({ ok: true, value });
}

export async function PUT(request: NextRequest) {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json().catch(() => null);
  const value = body?.value;
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }
  await setToolValue("financials", user.id, value);
  return NextResponse.json({ ok: true });
}

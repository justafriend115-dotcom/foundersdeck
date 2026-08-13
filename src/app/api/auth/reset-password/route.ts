import { NextRequest, NextResponse } from "next/server";

import { store } from "@/lib/auth/store";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email = String(body?.email ?? "")
    .trim()
    .toLowerCase();
  const password = String(body?.password ?? "");

  if (password.length < 8) {
    return NextResponse.json(
      { ok: false, error: "Password must be at least 8 characters." },
      { status: 400 },
    );
  }

  const updated = await store.updatePassword(email, password);
  if (!updated) {
    return NextResponse.json(
      { ok: false, error: "No account found for that email." },
      { status: 404 },
    );
  }

  return NextResponse.json({ ok: true, message: "Your password has been updated." });
}

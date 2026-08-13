import { NextRequest, NextResponse } from "next/server";

import { isRateLimited, rateLimitKey } from "@/lib/rate-limit";
import { readJsonBody } from "@/lib/request";
import { store } from "@/lib/auth/store";

export async function POST(request: NextRequest) {
  const body = (await readJsonBody(request, 16 * 1024)) as Record<string, unknown> | null;
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

  const key = rateLimitKey(request, `reset:${email}`);
  if (isRateLimited(key)) {
    return NextResponse.json(
      { ok: false, error: "Too many attempts. Try again in 15 minutes." },
      { status: 429 },
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

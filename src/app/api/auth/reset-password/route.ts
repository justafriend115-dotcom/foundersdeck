import { NextRequest, NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { store } from "@/lib/auth/store";
import { validatePassword } from "@/lib/password-rules";
import { isRateLimited, rateLimitKey } from "@/lib/rate-limit";
import { readJsonBody } from "@/lib/request";

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json(
      { ok: false, error: "You must be logged in to change your password." },
      { status: 401 },
    );
  }

  const body = (await readJsonBody(request, 16 * 1024)) as Record<string, unknown> | null;
  const currentPassword = String(body?.currentPassword ?? "");
  const password = String(body?.password ?? "");

  const passwordError = validatePassword(password);
  if (passwordError) {
    return NextResponse.json({ ok: false, error: passwordError }, { status: 400 });
  }

  const key = rateLimitKey(request, `reset:${user.id}`);
  if (isRateLimited(key)) {
    return NextResponse.json(
      { ok: false, error: "Too many attempts. Try again in 15 minutes." },
      { status: 429 },
    );
  }

  const stored = await store.findById(user.id);
  if (!stored || !store.verifyPassword(stored, currentPassword)) {
    return NextResponse.json(
      { ok: false, error: "Your current password is incorrect." },
      { status: 403 },
    );
  }

  await store.updatePassword(user.email, password);
  return NextResponse.json({ ok: true, message: "Your password has been updated." });
}
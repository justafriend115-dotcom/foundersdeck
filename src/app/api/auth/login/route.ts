import { NextRequest, NextResponse } from "next/server";

import { SESSION_COOKIE, SESSION_COOKIE_OPTIONS, signIn } from "@/lib/auth";
import { isRateLimited, rateLimitKey, rateLimitRemaining } from "@/lib/rate-limit";
import { readJsonBody } from "@/lib/request";

export async function POST(request: NextRequest) {
  const body = (await readJsonBody(request, 16 * 1024)) as Record<string, unknown> | null;
  const email = String(body?.email ?? "")
    .trim()
    .toLowerCase();
  const password = String(body?.password ?? "");

  if (!email || !password) {
    return NextResponse.json(
      { ok: false, error: "Email and password are required." },
      { status: 400 },
    );
  }

  const key = rateLimitKey(request, `login:${email}`);
  if (isRateLimited(key)) {
    return NextResponse.json(
      { ok: false, error: "Too many attempts. Try again in 15 minutes." },
      { status: 429 },
    );
  }

  const result = await signIn(email, password);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error },
      {
        status: 401,
        headers: { "X-RateLimit-Remaining": String(rateLimitRemaining(key)) },
      },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, result.token, SESSION_COOKIE_OPTIONS);
  return response;
}

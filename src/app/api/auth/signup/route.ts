import { NextRequest, NextResponse } from "next/server";

import { SESSION_COOKIE, SESSION_COOKIE_OPTIONS, signUp } from "@/lib/auth";
import { isRateLimited, rateLimitKey, rateLimitRemaining } from "@/lib/rate-limit";
import { readJsonBody } from "@/lib/request";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const HONEYPOT_FIELD = "company_website";

export async function POST(request: NextRequest) {
  const body = (await readJsonBody(request, 16 * 1024)) as Record<string, unknown> | null;
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "")
    .trim()
    .toLowerCase();
  const password = String(body?.password ?? "");

  if (typeof body === "object" && body !== null && body[HONEYPOT_FIELD]) {
    return NextResponse.json({ ok: true });
  }

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please enter your full name." }, { status: 400 });
  }
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (password.length < 8) {
    return NextResponse.json(
      { ok: false, error: "Password must be at least 8 characters." },
      { status: 400 },
    );
  }

  const key = rateLimitKey(request, `signup:${email}`);
  if (isRateLimited(key)) {
    return NextResponse.json(
      { ok: false, error: "Too many attempts. Try again in 15 minutes." },
      { status: 429 },
    );
  }

  const result = await signUp(name, email, password);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, error: result.error },
      {
        status: 409,
        headers: { "X-RateLimit-Remaining": String(rateLimitRemaining(key)) },
      },
    );
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, result.token, SESSION_COOKIE_OPTIONS);
  return response;
}

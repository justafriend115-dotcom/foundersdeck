import { NextRequest, NextResponse } from "next/server";

import { isRateLimited, rateLimitKey } from "@/lib/rate-limit";
import { readJsonBody } from "@/lib/request";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = (await readJsonBody(request, 16 * 1024)) as Record<string, unknown> | null;
  const email = String(body?.email ?? "")
    .trim()
    .toLowerCase();

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter your email address." },
      { status: 400 },
    );
  }

  const key = rateLimitKey(request, `forgot:${email}`);
  if (isRateLimited(key)) {
    return NextResponse.json(
      { ok: false, error: "Too many attempts. Try again in 15 minutes." },
      { status: 429 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "If an account exists for that email, reset instructions are on the way.",
  });
}

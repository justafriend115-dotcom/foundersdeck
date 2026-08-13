import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const email = String(body?.email ?? "")
    .trim()
    .toLowerCase();

  if (!email) {
    return NextResponse.json(
      { ok: false, error: "Please enter your email address." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "If an account exists for that email, reset instructions are on the way.",
  });
}

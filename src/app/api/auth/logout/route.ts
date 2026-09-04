import { NextResponse } from "next/server";

import { SESSION_COOKIE, getSessionIdFromCookie } from "@/lib/auth";
import { store } from "@/lib/auth/store";

export async function POST() {
  const sessionId = await getSessionIdFromCookie();
  if (sessionId) {
    await store.deleteSession(sessionId);
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
  return response;
}

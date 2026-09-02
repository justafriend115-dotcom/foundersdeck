import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { SESSION_COOKIE } from "@/lib/auth/constants";

const protectedRoutes = ["/dashboard", "/deckademy", "/reset-password"];
const authRoutes = ["/login", "/signup", "/forgot-password"];

const comingSoonRoutes: string[] = [];

const publicApiPaths = [
  "/api/auth/login",
  "/api/auth/signup",
  "/api/auth/forgot-password",
  "/api/auth/reset-password",
  "/api/billing/webhook",
  "/api/health",
];

export function middleware(request: NextRequest) {
  const hasSession = Boolean(request.cookies.get(SESSION_COOKIE)?.value);
  const { pathname } = request.nextUrl;

  if (pathname === "/academy" || pathname.startsWith("/academy/")) {
    const url = new URL(pathname.replace(/^\/academy/, "/deckademy"), request.url);
    url.search = request.nextUrl.search;
    return NextResponse.redirect(url, 308);
  }

  if (comingSoonRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/coming-soon", request.url));
  }

  if (pathname.startsWith("/api")) {
    if (publicApiPaths.includes(pathname) || hasSession) {
      return NextResponse.next();
    }
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  if (protectedRoutes.some((route) => pathname.startsWith(route)) && !hasSession) {
    const url = new URL("/login", request.url);
    url.searchParams.set("next", pathname);
    return NextResponse.redirect(url);
  }

  if (authRoutes.includes(pathname) && hasSession) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/deckademy/:path*",
    "/academy/:path*",
    "/api/:path*",
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
  ],
};
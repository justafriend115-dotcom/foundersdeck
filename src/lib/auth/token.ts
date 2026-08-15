import { createHmac, timingSafeEqual } from "crypto";

import type { User } from "./types";

const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const isProduction = process.env.NODE_ENV === "production";
const SECRET =
  process.env.FD_AUTH_SECRET ?? (isProduction ? null : "fd-dev-secret-change-me");

function sign(payload: string): string {
  if (!SECRET) throw new Error("FD_AUTH_SECRET is not set in production.");
  return createHmac("sha256", SECRET).update(payload).digest("base64url");
}

export function createSessionToken(user: User): string {
  const payload = Buffer.from(
    JSON.stringify({
      sub: user.id,
      name: user.name,
      email: user.email,
      plan: user.plan,
      exp: Date.now() + SESSION_TTL_MS,
    }),
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function readSessionToken(token: string | undefined | null): User | null {
  if (!token) return null;
  if (!SECRET) return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = sign(payload);
  const actual = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (actual.length !== expectedBuffer.length || !timingSafeEqual(actual, expectedBuffer)) {
    return null;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as {
      sub?: string;
      name?: string;
      email?: string;
      plan?: string;
      exp?: number;
    };
    if (typeof data.exp !== "number" || data.exp < Date.now()) return null;
    return {
      id: String(data.sub ?? ""),
      name: String(data.name ?? ""),
      email: String(data.email ?? ""),
      plan: data.plan === "pro" || data.plan === "enterprise" ? data.plan : "free",
      deckademyPlan: "free",
      stripeCustomerId: null,
      stripeSubscriptionId: null,
      createdAt: 0,
    };
  } catch {
    return null;
  }
}

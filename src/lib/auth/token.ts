import { createHmac, randomBytes, timingSafeEqual } from "crypto";

import type { User } from "./types";

const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const isProduction = process.env.NODE_ENV === "production";
const SECRET =
  process.env.FD_AUTH_SECRET ?? (isProduction ? null : "fd-dev-secret-change-me");

function sign(payload: string): string {
  if (!SECRET) throw new Error("FD_AUTH_SECRET is not set in production.");
  return createHmac("sha256", SECRET).update(payload).digest("base64url");
}

export function createSessionId(): string {
  return randomBytes(16).toString("hex");
}

export function createSessionToken(user: User, sessionId: string): string {
  const payload = Buffer.from(
    JSON.stringify({
      sub: user.id,
      jti: sessionId,
      name: user.name,
      email: user.email,
      plan: user.plan,
      exp: Date.now() + SESSION_TTL_MS,
    }),
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export type SessionClaims = User & { sessionId: string };

export function readSessionToken(token: string | undefined | null): SessionClaims | null {
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
      jti?: string;
      name?: string;
      email?: string;
      plan?: string;
      exp?: number;
    };
    if (typeof data.exp !== "number" || data.exp < Date.now()) return null;

    const plan = data.plan;
    const normalizedPlan: User["plan"] =
      plan === "pro" || plan === "enterprise" || plan === "starter" || plan === "raise_pass"
        ? plan
        : "free";

    return {
      id: String(data.sub ?? ""),
      sessionId: String(data.jti ?? ""),
      name: String(data.name ?? ""),
      email: String(data.email ?? ""),
      plan: normalizedPlan,
      deckademyPlan: "free",
      stripeCustomerId: null,
      stripeSubscriptionId: null,
      bypassCaps: false,
      businessPlanCompleted: false,
      isAdmin: false,
      suspiciousActivity: false,
      orgId: null,
      createdAt: 0,
    };
  } catch {
    return null;
  }
}

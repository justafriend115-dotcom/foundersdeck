import { cookies } from "next/headers";

import { SESSION_COOKIE, SESSION_COOKIE_OPTIONS } from "./constants";
import { DEMO_EMAIL, DEMO_PASSWORD, DEMO_USER_ID, store, toPublicUser } from "./store";
import { createSessionId, createSessionToken, readSessionToken } from "./token";
import type { User } from "./types";

export { SESSION_COOKIE, SESSION_COOKIE_OPTIONS, type User };

const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export async function signIn(
  email: string,
  password: string,
): Promise<{ ok: true; token: string } | { ok: false; error: string }> {
  let user;

  // Demo account — works without a database connection
  if (email.toLowerCase() === DEMO_EMAIL.toLowerCase() && password === DEMO_PASSWORD) {
    user = await store.findById(DEMO_USER_ID);
  } else {
    const found = await store.findByEmail(email);
    if (!found || !store.verifyPassword(found, password)) {
      return { ok: false, error: "Invalid email or password." };
    }
    user = found;
  }

  if (!user) return { ok: false, error: "Invalid email or password." };

  const sessionId = createSessionId();
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await store.createSession(sessionId, user.id, expiresAt);

  return { ok: true, token: createSessionToken(toPublicUser(user), sessionId) };
}

export async function signUp(
  name: string,
  email: string,
  password: string,
): Promise<{ ok: true; token: string } | { ok: false; error: string }> {
  const result = await store.createUser(name, email, password);
  if (!result.ok) return result;

  const sessionId = createSessionId();
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);
  await store.createSession(sessionId, result.user.id, expiresAt);

  return { ok: true, token: createSessionToken(result.user, sessionId) };
}

export async function getCurrentUser(): Promise<User | null> {
  const token = cookies().get(SESSION_COOKIE)?.value;
  const claims = readSessionToken(token);
  if (!claims) return null;

  // Verify the session is still active in DB (skipped if DB is unavailable)
  if (claims.sessionId && !(await store.sessionExists(claims.sessionId))) return null;

  const user = await store.findById(claims.id);
  return user ? toPublicUser(user) : null;
}

export async function getSessionIdFromCookie(): Promise<string | null> {
  const token = cookies().get(SESSION_COOKIE)?.value;
  const claims = readSessionToken(token);
  return claims?.sessionId ?? null;
}

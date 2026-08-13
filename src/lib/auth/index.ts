import { cookies } from "next/headers";

import { SESSION_COOKIE } from "./constants";
import { store, toPublicUser } from "./store";
import { createSessionToken, readSessionToken } from "./token";
import type { User } from "./types";

export { SESSION_COOKIE, type User };

export async function signIn(
  email: string,
  password: string,
): Promise<{ ok: true; token: string } | { ok: false; error: string }> {
  const user = await store.findByEmail(email);
  if (!user || !store.verifyPassword(user, password)) {
    return { ok: false, error: "Invalid email or password." };
  }
  return { ok: true, token: createSessionToken(toPublicUser(user)) };
}

export async function signUp(
  name: string,
  email: string,
  password: string,
): Promise<{ ok: true; token: string } | { ok: false; error: string }> {
  const result = await store.createUser(name, email, password);
  if (!result.ok) return result;
  return { ok: true, token: createSessionToken(result.user) };
}

export async function getCurrentUser(): Promise<User | null> {
  const token = cookies().get(SESSION_COOKIE)?.value;
  const claims = readSessionToken(token);
  if (!claims) return null;
  const user = await store.findById(claims.id);
  return user ? toPublicUser(user) : null;
}

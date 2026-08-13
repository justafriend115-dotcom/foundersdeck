import { cookies } from "next/headers";

import { SESSION_COOKIE } from "./constants";
import { store, toPublicUser } from "./store";
import { readSessionToken } from "./token";
import type { User } from "./types";

export async function requireUser(): Promise<User | null> {
  const token = cookies().get(SESSION_COOKIE)?.value;
  const claims = readSessionToken(token);
  if (!claims) return null;
  const user = await store.findById(claims.id);
  return user ? toPublicUser(user) : null;
}

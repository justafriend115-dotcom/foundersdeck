import { AsyncLocalStorage } from "node:async_hooks";

import type { Prisma } from "@prisma/client";

import { prisma } from "@/lib/db";

const rlsStorage = new AsyncLocalStorage<string | null>();

export function getRlsUserId(): string | null {
  return rlsStorage.getStore() ?? null;
}

export function withUserId<T>(userId: string, fn: () => Promise<T>): Promise<T> {
  return rlsStorage.run(userId, fn);
}

export async function inUserContext<T>(
  userId: string,
  fn: (tx: Prisma.TransactionClient) => Promise<T>,
): Promise<T> {
  return prisma.$transaction(async (tx) => {
    await tx.$executeRawUnsafe(`SELECT set_config('app.current_user_id', $1, true)`, userId);
    return fn(tx);
  });
}

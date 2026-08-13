import { prisma } from "@/lib/db";

import { hashPassword } from "./password";
import type { User } from "./types";

type StoredUser = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  plan: string;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  createdAt: Date;
};

export function normalizePlan(plan: string): User["plan"] {
  return plan === "pro" || plan === "enterprise" ? plan : "free";
}

export function toPublicUser(user: StoredUser): User {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    plan: normalizePlan(user.plan),
    stripeCustomerId: user.stripeCustomerId,
    stripeSubscriptionId: user.stripeSubscriptionId,
    createdAt: user.createdAt.getTime(),
  };
}

export const store = {
  async createUser(
    name: string,
    email: string,
    password: string,
  ): Promise<{ ok: true; user: User } | { ok: false; error: string }> {
    try {
      const user = await prisma.user.create({
        data: { name, email, passwordHash: hashPassword(password) },
      });
      return { ok: true, user: toPublicUser(user) };
    } catch (error) {
      if (
        typeof error === "object" &&
        error !== null &&
        "code" in error &&
        error.code === "P2002"
      ) {
        return { ok: false, error: "An account with this email already exists." };
      }
      throw error;
    }
  },

  async findByEmail(email: string): Promise<StoredUser | null> {
    return prisma.user.findUnique({ where: { email } });
  },

  async findById(id: string): Promise<StoredUser | null> {
    return prisma.user.findUnique({ where: { id } });
  },

  verifyPassword(user: StoredUser, password: string): boolean {
    return user.passwordHash === hashPassword(password);
  },

  async updatePassword(email: string, password: string): Promise<boolean> {
    const result = await prisma.user.updateMany({
      where: { email },
      data: { passwordHash: hashPassword(password) },
    });
    return result.count > 0;
  },
};

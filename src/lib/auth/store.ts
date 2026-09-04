import { prisma } from "@/lib/db";

import { hashPassword, verifyPassword } from "./password";
import type { User } from "./types";

type StoredUser = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  plan: string;
  deckademyPlan: string;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  bypassCaps: boolean;
  businessPlanCompleted: boolean;
  isAdmin: boolean;
  suspiciousActivity: boolean;
  orgId: string | null;
  createdAt: Date;
};

export const DEMO_USER_ID = "demo-0000-0000-0000-000000000001";
export const DEMO_EMAIL = "justafriend115@gmail.com";
export const DEMO_PASSWORD = process.env.DEMO_PASSWORD ?? "demo1234";

const DEMO_STORED_USER: StoredUser = {
  id: DEMO_USER_ID,
  name: "Founder",
  email: DEMO_EMAIL,
  passwordHash: "",
  plan: "pro",
  deckademyPlan: "free",
  stripeCustomerId: null,
  stripeSubscriptionId: null,
  bypassCaps: true,
  businessPlanCompleted: false,
  isAdmin: false,
  suspiciousActivity: false,
  orgId: null,
  createdAt: new Date("2026-01-01"),
};

export function normalizePlan(plan: string): User["plan"] {
  return plan === "pro" || plan === "enterprise" ? plan : "free";
}

export function normalizeDeckademyPlan(plan: string): User["deckademyPlan"] {
  return plan === "member" ? "member" : "free";
}

export function toPublicUser(user: StoredUser): User {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    plan: normalizePlan(user.plan),
    deckademyPlan: normalizeDeckademyPlan(user.deckademyPlan),
    stripeCustomerId: user.stripeCustomerId,
    stripeSubscriptionId: user.stripeSubscriptionId,
    bypassCaps: user.bypassCaps,
    businessPlanCompleted: user.businessPlanCompleted,
    isAdmin: user.isAdmin,
    suspiciousActivity: user.suspiciousActivity,
    orgId: user.orgId,
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
    if (email.toLowerCase() === DEMO_EMAIL.toLowerCase()) return DEMO_STORED_USER;
    try {
      return await prisma.user.findUnique({ where: { email } });
    } catch {
      return null;
    }
  },

  async findById(id: string): Promise<StoredUser | null> {
    if (id === DEMO_USER_ID) return DEMO_STORED_USER;
    try {
      return await prisma.user.findUnique({ where: { id } });
    } catch {
      return null;
    }
  },

  verifyPassword(user: StoredUser, password: string): boolean {
    return verifyPassword(password, user.passwordHash);
  },

  async updatePassword(email: string, password: string): Promise<boolean> {
    const result = await prisma.user.updateMany({
      where: { email },
      data: { passwordHash: hashPassword(password) },
    });
    return result.count > 0;
  },
};

import { decryptText, encryptText } from "@/lib/crypto";
import { prisma } from "@/lib/db";

type ToolModel = "businessPlan" | "contingency" | "financials";

interface UpsertDelegate {
  upsert(args: {
    where: { userId: string };
    create: { userId: string; content: string };
    update: { content?: string };
  }): Promise<{ content: string }>;
}

const delegates: Record<ToolModel, UpsertDelegate> = {
  businessPlan: prisma.businessPlan as unknown as UpsertDelegate,
  contingency: prisma.contingencyPlan as unknown as UpsertDelegate,
  financials: prisma.financialProjection as unknown as UpsertDelegate,
};

export async function getToolValue<T>(model: ToolModel, userId: string, fallback: T): Promise<T> {
  const record = await delegates[model].upsert({
    where: { userId },
    create: { userId, content: encryptText(JSON.stringify(fallback)) },
    update: { content: undefined },
  });
  const content = decryptText(record.content) ?? record.content;
  try {
    return JSON.parse(content) as T;
  } catch {
    return fallback;
  }
}

export async function setToolValue(
  model: ToolModel,
  userId: string,
  value: unknown,
): Promise<void> {
  const content = encryptText(JSON.stringify(value));
  await delegates[model].upsert({
    where: { userId },
    create: { userId, content },
    update: { content },
  });
}

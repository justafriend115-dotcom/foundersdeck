import { prisma } from "@/lib/db";
import { getProviderInfo } from "@/lib/ai/provider";

export type GenerationTool =
  | "pitch_deck"
  | "business_plan"
  | "financials"
  | "contingency"
  | "suggest";

// Per-1K-token cost in USD
const PROVIDER_COSTS = {
  openai: { input: 0.00015, output: 0.0006 },   // gpt-4o-mini
  anthropic: { input: 0.0008, output: 0.004 },  // claude-3-5-haiku
  mock: { input: 0, output: 0 },
};

const HOURLY_LIMIT = Number(process.env.HOURLY_GEN_LIMIT ?? "10");
const DAILY_SPEND_CAP_FREE = Number(process.env.DAILY_SPEND_CAP_FREE ?? "0.50");
const DAILY_SPEND_CAP_PRO = Number(process.env.DAILY_SPEND_CAP_PRO ?? "5.00");
// Flag user when they exceed this many generations in one hour
const SUSPICIOUS_HOURLY_THRESHOLD = Number(process.env.SUSPICIOUS_HOURLY_THRESHOLD ?? "20");

export function estimateCost(inputTokens: number, outputTokens: number): number {
  const { provider } = getProviderInfo();
  const costs = PROVIDER_COSTS[provider];
  return (inputTokens / 1000) * costs.input + (outputTokens / 1000) * costs.output;
}

export async function checkHourlyLimit(
  userId: string,
  bypassCaps: boolean,
): Promise<{ allowed: boolean; reason?: string }> {
  if (bypassCaps) return { allowed: true };
  const since = new Date(Date.now() - 60 * 60 * 1000);
  const count = await prisma.generationLog.count({
    where: { userId, createdAt: { gte: since }, refused: false },
  });
  if (count >= HOURLY_LIMIT) {
    return { allowed: false, reason: "hourly_limit" };
  }
  return { allowed: true };
}

export async function checkDailySpendCap(
  userId: string,
  plan: string,
  bypassCaps: boolean,
): Promise<{ allowed: boolean; reason?: string }> {
  if (bypassCaps) return { allowed: true };
  const cap = plan === "free" ? DAILY_SPEND_CAP_FREE : DAILY_SPEND_CAP_PRO;
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const result = await prisma.generationLog.aggregate({
    where: { userId, createdAt: { gte: today }, refused: false },
    _sum: { estimatedCost: true },
  });
  const spent = result._sum.estimatedCost ?? 0;
  if (spent >= cap) {
    return { allowed: false, reason: "spend_cap" };
  }
  return { allowed: true };
}

export async function logGeneration(
  userId: string,
  tool: GenerationTool,
  inputTokens: number,
  outputTokens: number,
  refused = false,
  refuseReason?: string,
): Promise<void> {
  const estimatedCost = refused ? 0 : estimateCost(inputTokens, outputTokens);
  await prisma.generationLog.create({
    data: { userId, tool, estimatedCost, inputTokens, outputTokens, refused, refuseReason },
  });

  if (!refused) {
    const since = new Date(Date.now() - 60 * 60 * 1000);
    const hourlyCount = await prisma.generationLog.count({
      where: { userId, createdAt: { gte: since }, refused: false },
    });
    if (hourlyCount >= SUSPICIOUS_HOURLY_THRESHOLD) {
      await prisma.user
        .update({ where: { id: userId }, data: { suspiciousActivity: true } })
        .catch(() => {});
    }
  }
}

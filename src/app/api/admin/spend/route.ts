import { NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!user.isAdmin) {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }

  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const logs = await prisma.generationLog.groupBy({
    by: ["userId"],
    where: { createdAt: { gte: thirtyDaysAgo }, refused: false },
    _sum: { estimatedCost: true, inputTokens: true, outputTokens: true },
    _count: { id: true },
    orderBy: { _sum: { estimatedCost: "desc" } },
  });

  const userIds = logs.map((l) => l.userId);
  const users =
    userIds.length > 0
      ? await prisma.user.findMany({
          where: { id: { in: userIds } },
          select: {
            id: true,
            name: true,
            email: true,
            plan: true,
            suspiciousActivity: true,
          },
        })
      : [];
  const userMap = Object.fromEntries(users.map((u) => [u.id, u]));

  const rows = logs.map((log) => {
    const u = userMap[log.userId];
    return {
      userId: log.userId,
      name: u?.name ?? "Unknown",
      email: u?.email ?? "Unknown",
      plan: u?.plan ?? "free",
      suspiciousActivity: u?.suspiciousActivity ?? false,
      totalCost: log._sum.estimatedCost ?? 0,
      totalInputTokens: log._sum.inputTokens ?? 0,
      totalOutputTokens: log._sum.outputTokens ?? 0,
      generationCount: log._count.id,
    };
  });

  // Flagged users first, then by spend descending
  rows.sort((a, b) => {
    if (a.suspiciousActivity !== b.suspiciousActivity) return a.suspiciousActivity ? -1 : 1;
    return b.totalCost - a.totalCost;
  });

  return NextResponse.json({ ok: true, rows, windowDays: 30 });
}

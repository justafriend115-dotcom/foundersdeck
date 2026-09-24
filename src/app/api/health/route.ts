import { NextResponse } from "next/server";

import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const rawUrl = process.env.DATABASE_URL ?? "";
  // Strip credentials but keep the host so we can verify which DB is connected
  const dbHost = (() => {
    try {
      return new URL(rawUrl).host;
    } catch {
      return rawUrl ? "unparseable" : "not-set";
    }
  })();

  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok: true, db: "up", dbHost, time: Date.now() });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json({ ok: false, db: "down", dbHost, error: msg, time: Date.now() }, { status: 503 });
  }
}

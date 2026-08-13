import { NextRequest, NextResponse } from "next/server";

import { requireUser } from "@/lib/auth/server";
import { decryptText, encryptText } from "@/lib/crypto";
import { prisma } from "@/lib/db";
import { readJsonBody } from "@/lib/request";
import type { Investor, Stage } from "@/lib/tool-types";

const STAGES: Stage[] = ["cold", "warm", "pitching", "closed"];

const MAX_LEN = {
  name: 160,
  firm: 160,
  notes: 4000,
  outcome: 2000,
  followUp: 2000,
};

function cap(value: unknown, max: number): string {
  return String(value ?? "").slice(0, max);
}

function normalizeStage(stage: unknown): Stage {
  return STAGES.includes(stage as Stage) ? (stage as Stage) : "cold";
}

export async function GET() {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const investors = await prisma.investor.findMany({
    where: { userId: user.id },
    include: { meetings: true },
    orderBy: { createdAt: "desc" },
  });
  const value: Investor[] = investors.map((investor) => ({
    id: investor.id,
    name: investor.name,
    firm: investor.firm,
    stage: normalizeStage(investor.stage),
    notes: decryptText(investor.notes) ?? investor.notes,
    meetings: investor.meetings.map((meeting) => ({
      id: meeting.id,
      date: meeting.date,
      outcome: meeting.outcome,
      followUp: meeting.followUp,
    })),
  }));
  return NextResponse.json({ ok: true, value });
}

export async function PUT(request: NextRequest) {
  const user = await requireUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const body = (await readJsonBody(request)) as Record<string, unknown> | null;
  const value = body?.value;
  if (!Array.isArray(value) || value.length > 500) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const incoming = value.filter(
    (investor): investor is Investor =>
      typeof investor === "object" &&
      investor !== null &&
      typeof investor.id === "string" &&
      typeof investor.name === "string" &&
      typeof investor.firm === "string" &&
      typeof investor.notes === "string" &&
      Array.isArray(investor.meetings),
  );

  const incomingIds = Array.from(new Set(incoming.map((investor) => investor.id)));

  await prisma.$transaction(async (tx) => {
    if (incomingIds.length > 0) {
      await tx.investor.deleteMany({ where: { userId: user.id, id: { notIn: incomingIds } } });
    } else {
      await tx.investor.deleteMany({ where: { userId: user.id } });
    }

    for (const investor of incoming) {
      const data = {
        userId: user.id,
        name: cap(investor.name, MAX_LEN.name),
        firm: cap(investor.firm, MAX_LEN.firm),
        stage: normalizeStage(investor.stage),
        notes: encryptText(cap(investor.notes, MAX_LEN.notes)),
      };
      await tx.investor.upsert({
        where: { id: investor.id },
        create: { id: investor.id, ...data },
        update: data,
      });

      const meetings = investor.meetings.filter(
        (meeting) =>
          typeof meeting.id === "string" &&
          typeof meeting.date === "string" &&
          typeof meeting.outcome === "string" &&
          typeof meeting.followUp === "string",
      );
      await tx.meeting.deleteMany({ where: { investorId: investor.id } });
      if (meetings.length > 0) {
        await tx.meeting.createMany({
          data: meetings.map((meeting) => ({
            id: meeting.id,
            investorId: investor.id,
            date: meeting.date,
            outcome: cap(meeting.outcome, MAX_LEN.outcome),
            followUp: cap(meeting.followUp, MAX_LEN.followUp),
          })),
        });
      }
    }
  });

  return NextResponse.json({ ok: true });
}

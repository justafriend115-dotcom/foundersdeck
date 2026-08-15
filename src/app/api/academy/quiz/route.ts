import { NextRequest, NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { PASS_SCORE, getTrack } from "@/lib/academy/curriculum";
import { prisma } from "@/lib/db";
import { readJsonBody } from "@/lib/request";

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await readJsonBody(request, 64 * 1024)) as {
    trackId?: string;
    answers?: number[];
  } | null;
  const trackId = String(body?.trackId ?? "");
  const answers = Array.isArray(body?.answers) ? body.answers : [];

  const track = getTrack(trackId);
  if (!track) {
    return NextResponse.json({ ok: false, error: "Unknown track." }, { status: 400 });
  }
  if (!track.free && user.deckademyPlan === "free") {
    return NextResponse.json(
      { ok: false, error: "This track is part of DECKADEMY." },
      { status: 403 },
    );
  }
  if (answers.length !== track.quiz.length) {
    return NextResponse.json({ ok: false, error: "Answer every question." }, { status: 400 });
  }

  const correct = answers.reduce(
    (sum, answer, i) => sum + (answer === track.quiz[i].correctIndex ? 1 : 0),
    0,
  );
  const score = Math.round((correct / track.quiz.length) * 100);
  const passed = score >= PASS_SCORE;

  const existing = await prisma.academyProgress.findUnique({
    where: { userId_trackId: { userId: user.id, trackId } },
  });
  const bestScore = Math.max(existing?.score ?? 0, score);
  const wasPassed = existing?.passed ?? false;

  const progress = await prisma.academyProgress.upsert({
    where: { userId_trackId: { userId: user.id, trackId } },
    update: { score: bestScore, passed: wasPassed || passed },
    create: { userId: user.id, trackId, score, passed },
  });

  return NextResponse.json({
    ok: true,
    score,
    passed,
    bestScore: progress.score,
    correct,
    total: track.quiz.length,
  });
}

import { NextRequest, NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import {
  EXAM_COOLDOWN_MS,
  EXAM_PASS_SCORE,
  getTrack,
} from "@/lib/academy/curriculum";
import { prisma } from "@/lib/db";
import { readJsonBody } from "@/lib/request";

function parseCompleted(json: string): string[] {
  try {
    const parsed = JSON.parse(json) as unknown;
    return Array.isArray(parsed) ? (parsed as string[]) : [];
  } catch {
    return [];
  }
}

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await readJsonBody(request, 128 * 1024)) as {
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
  if (answers.length !== track.exam.length) {
    return NextResponse.json({ ok: false, error: "Answer every question." }, { status: 400 });
  }

  const progress = await prisma.academyProgress.findUnique({
    where: { userId_trackId: { userId: user.id, trackId } },
  });
  if (!progress) {
    return NextResponse.json(
      { ok: false, error: "Complete the lessons and pass the quiz first." },
      { status: 403 },
    );
  }

  const completed = parseCompleted(progress.completedLessons);
  const allLessonsDone = track.lessons.every((l) => completed.includes(l.id));
  if (!allLessonsDone && !progress.passed) {
    return NextResponse.json(
      { ok: false, error: "Complete all lessons and pass the quiz before the final exam." },
      { status: 403 },
    );
  }
  if (!progress.passed) {
    return NextResponse.json(
      { ok: false, error: "Pass the track quiz before taking the final exam." },
      { status: 403 },
    );
  }

  const now = new Date();
  const lockedUntil = progress.examLockedUntil ? new Date(progress.examLockedUntil) : null;
  if (lockedUntil && lockedUntil.getTime() > now.getTime()) {
    return NextResponse.json(
      {
        ok: false,
        error: "You failed the exam recently. Try again after the cooldown.",
        lockedUntil: lockedUntil.toISOString(),
      },
      { status: 429 },
    );
  }

  const correct = answers.reduce(
    (sum, answer, i) => sum + (answer === track.exam[i].correctIndex ? 1 : 0),
    0,
  );
  const score = Math.round((correct / track.exam.length) * 100);
  const passed = score >= EXAM_PASS_SCORE;

  const bestExamScore = Math.max(progress.examScore, score);

  const updated = await prisma.academyProgress.update({
    where: { id: progress.id },
    data: {
      examScore: bestExamScore,
      examPassed: progress.examPassed || passed,
      examLockedUntil: passed ? null : new Date(now.getTime() + EXAM_COOLDOWN_MS),
    },
  });

  return NextResponse.json({
    ok: true,
    score,
    passed,
    bestScore: updated.examScore,
    correct,
    total: track.exam.length,
    lockedUntil: passed ? null : new Date(now.getTime() + EXAM_COOLDOWN_MS).toISOString(),
  });
}
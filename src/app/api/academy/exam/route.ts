import { NextRequest, NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import {
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

function calculateCooldown(score: number): number {
  if (score <= 40) return 4 * 24 * 60 * 60 * 1000; // 4 days
  if (score <= 60) return 2 * 24 * 60 * 60 * 1000; // 2 days
  return 1 * 24 * 60 * 60 * 1000; // 1 day
}

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await readJsonBody(request, 128 * 1024)) as {
    trackId?: string;
    answers?: number[];
    isMock?: boolean;
  } | null;
  const trackId = String(body?.trackId ?? "");
  const answers = Array.isArray(body?.answers) ? body.answers : [];
  const isMock = body?.isMock ?? false;

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
      { ok: false, error: "Complete all lessons and pass the quiz before the exam." },
      { status: 403 },
    );
  }
  if (!progress.passed) {
    return NextResponse.json(
      { ok: false, error: "Pass the track quiz before taking the exam." },
      { status: 403 },
    );
  }

  const now = new Date();
  const lockedUntil = progress.examLockedUntil ? new Date(progress.examLockedUntil) : null;
  if (lockedUntil && lockedUntil.getTime() > now.getTime()) {
    return NextResponse.json(
      {
        ok: false,
        error: "Your exam is locked. Study more and try again later.",
        lockedUntil: lockedUntil.toISOString(),
      },
      { status: 429 },
    );
  }

  // Mock Exam Gate: If this is the final exam, you must have passed the mock exam.
  if (!isMock && !progress.mockExamPassed) {
    return NextResponse.json(
      { ok: false, error: "You must pass the Mock Exam before attempting the Final Exam." },
      { status: 403 },
    );
  }

  const correct = answers.reduce(
    (sum, answer, i) => sum + (answer === track.exam[i].correctIndex ? 1 : 0),
    0,
  );
  const score = Math.round((correct / track.exam.length) * 100);
  const passed = score >= EXAM_PASS_SCORE;

  const cooldownMs = passed ? 0 : calculateCooldown(score);
  const lockDate = passed ? null : new Date(now.getTime() + cooldownMs);

  if (isMock) {
    const updated = await prisma.academyProgress.update({
      where: { id: progress.id },
      data: {
        mockExamScore: score,
        mockExamPassed: passed,
      },
    });
    return NextResponse.json({
      ok: true,
      score,
      passed,
      bestScore: updated.mockExamScore,
      correct,
      total: track.exam.length,
      lockedUntil: lockDate?.toISOString() ?? null,
    });
  }

  const bestExamScore = Math.max(progress.examScore, score);

  const updated = await prisma.academyProgress.update({
    where: { id: progress.id },
    data: {
      examScore: bestExamScore,
      examPassed: progress.examPassed || passed,
      examLockedUntil: lockDate,
    },
  });

  return NextResponse.json({
    ok: true,
    score,
    passed,
    bestScore: updated.examScore,
    correct,
    total: track.exam.length,
    lockedUntil: lockDate?.toISOString() ?? null,
  });
}
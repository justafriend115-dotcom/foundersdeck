import { NextRequest, NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/auth";
import { getTrack } from "@/lib/academy/curriculum";
import { prisma } from "@/lib/db";
import { readJsonBody } from "@/lib/request";

export async function POST(request: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await readJsonBody(request, 16 * 1024)) as {
    trackId?: string;
    lessonId?: string;
  } | null;
  const trackId = String(body?.trackId ?? "");
  const lessonId = String(body?.lessonId ?? "");

  const track = getTrack(trackId);
  if (!track) {
    return NextResponse.json({ ok: false, error: "Unknown track." }, { status: 400 });
  }
  if (!track.lessons.some((l) => l.id === lessonId)) {
    return NextResponse.json({ ok: false, error: "Unknown lesson." }, { status: 400 });
  }

  const existing = await prisma.academyProgress.findUnique({
    where: { userId_trackId: { userId: user.id, trackId } },
  });

  let completed: string[] = [];
  try {
    completed = existing ? (JSON.parse(existing.completedLessons) as string[]) : [];
  } catch {
    completed = [];
  }
  if (!completed.includes(lessonId)) {
    completed.push(lessonId);
  }

  const progress = await prisma.academyProgress.upsert({
    where: { userId_trackId: { userId: user.id, trackId } },
    update: { completedLessons: JSON.stringify(completed) },
    create: { userId: user.id, trackId, completedLessons: JSON.stringify(completed) },
  });

  let allDone: string[] = [];
  try {
    allDone = JSON.parse(progress.completedLessons) as string[];
  } catch {
    allDone = [];
  }

  return NextResponse.json({
    ok: true,
    completed: allDone,
    allComplete: track.lessons.every((l) => allDone.includes(l.id)),
  });
}
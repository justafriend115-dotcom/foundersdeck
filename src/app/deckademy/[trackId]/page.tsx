import Link from "next/link";
import { redirect } from "next/navigation";

import { TrackViewer } from "@/components/academy/track-viewer";
import { getCurrentUser } from "@/lib/auth";
import { getTrack } from "@/lib/academy/curriculum";
import { prisma } from "@/lib/db";

export const metadata = { title: "DECKADEMY Track" };

export default async function DeckademyTrackPage({ params }: { params: { trackId: string } }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/deckademy");

  const track = getTrack(params.trackId);
  if (!track) redirect("/deckademy");

  const isMember = user.deckademyPlan === "member";
  if (!track.free && !isMember) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-foreground">This track is part of DECKADEMY</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Join DECKADEMY to unlock all 8 tracks and certificates  your first track (Legal &amp;
          Entity Setup) is always free.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/deckademy/billing"
            className="rounded-lg bg-navy-800 px-5 py-2.5 text-sm font-semibold text-brand-200 shadow-lg shadow-black/25"
          >
            Become a member  $49.99/mo
          </Link>
          <Link
            href="/deckademy"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground"
          >
            Back to DECKADEMY
          </Link>
        </div>
      </main>
    );
  }

  const progress = await prisma.academyProgress.findUnique({
    where: { userId_trackId: { userId: user.id, trackId: track.id } },
  });

  let completedLessons: string[] = [];
  try {
    completedLessons = progress
      ? (JSON.parse(progress.completedLessons) as string[])
      : [];
  } catch {
    completedLessons = [];
  }

  return (
    <TrackViewer
      track={track}
      initialScore={progress?.score ?? null}
      passed={progress?.passed ?? false}
      initialCompletedLessons={completedLessons}
      initialQuizLockedUntil={progress?.quizLockedUntil?.toISOString() ?? null}
      initialExamLockedUntil={progress?.examLockedUntil?.toISOString() ?? null}
      examPassed={progress?.examPassed ?? false}
      examScore={progress?.examScore ?? null}
    />
  );
}
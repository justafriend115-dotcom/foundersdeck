import Link from "next/link";
import { redirect } from "next/navigation";

import { TrackViewer } from "@/components/academy/track-viewer";
import { getCurrentUser } from "@/lib/auth";
import { getTrack } from "@/lib/academy/curriculum";
import { prisma } from "@/lib/db";

export const metadata = { title: "Academy Track" };

export default async function AcademyTrackPage({ params }: { params: { trackId: string } }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/academy");

  const track = getTrack(params.trackId);
  if (!track) redirect("/academy");

  const isPro = user.plan !== "free";
  if (!track.free && !isPro) {
    return (
      <main className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-2xl font-bold text-foreground">This track is Pro</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
          Upgrade to unlock all Academy tracks and certificates — your first track (Legal &amp;
          Entity Setup) is always free.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/dashboard/billing"
            className="rounded-lg bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/25"
          >
            Upgrade to Pro
          </Link>
          <Link
            href="/academy"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground"
          >
            Back to Academy
          </Link>
        </div>
      </main>
    );
  }

  const progress = await prisma.academyProgress.findUnique({
    where: { userId_trackId: { userId: user.id, trackId: track.id } },
  });

  return (
    <TrackViewer
      track={track}
      initialScore={progress?.score ?? null}
      passed={progress?.passed ?? false}
    />
  );
}

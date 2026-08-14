import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { PrintButton } from "@/components/academy/print-button";
import { getCurrentUser } from "@/lib/auth";
import { getTrack } from "@/lib/academy/curriculum";
import { prisma } from "@/lib/db";

export const metadata = { title: "Certificate" };

export default async function CertificatePage({ params }: { params: { trackId: string } }) {
  const user = await getCurrentUser();
  if (!user) redirect("/login");

  const track = getTrack(params.trackId);
  if (!track) redirect("/academy");

  const progress = await prisma.academyProgress.findUnique({
    where: { userId_trackId: { userId: user.id, trackId: track.id } },
  });
  if (!progress?.passed) redirect(`/academy/${track.id}`);

  const date = progress.updatedAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <div className="flex items-center justify-between">
        <Link
          href={`/academy/${track.id}`}
          className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ChevronLeft className="size-4" /> Back to track
        </Link>
        <PrintButton />
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border-2 border-brand-500/40 bg-card print:border-brand-500/60">
        <div className="h-2 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600" />
        <div className="p-8 text-center sm:p-12">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#14130F]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 210 210"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="cert-gold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FAC775" />
                  <stop offset="100%" stopColor="#BA7517" />
                </linearGradient>
              </defs>
              <polygon
                points="105,32 168,105 105,178 42,105"
                fill="none"
                stroke="url(#cert-gold)"
                strokeWidth="3"
              />
              <polygon points="105,32 168,105 105,105" fill="url(#cert-gold)" opacity="0.85" />
              <polygon points="105,105 168,105 105,178" fill="url(#cert-gold)" opacity="0.55" />
              <polygon points="105,32 105,105 42,105" fill="url(#cert-gold)" opacity="0.7" />
              <polygon points="42,105 105,105 105,178" fill="url(#cert-gold)" opacity="0.35" />
            </svg>
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-brand-700">
            FoundersDeck Academy
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">
            Certificate of Completion
          </h1>

          <p className="mt-6 text-sm text-muted-foreground">This certifies that</p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">{user.name}</p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            has successfully completed the track
          </p>
          <p className="text-gradient mt-2 text-xl font-bold">{track.title}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            Scoring {progress.score}% on the final assessment · {date}
          </p>

          <div className="mx-auto mt-8 flex max-w-sm items-center justify-between border-t border-border pt-6 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">FoundersDeck</span>
            <span className="uppercase tracking-wider">
              Certificate ID: {progress.id.slice(0, 8).toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

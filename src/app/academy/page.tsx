import {
  Banknote,
  Calculator,
  GraduationCap,
  Lock,
  Megaphone,
  Mic,
  Scale,
  Settings,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";
import { ACADEMY_TRACKS, PASS_SCORE } from "@/lib/academy/curriculum";
import { prisma } from "@/lib/db";
import { cn } from "@/lib/utils";

export const metadata = { title: "Founders Academy" };

const ICONS = {
  scale: Scale,
  users: Users,
  banknote: Banknote,
  calculator: Calculator,
  target: Target,
  megaphone: Megaphone,
  mic: Mic,
  settings: Settings,
} as const;

export default async function AcademyPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/academy");

  const progress = await prisma.academyProgress.findMany({
    where: { userId: user.id },
  });
  const progressMap = new Map(progress.map((p) => [p.trackId, p]));

  const isPro = user.plan !== "free";
  const passedTracks = progress.filter((p) => p.passed).length;

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Founders Academy</h1>
          <p className="mt-1 max-w-xl text-sm text-muted-foreground">
            Self-teach everything it takes to build and raise for a startup. {ACADEMY_TRACKS.length}{" "}
            tracks, each with deep lessons, worked examples, action plans, and a quiz — pass with{" "}
            {PASS_SCORE}%+ to earn a certificate.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5">
          <GraduationCap className="size-4 text-brand-600" />
          <span className="text-sm font-medium text-foreground">
            {passedTracks}/{ACADEMY_TRACKS.length} certified
          </span>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ACADEMY_TRACKS.map((track, i) => {
          const Icon = ICONS[track.icon];
          const entry = progressMap.get(track.id);
          const locked = !track.free && !isPro;
          const certified = entry?.passed ?? false;
          return (
            <Link
              key={track.id}
              href={locked ? "/dashboard/billing" : `/academy/${track.id}`}
              className={cn(
                "group relative flex flex-col rounded-2xl border border-border bg-card p-5 transition-all",
                locked
                  ? "opacity-75"
                  : "hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-lg hover:shadow-black/5",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-xl bg-zinc-950">
                  <Icon className="size-5 text-brand-300" />
                </span>
                {locked ? (
                  <Lock className="size-4 text-muted-foreground" />
                ) : certified ? (
                  <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
                    CERTIFIED
                  </span>
                ) : (
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {i + 1}
                  </span>
                )}
              </div>
              <h2 className="mt-4 text-base font-semibold text-foreground">{track.title}</h2>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground">
                {track.tagline}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  {track.lessons.length} lessons · {track.estimatedHours}
                </span>
                {entry && !locked && (
                  <span
                    className={cn(
                      "font-semibold",
                      entry.passed ? "text-brand-700" : "text-foreground",
                    )}
                  >
                    {entry.score}%
                  </span>
                )}
              </div>
              {!locked && (
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      certified ? "bg-brand-500" : "bg-zinc-400",
                    )}
                    style={{ width: `${entry?.score ?? 0}%` }}
                  />
                </div>
              )}
            </Link>
          );
        })}
      </div>
    </main>
  );
}

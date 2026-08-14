import {
  ArrowRight,
  Award,
  Banknote,
  BookOpen,
  Calculator,
  GraduationCap,
  Megaphone,
  Scale,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

import { ACADEMY_TRACKS } from "@/lib/academy/curriculum";

const TRACK_ICONS = {
  scale: Scale,
  users: Users,
  banknote: Banknote,
  calculator: Calculator,
  target: Target,
  megaphone: Megaphone,
} as const;

export default function AcademySection() {
  const featured = ACADEMY_TRACKS.slice(0, 2);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="bg-muted/40 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            <GraduationCap className="size-3.5" />
            Founders Academy
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Learn how to build a startup — then prove it
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {ACADEMY_TRACKS.length} tracks on legal, team, fundraising, finance, product and
            go-to-market. Pass each quiz with 80%+ and earn a certificate you can print.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-2">
          {featured.map((track) => {
            const Icon = TRACK_ICONS[track.icon];
            return (
              <div
                key={track.id}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-black/5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-zinc-950">
                    <Icon className="size-5 text-brand-300" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{track.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {track.lessons.length} lessons · {track.estimatedHours}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {track.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {track.lessons.slice(0, 3).map((lesson) => (
                    <span
                      key={lesson.id}
                      className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      <BookOpen className="size-3" /> {lesson.title}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl border border-brand-500/25 bg-brand-50/50 p-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-zinc-950">
              <Award className="size-5 text-brand-300" />
            </span>
            <p className="text-foreground/80 text-sm">
              <span className="font-semibold text-foreground">
                {ACADEMY_TRACKS.length - 1} more tracks
              </span>{" "}
              await — Team &amp; Hiring, Fundraising, Finance, Product and Go-to-Market.
            </p>
          </div>
          <Link
            href="/academy"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-zinc-950 px-6 text-sm font-semibold text-white shadow-lg shadow-black/25 transition-colors hover:bg-zinc-800"
          >
            Start learning
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

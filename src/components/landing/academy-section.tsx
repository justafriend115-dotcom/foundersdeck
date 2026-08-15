import {
  ArrowRight,
  Award,
  Banknote,
  BookOpen,
  Calculator,
  GraduationCap,
  Megaphone,
  Mic,
  Scale,
  Settings,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

import { ACADEMY_STATS, ACADEMY_TRACKS } from "@/lib/academy/curriculum";

const TRACK_ICONS = {
  scale: Scale,
  users: Users,
  banknote: Banknote,
  calculator: Calculator,
  target: Target,
  megaphone: Megaphone,
  mic: Mic,
  settings: Settings,
} as const;

export default function AcademySection() {
  const featured = ACADEMY_TRACKS.slice(0, 2);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-600/25 bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700">
            <GraduationCap className="size-3.5" />
            DECKADEMY · by FoundersDeck
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Self-teach every skill a startup demands
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {ACADEMY_STATS.lessons} lessons and {ACADEMY_STATS.quizzes} quiz questions across{" "}
            {ACADEMY_STATS.tracks} tracks — legal, team, fundraising, finance, product, sales,
            pitching and operations. Every lesson ends with an action plan. Pass each quiz with 80%+
            and earn a certificate you can print.
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
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#2e1065,#6d28d9)]">
                    <Icon className="size-5 text-lime-300" />
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

        <div className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl border border-violet-600/25 bg-violet-50/60 p-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-[#2e1065]">
              <Award className="size-5 text-lime-300" />
            </span>
            <p className="text-foreground/80 text-sm">
              <span className="font-semibold text-foreground">
                {ACADEMY_TRACKS.length - 2} more tracks
              </span>{" "}
              await — Fundraising, Finance, Product, Go-to-Market, Pitching and Operations.
              Membership unlocks everything at{" "}
              <span className="font-semibold text-foreground">$49.99/mo</span>.
            </p>
          </div>
          <Link
            href="/deckademy"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#2e1065,#6d28d9)] px-6 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-colors hover:brightness-110"
          >
            Start learning
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

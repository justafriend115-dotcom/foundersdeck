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
    <section className="bg-[#0D1325] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#1E2D45] bg-[#0F1628] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
            <GraduationCap className="size-3.5" />
            DECKADEMY · by FoundersDeck
          </span>
          <h2
            className="mt-4 text-4xl tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Self-teach every skill a startup demands
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
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
                className="rounded-2xl border border-[#1E2D45] bg-[#0F1628] p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-[#1A2640]">
                    <Icon className="size-5 text-[var(--primary)]" />
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
                      className="inline-flex items-center gap-1.5 rounded-full border border-[#1E2D45] bg-[#0A0F1F] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                    >
                      <BookOpen className="size-3" /> {lesson.title}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center justify-between gap-5 rounded-2xl border border-[#1E2D45] bg-[#0F1628] p-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#1A2640]">
              <Award className="size-5 text-[var(--primary)]" />
            </span>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">
                {ACADEMY_TRACKS.length - 2} more tracks
              </span>{" "}
              coming soon — Fundraising, Finance, Product, Go-to-Market, Pitching and Operations.
              Membership unlocks everything at{" "}
              <span className="font-semibold text-foreground">$49.99/mo</span>.
            </p>
          </div>
          <Link
            href="/deckademy"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-[var(--primary)] px-6 text-sm font-semibold text-[var(--primary)] transition-colors hover:bg-[var(--primary)] hover:text-white"
          >
            Start learning
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

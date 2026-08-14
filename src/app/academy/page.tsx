import {
  ArrowRight,
  Award,
  Banknote,
  Bell,
  BookOpen,
  Calculator,
  CheckCircle2,
  ClipboardList,
  Crown,
  GraduationCap,
  ListChecks,
  Lock,
  Medal,
  Megaphone,
  Mic,
  Rocket,
  Scale,
  Settings,
  Sparkles,
  Target,
  TrendingUp,
  Trophy,
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

const MILESTONES = [
  { count: 1, title: "Junior Founder", icon: Medal, desc: "Pass any one track" },
  { count: 3, title: "Advanced Founder", icon: Trophy, desc: "Pass any three tracks" },
  { count: 6, title: "Certified Founder", icon: Rocket, desc: "Pass six tracks" },
  { count: 8, title: "Founder Elite", icon: Crown, desc: "Complete the full academy" },
];

const LOOP_STEPS = [
  { icon: BookOpen, title: "Learn", desc: "Deep lessons with worked examples" },
  { icon: ListChecks, title: "Act", desc: "Every lesson ends in an action plan" },
  { icon: ClipboardList, title: "Prove it", desc: "Pass the 8-question quiz with 80%+" },
  { icon: Award, title: "Certify", desc: "Earn a printable certificate" },
];

export default async function AcademyPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/academy");

  const progress = await prisma.academyProgress.findMany({
    where: { userId: user.id },
  });
  const progressMap = new Map(progress.map((p) => [p.trackId, p]));

  const isPro = user.plan !== "free";
  const passedTracks = progress.filter((p) => p.passed).length;
  const quizCount = ACADEMY_TRACKS.reduce((sum, t) => sum + t.quiz.length, 0);
  const lessonCount = ACADEMY_TRACKS.reduce((sum, t) => sum + t.lessons.length, 0);
  const averageScore = progress.length
    ? Math.round(progress.reduce((sum, p) => sum + p.score, 0) / progress.length)
    : 0;

  const nextMilestone =
    MILESTONES.find((m) => passedTracks < m.count) ?? MILESTONES[MILESTONES.length - 1];
  const currentMilestoneIndex = MILESTONES.findIndex((m) => m.count === nextMilestone.count);

  return (
    <main>
      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <section className="bg-[linear-gradient(135deg,#0f2460_0%,#1e3a8a_55%,#1d4ed8_100%)] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-20">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-xs font-bold text-amber-200">
              <Sparkles className="size-3.5" />
              {passedTracks > 0
                ? `You've earned ${passedTracks} certificate${passedTracks === 1 ? "" : "s"}`
                : "Self-teach every skill a startup demands"}
            </span>
            <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl">
              Where <em className="not-italic text-amber-400">Founders</em> Are<br />
              Forged
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/70">
              {lessonCount} lessons and {quizCount} quiz questions across {ACADEMY_TRACKS.length}{" "}
              tracks — legal, team, fundraising, finance, product, sales, pitching and operations.
              Learn, act, prove it, and print your certificate.
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                href="/academy/legal"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3 text-sm font-bold text-[#111827] shadow-lg shadow-amber-500/20 transition-colors hover:bg-amber-300"
              >
                Start the free Legal track
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Back to dashboard
              </Link>
            </div>
          </div>

          {/* Certificate mockup */}
          <div className="hidden justify-center md:flex">
            <div className="relative w-full max-w-sm rotate-2 rounded-2xl border border-amber-200/20 bg-white p-7 text-[#111827] shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute -right-4 -top-4 rounded-xl bg-[#0f2460] px-3 py-2 text-[11px] font-extrabold tracking-wide text-amber-300 shadow-lg">
                {PASS_SCORE}% TO PASS
              </div>
              <div className="flex items-center justify-between border-b border-dashed border-zinc-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[#0f2460]">
                    <GraduationCap className="size-5 text-amber-300" />
                  </span>
                  <div>
                    <div className="text-sm font-black tracking-wide">FOUNDERSHQ</div>
                    <div className="text-[10px] font-semibold text-zinc-400">
                      FOUNDERS ACADEMY
                    </div>
                  </div>
                </div>
                <Award className="size-6 text-amber-500" />
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                Certificate of completion
              </p>
              <h2 className="mt-1.5 text-xl font-black">Startup Fundamentals</h2>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-zinc-100 text-sm font-extrabold text-[#1e3a8a]">
                  JD
                </span>
                <div className="text-xs text-zinc-500">
                  <span className="font-bold text-[#111827]">The Founder</span>
                  <br />
                  completed 8 of 8 tracks
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  { label: "Lessons", value: lessonCount },
                  { label: "Quizzes", value: quizCount },
                  { label: "Score", value: `${averageScore || 90}%` },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg bg-zinc-50 px-2 py-2.5 text-center">
                    <div className="text-lg font-black text-[#1e3a8a]">{s.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-dashed border-zinc-200 pt-4">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400">
                  <CheckCircle2 className="size-3.5 text-emerald-500" />
                  VERIFIED · FOUNDERSHQ.APP
                </span>
                <span className="flex size-10 items-center justify-center rounded-full border-2 border-amber-400">
                  <Award className="size-5 text-amber-500" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ────────────────────────────────────────────── */}
      <section className="bg-[#0f2460] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-6 py-9 md:grid-cols-4">
          {[
            { num: ACADEMY_TRACKS.length, label: "Tracks" },
            { num: lessonCount, label: "Lessons" },
            { num: quizCount, label: "Quiz Questions" },
            { num: `${passedTracks}/${ACADEMY_TRACKS.length}`, label: "Your Certificates" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "px-4 text-center",
                i < 3 && "md:border-r md:border-white/15",
                i % 2 === 0 && "border-r border-white/15 md:border-r-0",
              )}
            >
              <div className="text-4xl font-black text-amber-400">{stat.num}</div>
              <div className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── QUICK LINKS ────────────────────────────────────────────── */}
      <section className="relative z-10 mx-auto -mt-7 max-w-6xl px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              href: "/academy/legal",
              icon: BookOpen,
              tile: "bg-[#eff6ff]",
              label: "Start Learning",
              sub: "Free Legal track, lesson 1",
            },
            {
              href: `/academy/${ACADEMY_TRACKS.find((t) => !t.free)?.id ?? "team"}`,
              icon: ClipboardList,
              tile: "bg-[#fef2f2]",
              label: "Take a Quiz",
              sub: "Prove it with 80%+",
            },
            {
              href: `/academy/certificate/${passedTracks > 0 ? Array.from(progressMap.keys()).find((k) => progressMap.get(k)?.passed) ?? "legal" : "legal"}`,
              icon: Award,
              tile: "bg-[#fffbeb]",
              label: "My Certificates",
              sub: `${passedTracks} earned so far`,
            },
            {
              href: isPro ? "/dashboard" : "/dashboard/billing",
              icon: isPro ? Rocket : Crown,
              tile: "bg-[#f0fdf4]",
              label: isPro ? "Pro Member" : "Go Pro",
              sub: isPro ? "All 8 tracks unlocked" : "Unlock all 8 tracks",
            },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group flex items-center gap-3.5 rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.07)] transition-all hover:-translate-y-0.5 hover:border-[#1d4ed8]/40 hover:shadow-[0_10px_28px_rgba(37,99,235,0.14)]"
            >
              <span
                className={cn(
                  "flex size-11 shrink-0 items-center justify-center rounded-xl",
                  link.tile,
                )}
              >
                <link.icon className="size-5 text-[#1e3a8a]" />
              </span>
              <span>
                <span className="block text-sm font-bold text-[#111827]">{link.label}</span>
                <span className="mt-0.5 block text-xs text-zinc-400">{link.sub}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── TRACKS ─────────────────────────────────────────────────── */}
      <section className="mt-14 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1d4ed8]">
              <GraduationCap className="mr-1.5 inline size-4" />
              The Curriculum
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#111827]">
              Eight Tracks, One Standard:{" "}
              <span className="text-[#1d4ed8]">Ready to Raise</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {ACADEMY_TRACKS.map((track) => {
              const Icon = ICONS[track.icon];
              const entry = progressMap.get(track.id);
              const locked = !track.free && !isPro;
              const certified = entry?.passed ?? false;
              return (
                <Link
                  key={track.id}
                  href={locked ? "/dashboard/billing" : `/academy/${track.id}`}
                  className={cn(
                    "group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all",
                    locked
                      ? "opacity-70"
                      : "hover:-translate-y-1 hover:border-[#1d4ed8]/50 hover:shadow-[0_12px_32px_rgba(37,99,235,0.12)]",
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#0f2460,#1d4ed8)]">
                      <Icon className="size-5 text-amber-300" />
                    </span>
                    {locked ? (
                      <Lock className="size-4 text-zinc-400" />
                    ) : certified ? (
                      <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-emerald-600">
                        <CheckCircle2 className="size-3" />
                        CERTIFIED
                      </span>
                    ) : (
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wide",
                          track.free
                            ? "bg-amber-50 text-amber-600"
                            : "bg-[#eff6ff] text-[#1d4ed8]",
                        )}
                      >
                        {track.free ? "FREE" : "PRO"}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 text-[15px] font-extrabold text-[#111827]">{track.title}</h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-zinc-500">
                    {track.tagline}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[11px] font-semibold text-zinc-400">
                    <span>
                      {track.lessons.length} lessons · {track.estimatedHours}
                    </span>
                    {entry && !locked && (
                      <span className={cn("font-extrabold", certified ? "text-emerald-600" : "text-[#1e3a8a]")}>
                        {entry.score}%
                      </span>
                    )}
                  </div>
                  {!locked && (
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                      <div
                        className={cn(
                          "h-full rounded-full",
                          certified
                            ? "bg-emerald-500"
                            : "bg-[linear-gradient(90deg,#1e3a8a,#2563eb)]",
                        )}
                        style={{ width: `${entry?.score ?? 0}%` }}
                      />
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── NOTICES (progress) ─────────────────────────────────────── */}
      <section className="mt-16 bg-[#fafafa] py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1d4ed8]">
                <Bell className="mr-1.5 inline size-4" />
                Your Journey
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#111827]">
                Progress Notices
              </h2>
            </div>
            <Link
              href={`/academy/${nextMilestone.count <= passedTracks ? "legal" : ACADEMY_TRACKS.find((t) => !progressMap.get(t.id)?.passed)?.id ?? "legal"}`}
              className="rounded-lg border border-zinc-300 px-4 py-2 text-xs font-bold text-[#111827] transition-colors hover:border-[#1d4ed8]/50"
            >
              Continue learning →
            </Link>
          </div>

          <div className="mt-8 space-y-3">
            {ACADEMY_TRACKS.map((track) => {
              const entry = progressMap.get(track.id);
              if (!entry && track.free) {
                return (
                  <div key={track.id} className="rounded-xl border-l-4 border-[#1d4ed8] border-y border-r border-zinc-200 bg-white px-5 py-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-[#eff6ff] px-2 py-0.5 text-[10px] font-extrabold text-[#1d4ed8]">
                        START HERE
                      </span>
                      <span className="rounded bg-amber-50 px-2 py-0.5 text-[10px] font-extrabold text-amber-600">
                        FREE
                      </span>
                      <span className="ml-auto text-xs text-zinc-400">{track.lessons.length} lessons</span>
                    </div>
                    <p className="mt-2 text-sm font-bold text-[#111827]">
                      {track.title} — begin your first track
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                      {track.tagline}
                    </p>
                  </div>
                );
              }
              if (entry && !entry.passed) {
                return (
                  <div key={track.id} className="rounded-xl border-l-4 border-amber-400 border-y border-r border-zinc-200 bg-white px-5 py-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-amber-50 px-2 py-0.5 text-[10px] font-extrabold text-amber-600">
                        IN PROGRESS
                      </span>
                      <span className="text-xs font-extrabold text-[#1e3a8a]">{entry.score}%</span>
                      <span className="ml-auto text-xs text-zinc-400">
                        needs {PASS_SCORE}% to certify
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-bold text-[#111827]">{track.title}</p>
                    <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                      <div
                        className="h-full rounded-full bg-amber-400"
                        style={{ width: `${entry.score}%` }}
                      />
                    </div>
                  </div>
                );
              }
              if (entry?.passed) {
                return (
                  <div key={track.id} className="rounded-xl border-l-4 border-emerald-500 border-y border-r border-zinc-200 bg-white px-5 py-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-extrabold text-emerald-600">
                        CERTIFIED
                      </span>
                      <span className="text-xs font-extrabold text-emerald-600">{entry.score}%</span>
                      <Link
                        href={`/academy/certificate/${track.id}`}
                        className="ml-auto text-xs font-bold text-[#1d4ed8] hover:underline"
                      >
                        View certificate →
                      </Link>
                    </div>
                    <p className="mt-2 text-sm font-bold text-[#111827]">{track.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                      Quiz passed at {entry.score}% — certificate ready to print.
                    </p>
                  </div>
                );
              }
              return (
                <div key={track.id} className="rounded-xl border-l-4 border-zinc-300 border-y border-r border-zinc-200 bg-white px-5 py-4 opacity-60">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded bg-zinc-100 px-2 py-0.5 text-[10px] font-extrabold text-zinc-500">
                      LOCKED
                    </span>
                    <span className="ml-auto text-xs text-zinc-400">PRO track</span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-[#111827]">{track.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500">
                    Upgrade to Pro to unlock all {track.lessons.length} lessons.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── MILESTONES ─────────────────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1d4ed8]">
              <Trophy className="mr-1.5 inline size-4" />
              Milestones
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#111827]">
              Your Path to <span className="text-[#1d4ed8]">Founder Elite</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((m, i) => {
              const unlocked = passedTracks >= m.count;
              const isNext = i === currentMilestoneIndex;
              return (
                <div
                  key={m.title}
                  className={cn(
                    "relative rounded-2xl border bg-white p-6 text-center transition-all",
                    unlocked
                      ? "border-emerald-300 shadow-[0_8px_32px_rgba(16,185,129,0.15)]"
                      : isNext
                        ? "border-[#1d4ed8]/50 shadow-[0_8px_32px_rgba(37,99,235,0.12)]"
                        : "border-zinc-200",
                  )}
                >
                  {unlocked && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[9px] font-extrabold tracking-wider text-white">
                      ACHIEVED
                    </span>
                  )}
                  <span
                    className={cn(
                      "mx-auto flex size-16 items-center justify-center rounded-2xl",
                      unlocked
                        ? "bg-[linear-gradient(135deg,#059669,#10b981)]"
                        : isNext
                          ? "bg-[linear-gradient(135deg,#0f2460,#1d4ed8)]"
                          : "bg-zinc-100",
                    )}
                  >
                    <m.icon className={cn("size-7", unlocked ? "text-white" : isNext ? "text-amber-300" : "text-zinc-400")} />
                  </span>
                  <h3 className="mt-4 text-base font-extrabold text-[#111827]">{m.title}</h3>
                  <p className="mt-1 text-xs text-zinc-500">{m.desc}</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span
                      className={cn(
                        "text-2xl font-black",
                        unlocked ? "text-emerald-600" : isNext ? "text-[#1d4ed8]" : "text-zinc-300",
                      )}
                    >
                      {m.count}
                    </span>
                    <span className="text-xs font-semibold text-zinc-400">of 8 tracks</span>
                  </div>
                  <div
                    className="mx-auto mt-3 h-2 w-32 rounded-full bg-zinc-100"
                    style={{
                      background: `conic-gradient(#1d4ed8 ${Math.min(100, (passedTracks / m.count) * 100)}%, #f4f4f5 0)`,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── LEARNING LOOP ──────────────────────────────────────────── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#1d4ed8]">
              <ListChecks className="mr-1.5 inline size-4" />
              How It Works
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#111827]">
              The Learning Loop
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LOOP_STEPS.map((step, i) => (
              <div key={step.title} className="relative rounded-2xl border border-zinc-200 bg-white p-6">
                <span className="absolute right-4 top-4 text-3xl font-black text-zinc-100">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex size-12 items-center justify-center rounded-xl bg-[#eff6ff]">
                  <step.icon className="size-5.5 size-6 text-[#1d4ed8]" />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-[#111827]">{step.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className="bg-[linear-gradient(135deg,#1e3a8a,#1d4ed8)] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#bfdbfe]">
            <GraduationCap className="mr-1.5 inline size-4" />
            Admissions Open
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Begin Your Founder&apos;s Journey
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/70">
            The Legal track is free and takes about 5 hours. Finish it, pass the quiz at 80%, and
            your first certificate is yours to print.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/academy/legal"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-7 py-3.5 text-sm font-bold text-[#111827] shadow-lg shadow-amber-500/25 transition-colors hover:bg-amber-300"
            >
              Start Learning — Free
              <ArrowRight className="size-4" />
            </Link>
            {!isPro && (
              <Link
                href="/dashboard/billing"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Crown className="size-4" />
                Unlock all 8 tracks
              </Link>
            )}
          </div>
        </div>
      </section>

      <p className="no-print bg-[#f5f5f6] py-8 text-center text-xs text-zinc-400">
        <GraduationCap className="mr-1 inline size-3.5" />
        FoundersHQ Academy — {lessonCount} lessons · {quizCount} quiz questions ·{" "}
        {PASS_SCORE}% to certify · certificates printable
      </p>
    </main>
  );
}
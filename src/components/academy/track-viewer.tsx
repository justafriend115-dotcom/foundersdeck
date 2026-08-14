"use client";

import {
  Award,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  ListChecks,
  Loader2,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { AcademyTrack } from "@/lib/academy/curriculum";
import { PASS_SCORE } from "@/lib/academy/curriculum";

type Mode = "lesson" | "quiz" | "result";

export function TrackViewer({
  track,
  initialScore,
  passed,
}: {
  track: AcademyTrack;
  initialScore: number | null;
  passed: boolean;
}) {
  const [lessonIndex, setLessonIndex] = useState(0);
  const [mode, setMode] = useState<Mode>("lesson");
  const [answers, setAnswers] = useState<number[]>(() => track.quiz.map(() => -1));
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    passed: boolean;
    bestScore: number;
    correct: number;
    total: number;
  } | null>(null);

  const lesson = track.lessons[lessonIndex];

  async function submitQuiz() {
    if (answers.some((a) => a < 0)) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/academy/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackId: track.id, answers }),
      });
      const json = await res.json();
      if (json.ok) {
        setResult(json);
        setMode("result");
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <Link
          href="/academy"
          className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
        </Link>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">{track.title}</h1>
          <p className="text-xs text-muted-foreground">
            {track.lessons.length} lessons · {track.estimatedHours}
          </p>
        </div>
      </div>

      <div className="bg-muted/40 mt-6 flex gap-1 rounded-xl border border-border p-1">
        {(["lesson", "quiz"] as const).map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={cn(
              "flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
              mode === m
                ? "bg-card text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {m === "lesson" ? "Lessons" : `Quiz (${track.quiz.length} questions)`}
          </button>
        ))}
      </div>

      {mode === "lesson" && (
        <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr]">
          <nav className="space-y-1">
            {track.lessons.map((l, i) => (
              <button
                key={l.id}
                onClick={() => setLessonIndex(i)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                  i === lessonIndex
                    ? "bg-zinc-950 font-medium text-brand-300"
                    : "hover:bg-muted/60 text-muted-foreground hover:text-foreground",
                )}
              >
                <BookOpen className="size-3.5 shrink-0" />
                <span className="line-clamp-1">{l.title}</span>
              </button>
            ))}
          </nav>

          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <p className="text-xs font-medium text-brand-700">
              Lesson {lessonIndex + 1} of {track.lessons.length} · {lesson.readMinutes} min read
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
              {lesson.title}
            </h2>
            <div className="mt-6 space-y-6">
              {lesson.sections.map((section) => (
                <section key={section.heading}>
                  <h3 className="text-base font-semibold text-foreground">{section.heading}</h3>
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {lesson.examples && lesson.examples.length > 0 && (
              <div className="mt-8 rounded-xl border border-amber-500/25 bg-amber-50/50 p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-amber-700">
                  <Lightbulb className="size-4" />
                  Worked examples
                </p>
                <ul className="mt-3 space-y-3">
                  {lesson.examples.map((example, i) => (
                    <li key={i} className="text-sm leading-relaxed text-foreground/80">
                      <span className="mr-1.5 font-semibold text-amber-700">
                        {String.fromCharCode(97 + i)}.
                      </span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 rounded-xl border border-brand-500/25 bg-brand-50/60 p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-700">
                <ListChecks className="size-4" />
                Your action plan
              </p>
              <ul className="mt-3 space-y-2">
                {lesson.actionItems.map((item) => (
                  <li key={item} className="text-foreground/80 flex gap-2 text-sm">
                    <span className="mt-0.5 font-semibold text-brand-600">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-xl border border-brand-500/25 bg-brand-50/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                Key points
              </p>
              <ul className="mt-3 space-y-2">
                {lesson.keyPoints.map((point) => (
                  <li key={point} className="text-foreground/80 flex gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setLessonIndex((i) => Math.max(0, i - 1))}
                disabled={lessonIndex === 0}
                className="flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors disabled:opacity-40"
              >
                <ChevronLeft className="size-4" /> Previous
              </button>
              {lessonIndex < track.lessons.length - 1 ? (
                <button
                  onClick={() => setLessonIndex((i) => Math.min(track.lessons.length - 1, i + 1))}
                  className="flex items-center gap-1 rounded-lg bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/25"
                >
                  Next lesson <ChevronRight className="size-4" />
                </button>
              ) : (
                <button
                  onClick={() => setMode("quiz")}
                  className="flex items-center gap-1 rounded-lg bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/25"
                >
                  Take the quiz <ChevronRight className="size-4" />
                </button>
              )}
            </div>
          </article>
        </div>
      )}

      {mode === "quiz" && (
        <div className="mt-6 space-y-5">
          {initialScore !== null && (
            <div className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-3 text-sm">
              <span className="text-muted-foreground">Best score so far</span>
              <span className={cn("font-bold", passed ? "text-brand-700" : "text-foreground")}>
                {initialScore}%{passed ? " · Certified" : ""}
              </span>
            </div>
          )}
          {track.quiz.map((q, qi) => (
            <div key={qi} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-sm font-semibold text-foreground">
                <span className="text-brand-700">{qi + 1}.</span> {q.question}
              </p>
              <div className="mt-4 space-y-2">
                {q.options.map((option, oi) => (
                  <button
                    key={oi}
                    onClick={() => setAnswers((prev) => prev.map((a, i) => (i === qi ? oi : a)))}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-left text-sm transition-colors",
                      answers[qi] === oi
                        ? "border-brand-500/50 bg-brand-50/60 font-medium text-foreground"
                        : "border-border text-muted-foreground hover:border-brand-500/30 hover:text-foreground",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold",
                        answers[qi] === oi
                          ? "border-brand-600 bg-brand-600 text-white"
                          : "border-zinc-300 text-muted-foreground",
                      )}
                    >
                      {String.fromCharCode(65 + oi)}
                    </span>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={submitQuiz}
            disabled={answers.some((a) => a < 0) || submitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/25 transition-opacity disabled:opacity-40"
          >
            {submitting ? <Loader2 className="animate-spin" /> : <Award />}
            {submitting
              ? "Grading…"
              : `Submit quiz (${answers.filter((a) => a >= 0).length}/${track.quiz.length} answered)`}
          </button>
        </div>
      )}

      {mode === "result" && result && (
        <div className="mt-6 rounded-2xl border border-border bg-card p-8 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-zinc-950">
            {result.passed ? (
              <Award className="size-8 text-brand-300" />
            ) : (
              <XCircle className="size-8 text-red-400" />
            )}
          </div>
          <h2 className="mt-4 text-2xl font-bold text-foreground">
            {result.passed ? "Certificate earned!" : "Keep studying"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            You scored <span className="font-semibold text-foreground">{result.score}%</span> (
            {result.correct}/{result.total} correct) — {PASS_SCORE}% is required to pass. Best
            score: {result.bestScore}%.
          </p>

          {!result.passed && (
            <div className="mt-6 space-y-3 text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                What you missed
              </p>
              {track.quiz.map((q, qi) => {
                if (answers[qi] !== q.correctIndex) {
                  return (
                    <div key={qi} className="bg-muted/30 rounded-xl border border-border p-4">
                      <p className="text-sm font-medium text-foreground">{q.question}</p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-brand-700">Correct:</span>{" "}
                        {q.options[q.correctIndex]}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                        {q.explanation}
                      </p>
                    </div>
                  );
                }
                return null;
              })}
              <button
                onClick={() => {
                  setAnswers(track.quiz.map(() => -1));
                  setMode("quiz");
                }}
                className="mt-2 w-full rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25"
              >
                Retake the quiz
              </button>
            </div>
          )}

          {result.passed && (
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href={`/academy/certificate/${track.id}`}
                className="flex items-center justify-center gap-2 rounded-lg bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/25"
              >
                <Award /> View certificate
              </Link>
              <button
                onClick={() => {
                  setAnswers(track.quiz.map(() => -1));
                  setMode("quiz");
                }}
                className="rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground"
              >
                Retake for a better score
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

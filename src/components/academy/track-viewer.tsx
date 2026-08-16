"use client";

import {
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  GraduationCap,
  Lightbulb,
  ListChecks,
  Loader2,
  Lock,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { AcademyTrack } from "@/lib/academy/curriculum";
import { EXAM_PASS_SCORE, PASS_SCORE } from "@/lib/academy/curriculum";

type Mode = "lesson" | "quiz" | "exam" | "result";

function useCountdown(target: Date | null): string | null {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    if (!target) return;
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, [target]);

  if (!target) return null;
  const ms = Math.max(0, target.getTime() - now.getTime());
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function LockCard({
  title,
  message,
  lockedUntil,
  cta,
}: {
  title: string;
  message: string;
  lockedUntil?: Date | null;
  cta?: React.ReactNode;
}) {
  const countdown = useCountdown(lockedUntil ?? null);

  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-8 text-center">
      <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-steel-600/10">
        <Lock className="size-6 text-steel-500" />
      </div>
      <h2 className="mt-4 text-xl font-bold text-foreground">{title}</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
        {message}
      </p>
      {countdown && (
        <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-xl border border-steel-500/30 bg-steel-600/10 px-5 py-2.5 font-mono text-lg font-bold text-steel-400">
          <Clock className="size-5" />
          {countdown}
        </div>
      )}
      {cta && <div className="mt-6 flex justify-center gap-3">{cta}</div>}
    </div>
  );
}

export function TrackViewer({
  track,
  initialScore,
  passed,
  initialCompletedLessons,
  initialQuizLockedUntil,
  initialExamLockedUntil,
  examPassed,
  examScore,
}: {
  track: AcademyTrack;
  initialScore: number | null;
  passed: boolean;
  initialCompletedLessons: string[];
  initialQuizLockedUntil: string | null;
  initialExamLockedUntil: string | null;
  examPassed: boolean;
  examScore: number | null;
}) {
  const initialCompleted = initialCompletedLessons;
  const [lessonIndex, setLessonIndex] = useState(0);
  const [completed, setCompleted] = useState(initialCompleted);
  const [quizPassedLocal, setQuizPassedLocal] = useState(passed);
  const [mode, setMode] = useState<Mode>("lesson");
  const [quizAnswers, setQuizAnswers] = useState(() => track.quiz.map(() => -1));
  const [examAnswers, setExamAnswers] = useState(() => track.exam.map(() => -1));
  const [submitting, setSubmitting] = useState(false);
  const [marking, setMarking] = useState(false);
  const [quizLockedUntil, setQuizLockedUntil] = useState<Date | null>(
    initialQuizLockedUntil ? new Date(initialQuizLockedUntil) : null,
  );
  const [examLockedUntil, setExamLockedUntil] = useState<Date | null>(
    initialExamLockedUntil ? new Date(initialExamLockedUntil) : null,
  );
  const [result, setResult] = useState<{
    kind: "quiz" | "exam";
    score: number;
    passed: boolean;
    bestScore: number;
    correct: number;
    total: number;
    lockedUntil: string | null;
  } | null>(null);

  const lesson = track.lessons[lessonIndex];
  const lessonsDone = completed.length;
  const allLessonsDone = lessonsDone >= track.lessons.length;
  const canQuiz = allLessonsDone || passed;
  const quizLocked = quizLockedUntil !== null && quizLockedUntil.getTime() > Date.now();
  const examLocked = examLockedUntil !== null && examLockedUntil.getTime() > Date.now();
  const canExam = allLessonsDone && quizPassedLocal;

  async function markLessonComplete() {
    if (marking) return;
    setMarking(true);
    try {
      const res = await fetch("/api/academy/lesson", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackId: track.id, lessonId: lesson.id }),
      });
      const json = await res.json();
      if (json.ok) {
        setCompleted(json.completed);
      }
    } finally {
      setMarking(false);
    }
  }

  async function submit(kind: "quiz" | "exam") {
    const answers = kind === "quiz" ? quizAnswers : examAnswers;
    if (answers.some((a) => a < 0)) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/academy/${kind}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackId: track.id, answers }),
      });
      const json = await res.json();
      if (json.ok) {
        setResult({
          kind,
          score: json.score,
          passed: json.passed,
          bestScore: json.bestScore,
          correct: json.correct,
          total: json.total,
          lockedUntil: json.lockedUntil ?? null,
        });
        if (kind === "quiz") {
          setQuizLockedUntil(json.lockedUntil ? new Date(json.lockedUntil) : null);
          if (json.passed) setQuizPassedLocal(true);
        } else {
          setExamLockedUntil(json.lockedUntil ? new Date(json.lockedUntil) : null);
        }
        setMode("result");
      } else if (res.status === 429 && json.lockedUntil) {
        if (kind === "quiz") {
          setQuizLockedUntil(new Date(json.lockedUntil));
        } else {
          setExamLockedUntil(new Date(json.lockedUntil));
        }
      }
    } finally {
      setSubmitting(false);
    }
  }

  const questions = mode === "quiz" ? track.quiz : track.exam;
  const answers = mode === "quiz" ? quizAnswers : examAnswers;

  return (
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <Link
          href="/deckademy"
          className="flex size-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
        </Link>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">{track.title}</h1>
          <p className="text-xs text-muted-foreground">
            {track.lessons.length} lessons · {track.estimatedHours} · Quiz then final exam
          </p>
        </div>
      </div>

      <div className="bg-muted/40 mt-6 flex gap-1 rounded-xl border border-border p-1">
        {(["lesson", "quiz", "exam"] as const).map((m) => {
          const label =
            m === "lesson" ? "Lessons" : m === "quiz" ? `Quiz (${track.quiz.length})` : "Final exam";
          const locked =
            m === "quiz"
              ? !canQuiz || quizLocked
              : m === "exam"
                ? !canExam || examLocked
                : false;
          return (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn(
                "flex flex-1 items-center justify-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                mode === m
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {locked ? <Lock className="size-3.5" /> : m === "exam" ? <GraduationCap className="size-3.5" /> : null}
              {label}
            </button>
          );
        })}
      </div>

      {mode === "lesson" && (
        <div className="mt-6 grid gap-6 md:grid-cols-[240px_1fr]">
          <nav className="space-y-1">
            {track.lessons.map((l, i) => (
              <button
                key={l.id}
                onClick={() => setLessonIndex(i)}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors",
i === lessonIndex
                    ? "bg-steel-600/15 font-medium text-steel-300"
                    : "hover:bg-muted/60 text-muted-foreground hover:text-foreground",
                )}
              >
                {completed.includes(l.id) ? (
                  <CheckCircle2 className="size-3.5 shrink-0 text-emerald-500" />
                ) : (
                  <BookOpen className="size-3.5 shrink-0" />
                )}
                <span className="line-clamp-1">{l.title}</span>
              </button>
            ))}
            <div className="mt-3 rounded-lg border border-border bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
              {lessonsDone}/{track.lessons.length} lessons complete
              {allLessonsDone && (
                <span className="mt-0.5 block font-semibold text-emerald-500">
                  Quiz unlocked
                </span>
              )}
            </div>
          </nav>

          <article className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-medium text-steel-700">
                Lesson {lessonIndex + 1} of {track.lessons.length} · {lesson.readMinutes} min read
              </p>
              {completed.includes(lesson.id) && (
                <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-500">
                  <Check className="size-3" /> Completed
                </span>
              )}
            </div>
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
              <div className="mt-8 rounded-xl border border-steel-500/25 bg-steel-600/5 p-5">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-steel-700">
                  <Lightbulb className="size-4" />
                  Worked examples
                </p>
                <ul className="mt-3 space-y-3">
                  {lesson.examples.map((example, i) => (
                    <li key={i} className="text-sm leading-relaxed text-foreground/80">
                      <span className="mr-1.5 font-semibold text-steel-700">
                        {String.fromCharCode(97 + i)}.
                      </span>
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-6 rounded-xl border border-steel-500/25 bg-steel-600/5 p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-steel-700">
                <ListChecks className="size-4" />
                Your action plan
              </p>
              <ul className="mt-3 space-y-2">
                {lesson.actionItems.map((item) => (
                  <li key={item} className="text-foreground/80 flex gap-2 text-sm">
                    <span className="mt-0.5 font-semibold text-steel-600">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-xl border border-steel-500/25 bg-steel-600/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-steel-700">
                Key points
              </p>
              <ul className="mt-3 space-y-2">
                {lesson.keyPoints.map((point) => (
                  <li key={point} className="text-foreground/80 flex gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-steel-600" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => setLessonIndex((i) => Math.max(0, i - 1))}
                disabled={lessonIndex === 0}
                className="flex items-center gap-1 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors disabled:opacity-40"
              >
                <ChevronLeft className="size-4" /> Previous
              </button>

              {!completed.includes(lesson.id) ? (
                <button
                  onClick={markLessonComplete}
                  disabled={marking}
                  className="flex items-center gap-1 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-navy-950/40 transition-opacity disabled:opacity-50"
                >
                  {marking ? <Loader2 className="animate-spin" /> : <Check className="size-4" />}
                  Mark lesson complete
                </button>
              ) : (
                <span className="flex items-center gap-1.5 text-sm font-semibold text-emerald-500">
                  <CheckCircle2 className="size-4" /> Lesson complete
                </span>
              )}

              {lessonIndex < track.lessons.length - 1 ? (
                <button
                  onClick={() => setLessonIndex((i) => Math.min(track.lessons.length - 1, i + 1))}
                  className="flex items-center gap-1 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/25"
                >
                  Next lesson <ChevronRight className="size-4" />
                </button>
              ) : (
                <button
                  onClick={() => setMode("quiz")}
                  disabled={!canQuiz}
                  className="flex items-center gap-1 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-black/25 disabled:opacity-40"
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
          {!canQuiz && (
            <LockCard
              title="Finish the lessons first"
              message={`Complete all ${track.lessons.length} lessons to unlock the quiz. You have completed ${lessonsDone}.`}
              cta={
                <button
                  onClick={() => setMode("lesson")}
                  className="rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Continue lessons
                </button>
              }
            />
          )}
          {canQuiz && quizLocked && (
            <LockCard
              title="Quiz locked"
              message="You did not pass the quiz recently. You can retake it once the cooldown ends."
              lockedUntil={quizLockedUntil}
            />
          )}
          {canQuiz && !quizLocked && (
            <>
              {initialScore !== null && (
                <div className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-3 text-sm">
                  <span className="text-muted-foreground">Best score so far</span>
                  <span className={cn("font-bold", passed ? "text-steel-700" : "text-foreground")}>
                    {initialScore}%{passed ? " · Passed" : ""}
                  </span>
                </div>
              )}
              <p className="text-sm text-muted-foreground">
                Score {PASS_SCORE}% or higher to pass. If you fail, the quiz locks for 5 hours.
              </p>
              {track.quiz.map((q, qi) => (
                <div key={qi} className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-sm font-semibold text-foreground">
                    <span className="text-steel-700">{qi + 1}.</span> {q.question}
                  </p>
                  <div className="mt-4 space-y-2">
                    {q.options.map((option, oi) => (
                      <button
                        key={oi}
                        onClick={() =>
                          setQuizAnswers((prev) => prev.map((a, i) => (i === qi ? oi : a)))
                        }
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-left text-sm transition-colors",
                          quizAnswers[qi] === oi
                            ? "border-steel-500/50 bg-steel-600/10 font-medium text-white"
                            : "border-border text-muted-foreground hover:border-steel-500/30 hover:text-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold",
                            quizAnswers[qi] === oi
                              ? "border-steel-500 bg-slate-800 text-white"
                              : "border-slate-700 text-muted-foreground",
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
                onClick={() => submit("quiz")}
                disabled={quizAnswers.some((a) => a < 0) || submitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-950/40 transition-opacity disabled:opacity-40"
              >
                {submitting ? <Loader2 className="animate-spin" /> : <Award />}
                {submitting
                  ? "Grading…"
                  : `Submit quiz (${quizAnswers.filter((a) => a >= 0).length}/${track.quiz.length} answered)`}
              </button>
            </>
          )}
        </div>
      )}

      {mode === "exam" && (
        <div className="mt-6 space-y-5">
          {!canExam && (
            <LockCard
              title="Pass the quiz first"
              message="Complete every lesson and pass the track quiz (80% or higher) to unlock the final exam."
              cta={
                <button
                  onClick={() => setMode("quiz")}
                  className="rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Go to quiz
                </button>
              }
            />
          )}
          {canExam && examLocked && (
            <LockCard
              title="Exam locked"
              message="You did not pass the final exam recently. It unlocks again once the 24 hour cooldown ends."
              lockedUntil={examLockedUntil}
            />
          )}
          {canExam && !examLocked && (
            <>
              {examScore !== null && (
                <div className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-3 text-sm">
                  <span className="text-muted-foreground">Best exam score</span>
                  <span className={cn("font-bold", examPassed ? "text-steel-700" : "text-foreground")}>
                    {examScore}%{examPassed ? " · Certified" : ""}
                  </span>
                </div>
              )}
              <div className="rounded-xl border border-steel-500/25 bg-steel-600/5 px-5 py-4">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-steel-700">Final exam</span> ·{" "}
                  {track.exam.length} questions covering every lesson in this track. Score{" "}
                  {EXAM_PASS_SCORE}% or higher to earn your certificate. If you fail, the exam
                  locks for 24 hours.
                </p>
              </div>
              {track.exam.map((q, qi) => (
                <div key={qi} className="rounded-2xl border border-border bg-card p-6">
                  <p className="text-sm font-semibold text-foreground">
                    <span className="text-steel-700">{qi + 1}.</span> {q.question}
                  </p>
                  <div className="mt-4 space-y-2">
                    {q.options.map((option, oi) => (
                      <button
                        key={oi}
                        onClick={() =>
                          setExamAnswers((prev) => prev.map((a, i) => (i === qi ? oi : a)))
                        }
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-left text-sm transition-colors",
                          examAnswers[qi] === oi
                            ? "border-steel-500/50 bg-steel-600/10 font-medium text-white"
                            : "border-border text-muted-foreground hover:border-steel-500/30 hover:text-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "flex size-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-semibold",
                            examAnswers[qi] === oi
                              ? "border-steel-500 bg-slate-800 text-white"
                              : "border-slate-700 text-muted-foreground",
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
                onClick={() => submit("exam")}
                disabled={examAnswers.some((a) => a < 0) || submitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-950/40 transition-opacity disabled:opacity-40"
              >
                {submitting ? <Loader2 className="animate-spin" /> : <GraduationCap />}
                {submitting
                  ? "Grading…"
                  : `Submit exam (${examAnswers.filter((a) => a >= 0).length}/${track.exam.length} answered)`}
              </button>
            </>
          )}
        </div>
      )}

      {mode === "result" && result && (
        <div className="mt-6 rounded-2xl border border-border bg-card p-8 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-steel-600/10">
            {result.passed ? (
              result.kind === "exam" ? (
                <GraduationCap className="size-8 text-steel-400" />
              ) : (
                <Award className="size-8 text-steel-400" />
              )
            ) : (
              <XCircle className="size-8 text-red-400" />
            )}
          </div>
          <h2 className="mt-4 text-2xl font-bold text-foreground">
            {result.passed
              ? result.kind === "exam"
                ? "Certificate earned!"
                : "Quiz passed!"
              : "Keep studying"}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            You scored <span className="font-semibold text-foreground">{result.score}%</span> (
            {result.correct}/{result.total} correct).{" "}
            {result.kind === "quiz"
              ? `${PASS_SCORE}% is required to pass the quiz.`
              : `${EXAM_PASS_SCORE}% is required to pass the exam.`}{" "}
            Best score: {result.bestScore}%.
          </p>

          {!result.passed && (
            <div className="mt-6 space-y-3 text-left">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                What you missed
              </p>
              {questions.map((q, qi) => {
                if (answers[qi] !== q.correctIndex) {
                  return (
                    <div key={qi} className="bg-muted/30 rounded-xl border border-border p-4">
                      <p className="text-sm font-medium text-foreground">{q.question}</p>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        <span className="font-semibold text-steel-700">Correct:</span>{" "}
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
              <div className="rounded-xl border border-steel-500/25 bg-steel-600/10 px-5 py-4">
                <p className="text-sm text-steel-300">
                  <Lock className="mr-1 inline size-3.5" />
                  {result.kind === "quiz"
                    ? "The quiz is locked for 5 hours after a failed attempt."
                    : "The exam is locked for 24 hours after a failed attempt."}
                </p>
              </div>
              <button
                onClick={() => setMode(result.kind === "quiz" ? "quiz" : "exam")}
                className="mt-2 w-full rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground"
              >
                Back to {result.kind}
              </button>
            </div>
          )}

          {result.passed && (
            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-5 py-4">
                {result.kind === "quiz" ? (
                  <p className="text-sm text-emerald-500">
                    <GraduationCap className="mr-1 inline size-4" />
                    Next up: the final exam. Complete every lesson, then take it to earn your
                    certificate.
                  </p>
                ) : (
                  <p className="text-sm text-emerald-500">
                    <Award className="mr-1 inline size-4" />
                    You completed this track. Your certificate is ready.
                  </p>
                )}
              </div>
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                {result.kind === "exam" ? (
                  <Link
                    href={`/deckademy/certificate/${track.id}`}
                    className="flex items-center justify-center gap-2 rounded-lg bg-slate-800 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-950/40"
                  >
                    <Award /> View certificate
                  </Link>
                ) : (
                  <button
                    onClick={() => setMode("exam")}
                    className="flex items-center justify-center gap-2 rounded-lg bg-slate-800 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-950/40"
                  >
                    <GraduationCap /> Take the final exam
                  </button>
                )}
                <button
                  onClick={() => {
                    if (result.kind === "quiz") {
                      setQuizAnswers(track.quiz.map(() => -1));
                    } else {
                      setExamAnswers(track.exam.map(() => -1));
                    }
                    setMode(result.kind === "quiz" ? "quiz" : "exam");
                  }}
                  className="rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground"
                >
                  Retake for a better score
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
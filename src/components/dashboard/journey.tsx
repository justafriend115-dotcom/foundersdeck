"use client";

import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";
import { createContext, useContext, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProgressChecklist } from "@/components/dashboard/progress-checklist";
import { WelcomeScreen } from "@/components/dashboard/welcome-screen";
import {
  useJourney,
  type CompletedMap,
  type FounderGoal,
  type Profile,
  type StepId,
} from "@/lib/journey";
import type { User } from "@/lib/auth/types";

interface JourneyContextValue {
  profile: Profile | null;
  setProfile: (p: Profile) => void;
  completed: CompletedMap;
  complete: (id: StepId) => void;
}

const JourneyContext = createContext<JourneyContextValue | null>(null);

export function useJourneyContext(): JourneyContextValue {
  const ctx = useContext(JourneyContext);
  if (!ctx) throw new Error("useJourneyContext must be used inside <JourneyProvider>");
  return ctx;
}

/**
 * Wraps the dashboard shell. Owns the welcome-screen state, the
 * persistent checklist data, and exposes `complete()` so each tool can
 * mark its step done and trigger chained next-step suggestions.
 */
export function JourneyProvider({
  user,
  serverHints,
  children,
}: {
  user: User;
  serverHints: CompletedMap;
  children: ReactNode;
}) {
  const { profile, setProfile, completed, complete } = useJourney(user.id);
  const merged: CompletedMap = { ...serverHints, ...completed };
  if (profile) merged.profile = true;

  const value: JourneyContextValue = {
    profile,
    setProfile: (p) => setProfile(p),
    completed: merged,
    complete,
  };

  return (
    <JourneyContext.Provider value={value}>
      <div className="flex items-start gap-6">
        <div className="min-w-0 flex-1">{children}</div>
        <aside className="sticky top-24 hidden w-80 shrink-0 xl:block">
          <ProgressChecklist goal={profile?.goal} completed={merged} />
        </aside>
      </div>
      {!profile && <WelcomeGate />}
    </JourneyContext.Provider>
  );
}

/** Full-screen welcome gate rendered until the two questions are answered. */
function WelcomeGate() {
  const { setProfile } = useContext(JourneyContext)!;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-background/80 p-4 backdrop-blur-sm">
      <WelcomeScreen onComplete={setProfile} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Shared building blocks for tool pages                               */
/* ------------------------------------------------------------------ */

/** One clear next action, highlighted at the top of a page. */
export function NextActionCard({
  eyebrow = "Your next action",
  title,
  description,
  href,
  cta,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <Card className="border-primary/30 bg-gradient-to-br from-primary/5 via-card to-card">
      <CardContent className="flex flex-wrap items-center justify-between gap-4 p-6">
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-primary">
            <Rocket className="size-3.5" /> {eyebrow}
          </p>
          <h3 className="mt-1 text-lg font-extrabold tracking-tight text-foreground">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
        <Link href={href}>
          <Button size="lg">
            {cta} <ArrowRight className="size-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

/** Non-blank empty state: one sentence + a start button. */
export function EmptyState({
  message,
  cta,
  href,
  onClick,
}: {
  message: string;
  cta: string;
  href?: string;
  onClick?: () => void;
}) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-dashed border-slate-300 bg-muted/40 px-6 py-12 text-center">
      <span className="flex size-11 items-center justify-center rounded-full bg-slate-50 ring-1 ring-primary-100">
        <Rocket className="size-5 text-primary" />
      </span>
      <p className="mt-4 max-w-md text-sm font-medium text-foreground">{message}</p>
      {href ? (
        <Link href={href} className="mt-5">
          <Button>{cta}</Button>
        </Link>
      ) : (
        <Button className="mt-5" onClick={onClick}>
          {cta}
        </Button>
      )}
    </div>
  );
}

/** Chained next-step suggestions shown after finishing a tool. */
export function NextSteps({ steps }: { steps: { id: string; title: string; blurb: string; href: string; cta: string }[] }) {
  if (steps.length === 0) return null;
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-base font-bold text-foreground">Nice — keep the chain going</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Based on your goal, here&apos;s what pairs well with what you just finished.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {steps.map((step) => (
            <Link
              key={step.id}
              href={step.href}
              className="group flex flex-col rounded-xl border border-border bg-background p-4 transition-all hover:border-slate-300 hover:shadow-soft"
            >
              <span className="text-sm font-semibold text-foreground">{step.title}</span>
              <span className="mt-1 flex-1 text-xs text-muted-foreground">{step.blurb}</span>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary">
                {step.cta}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export type { FounderGoal };

"use client";

import {
  ArrowRight,
  Check,
  GraduationCap,
  Handshake,
  ListChecks,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { NextActionCard, NextSteps, useJourneyContext } from "@/components/dashboard/journey";
import { ProgressChecklist } from "@/components/dashboard/progress-checklist";
import { WelcomeScreen } from "@/components/dashboard/welcome-screen";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  getNextSteps,
  JOURNEY_STEPS,
  journeyForGoal,
  type CompletedMap,
  type StepId,
} from "@/lib/journey";
import { cn } from "@/lib/utils";

export function Overview({
  name,
  serverHints,
}: {
  name: string;
  serverHints: CompletedMap;
}) {
  const { profile, setProfile, completed: ctxCompleted, complete } = useJourneyContext();
  const [stats, setStats] = useState<{ pitchDecks: number | null; investors: number | null }>({
    pitchDecks: null,
    investors: null,
  });

  useEffect(() => {
    Promise.all([
      fetch("/api/tools/pitch").then((r) => (r.ok ? r.json() : null)),
      fetch("/api/tools/crm").then((r) => (r.ok ? r.json() : null)),
    ]).then(([pitch, crm]) => {
      if (pitch?.ok && pitch.decks.length > 0) complete("pitch");
      if (crm?.ok && crm.value.length > 0) complete("crm");
      setStats({
        pitchDecks: pitch?.ok ? pitch.decks.length : 0,
        investors: crm?.ok ? crm.value.length : 0,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const firstName = name.split(" ")[0];
  const merged: CompletedMap = { ...serverHints, ...ctxCompleted };
  if (profile) merged.profile = true;

  const statCards = [
    { label: "Pitch decks generated", value: stats.pitchDecks, icon: Sparkles },
    { label: "Investors in pipeline", value: stats.investors, icon: Handshake },
    { label: "Journey steps done", value: Object.keys(merged).filter((k) => merged[k as StepId]).length, icon: ListChecks },
  ];

  /* One clear next action: first incomplete step in the founder's journey. */
  const journey = journeyForGoal(profile?.goal);
  const nextStepId = journey.find((id) => !merged[id]);
  const nextStep = nextStepId ? JOURNEY_STEPS[nextStepId] : null;
  const chained = nextStepId ? getNextSteps(nextStepId, profile, merged).slice(0, 3) : [];

  return (
    <div>
      {!profile ? (
        <WelcomeScreen onComplete={setProfile} />
      ) : (
        <>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
                Welcome back, {firstName}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {profile.goal === "raise"
                  ? "You're building toward a raise — here's the single best move right now."
                  : "Here's your one clear next step today."}
              </p>
            </div>
            <Badge variant="secondary" className="capitalize">
              {profile.stage.replace("-", " ")} · {profile.goal}
            </Badge>
          </div>

          {nextStep && (
            <div className="mt-6">
              <NextActionCard
                title={nextStep.title}
                description={nextStep.blurb}
                href={nextStep.href}
                cta={nextStep.cta}
              />
            </div>
          )}

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {statCards.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    {stat.value === null ? (
                      <div className="mt-2 h-8 w-16 animate-pulse rounded-lg bg-muted" />
                    ) : (
                      <p className="mt-1 text-3xl font-extrabold tracking-tight text-foreground">
                        {stat.value}
                      </p>
                    )}
                  </div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-primary-100">
                    <stat.icon className="size-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Persistent checklist (mobile/tablet — desktop shows it in the rail) */}
          <div className="mt-8 xl:hidden">
            <ProgressChecklist goal={profile.goal} completed={merged} currentStep={nextStepId} />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <NextSteps steps={chained} />
              {chained.length === 0 && (
                <Card>
                  <CardContent className="flex items-center gap-4 p-6">
                    <span className="flex size-11 items-center justify-center rounded-full bg-emerald-50 ring-1 ring-emerald-200">
                      <Check className="size-5 text-emerald-600" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-foreground">Journey complete</h3>
                      <p className="text-sm text-muted-foreground">
                        Every step is done — keep the pipeline warm and iterate on the deck.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <Card className="lg:col-span-2">
              <CardContent className="p-6">
                <h3 className="text-base font-bold text-foreground">Shortcuts</h3>
                <div className="mt-4 space-y-2.5">
                  {[
                    { href: "/dashboard/pitch", label: "Pitch Generator", icon: Sparkles },
                    { href: "/dashboard/gauntlet", label: "The Gauntlet", icon: ShieldMini },
                    { href: "/dashboard/investor-match", label: "Investor Match", icon: Handshake },
                    { href: "/deckademy", label: "DECKADEMY", icon: GraduationCap },
                  ].map((action) => (
                    <Link
                      key={action.href}
                      href={action.href}
                      className="group flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 transition-all hover:border-slate-300 hover:shadow-soft"
                    >
                      <span className="flex size-9 items-center justify-center rounded-lg bg-slate-50 ring-1 ring-primary-100">
                        <action.icon className="size-4 text-primary" />
                      </span>
                      <span className="flex-1 text-sm font-medium text-foreground">{action.label}</span>
                      <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}

function ShieldMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={cn("size-4", className)} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

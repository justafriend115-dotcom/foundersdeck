"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GOAL_OPTIONS,
  STAGE_OPTIONS,
  type FounderGoal,
  type FounderStage,
  type Profile,
} from "@/lib/journey";

/**
 * Welcome screen shown on the dashboard until the founder answers two
 * quick questions: where they are (stage) and what they're after (goal).
 * The answers pick which journey of tools becomes their checklist.
 */
export function WelcomeScreen({ onComplete }: { onComplete: (profile: Profile) => void }) {
  const [step, setStep] = useState(0);
  const [stage, setStage] = useState<FounderStage | null>(null);
  const [goal, setGoal] = useState<FounderGoal | null>(null);

  const options = step === 0 ? STAGE_OPTIONS : GOAL_OPTIONS;
  const selected = step === 0 ? stage : goal;
  const setSelected = step === 0 ? setStage : setGoal;

  function finish() {
    if (stage && goal) onComplete({ stage, goal });
  }

  return (
    <Card className="mx-auto max-w-2xl overflow-hidden">
      <div className="bg-gradient-to-br from-secondary to-slate-700 px-6 py-8 text-center sm:px-10">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20">
          <Sparkles className="size-6 text-white" />
        </span>
        <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-white">
          Welcome to FoundersDeck
        </h2>
        <p className="mt-1 text-sm text-slate-300">
          Two quick questions and we&apos;ll build your roadmap around them.
        </p>
        <div className="mt-5 flex items-center justify-center gap-2">
          {[0, 1].map((i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === step ? "w-8 bg-white" : i < step || (step === 1 && i === 0) ? "w-8 bg-white/60" : "w-8 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      <CardContent className="p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Question {step + 1} of 2
        </p>
        <h3 className="mt-1 text-lg font-bold text-foreground">
          {step === 0 ? "Where is your startup right now?" : "What do you want to achieve first?"}
        </h3>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {options.map((option) => {
            const active = selected === option.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setSelected(option.value as never)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  active
                    ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                    : "border-border bg-background hover:border-slate-300 hover:shadow-soft"
                }`}
              >
                <span className="block text-sm font-semibold text-foreground">{option.label}</span>
                <span className="mt-0.5 block text-xs text-muted-foreground">{option.hint}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between">
          {step > 0 ? (
            <Button variant="ghost" size="sm" onClick={() => setStep(0)}>
              Back
            </Button>
          ) : (
            <span />
          )}
          {step === 0 ? (
            <Button disabled={!stage} onClick={() => setStep(1)}>
              Next <ArrowRight className="size-4" />
            </Button>
          ) : (
            <Button disabled={!goal} onClick={finish}>
              Build my roadmap <Sparkles className="size-4" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

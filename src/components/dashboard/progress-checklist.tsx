"use client";

import { ArrowRight, Check, ListChecks } from "lucide-react";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import {
  JOURNEY_STEPS,
  journeyForGoal,
  type CompletedMap,
  type FounderGoal,
  type StepId,
} from "@/lib/journey";
import { cn } from "@/lib/utils";

/**
 * Persistent progress checklist — rendered on every dashboard page via
 * the shell's context, so founders always see how far along their
 * journey is and what's left.
 */
export function ProgressChecklist({
  goal,
  completed,
  currentStep,
}: {
  goal: FounderGoal | undefined;
  completed: CompletedMap;
  currentStep?: StepId;
}) {
  const journey = journeyForGoal(goal);
  const steps = journey.map((id) => JOURNEY_STEPS[id]);
  const done = steps.filter((s) => completed[s.id]).length;
  const pct = Math.round((done / steps.length) * 100);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
            <ListChecks className="size-4 text-primary" />
            Your progress
          </h3>
          <span className="text-xs font-semibold text-muted-foreground">
            {done}/{steps.length} done
          </span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <ol className="mt-4 space-y-1">
          {steps.map((step) => {
            const isDone = Boolean(completed[step.id]);
            const isCurrent = step.id === currentStep;
            return (
              <li key={step.id}>
                <Link
                  href={step.href}
                  className={cn(
                    "group flex items-start gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-muted",
                    isCurrent && "bg-muted",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border text-white",
                      isDone ? "border-emerald-500 bg-emerald-500" : "border-slate-300 bg-background",
                    )}
                  >
                    {isDone && <Check className="size-3.5" />}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block text-sm font-medium",
                        isDone ? "text-muted-foreground line-through decoration-slate-300" : "text-foreground",
                      )}
                    >
                      {step.title}
                    </span>
                    {!isDone && (
                      <span className="block truncate text-xs text-muted-foreground">{step.blurb}</span>
                    )}
                  </span>
                  {!isDone && (
                    <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  )}
                </Link>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
}

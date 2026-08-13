"use client";

import { ArrowLeft, ArrowRight, Check, Loader2, Printer, Sparkles } from "lucide-react";
import { useState } from "react";

import { ToolHeader } from "@/components/tools/tool-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS_PLAN_STEPS, emptyBusinessPlanValues } from "@/lib/business-plan-steps";
import { useRemoteState } from "@/lib/remote-state";
import { cn } from "@/lib/utils";

export function BusinessPlanBuilder() {
  const [values, setValues] = useRemoteState<Record<string, string>>(
    "/api/tools/business-plan",
    emptyBusinessPlanValues(),
  );
  const [currentStep, setCurrentStep] = useState(0);
  const [suggesting, setSuggesting] = useState(false);

  const steps = BUSINESS_PLAN_STEPS;
  const step = steps[currentStep];
  const filledCount = steps.reduce(
    (count, s) =>
      count + s.fields.filter((f) => (values[`${s.id}.${f.key}`] ?? "").trim().length > 0).length,
    0,
  );
  const totalFields = steps.reduce((count, s) => count + s.fields.length, 0);

  function update(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  async function addSuggestion() {
    setSuggesting(true);
    try {
      const response = await fetch("/api/ai/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "business-plan", section: step.id }),
      });
      const json = await response.json();
      if (json?.ok && json.text) {
        const key = `${step.id}.${step.fields[0].key}`;
        update(key, values[key] ? `${values[key]} ${json.text}` : json.text);
      }
    } catch {
      // Keep the draft untouched if the AI is unreachable.
    } finally {
      setSuggesting(false);
    }
  }

  const isComplete = filledCount === totalFields;

  return (
    <div>
      <ToolHeader
        title="Business Plan Builder"
        description="A 7-step guided wizard. Everything auto-saves to your workspace as you type."
      />

      <div className="mb-6 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300"
            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
          />
        </div>
        <span className="shrink-0 text-sm font-medium text-muted-foreground">
          Step {currentStep + 1} of {steps.length}
        </span>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {steps.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setCurrentStep(i)}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
              i === currentStep
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-indigo-500/25"
                : "border border-border bg-card text-muted-foreground hover:border-indigo-300 hover:text-foreground",
            )}
          >
            {i + 1}. {s.title}
          </button>
        ))}
      </div>

      <Card className="no-print">
        <CardContent className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden text-xs font-medium text-emerald-600 sm:block">
                <Check className="mr-1 inline size-3.5" />
                Auto-saved
              </span>
              <Button variant="outline" size="sm" onClick={addSuggestion} disabled={suggesting}>
                {suggesting ? <Loader2 className="animate-spin" /> : <Sparkles />}
                AI suggestion
              </Button>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {step.fields.map((field) => {
              const key = `${step.id}.${field.key}`;
              return (
                <div key={key}>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">
                    {field.label}
                  </label>
                  {field.multiline ? (
                    <Textarea
                      value={values[key] ?? ""}
                      onChange={(e) => update(key, e.target.value)}
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <Input
                      value={values[key] ?? ""}
                      onChange={(e) => update(key, e.target.value)}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentStep((i) => Math.max(0, i - 1))}
              disabled={currentStep === 0}
            >
              <ArrowLeft />
              Previous
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button
                variant="gradient"
                onClick={() => setCurrentStep((i) => Math.min(steps.length - 1, i + 1))}
              >
                Next section
                <ArrowRight />
              </Button>
            ) : (
              <div className="flex items-center gap-3">
                <span
                  className={cn(
                    "text-sm font-medium",
                    isComplete ? "text-emerald-600" : "text-muted-foreground",
                  )}
                >
                  {isComplete ? (
                    <span className="inline-flex items-center gap-1">
                      <Check className="size-4" /> Plan complete
                    </span>
                  ) : (
                    `${filledCount}/${totalFields} sections filled`
                  )}
                </span>
                <Button variant="gradient" onClick={() => window.print()}>
                  <Printer />
                  Export PDF
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="print-area mt-6 hidden flex-col gap-8 print:flex">
        <div>
          <h1 className="text-2xl font-extrabold">Business Plan</h1>
          <p className="text-sm text-muted-foreground">
            Generated with FoundersDeck — {new Date().toLocaleDateString()}
          </p>
        </div>
        {steps.map((s) => (
          <section key={s.id}>
            <h2 className="text-lg font-bold">{s.title}</h2>
            <div className="mt-3 space-y-4">
              {s.fields.map((f) => {
                const key = `${s.id}.${f.key}`;
                const value = values[key] ?? "";
                if (!value.trim()) return null;
                return (
                  <div key={key}>
                    <h3 className="text-sm font-semibold">{f.label}</h3>
                    <p className="mt-1 whitespace-pre-wrap text-sm">{value}</p>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setValues(emptyBusinessPlanValues())}
        className="no-print mt-6 text-xs text-muted-foreground hover:text-foreground"
      >
        Reset draft
      </button>
    </div>
  );
}

"use client";

import { AlertTriangle, Plus, Printer, Trash2 } from "lucide-react";

import { ToolHeader } from "@/components/tools/tool-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRemoteState } from "@/lib/remote-state";
import { defaultContingencyState } from "@/lib/tool-defaults";
import type { ContingencyState, Risk } from "@/lib/tool-types";
import { cn } from "@/lib/utils";

const YEAR_LABELS = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];

function riskColor(score: number): string {
  if (score >= 15) return "bg-red-50 text-red-700 ring-red-200";
  if (score >= 9) return "bg-amber-50 text-amber-700 ring-amber-200";
  return "bg-emerald-50 text-emerald-700 ring-emerald-200";
}

export function ContingencyPlanner() {
  const [state, setState] = useRemoteState<ContingencyState>(
    "/api/tools/contingency",
    defaultContingencyState(),
  );

  function updateScenario(scenarioId: string, yearIndex: number, value: string) {
    setState((prev) => ({
      ...prev,
      scenarios: prev.scenarios.map((s) =>
        s.id === scenarioId
          ? { ...s, years: s.years.map((y, i) => (i === yearIndex ? value : y)) }
          : s,
      ),
    }));
  }

  function updatePivot(scenarioId: string, value: string) {
    setState((prev) => ({ ...prev, pivots: { ...prev.pivots, [scenarioId]: value } }));
  }

  function addRisk() {
    setState((prev) => ({
      ...prev,
      risks: [
        ...prev.risks,
        { id: `r${Date.now()}`, name: "", likelihood: 3, impact: 3, mitigation: "" },
      ],
    }));
  }

  function updateRisk(id: string, patch: Partial<Risk>) {
    setState((prev) => ({
      ...prev,
      risks: prev.risks.map((r) => (r.id === id ? { ...r, ...patch } : r)),
    }));
  }

  function removeRisk(id: string) {
    setState((prev) => ({ ...prev, risks: prev.risks.filter((r) => r.id !== id) }));
  }

  return (
    <div>
      <ToolHeader
        title="5-Year Contingency Planner"
        description="Plan for best, worst and realistic outcomes — with pivot strategies for each. Investors notice founders who have thought through the worst case."
      />

      <div className="print-area space-y-8">
        <section>
          <h3 className="mb-4 text-base font-bold text-foreground">Scenarios over 5 years</h3>
          <div className="grid gap-4 lg:grid-cols-3">
            {state.scenarios.map((scenario) => (
              <Card key={scenario.id} className="no-print">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={cn(
                        "size-2.5 rounded-full",
                        scenario.id === "best"
                          ? "bg-emerald-500"
                          : scenario.id === "realistic"
                            ? "bg-indigo-500"
                            : "bg-red-500",
                      )}
                    />
                    <h4 className="font-bold text-foreground">{scenario.label}</h4>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">{scenario.description}</p>
                  <div className="mt-4 space-y-3">
                    {scenario.years.map((year, i) => (
                      <div key={i}>
                        <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                          {YEAR_LABELS[i]}
                        </p>
                        <Textarea
                          value={year}
                          onChange={(e) => updateScenario(scenario.id, i, e.target.value)}
                          placeholder={`What happens in ${YEAR_LABELS[i].toLowerCase()}?`}
                          className="min-h-14 text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="no-print mb-4 flex items-center justify-between">
            <h3 className="text-base font-bold text-foreground">Risk assessment matrix</h3>
            <Button variant="outline" size="sm" onClick={addRisk}>
              <Plus />
              Add risk
            </Button>
          </div>
          <h3 className="mb-4 hidden text-base font-bold text-foreground print:block">
            Risk assessment matrix
          </h3>
          <div className="space-y-3">
            {state.risks.map((risk) => {
              const score = risk.likelihood * risk.impact;
              return (
                <Card key={risk.id}>
                  <CardContent className="grid gap-3 p-4 md:grid-cols-12 md:items-center">
                    <div className="md:col-span-3">
                      <Input
                        value={risk.name}
                        onChange={(e) => updateRisk(risk.id, { name: e.target.value })}
                        placeholder="Risk name"
                        className="font-medium"
                      />
                    </div>
                    <div className="flex items-center gap-2 md:col-span-2">
                      <label className="shrink-0 text-xs font-medium text-muted-foreground">
                        Likelihood
                      </label>
                      <select
                        value={risk.likelihood}
                        onChange={(e) =>
                          updateRisk(risk.id, { likelihood: Number(e.target.value) })
                        }
                        className="h-9 w-full rounded-lg border border-border bg-background px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>
                            {n} — {n <= 2 ? "Low" : n <= 4 ? "Medium" : "High"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center gap-2 md:col-span-2">
                      <label className="shrink-0 text-xs font-medium text-muted-foreground">
                        Impact
                      </label>
                      <select
                        value={risk.impact}
                        onChange={(e) => updateRisk(risk.id, { impact: Number(e.target.value) })}
                        className="h-9 w-full rounded-lg border border-border bg-background px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>
                            {n} — {n <= 2 ? "Low" : n <= 4 ? "Medium" : "High"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex items-center gap-2 md:col-span-4">
                      <Input
                        value={risk.mitigation}
                        onChange={(e) => updateRisk(risk.id, { mitigation: e.target.value })}
                        placeholder="Mitigation plan"
                        className="text-sm"
                      />
                    </div>
                    <div className="flex items-center justify-end gap-2 md:col-span-1">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ring-1",
                          riskColor(score),
                        )}
                      >
                        <AlertTriangle className="size-3" />
                        {score}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeRisk(risk.id)}
                        aria-label="Remove risk"
                        className="flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-base font-bold text-foreground">Pivot strategies</h3>
          <div className="grid gap-4 lg:grid-cols-3">
            {state.scenarios.map((scenario) => (
              <div key={scenario.id}>
                <p className="mb-1.5 text-sm font-semibold text-foreground">
                  If {scenario.label.toLowerCase()} plays out…
                </p>
                <Textarea
                  value={state.pivots[scenario.id] ?? ""}
                  onChange={(e) => updatePivot(scenario.id, e.target.value)}
                  placeholder="What do you change? Trim spend, pivot pricing, change channel, new market?"
                  className="min-h-32"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="no-print mt-8">
        <Button variant="gradient" onClick={() => window.print()}>
          <Printer />
          Export PDF
        </Button>
      </div>
    </div>
  );
}

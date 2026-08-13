"use client";

import { Calculator, Printer, TrendingUp } from "lucide-react";

import { ToolHeader } from "@/components/tools/tool-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  breakEvenRevenue,
  monthsToBreakEven,
  project12Months,
  REVENUE_MODELS,
} from "@/lib/financials";
import { formatCurrency } from "@/lib/format";
import { useRemoteState } from "@/lib/remote-state";
import { defaultFinancialState } from "@/lib/tool-defaults";
import type { FinancialState } from "@/lib/tool-types";
import { cn } from "@/lib/utils";

function NumberField({
  label,
  value,
  onChange,
  prefix,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  prefix?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-foreground">{label}</label>
      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
            {prefix}
          </span>
        )}
        <Input
          type="number"
          min={0}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
          className={prefix ? "pl-7" : ""}
        />
      </div>
    </div>
  );
}

export function FinancialProjections() {
  const [state, setState] = useRemoteState<FinancialState>(
    "/api/tools/financials",
    defaultFinancialState(),
  );

  function applyModel(modelId: string) {
    const model = REVENUE_MODELS.find((m) => m.id === modelId);
    if (!model) return;
    setState((prev) => ({ ...prev, model: modelId, ...model.defaults }));
  }

  const rows = project12Months(
    state.monthlyRevenue,
    state.growthPct,
    state.fixedCosts,
    state.variablePct,
  );
  const breakEven = breakEvenRevenue(state.fixedCosts, state.variablePct);
  const breakEvenMonth = monthsToBreakEven(rows);
  const maxValue = Math.max(...rows.map((r) => Math.max(r.revenue, r.expenses)), 1);
  const totalProfit = rows.reduce((sum, r) => sum + r.profit, 0);

  return (
    <div>
      <ToolHeader
        title="Financial Projections"
        description="Pick a revenue model, set your assumptions, and watch 12 months of numbers unfold — including break-even."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <Card>
            <CardContent className="p-5">
              <h3 className="mb-4 text-base font-bold text-foreground">Revenue model</h3>
              <div className="space-y-2.5">
                {REVENUE_MODELS.map((model) => (
                  <button
                    key={model.id}
                    type="button"
                    onClick={() => applyModel(model.id)}
                    className={cn(
                      "w-full rounded-lg border px-4 py-3 text-left transition-all",
                      state.model === model.id
                        ? "border-brand-400 bg-brand-50 shadow-soft"
                        : "border-border bg-background hover:border-brand-200",
                    )}
                  >
                    <p className="text-sm font-bold text-foreground">{model.label}</p>
                    <p className="text-xs text-muted-foreground">{model.description}</p>
                  </button>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <NumberField
                  label="Monthly revenue"
                  value={state.monthlyRevenue}
                  onChange={(v) => setState((prev) => ({ ...prev, monthlyRevenue: v }))}
                  prefix="$"
                />
                <NumberField
                  label="Monthly growth"
                  value={state.growthPct}
                  onChange={(v) => setState((prev) => ({ ...prev, growthPct: v }))}
                  prefix="%"
                />
                <NumberField
                  label="Fixed monthly costs"
                  value={state.fixedCosts}
                  onChange={(v) => setState((prev) => ({ ...prev, fixedCosts: v }))}
                  prefix="$"
                />
                <NumberField
                  label="Variable costs"
                  value={state.variablePct}
                  onChange={(v) => setState((prev) => ({ ...prev, variablePct: v }))}
                  prefix="%"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Calculator className="size-4 text-brand-600" />
                  Break-even revenue
                </div>
                <p className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">
                  {Number.isFinite(breakEven) ? formatCurrency(breakEven) : "—"}
                  <span className="text-sm font-medium text-muted-foreground">/mo</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Fixed costs ÷ contribution margin
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <TrendingUp className="size-4 text-brand-600" />
                  Break-even month
                </div>
                <p className="mt-2 text-2xl font-extrabold tracking-tight text-foreground">
                  {breakEvenMonth ? `Month ${breakEvenMonth}` : "Not in 12"}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  First month with positive profit
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Card>
            <CardContent className="p-5">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-base font-bold text-foreground">12-month forecast</h3>
                <Button variant="outline" size="sm" onClick={() => window.print()}>
                  <Printer />
                  Export PDF
                </Button>
              </div>
              <p className="mb-5 text-xs text-muted-foreground">
                12-month projected profit:{" "}
                <span
                  className={cn(
                    "font-bold",
                    totalProfit >= 0 ? "text-emerald-600" : "text-red-600",
                  )}
                >
                  {formatCurrency(totalProfit)}
                </span>
              </p>

              <div className="print-area">
                <div className="flex h-48 items-end gap-1.5 border-b border-border px-1">
                  {rows.map((row) => (
                    <div
                      key={row.month}
                      className="group relative flex flex-1 items-end justify-center gap-0.5"
                      title={`M${row.month}: ${formatCurrency(row.revenue)} rev / ${formatCurrency(row.expenses)} exp`}
                    >
                      <div
                        className="w-1/3 rounded-t bg-zinc-300 transition-colors group-hover:bg-zinc-400"
                        style={{ height: `${Math.max((row.expenses / maxValue) * 100, 2)}%` }}
                      />
                      <div
                        className="w-1/3 rounded-t bg-gradient-to-t from-zinc-400 to-brand-500 transition-opacity group-hover:opacity-80"
                        style={{ height: `${Math.max((row.revenue / maxValue) * 100, 2)}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex gap-1.5 px-1">
                  {rows.map((row) => (
                    <span
                      key={row.month}
                      className="flex-1 text-center text-[10px] text-muted-foreground"
                    >
                      M{row.month}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="size-2.5 rounded-sm bg-gradient-to-t from-zinc-400 to-brand-500" />
                    Revenue
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="size-2.5 rounded-sm bg-zinc-300" />
                    Expenses
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
                      <th className="px-5 py-3 font-semibold">Month</th>
                      <th className="px-5 py-3 font-semibold">Revenue</th>
                      <th className="px-5 py-3 font-semibold">Expenses</th>
                      <th className="px-5 py-3 font-semibold">Profit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row) => (
                      <tr key={row.month} className="border-border/60 border-b last:border-0">
                        <td className="px-5 py-2.5 font-medium text-foreground">
                          Month {row.month}
                        </td>
                        <td className="px-5 py-2.5 text-muted-foreground">
                          {formatCurrency(row.revenue)}
                        </td>
                        <td className="px-5 py-2.5 text-muted-foreground">
                          {formatCurrency(row.expenses)}
                        </td>
                        <td
                          className={cn(
                            "px-5 py-2.5 font-semibold",
                            row.profit >= 0 ? "text-emerald-600" : "text-red-600",
                          )}
                        >
                          {formatCurrency(row.profit)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

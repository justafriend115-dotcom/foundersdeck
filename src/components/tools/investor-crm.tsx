"use client";

import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Plus,
  Trash2,
} from "lucide-react";
import { useState } from "react";

import { ToolHeader } from "@/components/tools/tool-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatDate } from "@/lib/format";
import { useRemoteState } from "@/lib/remote-state";
import type { Investor, Meeting, Stage } from "@/lib/tool-types";
import { cn } from "@/lib/utils";

const STAGES: { id: Stage; label: string; dot: string }[] = [
  { id: "cold", label: "Cold", dot: "bg-zinc-400" },
  { id: "warm", label: "Warm", dot: "bg-amber-400" },
  { id: "pitching", label: "Pitching", dot: "bg-brand-500" },
  { id: "closed", label: "Closed", dot: "bg-emerald-500" },
];

const OUTCOMES = [
  "Meeting held",
  "No response",
  "Next steps agreed",
  "Due diligence",
  "Passed",
  "Invested",
];

function stageIndex(stage: Stage): number {
  return STAGES.findIndex((s) => s.id === stage);
}

export function InvestorCrm() {
  const [investors, setInvestors] = useRemoteState<Investor[]>("/api/tools/crm", []);
  const [showForm, setShowForm] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const [form, setForm] = useState({ name: "", firm: "", stage: "cold" as Stage, notes: "" });
  const [meetingForm, setMeetingForm] = useState({ date: "", outcome: OUTCOMES[0], followUp: "" });

  function addInvestor() {
    if (!form.name.trim()) return;
    setInvestors((prev) => [
      {
        id: `i${Date.now()}`,
        name: form.name.trim(),
        firm: form.firm.trim(),
        stage: form.stage,
        notes: form.notes.trim(),
        meetings: [],
      },
      ...prev,
    ]);
    setForm({ name: "", firm: "", stage: "cold", notes: "" });
    setShowForm(false);
  }

  function moveInvestor(id: string, direction: 1 | -1) {
    setInvestors((prev) =>
      prev.map((investor) => {
        if (investor.id !== id) return investor;
        const next = stageIndex(investor.stage) + direction;
        if (next < 0 || next >= STAGES.length) return investor;
        return { ...investor, stage: STAGES[next].id };
      }),
    );
  }

  function removeInvestor(id: string) {
    setInvestors((prev) => prev.filter((investor) => investor.id !== id));
    if (expanded === id) setExpanded(null);
  }

  function addMeeting(investorId: string) {
    if (!meetingForm.date) return;
    const meeting: Meeting = {
      id: `m${Date.now()}`,
      date: meetingForm.date,
      outcome: meetingForm.outcome,
      followUp: meetingForm.followUp.trim(),
    };
    setInvestors((prev) =>
      prev.map((investor) =>
        investor.id === investorId
          ? { ...investor, meetings: [...investor.meetings, meeting] }
          : investor,
      ),
    );
    setMeetingForm({ date: "", outcome: OUTCOMES[0], followUp: "" });
  }

  return (
    <div>
      <ToolHeader
        title="Investor CRM"
        description="Track every investor from first touch to closing  meetings, outcomes and follow-ups in one pipeline."
      />

      <div className="no-print mb-6 flex justify-end">
        <Button variant="gradient" onClick={() => setShowForm((v) => !v)}>
          <Plus />
          Add investor
        </Button>
      </div>

      {showForm && (
        <Card className="no-print mb-6">
          <CardContent className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Name</label>
              <Input
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="e.g. Sarah Kim"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Firm</label>
              <Input
                value={form.firm}
                onChange={(e) => setForm((f) => ({ ...f, firm: e.target.value }))}
                placeholder="e.g. Northstar Ventures"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Stage</label>
              <select
                value={form.stage}
                onChange={(e) => setForm((f) => ({ ...f, stage: e.target.value as Stage }))}
                className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {STAGES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <label className="mb-1.5 block text-sm font-medium text-foreground">Notes</label>
              <Input
                value={form.notes}
                onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                placeholder="How did you meet them?"
              />
            </div>
            <div className="flex items-end">
              <Button onClick={addInvestor} className="w-full" disabled={!form.name.trim()}>
                <Plus />
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {STAGES.map((stage) => {
          const column = investors.filter((i) => i.stage === stage.id);
          return (
            <div
              key={stage.id}
              className="bg-muted/40 min-h-40 rounded-xl border border-border p-3"
            >
              <div className="mb-3 flex items-center gap-2 px-1">
                <span className={cn("size-2.5 rounded-full", stage.dot)} />
                <h3 className="text-sm font-bold text-foreground">{stage.label}</h3>
                <span className="ml-auto rounded-full bg-card px-2 py-0.5 text-xs font-semibold text-muted-foreground ring-1 ring-border">
                  {column.length}
                </span>
              </div>

              <div className="space-y-3">
                {column.map((investor) => {
                  const isExpanded = expanded === investor.id;
                  return (
                    <Card key={investor.id} className="shadow-sm">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-bold text-foreground">{investor.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {investor.firm || "Independent"}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeInvestor(investor.id)}
                            aria-label="Delete investor"
                            className="flex size-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </div>

                        {investor.notes && (
                          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                            {investor.notes}
                          </p>
                        )}

                        <div className="mt-3 flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => moveInvestor(investor.id, -1)}
                            disabled={stageIndex(investor.stage) === 0}
                            aria-label="Move to previous stage"
                            className="flex size-7 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted disabled:opacity-30"
                          >
                            <ChevronLeft className="size-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => moveInvestor(investor.id, 1)}
                            disabled={stageIndex(investor.stage) === STAGES.length - 1}
                            aria-label="Move to next stage"
                            className="flex size-7 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-muted disabled:opacity-30"
                          >
                            <ChevronRight className="size-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setExpanded(isExpanded ? null : investor.id)}
                            className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-brand-700 hover:text-brand-800"
                          >
                            {investor.meetings.length > 0 &&
                              `${investor.meetings.length} meeting${investor.meetings.length > 1 ? "s" : ""} · `}
                            {isExpanded ? "Hide" : "Meetings"}
                            {isExpanded ? (
                              <ChevronUp className="size-3" />
                            ) : (
                              <ChevronDown className="size-3" />
                            )}
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="mt-4 space-y-4 border-t border-border pt-4">
                            {investor.meetings.length > 0 && (
                              <div className="space-y-2">
                                {investor.meetings.map((meeting) => (
                                  <div key={meeting.id} className="bg-muted/60 rounded-lg p-3">
                                    <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                                      <CalendarDays className="size-3.5 text-brand-600" />
                                      {formatDate(meeting.date)}
                                      <span className="ml-auto rounded-full bg-card px-2 py-0.5 font-medium text-muted-foreground ring-1 ring-border">
                                        {meeting.outcome}
                                      </span>
                                    </div>
                                    {meeting.followUp && (
                                      <p className="mt-1.5 text-xs text-muted-foreground">
                                        {meeting.followUp}
                                      </p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}

                            <div className="grid gap-2 sm:grid-cols-2">
                              <div>
                                <label className="mb-1 block text-xs font-medium text-muted-foreground">
                                  Date
                                </label>
                                <Input
                                  type="date"
                                  value={meetingForm.date}
                                  onChange={(e) =>
                                    setMeetingForm((m) => ({ ...m, date: e.target.value }))
                                  }
                                  className="h-9 text-sm"
                                />
                              </div>
                              <div>
                                <label className="mb-1 block text-xs font-medium text-muted-foreground">
                                  Outcome
                                </label>
                                <select
                                  value={meetingForm.outcome}
                                  onChange={(e) =>
                                    setMeetingForm((m) => ({ ...m, outcome: e.target.value }))
                                  }
                                  className="h-9 w-full rounded-lg border border-border bg-background px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                  {OUTCOMES.map((outcome) => (
                                    <option key={outcome} value={outcome}>
                                      {outcome}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <Input
                              value={meetingForm.followUp}
                              onChange={(e) =>
                                setMeetingForm((m) => ({ ...m, followUp: e.target.value }))
                              }
                              placeholder="Follow-up note…"
                              className="text-sm"
                            />
                            <Button
                              size="sm"
                              onClick={() => addMeeting(investor.id)}
                              disabled={!meetingForm.date}
                            >
                              <Plus />
                              Log meeting
                            </Button>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}

                {column.length === 0 && (
                  <p className="rounded-lg border border-dashed border-border px-3 py-6 text-center text-xs text-muted-foreground">
                    No investors here yet
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

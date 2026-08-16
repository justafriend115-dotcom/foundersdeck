"use client";

import { Check, ClipboardList, Copy, Lightbulb, Printer, Scale, ShieldCheck } from "lucide-react";
import { useState } from "react";

import { ToolHeader } from "@/components/tools/tool-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LEGAL_DOCUMENTS, type LegalDocument } from "@/lib/legal-content";
import { cn } from "@/lib/utils";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: ShieldCheck,
  scale: Scale,
  clipboard: ClipboardList,
  lightbulb: Lightbulb,
};

function fullText(doc: LegalDocument): string {
  return [
    doc.title,
    "",
    doc.intro,
    "",
    ...doc.sections.flatMap((section) => [section.heading, ...section.body, ""]),
  ].join("\n");
}

export function LegalHub() {
  const [activeId, setActiveId] = useState(LEGAL_DOCUMENTS[0].id);
  const [copied, setCopied] = useState(false);
  const doc = LEGAL_DOCUMENTS.find((d) => d.id === activeId) ?? LEGAL_DOCUMENTS[0];

  async function copyDocument() {
    await navigator.clipboard.writeText(fullText(doc));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      <ToolHeader
        title="Legal Hub"
        description="Founder-grade templates and checklists  reviewed by lawyers once, used by founders everywhere. Always get professional advice before signing."
      />

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="space-y-2.5 lg:col-span-1">
          {LEGAL_DOCUMENTS.map((d) => {
            const Icon = icons[d.icon] ?? ShieldCheck;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setActiveId(d.id)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-all",
                  d.id === activeId
                    ? "border-steel-400 bg-steel-50 shadow-soft"
                    : "border-border bg-card hover:border-brand-200",
                )}
              >
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-lg",
                    d.id === activeId
                      ? "bg-slate-800 text-steel-300"
                      : "bg-steel-50 text-steel-600 ring-1 ring-brand-100",
                  )}
                >
                  <Icon className="size-4.5" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-foreground">{d.label}</span>
                  <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                    {d.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <Card className="lg:col-span-3">
          <CardContent className="p-6 sm:p-8">
            <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyDocument}>
                  {copied ? <Check /> : <Copy />}
                  {copied ? "Copied" : "Copy full text"}
                </Button>
                <Button variant="outline" size="sm" onClick={() => window.print()}>
                  <Printer />
                  Export PDF
                </Button>
              </div>
            </div>

            <div className="print-area">
              <h3 className="text-2xl font-extrabold tracking-tight text-foreground">
                {doc.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{doc.intro}</p>
              <div className="mt-8 space-y-8">
                {doc.sections.map((section) => (
                  <section key={section.heading}>
                    <h4 className="text-base font-bold text-foreground">{section.heading}</h4>
                    <div className="mt-2 space-y-3">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-foreground/90 text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

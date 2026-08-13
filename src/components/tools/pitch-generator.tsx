"use client";

import { Check, Copy, Loader2, Printer, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { ToolHeader } from "@/components/tools/tool-header";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { DeckSlide, PitchInput } from "@/lib/ai/types";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface DeckDto {
  id: string;
  title: string;
  slides: DeckSlide[];
  createdAt: string;
}

const emptyInput: PitchInput = {
  companyName: "",
  industry: "",
  mission: "",
  problem: "",
  solution: "",
};

export function PitchGenerator() {
  const [input, setInput] = useState(emptyInput);
  const [decks, setDecks] = useState<DeckDto[] | null>(null);
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [planLimited, setPlanLimited] = useState(false);
  const [suggestingField, setSuggestingField] = useState<keyof PitchInput | null>(null);

  useEffect(() => {
    fetch("/api/tools/pitch")
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (data?.ok) {
          setDecks(data.decks);
        } else {
          setDecks([]);
        }
      })
      .catch(() => setDecks([]));
  }, []);

  const current = decks && decks.length > 0 ? decks[0] : null;

  function update(field: keyof PitchInput, value: string) {
    setInput((prev) => ({ ...prev, [field]: value }));
  }

  async function addSuggestion(field: keyof PitchInput) {
    setSuggestingField(field);
    try {
      const response = await fetch("/api/ai/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "pitch", section: field }),
      });
      const json = await response.json();
      if (json?.ok && json.text) {
        update(field, input[field] ? `${input[field]} ${json.text}` : json.text);
      }
    } catch {
      setError("Couldn't reach the AI. Your suggestion will be ready next time.");
    } finally {
      setSuggestingField(null);
    }
  }

  async function generate() {
    setGenerating(true);
    setError(null);
    setPlanLimited(false);
    setCopied(false);
    const startedAt = Date.now();
    try {
      const response = await fetch("/api/tools/pitch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });
      const json = await response.json();
      if (json?.ok) {
        trackEvent("generate_deck", {
          title: json.deck.title,
          slides: json.deck.slides.length,
        });
        setDecks((prev) => [json.deck as DeckDto, ...(prev ?? [])]);
      } else if (json?.code === "plan_limit") {
        setPlanLimited(true);
      } else {
        setError("Couldn't generate your deck. Please try again.");
      }
    } catch {
      setError("Couldn't reach the server. Please check your connection and try again.");
    }
    const elapsed = Date.now() - startedAt;
    if (elapsed < 700) {
      await new Promise((resolve) => setTimeout(resolve, 700 - elapsed));
    }
    setGenerating(false);
  }

  async function copyDeck() {
    if (!current) return;
    const text = current.slides
      .map(
        (slide) =>
          `## ${slide.title}\n\n${slide.narrative}\n\n${slide.bullets.map((b) => `- ${b}`).join("\n")}`,
      )
      .join("\n\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      <ToolHeader
        title="AI Pitch Generator"
        description="Answer five questions and get a structured, investor-ready deck — narrative, bullets and slide order included. Decks are saved to your workspace."
      />

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            {(
              [
                {
                  key: "companyName",
                  label: "Company name",
                  type: "input",
                  placeholder: "e.g. FoundersDeck",
                },
                {
                  key: "industry",
                  label: "Industry",
                  type: "input",
                  placeholder: "e.g. SaaS · founder tooling",
                },
                {
                  key: "mission",
                  label: "Mission",
                  type: "textarea",
                  placeholder: "What are you trying to achieve?",
                },
                {
                  key: "problem",
                  label: "The problem",
                  type: "textarea",
                  placeholder: "What pain do your customers feel today?",
                },
                {
                  key: "solution",
                  label: "Your solution",
                  type: "textarea",
                  placeholder: "How does your product fix it?",
                },
              ] as const
            ).map((field) => (
              <div key={field.key} className="mb-4 last:mb-0">
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="text-sm font-medium text-foreground">{field.label}</label>
                  <button
                    type="button"
                    onClick={() => addSuggestion(field.key)}
                    disabled={suggestingField !== null}
                    className="inline-flex items-center gap-1 text-xs font-medium text-brand-700 hover:text-brand-800 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {suggestingField === field.key ? (
                      <Loader2 className="size-3 animate-spin" />
                    ) : (
                      <Sparkles className="size-3" />
                    )}
                    {suggestingField === field.key ? "Writing…" : "Suggest"}
                  </button>
                </div>
                {field.type === "input" ? (
                  <Input
                    value={input[field.key]}
                    onChange={(e) => update(field.key, e.target.value)}
                    placeholder={field.placeholder}
                  />
                ) : (
                  <Textarea
                    value={input[field.key]}
                    onChange={(e) => update(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="min-h-20"
                  />
                )}
              </div>
            ))}

            <Button
              variant="gradient"
              className="mt-5 w-full"
              onClick={generate}
              disabled={generating}
            >
              {generating ? <Loader2 className="animate-spin" /> : <Sparkles />}
              {generating ? "Generating your deck…" : "Generate my deck"}
            </Button>
            {error && (
              <p className="no-print mt-3 text-center text-xs font-medium text-red-600">{error}</p>
            )}
            {planLimited && (
              <div className="no-print mt-4 rounded-xl border border-brand-200 bg-brand-50 p-4 text-center">
                <p className="text-sm font-bold text-foreground">
                  You&apos;ve hit the free plan limit
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  The free plan includes {`3`} AI pitch decks. Upgrade to Pro for unlimited
                  generations, white-label exports and priority support.
                </p>
                <a
                  href="/#pricing"
                  className={cn(buttonVariants({ variant: "gradient" }), "mt-3 w-full")}
                >
                  <Sparkles />
                  Upgrade to Pro
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-3">
          {!current && !generating && (
            <div className="bg-card/50 flex h-full min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-border p-8 text-center">
              <Sparkles className="size-8 text-brand-300" />
              <p className="mt-4 font-medium text-foreground">Your deck will appear here</p>
              <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                Fill in the details and hit &quot;Generate my deck&quot; — seven investor-grade
                slides in under a minute.
              </p>
            </div>
          )}

          {generating && (
            <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-xl border border-border bg-card p-8">
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-3 w-32 animate-pulse rounded-full bg-muted" />
                    <div className="bg-muted/70 h-2 w-64 animate-pulse rounded-full" />
                    <div className="bg-muted/70 h-2 w-48 animate-pulse rounded-full" />
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">Structuring your pitch…</p>
            </div>
          )}

          {current && !generating && (
            <div className="space-y-4">
              <div className="no-print flex flex-wrap items-center gap-3">
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" onClick={copyDeck}>
                    {copied ? <Check /> : <Copy />}
                    {copied ? "Copied" : "Copy deck"}
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => window.print()}>
                    <Printer />
                    Export PDF
                  </Button>
                </div>
                <span className="ml-auto text-xs font-medium text-muted-foreground">
                  {decks?.length ?? 0} deck{(decks?.length ?? 0) === 1 ? "" : "s"} saved
                </span>
              </div>

              <div className="print-area space-y-4">
                {current.slides.map((slide, index) => (
                  <div
                    key={slide.title}
                    className="rounded-xl border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex size-7 items-center justify-center rounded-full bg-zinc-950 text-xs font-bold text-brand-300">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-foreground">{slide.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {slide.narrative}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {slide.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="text-foreground/90 flex items-start gap-2 text-sm"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

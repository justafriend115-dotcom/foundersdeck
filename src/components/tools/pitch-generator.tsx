"use client";

import { Check, Copy, ImageIcon, Loader2, Printer, Sparkles, Trash2 } from "lucide-react";
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
  regenCount: number;
  watermarked: boolean;
  createdAt: string;
}

const emptyInput: PitchInput = {
  companyName: "",
  industry: "",
  mission: "",
  problem: "",
  solution: "",
};

const FREE_REGEN_LIMIT = 3;

export function PitchGenerator() {
  const [input, setInput] = useState(emptyInput);
  const [decks, setDecks] = useState<DeckDto[] | null>(null);
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generationCapped, setGenerationCapped] = useState(false);
  const [regenCapped, setRegenCapped] = useState(false);
  const [downloadGated, setDownloadGated] = useState(false);
  const [suggestingField, setSuggestingField] = useState<keyof PitchInput | null>(null);
  const [imageBusy, setImageBusy] = useState<number | null>(null);

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
  const hasExistingDeck = Boolean(current);

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
    setGenerationCapped(false);
    setRegenCapped(false);
    setDownloadGated(false);
    setCopied(false);
    const startedAt = Date.now();
    try {
      let response: Response;
      if (hasExistingDeck && current) {
        response = await fetch(`/api/tools/pitch/${current.id}/regen`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input }),
        });
      } else {
        response = await fetch("/api/tools/pitch", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input }),
        });
      }
      const json = await response.json();
      if (json?.ok) {
        trackEvent("generate_deck", {
          title: json.deck.title,
          slides: json.deck.slides.length,
        });
        if (hasExistingDeck && current) {
          setDecks((prev) =>
            (prev ?? []).map((d) => (d.id === current.id ? (json.deck as DeckDto) : d)),
          );
        } else {
          setDecks((prev) => [json.deck as DeckDto, ...(prev ?? [])]);
        }
      } else if (json?.code === "generation_cap") {
        setGenerationCapped(true);
      } else if (json?.code === "regen_cap") {
        setRegenCapped(true);
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
    if (current.watermarked) {
      setDownloadGated(true);
      return;
    }
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

  function exportPdf() {
    if (!current) return;
    if (current.watermarked) {
      setDownloadGated(true);
      return;
    }
    window.print();
  }

  async function runImageAction(slideIndex: number, action: "generate" | "edit" | "remove") {
    if (!current || imageBusy !== null) return;
    setImageBusy(slideIndex);
    setError(null);
    try {
      const response = await fetch("/api/ai/image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ deckId: current.id, slideIndex, action }),
      });
      const json = await response.json();
      if (!json?.ok) {
        setError(json?.error ?? "Image generation failed. Please try again.");
        return;
      }
      setDecks((prev) =>
        (prev ?? []).map((deck) => {
          if (deck.id !== current.id) return deck;
          const slides = deck.slides.map((slide, i) =>
            i === slideIndex
              ? { ...slide, image: action === "remove" ? undefined : json.image }
              : slide,
          );
          return { ...deck, slides };
        }),
      );
    } catch {
      setError("Couldn't reach the image service. Please try again.");
    } finally {
      setImageBusy(null);
    }
  }

  const showPaywall = generationCapped || regenCapped || downloadGated;
  const paywallMessage = downloadGated
    ? "Clean exports are a Pro feature. Upgrade to remove the watermark and export your deck."
    : regenCapped
      ? `You've used all ${FREE_REGEN_LIMIT} free regenerations. Upgrade to Pro for more.`
      : "You've used your 1 free deck. Upgrade to Pro to create unlimited decks.";

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
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-secondary disabled:cursor-not-allowed disabled:opacity-60"
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

            {hasExistingDeck && current && (
              <p className="mb-3 text-center text-xs text-muted-foreground">
                {current.regenCount} / {FREE_REGEN_LIMIT} regenerations used
              </p>
            )}

            <Button
              variant="gradient"
              className="mt-2 w-full"
              onClick={generate}
              disabled={generating || regenCapped || generationCapped}
            >
              {generating ? <Loader2 className="animate-spin" /> : <Sparkles />}
              {generating
                ? "Generating your deck…"
                : hasExistingDeck
                  ? "Regenerate deck"
                  : "Generate my deck"}
            </Button>
            {error && (
              <p className="no-print mt-3 text-center text-xs font-medium text-red-600">{error}</p>
            )}
            {showPaywall && (
              <div className="no-print mt-4 rounded-xl border border-primary-200 bg-slate-50 p-4 text-center">
                <p className="text-sm font-bold text-foreground">
                  {downloadGated ? "Pro feature" : "Free plan limit reached"}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{paywallMessage}</p>
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
              <div className="flex size-14 items-center justify-center rounded-2xl border border-border bg-card">
                <Sparkles className="size-6 text-primary" />
              </div>
              <p className="mt-4 text-lg font-semibold text-foreground">Your deck will appear here</p>
              <p className="mt-1.5 max-w-xs text-sm text-muted-foreground">
                Seven investor-grade slides — problem, solution, market, team and more — in under a minute.
              </p>
              <div className="mx-auto mt-6 flex w-full max-w-xs flex-col gap-3 text-left">
                {[
                  { step: "1", text: "Fill in your company details on the left" },
                  { step: "2", text: 'Hit “Generate my deck” to run the AI' },
                  { step: "3", text: "Review, refine, and export as PDF" },
                ].map(({ step, text }) => (
                  <div key={step} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-primary">
                      {step}
                    </span>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
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
                  <Button variant="outline" size="sm" onClick={exportPdf}>
                    <Printer />
                    Export PDF
                  </Button>
                </div>
                {current.watermarked && (
                  <span className="ml-auto rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">
                    Preview — upgrade to remove watermark
                  </span>
                )}
                {!current.watermarked && (
                  <span className="ml-auto text-xs font-medium text-muted-foreground">
                    {decks?.length ?? 0} deck{(decks?.length ?? 0) === 1 ? "" : "s"} saved
                  </span>
                )}
              </div>

              <div className="print-area space-y-4">
                {current.slides.map((slide, index) => (
                  <div
                    key={slide.title}
                    className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm"
                  >
                    {current.watermarked && (
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
                      >
                        <span className="-rotate-[35deg] select-none whitespace-nowrap text-3xl font-bold tracking-widest text-slate-400/20">
                          FoundersDeck Preview
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-3">
                      <span className="flex size-7 items-center justify-center rounded-full bg-secondary text-xs font-bold text-slate-300">
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
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-secondary" />
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {slide.image && (
                      <div className="mt-4 overflow-hidden rounded-lg border border-border">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={slide.image}
                          alt={`Visual for ${slide.title}`}
                          className="max-h-72 w-full object-cover"
                        />
                      </div>
                    )}

                    <div className="no-print mt-4 flex flex-wrap items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => runImageAction(index, "generate")}
                        disabled={imageBusy !== null}
                      >
                        {imageBusy === index ? (
                          <Loader2 className="animate-spin" />
                        ) : slide.image ? (
                          <Sparkles />
                        ) : (
                          <ImageIcon />
                        )}
                        {imageBusy === index
                          ? "Painting…"
                          : slide.image
                            ? "Generate new"
                            : "Generate visual"}
                      </Button>
                      {slide.image && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => runImageAction(index, "edit")}
                            disabled={imageBusy !== null}
                          >
                            {imageBusy === index ? (
                              <Loader2 className="animate-spin" />
                            ) : (
                              <Sparkles />
                            )}
                            Refine
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => runImageAction(index, "remove")}
                            disabled={imageBusy !== null}
                            className="text-muted-foreground hover:text-red-600"
                          >
                            <Trash2 />
                            Remove
                          </Button>
                        </>
                      )}
                    </div>
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

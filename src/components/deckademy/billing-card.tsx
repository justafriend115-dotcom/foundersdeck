"use client";

import {
  ArrowLeft,
  Award,
  Check,
  Crown,
  GraduationCap,
  Loader2,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const MEMBER_FEATURES = [
  "All 8 tracks  68 deep lessons with worked examples",
  "Action plans after every lesson",
  "8 pro quizzes with certificates",
  "All certificates printable & verifiable",
  "New tracks as DECKADEMY grows",
];

export function DeckademyBillingCard({
  name,
  isMember,
}: {
  name: string;
  isMember: boolean;
}) {
  const [loading, setLoading] = useState<"join" | "cancel" | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function startCheckout() {
    setLoading("join");
    setError(null);
    try {
      const response = await fetch("/api/billing/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "deckademy" }),
      });
      const json = await response.json();
      if (response.status === 401) {
        window.location.href = "/login?next=/deckademy/billing";
        return;
      }
      if (json?.ok && json.url) {
        window.location.href = json.url;
        return;
      }
      setError(json?.error ?? "Something went wrong. Please try again.");
    } catch {
      setError("Couldn't reach the billing service.");
    } finally {
      setLoading(null);
    }
  }

  async function cancelDemoMembership() {
    setLoading("cancel");
    setError(null);
    try {
      const response = await fetch("/api/billing/downgrade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "deckademy" }),
      });
      const json = await response.json();
      if (json?.ok) {
        window.location.reload();
        return;
      }
      setError(json?.error ?? "Something went wrong.");
    } catch {
      setError("Couldn't reach the billing service.");
    } finally {
      setLoading(null);
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <Link
          href="/deckademy"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to DECKADEMY
        </Link>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
          <div className="text-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 text-xs font-bold text-secondary-foreground">
              <Sparkles className="size-3.5" />
              {isMember ? "Active membership" : "Affiliated with FoundersDeck"}
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl">
              {isMember ? "You&apos;re a DECKADEMY member" : "Master the craft of raising"}
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-secondary-foreground">
              DECKADEMY is FoundersDeck&apos;s self-teaching school for founders  8 tracks, 68
              deep lessons, and certificates that prove you&apos;re ready to raise.
            </p>

            <ul className="mt-8 space-y-3.5">
              {MEMBER_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-secondary-foreground">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary/15">
                    <Check className="size-3 text-secondary-foreground" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-secondary/20 bg-secondary/10 p-6 backdrop-blur">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight text-secondary-foreground">$49.99</span>
                <span className="text-sm font-semibold text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                A separate subscription from your FoundersDeck plan  cancel anytime.
              </p>
              {isMember ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-primary deckademy-gradient px-6 py-3 text-sm font-bold text-primary-foreground">
                    <GraduationCap className="size-4" />
                    Membership active
                  </span>
                  <button
                    type="button"
                    onClick={cancelDemoMembership}
                    disabled={loading !== null}
                    className="rounded-lg border border-secondary/30 px-6 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/10 disabled:opacity-60"
                  >
                    {loading === "cancel" ? <Loader2 className="animate-spin" /> : "Demo mode: cancel membership"}
                  </button>
                </div>
              ) : (
                <Button
                  type="button"
                  onClick={startCheckout}
                  disabled={loading !== null}
                  className="mt-5 w-full bg-primary deckademy-gradient text-primary-foreground shadow-lg shadow-background/40 hover:bg-primary"
                >
                  {loading === "join" ? <Loader2 className="animate-spin" /> : <Crown className="size-4" />}
                  {loading === "join" ? "Starting checkout…" : "Become a member  $49.99/mo"}
                </Button>
              )}
            </div>

            {error && <p className="mt-4 text-sm font-medium text-red-300">{error}</p>}
            {!isMember && (
              <p className="mt-4 text-xs text-muted-foreground">
                {name}, you&apos;re on the free tier  the Legal track is always free. Membership
                unlocks everything else.
              </p>
            )}
          </div>

          <div className="hidden lg:block">
            <div className="rotate-2 rounded-2xl border border-muted/30 bg-card p-7 text-foreground shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute -right-4 -top-4 rounded-xl bg-background px-3 py-2 text-[11px] font-extrabold tracking-wide text-slate-300">
                CERTIFY YOUR SKILL
              </div>
              <div className="flex items-center justify-between border-b border-dashed border-secondary pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-background">
                    <GraduationCap className="size-5 text-slate-300" />
                  </span>
                  <div>
                    <div className="text-sm font-black tracking-wide">DECKADEMY</div>
                    <div className="text-[10px] font-semibold text-slate-400">
                      FOUNDED BY FOUNDERSDECK
                    </div>
                  </div>
                </div>
                <Award className="size-6 text-slate-400" />
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                Certificate of completion
              </p>
              <h2 className="mt-1.5 text-xl font-black">Fundraising Mastery</h2>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-sm font-extrabold text-slate-400">
                  JD
                </span>
                <div className="text-xs text-muted">
                  <span className="font-bold text-foreground">The Founder</span>
                  <br />
                  scored 88% · passed the final quiz
                </div>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {[
                  { label: "Lessons", value: "68" },
                  { label: "Tracks", value: "8" },
                  { label: "Quizzes", value: "8" },
                ].map((s) => (
                  <div key={s.label} className="rounded-lg bg-secondary px-2 py-2.5 text-center">
                    <div className="text-lg font-black text-slate-400">{s.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-dashed border-secondary pt-4">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                  <Check className="size-3.5 text-emerald-500" />
                  VERIFIED · DECKADEMY
                </span>
                <span className="flex size-10 items-center justify-center rounded-full border-2 border-slate-400">
                  <Award className="size-5 text-slate-400" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
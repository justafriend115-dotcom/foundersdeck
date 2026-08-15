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
    <main className="min-h-screen bg-[linear-gradient(160deg,#0a1120_0%,#5e83ae_50%,#7fa3c6_100%)]">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <Link
          href="/deckademy"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Back to DECKADEMY
        </Link>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-2">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-400/10 px-4 py-1.5 text-xs font-bold text-brand-200">
              <Sparkles className="size-3.5" />
              {isMember ? "Active membership" : "Affiliated with FoundersDeck"}
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl">
              {isMember ? "You&apos;re a DECKADEMY member" : "Master the craft of raising"}
            </h1>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
              DECKADEMY is FoundersDeck&apos;s self-teaching school for founders  8 tracks, 68
              deep lessons, and certificates that prove you&apos;re ready to raise.
            </p>

            <ul className="mt-8 space-y-3.5">
              {MEMBER_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-white/90">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-400/20">
                    <Check className="size-3 text-brand-300" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-white/15 bg-card/5 p-6 backdrop-blur">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight text-brand-300">$49.99</span>
                <span className="text-sm font-semibold text-white/60">/month</span>
              </div>
              <p className="mt-2 text-sm text-white/60">
                A separate subscription from your FoundersDeck plan  cancel anytime.
              </p>
              {isMember ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-sm font-bold text-navy-950">
                    <GraduationCap className="size-4" />
                    Membership active
                  </span>
                  <button
                    type="button"
                    onClick={cancelDemoMembership}
                    disabled={loading !== null}
                    className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-card/10 disabled:opacity-60"
                  >
                    {loading === "cancel" ? <Loader2 className="animate-spin" /> : "Demo mode: cancel membership"}
                  </button>
                </div>
              ) : (
                <Button
                  type="button"
                  onClick={startCheckout}
                  disabled={loading !== null}
                  className="mt-5 w-full bg-brand-500 text-navy-950 shadow-lg shadow-brand-500/25 hover:bg-brand-400"
                >
                  {loading === "join" ? <Loader2 className="animate-spin" /> : <Crown className="size-4" />}
                  {loading === "join" ? "Starting checkout…" : "Become a member  $49.99/mo"}
                </Button>
              )}
            </div>

            {error && <p className="mt-4 text-sm font-medium text-red-300">{error}</p>}
            {!isMember && (
              <p className="mt-4 text-xs text-white/50">
                {name}, you&apos;re on the free tier  the Legal track is always free. Membership
                unlocks everything else.
              </p>
            )}
          </div>

          <div className="hidden lg:block">
            <div className="rotate-2 rounded-2xl border border-brand-500/30 bg-card p-7 text-foreground shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute -right-4 -top-4 rounded-xl bg-navy-950 px-3 py-2 text-[11px] font-extrabold tracking-wide text-brand-300">
                CERTIFY YOUR SKILL
              </div>
              <div className="flex items-center justify-between border-b border-dashed border-navy-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-navy-950">
                    <GraduationCap className="size-5 text-brand-300" />
                  </span>
                  <div>
                    <div className="text-sm font-black tracking-wide">DECKADEMY</div>
                    <div className="text-[10px] font-semibold text-navy-400">
                      FOUNDED BY FOUNDERSDECK
                    </div>
                  </div>
                </div>
                <Award className="size-6 text-brand-400" />
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-navy-400">
                Certificate of completion
              </p>
              <h2 className="mt-1.5 text-xl font-black">Fundraising Mastery</h2>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-steel-900 text-sm font-extrabold text-brand-400">
                  JD
                </span>
                <div className="text-xs text-navy-500">
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
                  <div key={s.label} className="rounded-lg bg-steel-900 px-2 py-2.5 text-center">
                    <div className="text-lg font-black text-brand-400">{s.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-navy-400">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-dashed border-navy-800 pt-4">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-navy-400">
                  <Check className="size-3.5 text-emerald-500" />
                  VERIFIED · DECKADEMY
                </span>
                <span className="flex size-10 items-center justify-center rounded-full border-2 border-steel-400">
                  <Award className="size-5 text-brand-400" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
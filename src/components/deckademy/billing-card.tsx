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
    <main className="min-h-screen bg-[linear-gradient(160deg,#2e1065_0%,#4c1d95_50%,#6d28d9_100%)]">
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
            <span className="inline-flex items-center gap-2 rounded-full border border-lime-300/40 bg-lime-300/10 px-4 py-1.5 text-xs font-bold text-lime-200">
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
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-lime-300/20">
                    <Check className="size-3 text-lime-300" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight text-lime-300">$49.99</span>
                <span className="text-sm font-semibold text-white/60">/month</span>
              </div>
              <p className="mt-2 text-sm text-white/60">
                A separate subscription from your FoundersDeck plan  cancel anytime.
              </p>
              {isMember ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold text-[#111827]">
                    <GraduationCap className="size-4" />
                    Membership active
                  </span>
                  <button
                    type="button"
                    onClick={cancelDemoMembership}
                    disabled={loading !== null}
                    className="rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 disabled:opacity-60"
                  >
                    {loading === "cancel" ? <Loader2 className="animate-spin" /> : "Demo mode: cancel membership"}
                  </button>
                </div>
              ) : (
                <Button
                  type="button"
                  onClick={startCheckout}
                  disabled={loading !== null}
                  className="mt-5 w-full bg-lime-400 text-[#111827] shadow-lg shadow-lime-500/25 hover:bg-lime-300"
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
            <div className="rotate-2 rounded-2xl border border-lime-200/20 bg-white p-7 text-[#111827] shadow-[0_32px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute -right-4 -top-4 rounded-xl bg-[#2e1065] px-3 py-2 text-[11px] font-extrabold tracking-wide text-lime-300">
                CERTIFY YOUR SKILL
              </div>
              <div className="flex items-center justify-between border-b border-dashed border-zinc-200 pb-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-[#2e1065]">
                    <GraduationCap className="size-5 text-lime-300" />
                  </span>
                  <div>
                    <div className="text-sm font-black tracking-wide">DECKADEMY</div>
                    <div className="text-[10px] font-semibold text-zinc-400">
                      FOUNDED BY FOUNDERSDECK
                    </div>
                  </div>
                </div>
                <Award className="size-6 text-[#6d28d9]" />
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
                Certificate of completion
              </p>
              <h2 className="mt-1.5 text-xl font-black">Fundraising Mastery</h2>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-[#f5f3ff] text-sm font-extrabold text-[#4c1d95]">
                  JD
                </span>
                <div className="text-xs text-zinc-500">
                  <span className="font-bold text-[#111827]">The Founder</span>
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
                  <div key={s.label} className="rounded-lg bg-[#f5f3ff] px-2 py-2.5 text-center">
                    <div className="text-lg font-black text-[#4c1d95]">{s.value}</div>
                    <div className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-dashed border-zinc-200 pt-4">
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-400">
                  <Check className="size-3.5 text-emerald-500" />
                  VERIFIED · DECKADEMY
                </span>
                <span className="flex size-10 items-center justify-center rounded-full border-2 border-[#6d28d9]">
                  <Award className="size-5 text-[#6d28d9]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
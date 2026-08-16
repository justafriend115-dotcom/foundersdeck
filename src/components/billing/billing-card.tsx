"use client";

import { Check, CreditCard, Loader2, Sparkles } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PRO_FEATURES = [
  "AI assistant (coming soon)",
  "All 6 tools with full access",
  "White-label PDF exports",
  "Unlimited investor CRM",
];

export function BillingCard({ plan, name }: { plan: string; name: string }) {
  const [loading, setLoading] = useState<"upgrade" | "manage" | "cancel" | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isPro = plan === "pro" || plan === "enterprise";

  async function startCheckout() {
    setLoading("upgrade");
    setError(null);
    try {
      const response = await fetch("/api/billing/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "pro" }),
      });
      const json = await response.json();
      if (response.status === 401) {
        window.location.href = "/login?next=/dashboard";
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

  async function manageSubscription() {
    setLoading("manage");
    setError(null);
    try {
      const response = await fetch("/api/billing/portal", { method: "POST" });
      const json = await response.json();
      if (json?.ok && json.url) {
        window.location.href = json.url;
        return;
      }
      if (json?.mode === "stub") {
        setError("Demo mode: use the demo cancel button below.");
        return;
      }
      setError(json?.error ?? "Something went wrong.");
    } catch {
      setError("Couldn't reach the billing service.");
    } finally {
      setLoading(null);
    }
  }

  async function cancelDemoSubscription() {
    setLoading("cancel");
    setError(null);
    try {
      const response = await fetch("/api/billing/downgrade", { method: "POST" });
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
    <Card className="mt-10">
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-steel-300 shadow-md shadow-navy-950/25">
              <CreditCard className="size-5" />
            </span>
            <div>
              <p className="text-sm text-muted-foreground">Current plan</p>
              <p className="text-lg font-bold capitalize text-foreground">
                {plan} · ${isPro ? "19" : "0"}/mo
              </p>
            </div>
          </div>

          <div className="hidden flex-1 flex-wrap items-center gap-x-6 gap-y-2 lg:flex">
            {PRO_FEATURES.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
              >
                <Check className="size-3.5 text-emerald-500" />
                {feature}
              </span>
            ))}
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:flex-row lg:items-center">
            {isPro ? (
              <Button variant="outline" onClick={manageSubscription} disabled={loading !== null}>
                {loading === "manage" ? <Loader2 className="animate-spin" /> : <CreditCard />}
                Manage billing
              </Button>
            ) : (
              <Button variant="gradient" onClick={startCheckout} disabled={loading !== null}>
                {loading === "upgrade" ? <Loader2 className="animate-spin" /> : <Sparkles />}
                Upgrade to Pro  $19/mo
              </Button>
            )}
          </div>
        </div>

        {error && <p className="mt-4 text-xs font-medium text-red-600">{error}</p>}
        {!isPro && (
          <p className="mt-4 text-xs text-muted-foreground">
            {name}, you&apos;re on the free plan. Upgrade for white-label exports and priority
            support.
          </p>
        )}
        {isPro && (
          <button
            type="button"
            onClick={cancelDemoSubscription}
            disabled={loading !== null}
            className="mt-4 text-xs font-medium text-muted-foreground hover:text-red-600 disabled:opacity-60"
          >
            {loading === "cancel" ? "Cancelling…" : "Demo mode: cancel subscription"}
          </button>
        )}
      </CardContent>
    </Card>
  );
}


"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { CheckoutCta } from "@/components/landing/checkout-cta";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Preview",
    priceMonthly: "$0",
    priceAnnual: "$0",
    period: "Free forever",
    oneTime: false,
    description: "Try every tool. See what raise-ready looks like before you commit.",
    features: [
      "Unlimited decks (watermarked exports)",
      "Business plan builder",
      "Raise-ready score",
      "Legal Hub templates",
      "Community access",
    ],
    cta: "Start free",
    highlighted: false,
    ctaTier: "free" as const,
  },
  {
    name: "Raise Pass",
    priceMonthly: "$79",
    priceAnnual: "$79",
    period: "· one-time",
    oneTime: true,
    description: "Everything for your raise, once. Pay once, close your round — no subscription needed.",
    features: [
      "All 7 tools, full access",
      "Watermark removed on all exports",
      "Shareable investor links",
      "White-label PDF exports",
      "Investor CRM & data room",
      "Financial projections & charts",
      "90 days from purchase",
    ],
    cta: "Get Raise Pass",
    highlighted: true,
    ctaTier: "raise_pass" as const,
  },
  {
    name: "Pro",
    priceMonthly: "$19",
    priceAnnual: "$149",
    period: "/mo",
    periodAnnual: "/yr · $12.41/mo",
    oneTime: false,
    description: "For founders who raise continuously and need all tools month to month.",
    features: [
      "Everything in Raise Pass",
      "Ongoing monthly access",
      "Unlimited pitch deck regens",
      "Portfolio update letters",
      "Priority support",
    ],
    cta: "Start 14-day free trial",
    highlighted: false,
    ctaTier: "pro" as const,
  },
  {
    name: "Accelerator",
    priceMonthly: "Custom",
    priceAnnual: "Custom",
    period: "",
    oneTime: false,
    description: "Full-cohort access for accelerator programs and pre-seed funds.",
    features: [
      "Team workspaces",
      "Co-branded PDF exports",
      "Dedicated success manager",
      "Custom integrations & API",
      "SSO & security review",
    ],
    cta: "Contact sales",
    highlighted: false,
    ctaTier: "enterprise" as const,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="scroll-mt-20 bg-card py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Pricing
          </p>
          <h2
            className="mt-3 text-4xl tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Simple pricing.{" "}
            <span className="text-primary">Serious leverage.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Start free. Upgrade when you&apos;re ready to raise. Cancel anytime.
          </p>
        </div>

        {/* Annual / Monthly toggle — only affects Pro */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setAnnual(false)}
            className={cn(
              "text-sm font-medium transition-colors",
              !annual ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Monthly
          </button>
          <button
            type="button"
            role="switch"
            aria-checked={annual}
            onClick={() => setAnnual((a) => !a)}
            className={cn(
              "relative inline-flex h-6 w-11 items-center rounded-full border transition-colors",
              annual ? "border-primary/40 bg-primary/20" : "border-border bg-secondary",
            )}
          >
            <span
              className={cn(
                "inline-block size-4 rounded-full transition-transform",
                annual ? "translate-x-6 bg-primary" : "translate-x-1 bg-muted-foreground",
              )}
            />
          </button>
          <button
            type="button"
            onClick={() => setAnnual(true)}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              annual ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Annual
            <span className="rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
              Save 35%
            </span>
          </button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6",
                tier.highlighted
                  ? "border-primary/40 bg-secondary ring-1 ring-primary/20"
                  : "border-border bg-secondary",
              )}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold text-foreground">{tier.name}</h3>
                {tier.highlighted && (
                  <span className="rounded-full border border-primary/40 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    Most popular
                  </span>
                )}
              </div>

              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className="text-4xl tracking-tight text-foreground"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {annual && !tier.oneTime ? tier.priceAnnual : tier.priceMonthly}
                </span>
                {tier.name === "Pro" ? (
                  <span className="text-sm font-medium text-muted-foreground">
                    {annual ? (tier as { periodAnnual?: string }).periodAnnual ?? tier.period : tier.period}
                  </span>
                ) : (
                  tier.period && (
                    <span className="text-sm font-medium text-muted-foreground">{tier.period}</span>
                  )
                )}
              </div>

              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Check className="size-3 text-primary" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <CheckoutCta
                  tier={tier.ctaTier}
                  label={tier.cta}
                  variant={tier.highlighted ? "gradient" : "outline"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

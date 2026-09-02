import { Check } from "lucide-react";

import { CheckoutCta } from "@/components/landing/checkout-cta";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "For validating your idea",
    features: [
      "Business plan builder (PDF export)",
      "1 investor pipeline",
      "Legal Hub templates",
      "Community support",
    ],
    cta: "Start for free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "For founders ready to raise",
    features: [
      "AI pitch deck builder",
      "All 6 tools with full access",
      "White-label PDF exports",
      "Unlimited investor CRM",
      "Financial projections & charts",
      "Priority support",
    ],
    cta: "Start 14-day free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For accelerators & funds",
    features: [
      "Team workspaces",
      "Custom integrations & API",
      "Dedicated success manager",
      "SSO & security review",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
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

        <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
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
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-sm font-medium text-muted-foreground">{tier.period}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

              <ul className="mt-8 flex-1 space-y-3.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted">
                      <Check className="size-3 text-primary" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {tier.highlighted ? (
                  <CheckoutCta tier="pro" label={tier.cta} variant="gradient" />
                ) : (
                  <CheckoutCta
                    tier={tier.name === "Enterprise" ? "enterprise" : "free"}
                    label={tier.cta}
                    variant="outline"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

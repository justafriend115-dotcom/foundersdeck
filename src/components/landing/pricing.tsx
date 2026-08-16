import { Check } from "lucide-react";

import { CheckoutCta } from "@/components/landing/checkout-cta";
import { Badge } from "@/components/ui/badge";
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
      "AI pitch deck builder (coming soon)",
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
    <section id="pricing" className="bg-muted/60 scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-steel-600">Pricing</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Simple pricing. <span className="text-gradient">Serious leverage.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Start free. Upgrade when you&apos;re ready to raise. Cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-card p-8",
                tier.highlighted
                  ? "border-transparent shadow-glow ring-2 ring-steel-500"
                  : "border-border shadow-sm",
              )}
            >
              {tier.highlighted && (
                <div className="absolute inset-0 -z-10 rounded-2xl bg-slate-800 opacity-10" />
              )}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
                {tier.highlighted && <Badge variant="gradient">Most popular</Badge>}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-sm font-medium text-muted-foreground">{tier.period}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>

              <ul className="mt-8 flex-1 space-y-3.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="text-foreground/90 flex items-start gap-3 text-sm">
                    <span
                      className={cn(
                        "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full",
                        tier.highlighted ? "bg-slate-800" : "bg-steel-50",
                      )}
                    >
                      <Check
                        className={cn(
                          "size-3",
                          tier.highlighted ? "text-steel-400" : "text-steel-700",
                        )}
                      />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

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
          ))}
        </div>
      </div>
    </section>
  );
}

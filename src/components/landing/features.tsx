import { FileText, Handshake, ShieldCheck, Sparkles, TrendingUp, Workflow } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "AI Pitch Generator",
    description:
      "Answer a few questions and get a structured, investor-ready pitch deck — narrative, bullets and slide order included.",
  },
  {
    icon: FileText,
    title: "Business Plan Builder",
    description:
      "A 7-step guided wizard covering executive summary to milestones, with auto-save on every keystroke.",
  },
  {
    icon: TrendingUp,
    title: "Financial Projections",
    description:
      "Model revenue, track costs and forecast growth with break-even analysis and charts you can export.",
  },
  {
    icon: Workflow,
    title: "Contingency Planner",
    description:
      "Plan best, worst and realistic scenarios on a 5-year timeline, with pivot strategies for each.",
  },
  {
    icon: Handshake,
    title: "Investor CRM",
    description:
      "Track investors, meetings and follow-ups in a pipeline from cold to closed. Never lose a lead.",
  },
  {
    icon: ShieldCheck,
    title: "Legal Hub",
    description:
      "NDA templates, founder equity agreements, incorporation checklists and IP guides in plain English.",
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Everything you need
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Six tools. <span className="text-gradient">One founder stack.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Stop stitching together docs, spreadsheets and templates. FoundersDeck covers the entire
            pre-seed journey.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
            >
              <CardHeader>
                <div className="mb-2 inline-flex size-11 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-brand-100">
                  <feature.icon className="size-5 text-brand-600" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="leading-relaxed">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

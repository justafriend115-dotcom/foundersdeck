import { ArrowRight, Sparkles, Star } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

const avatarStyles = [
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-fuchsia-600",
  "from-cyan-500 to-blue-600",
  "from-indigo-500 to-purple-600",
  "from-pink-500 to-rose-600",
];

const avatarInitials = ["MC", "DO", "SR", "JL", "AK"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      <div className="pointer-events-none absolute -top-48 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="bg-background/60 inline-flex animate-fade-up items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted-foreground shadow-sm">
            <Sparkles className="size-4 text-indigo-500" />
            AI-powered tools for pre-seed founders
          </div>

          <h1
            className="mt-6 animate-fade-up text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "100ms" }}
          >
            From idea to <span className="text-gradient">investment-ready</span> in days, not months
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "200ms" }}
          >
            FoundersDeck turns the busywork of starting up into guided workflows — pitch decks,
            business plans, financials and investor outreach in one place, built for founders.
          </p>

          <div
            className="mt-8 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "300ms" }}
          >
            <Link href="/signup" className={buttonVariants({ variant: "gradient", size: "lg" })}>
              Get Started Free
              <ArrowRight />
            </Link>
            <Link href="#features" className={buttonVariants({ variant: "outline", size: "lg" })}>
              See Features
            </Link>
          </div>

          <div
            className="mt-8 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6"
            style={{ animationDelay: "400ms" }}
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {avatarInitials.map((initials, i) => (
                  <span
                    key={initials}
                    className={`flex size-9 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br ${avatarStyles[i]} text-xs font-bold text-white`}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <div className="text-left text-sm">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-0.5 text-muted-foreground">
                  Trusted by <span className="font-semibold text-foreground">2,400+ founders</span>
                </p>
              </div>
            </div>
            <div className="hidden text-sm text-muted-foreground sm:block">·</div>
            <p className="text-sm text-muted-foreground">
              No credit card required · Free forever tier
            </p>
          </div>
        </div>

        <div
          className="mx-auto mt-16 max-w-4xl animate-fade-up"
          style={{ animationDelay: "500ms" }}
        >
          <div className="animate-float rounded-2xl border border-border bg-card shadow-2xl shadow-indigo-500/10">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-red-400" />
              <span className="size-2.5 rounded-full bg-amber-400" />
              <span className="size-2.5 rounded-full bg-green-400" />
              <span className="ml-3 text-xs font-medium text-muted-foreground">
                FoundersDeck — AI Pitch Generator
              </span>
              <span className="ml-auto rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold text-brand-700">
                PRO
              </span>
            </div>
            <div className="grid sm:grid-cols-2">
              <div className="space-y-4 border-b border-border p-6 sm:border-b-0 sm:border-r">
                {[
                  { label: "Company name", value: "FoundersDeck" },
                  { label: "Industry", value: "SaaS · Founder tooling" },
                  {
                    label: "What problem do you solve?",
                    value: "Founders waste months preparing to raise…",
                  },
                ].map((field) => (
                  <div key={field.label}>
                    <p className="mb-1.5 text-xs font-semibold text-muted-foreground">
                      {field.label}
                    </p>
                    <div className="bg-muted/50 text-foreground/80 flex h-10 items-center rounded-lg border border-border px-3 text-sm">
                      {field.value}
                    </div>
                  </div>
                ))}
                <div className="flex h-10 w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25">
                  Generate my deck
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">Your 12-slide deck</p>
                  <span className="text-xs font-medium text-muted-foreground">92% ready</span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
                </div>
                <div className="mt-5 space-y-3">
                  {[
                    { title: "Problem", w: "w-[85%]" },
                    { title: "Solution", w: "w-[70%]" },
                    { title: "Market size", w: "w-[90%]" },
                    { title: "Business model", w: "w-[60%]" },
                    { title: "Traction", w: "w-[75%]" },
                  ].map((slide) => (
                    <div
                      key={slide.title}
                      className="bg-muted/30 flex items-center justify-between rounded-lg border border-border px-3 py-2.5"
                    >
                      <span className="text-sm font-medium text-foreground">{slide.title}</span>
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 ${slide.w}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

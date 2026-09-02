"use client";

import { FileText, FolderOpen, Handshake, ShieldCheck, Sparkles, TrendingUp, Workflow } from "lucide-react";
import { useEffect, useRef } from "react";

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
  {
    icon: FolderOpen,
    title: "Data Room",
    description:
      "Organise every document investors will ask for — financials, legal, team, and market research — in a structured due-diligence checklist.",
  },
];

const ENTRANCES = [
  "perspective(900px) rotateY(-42deg) translateX(-25px)",
  "perspective(900px) rotateX(45deg) translateY(35px)",
  "perspective(900px) rotateY(42deg) translateX(25px)",
];

const TILT_DEG = 8;

export default function Features() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".fd-feature-card"));
    if (cards.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cards.forEach((card) => card.classList.add("in"));
      return;
    }

    const entered = new Set<HTMLElement>();

    cards.forEach((card, i) => {
      const wave = ENTRANCES[i % ENTRANCES.length];
      card.style.transform = wave;
      card.style.transitionDelay = `${(i % 3) * 0.1 + Math.floor(i / 3) * 0.15}s`;
    });

    const markEntered = (card: HTMLElement) => entered.add(card);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const card = entry.target as HTMLElement;
          card.classList.add("in");
          card.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
          card.style.transitionDelay = "0s";
          card.addEventListener("transitionend", () => markEntered(card), { once: true });
          setTimeout(() => markEntered(card), 1600);
          observer.unobserve(card);
        }
      },
      { threshold: 0.18 },
    );
    cards.forEach((card) => observer.observe(card));

    const handleMove = (event: MouseEvent) => {
      const card = (event.target as HTMLElement).closest<HTMLElement>(".fd-feature-card");
      if (!card || !card.classList.contains("in")) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty("--my", `${((event.clientY - rect.top) / rect.height) * 100}%`);
      if (!entered.has(card)) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (event.clientX - cx) / (rect.width / 2);
      const dy = (event.clientY - cy) / (rect.height / 2);
      card.style.transform = `perspective(900px) rotateY(${dx * TILT_DEG}deg) rotateX(${-dy * TILT_DEG}deg) scale(1.02)`;
      card.style.transition = "transform 0.1s ease, opacity 0.85s ease";
    };

    const handleLeave = (event: MouseEvent) => {
      const card = (event.target as HTMLElement).closest<HTMLElement>(".fd-feature-card");
      if (!card || !card.classList.contains("in")) return;
      card.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
      card.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s ease";
    };

    grid.addEventListener("mousemove", handleMove);
    grid.addEventListener("mouseleave", handleLeave);
    return () => {
      observer.disconnect();
      grid.removeEventListener("mousemove", handleMove);
      grid.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section id="features" className="scroll-mt-20 overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Everything you need
          </p>
          <h2
            className="mt-3 text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Seven tools.{" "}
            <span className="text-primary">One founder stack.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Stop stitching together docs, spreadsheets and templates. FoundersDeck covers the entire
            pre-seed journey.
          </p>
        </div>

        <div ref={gridRef} className="fd-card-grid mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`fd-feature-card relative rounded-2xl border border-border bg-card p-6${i === features.length - 1 && features.length % 3 !== 0 ? " sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-xl bg-secondary">
                <feature.icon className="size-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

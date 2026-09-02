"use client";

import { useState, useCallback, type ComponentType } from "react";
import {
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Circle,
  FileBarChart,
  FileText,
  FolderOpen,
  Handshake,
  Landmark,
  Scale,
  Search,
  Star,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

interface ChecklistItem {
  id: string;
  label: string;
  description: string;
  optional?: boolean;
}

interface Category {
  id: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  items: ChecklistItem[];
}

const CATEGORIES: Category[] = [
  {
    id: "story",
    title: "Verbal Story & Marketing Materials",
    icon: BookOpen,
    items: [
      {
        id: "pitch-deck",
        label: "Pitch Deck",
        description: "Your core narrative — problem, solution, market, team, traction, and ask.",
      },
      {
        id: "one-pager",
        label: "One-Pager",
        description:
          "A concise summary of your business, highlighting key metrics and achievements.",
        optional: true,
      },
    ],
  },
  {
    id: "financials",
    title: "Financials & Operations",
    icon: FileBarChart,
    items: [
      {
        id: "financial-model",
        label: "Financial Model",
        description: "Projections, assumptions, and scenario analysis in a shareable spreadsheet.",
      },
      {
        id: "financial-statements",
        label: "Financial Statements",
        description:
          "Income statements, balance sheets, and cash flow statements covering your financial history and current status.",
      },
      {
        id: "key-metrics",
        label: "Key Metrics",
        description:
          "Critical KPIs relevant to your model — CAC, churn rate, LTV, revenue growth, and burn rate.",
      },
      {
        id: "cap-table",
        label: "Cap Table",
        description:
          "Full ownership breakdown including founders, employees (options), and prior investors.",
      },
      {
        id: "manufacturing",
        label: "Manufacturing Agreements",
        description: "Any supplier, production, or fulfilment contracts relevant to operations.",
      },
    ],
  },
  {
    id: "sales",
    title: "Sales & Market Validation",
    icon: Handshake,
    items: [
      {
        id: "sales-pipeline",
        label: "Sales Pipeline",
        description:
          "Current and potential customers in your pipeline to demonstrate market demand.",
      },
      {
        id: "partnerships",
        label: "Partnerships & Agreements",
        description:
          "Signed agreements, partnerships, or letters of intent (LOIs) that validate market interest and strategic alliances.",
      },
    ],
  },
  {
    id: "product",
    title: "Product & Technology",
    icon: Briefcase,
    items: [
      {
        id: "product-info",
        label: "Product Information",
        description:
          "Demo, screenshots, or documentation that shows what the product does and how it works.",
      },
      {
        id: "product-roadmap",
        label: "Product Roadmap",
        description:
          "Future developments and enhancements aligned with your business strategy, with estimated timelines.",
      },
    ],
  },
  {
    id: "legal",
    title: "Legal & Administrative Documents",
    icon: Scale,
    items: [
      {
        id: "incorporation",
        label: "Incorporation Documents",
        description:
          "Articles of incorporation, business licences, and any legal documentation that verifies your company's legal standing.",
      },
      {
        id: "ip",
        label: "Intellectual Property",
        description: "Patents, trademarks, or copyrights that protect your intellectual assets.",
      },
    ],
  },
  {
    id: "research",
    title: "Research & Market Analysis",
    icon: Search,
    items: [
      {
        id: "market-research",
        label: "Market Research",
        description:
          "Insights into market size, trends, and consumer behaviour to support your business case.",
      },
      {
        id: "competitive-analysis",
        label: "Competitive Analysis",
        description:
          "A comparison of your product against competitors, emphasising your unique selling points and market positioning.",
      },
      {
        id: "investment-memo",
        label: "Investment Memo",
        description:
          "Key investment considerations, market size, and competitive analysis to assist investors in understanding your growth potential.",
        optional: true,
      },
    ],
  },
  {
    id: "social-proof",
    title: "Social Proof",
    icon: Star,
    items: [
      {
        id: "testimonials",
        label: "Partner / Customer Testimonials",
        description: "Quotes, case studies, or references from partners or early customers.",
      },
      {
        id: "press",
        label: "Press Coverage & Awards",
        description: "Any media mentions, publications, or awards that add credibility.",
      },
    ],
  },
  {
    id: "team",
    title: "Team",
    icon: Users,
    items: [
      {
        id: "team-bios",
        label: "Team Bios",
        description:
          "LinkedIn profiles or written bios covering relevant experience and domain expertise.",
      },
      {
        id: "org-chart",
        label: "Org Chart",
        description: "A visual overview of your current team structure and reporting lines.",
        optional: true,
      },
      {
        id: "personnel-agreements",
        label: "Personnel Agreements",
        description:
          "Advisory agreements, contractor agreements, or any relevant employment documentation.",
      },
    ],
  },
];

const TOTAL_ITEMS = CATEGORIES.flatMap((c) => c.items).length;
const REQUIRED_ITEMS = CATEGORIES.flatMap((c) => c.items).filter((i) => !i.optional).length;

function CategoryCard({
  category,
  checked,
  onToggle,
}: {
  category: Category;
  checked: Set<string>;
  onToggle: (id: string) => void;
}) {
  const [open, setOpen] = useState(true);
  const done = category.items.filter((i) => checked.has(i.id)).length;
  const total = category.items.length;
  const complete = done === total;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((o: boolean) => !o)}
        className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/40"
      >
        <span
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-xl border transition-colors",
            complete
              ? "border-primary/40 bg-primary/10 text-primary"
              : "border-border bg-secondary text-muted-foreground",
          )}
        >
          <category.icon className="size-4.5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-foreground">{category.title}</p>
          <p className="mt-0.5 text-xs text-muted-foreground">
            {done} / {total} complete
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-24 overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${(done / total) * 100}%` }}
            />
          </div>
          <ChevronDown
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
              open && "rotate-180",
            )}
          />
        </div>
      </button>

      {open && (
        <ul className="divide-y divide-border border-t border-border">
          {category.items.map((item) => {
            const ticked = checked.has(item.id);
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => onToggle(item.id)}
                  className="group flex w-full items-start gap-4 px-6 py-4 text-left transition-colors hover:bg-secondary/30"
                >
                  <span className="mt-0.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground">
                    {ticked ? (
                      <CheckCircle2 className="size-5 text-primary" />
                    ) : (
                      <Circle className="size-5" />
                    )}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className={cn(
                        "text-sm font-medium transition-colors",
                        ticked ? "text-muted-foreground line-through" : "text-foreground",
                      )}
                    >
                      {item.label}
                      {item.optional && (
                        <span className="ml-2 text-xs font-normal text-muted-foreground">
                          (optional)
                        </span>
                      )}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function DataRoomPage() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = useCallback((id: string) => {
    setChecked((prev: Set<string>) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const totalDone = checked.size;
  const requiredDone = CATEGORIES.flatMap((c) => c.items)
    .filter((i) => !i.optional)
    .filter((i) => checked.has(i.id)).length;
  const pct = Math.round((totalDone / TOTAL_ITEMS) * 100);
  const allRequired = requiredDone === REQUIRED_ITEMS;

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl border border-border bg-secondary">
            <FolderOpen className="size-5 text-primary" />
          </span>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Data Room</h1>
            <p className="text-sm text-muted-foreground">
              Investor due-diligence checklist — tick each document as you prepare it.
            </p>
          </div>
        </div>
      </div>

      {/* Progress banner */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-foreground">
              {totalDone} of {TOTAL_ITEMS} documents prepared
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {requiredDone} of {REQUIRED_ITEMS} required · {TOTAL_ITEMS - REQUIRED_ITEMS} optional
            </p>
          </div>
          <div className="flex items-center gap-3">
            {allRequired && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <CheckCircle2 className="size-3.5" />
                Ready to raise
              </span>
            )}
            <span className="text-2xl font-bold tracking-tight text-foreground">{pct}%</span>
          </div>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      {/* Checklist */}
      <div className="space-y-4">
        {CATEGORIES.map((cat) => (
          <CategoryCard key={cat.id} category={cat} checked={checked} onToggle={toggle} />
        ))}
      </div>

      <p className="pb-8 text-center text-xs text-muted-foreground">
        Progress is saved in this browser session. Export or share your data room securely with investors.
      </p>
    </div>
  );
}

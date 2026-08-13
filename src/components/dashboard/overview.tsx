"use client";

import {
  ArrowRight,
  FileText,
  Handshake,
  Plus,
  Sparkles,
  TrendingUp,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BillingCard } from "@/components/billing/billing-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const quickActions = [
  { href: "/dashboard/pitch", label: "Generate a pitch deck", icon: Sparkles },
  { href: "/dashboard/business-plan", label: "Build a business plan", icon: FileText },
  { href: "/dashboard/financials", label: "Model your financials", icon: TrendingUp },
  { href: "/dashboard/crm", label: "Add an investor", icon: Plus },
];

const activity = [
  { icon: Workflow, title: "Started a contingency plan", meta: "2 hours ago" },
  { icon: Handshake, title: "Updated your investor pipeline", meta: "Yesterday" },
  { icon: Sparkles, title: "Generated a pitch deck", meta: "2 days ago" },
  { icon: FileText, title: "Created a business plan draft", meta: "4 days ago" },
];

export function Overview({ name, plan }: { name: string; plan: string }) {
  const [stats, setStats] = useState<{ pitchDecks: number | null; investors: number | null }>({
    pitchDecks: null,
    investors: null,
  });

  useEffect(() => {
    Promise.all([
      fetch("/api/tools/pitch").then((r) => (r.ok ? r.json() : null)),
      fetch("/api/tools/crm").then((r) => (r.ok ? r.json() : null)),
    ]).then(([pitch, crm]) => {
      setStats({
        pitchDecks: pitch?.ok ? pitch.decks.length : 0,
        investors: crm?.ok ? crm.value.length : 0,
      });
    });
  }, []);

  const firstName = name.split(" ")[0];

  const statCards = [
    { label: "Pitch decks generated", value: stats.pitchDecks, icon: Sparkles },
    { label: "Investors in pipeline", value: stats.investors, icon: Handshake },
    { label: "Days to launch", value: 32, icon: TrendingUp },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">
            Welcome back, {firstName}
          </h2>
          <p className="mt-2 text-muted-foreground">
            Here&apos;s what&apos;s happening with your startup today.
          </p>
        </div>
        <Badge variant="secondary" className="capitalize">
          {plan} plan
        </Badge>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {statCards.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                {stat.value === null ? (
                  <div className="mt-2 h-8 w-16 animate-pulse rounded-lg bg-muted" />
                ) : (
                  <p className="mt-1 text-3xl font-extrabold tracking-tight text-foreground">
                    {stat.value}
                  </p>
                )}
              </div>
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand-50 ring-1 ring-brand-100">
                <stat.icon className="size-5 text-indigo-600" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <BillingCard plan={plan} name={name} />

      <div className="mt-10 grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardContent className="p-6">
            <h3 className="text-base font-bold text-foreground">Quick actions</h3>
            <div className="mt-4 space-y-2.5">
              {quickActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 transition-all hover:border-indigo-300 hover:shadow-soft"
                >
                  <span className="flex size-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-50 to-purple-100 ring-1 ring-brand-100">
                    <action.icon className="size-4 text-indigo-600" />
                  </span>
                  <span className="flex-1 text-sm font-medium text-foreground">{action.label}</span>
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardContent className="p-6">
            <h3 className="text-base font-bold text-foreground">Recent activity</h3>
            <div className="mt-4 space-y-1">
              {activity.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-lg px-2 py-3 transition-colors hover:bg-muted"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-50 ring-1 ring-brand-100">
                    <item.icon className="size-4 text-indigo-600" />
                  </span>
                  <p className="flex-1 text-sm font-medium text-foreground">{item.title}</p>
                  <span className="text-xs text-muted-foreground">{item.meta}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

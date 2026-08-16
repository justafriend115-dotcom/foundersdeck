"use client";

import {
  Database,
  FileText,
  GraduationCap,
  Handshake,
  LayoutDashboard,
  LogOut,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/logo";
import { initials } from "@/lib/format";
import { cn } from "@/lib/utils";
import type { User } from "@/lib/auth/types";

export const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/dashboard/pitch", label: "Pitch Generator", icon: Sparkles, comingSoon: true },
  { href: "/dashboard/business-plan", label: "Business Plan", icon: FileText, comingSoon: true },
  { href: "/dashboard/contingency", label: "Contingency Planner", icon: Workflow },
  { href: "/dashboard/financials", label: "Financial Projections", icon: TrendingUp },
  { href: "/dashboard/legal", label: "Legal Hub", icon: ShieldCheck },
  { href: "/dashboard/crm", label: "Investor CRM", icon: Handshake },
  { href: "/dashboard/scraper", label: "Data Scraper", icon: Database },
  { href: "/deckademy", label: "DECKADEMY", icon: GraduationCap },
];

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return (
    <nav className="flex-1 space-y-1 px-3">
      {navItems.map((item) => {
        const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              active
                ? "bg-secondary/90 text-slate-300 shadow-sm"
                : "text-slate-400 hover:bg-secondary/60 hover:text-slate-100",
            )}
          >
            <item.icon className="size-4.5 shrink-0" />
            <span className="flex-1 truncate">{item.label}</span>
            {item.comingSoon && (
              <span className="shrink-0 rounded-full bg-primary/15 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-slate-300 ring-1 ring-muted/30">
                Soon
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

function UserFooter({ user }: { user: User }) {
  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    window.location.href = "/login";
  }

  return (
    <div className="border-t border-secondary p-3">
      <div className="flex items-center gap-3 rounded-lg px-2 py-2">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold text-white">
          {initials(user.name)}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-white">{user.name}</p>
          <p className="truncate text-xs text-muted">{user.email}</p>
        </div>
        <button
          type="button"
          onClick={handleLogout}
          aria-label="Log out"
          className="flex size-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-secondary hover:text-white"
        >
          <LogOut className="size-4" />
        </button>
      </div>
    </div>
  );
}

export function Sidebar({
  user,
  open,
  onClose,
}: {
  user: User;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 flex-col bg-background lg:flex">
        <div className="flex h-16 items-center border-b border-secondary px-6">
          <Logo dark />
        </div>
        <div className="mt-4 flex flex-1 flex-col">
          <div className="mb-2 flex items-center gap-2 rounded-lg border border-muted/25 bg-primary/10 px-3 py-2">
            <Sparkles className="size-3.5 shrink-0 text-slate-300" />
            <p className="text-[11px] font-medium leading-tight text-white/90">
              AI builder tools are coming soon  JAF is on it
            </p>
          </div>
          <NavList />
          <UserFooter user={user} />
        </div>
      </aside>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-background/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <aside className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col bg-background shadow-2xl">
            <div className="flex h-16 items-center justify-between border-b border-secondary px-6">
              <Logo dark />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation"
                className="flex size-8 items-center justify-center rounded-lg text-slate-400 hover:bg-secondary hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="mt-4 flex flex-1 flex-col">
              <div className="mb-2 flex items-center gap-2 rounded-lg border border-muted/25 bg-primary/10 px-3 py-2">
                <Sparkles className="size-3.5 shrink-0 text-slate-300" />
                <p className="text-[11px] font-medium leading-tight text-white/90">
                  AI builder tools are coming soon  JAF is on it
                </p>
              </div>
              <NavList onNavigate={onClose} />
              <UserFooter user={user} />
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

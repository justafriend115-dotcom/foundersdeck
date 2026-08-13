"use client";

import { Bell, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { navItems } from "@/components/dashboard/sidebar";
import { Badge } from "@/components/ui/badge";
import { initials } from "@/lib/format";
import type { User } from "@/lib/auth/types";

export function Topbar({ user, onMenuClick }: { user: User; onMenuClick: () => void }) {
  const pathname = usePathname();
  const title =
    navItems.find((item) => (item.exact ? pathname === item.href : pathname.startsWith(item.href)))
      ?.label ?? "Dashboard";

  return (
    <header className="bg-background/80 sticky top-0 z-40 border-b border-border backdrop-blur-md">
      <div className="flex h-16 items-center gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="-ml-1 flex size-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted lg:hidden"
        >
          <Menu className="size-5" />
        </button>

        <h1 className="text-base font-bold tracking-tight text-foreground sm:text-lg">{title}</h1>

        <div className="ml-auto flex items-center gap-3">
          <Badge variant="secondary" className="hidden capitalize sm:inline-flex">
            {user.plan} plan
          </Badge>
          <button
            type="button"
            aria-label="Notifications"
            className="relative flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Bell className="size-5" />
            <span className="absolute right-2 top-2 size-2 rounded-full bg-red-500 ring-2 ring-background" />
          </button>
          <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-xs font-bold text-white">
            {initials(user.name)}
          </span>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";

import { JourneyProvider } from "@/components/dashboard/journey";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import { serverCompletionHints } from "@/lib/journey";
import type { User } from "@/lib/auth/types";

export function DashboardShell({ user, children }: { user: User; children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-muted/40 min-h-screen">
      <Sidebar user={user} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-h-screen flex-col lg:pl-64">
        <Topbar user={user} onMenuClick={() => setSidebarOpen(true)} />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <JourneyProvider user={user} serverHints={serverCompletionHints(user)}>
            {children}
          </JourneyProvider>
        </main>
      </div>
    </div>
  );
}

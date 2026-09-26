"use client";

import { useState } from "react";

import { JourneyProvider } from "@/components/dashboard/journey";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Topbar } from "@/components/dashboard/topbar";
import type { User } from "@/lib/auth/types";
import type { CompletedMap } from "@/lib/journey";

export function DashboardShell({
  user,
  serverHints,
  children
}: {
  user: User;
  serverHints: CompletedMap;
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-muted/40 min-h-screen">
      <Sidebar user={user} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-h-screen flex-col lg:pl-64">
        <Topbar user={user} onMenuClick={() => setSidebarOpen(true)} />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
          <JourneyProvider user={user} serverHints={serverHints}>
            {children}
          </JourneyProvider>
        </main>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { DashboardShell } from "@/components/dashboard/shell";
import { getCurrentUser } from "@/lib/auth";
import { serverCompletionHints } from "@/lib/journey";
import type { User } from "@/lib/auth/types";

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | FoundersDeck",
  },
};

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  // Sanitize the user object to ensure absolute serializability.
  // This prevents "Server Components render" crashes caused by
  // non-serializable fields (functions, Maps, etc.) in the User object.
  const sanitizedUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    businessPlanCompleted: user.businessPlanCompleted,
  } as User;

  const hints = serverCompletionHints(sanitizedUser);

  return <DashboardShell user={sanitizedUser} serverHints={hints}>{children}</DashboardShell>;
}

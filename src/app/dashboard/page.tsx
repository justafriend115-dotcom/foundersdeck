import { Overview } from "@/components/dashboard/overview";
import { getCurrentUser } from "@/lib/auth";
import { serverCompletionHints } from "@/lib/journey";

export const metadata = { title: "Overview" };

export default async function DashboardHomePage() {
  const user = await getCurrentUser();

  if (!user) {
    // In a real app, we might use redirect("/login") from next/navigation
    // For now, we provide a safe default to prevent the server render crash
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">Please sign in to access your dashboard.</p>
      </div>
    );
  }

  return (
    <Overview
      name={user.name ?? "Founder"}
      serverHints={serverCompletionHints(user)}
    />
  );
}

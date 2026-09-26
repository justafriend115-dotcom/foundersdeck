import { Overview } from "@/components/dashboard/overview";
import { getCurrentUser } from "@/lib/auth";
import { serverCompletionHints } from "@/lib/journey";

export const metadata = { title: "Overview" };

export default async function DashboardHomePage() {
  let user;
  try {
    user = await getCurrentUser();
  } catch (e) {
    console.error("Auth error in page:", e);
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-muted-foreground">An authentication error occurred. Please try logging in again.</p>
      </div>
    );
  }

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

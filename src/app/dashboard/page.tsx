import { Overview } from "@/components/dashboard/overview";
import { getCurrentUser } from "@/lib/auth";
import { serverCompletionHints } from "@/lib/journey";

export const metadata = { title: "Overview" };

export default async function DashboardHomePage() {
  const user = await getCurrentUser();

  return (
    <Overview
      name={user?.name ?? "Founder"}
      serverHints={serverCompletionHints(user ?? { businessPlanCompleted: false } as never)}
    />
  );
}

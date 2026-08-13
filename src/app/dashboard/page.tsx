import { Overview } from "@/components/dashboard/overview";
import { getCurrentUser } from "@/lib/auth";

export const metadata = { title: "Overview" };

export default async function DashboardHomePage() {
  const user = await getCurrentUser();

  return <Overview name={user?.name ?? "Founder"} plan={user?.plan ?? "free"} />;
}

import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/auth";

import { DeckademyBillingCard } from "@/components/deckademy/billing-card";

export const metadata = { title: "DECKADEMY Membership" };

export default async function DeckademyBillingPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/login?next=/deckademy/billing");

  return (
    <DeckademyBillingCard
      name={user.name}
      isMember={user.deckademyPlan === "member"}
    />
  );
}
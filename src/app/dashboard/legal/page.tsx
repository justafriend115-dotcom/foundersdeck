import { redirect } from "next/navigation";

import { LegalHub } from "@/components/tools/legal-hub";
import { getCurrentUser } from "@/lib/auth";

export const metadata = { title: "Legal Hub" };

export default function LegalPage() {
  const user = getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  return <LegalHub />;
}

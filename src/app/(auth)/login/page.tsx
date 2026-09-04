import type { Metadata } from "next";

import { AuthCard } from "@/components/auth/auth-card";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Log in",
};

export default function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      description="Log in to keep building your startup."
    >
      <AuthForm mode="login" />
    </AuthCard>
  );
}

import type { Metadata } from "next";

import { AuthCard } from "@/components/auth/auth-card";
import { AuthForm } from "@/components/auth/auth-form";

export const metadata: Metadata = {
  title: "Create your account",
};

export default function SignupPage() {
  return (
    <AuthCard title="Create your account" description="Free forever — no credit card required.">
      <AuthForm mode="signup" />
    </AuthCard>
  );
}

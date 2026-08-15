import type { Metadata } from "next";

import { AuthCard } from "@/components/auth/auth-card";
import { ResetPasswordForm } from "@/components/auth/reset-password-form";

export const metadata: Metadata = {
  title: "Change password",
};

export default function ResetPasswordPage() {
  return (
    <AuthCard title="Change your password" description="Verify your current password, then choose a new one.">
      <ResetPasswordForm />
    </AuthCard>
  );
}

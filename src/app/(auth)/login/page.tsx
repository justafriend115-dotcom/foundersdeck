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
      footer={
        <p>
          Demo account:{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">
            demo@foundersdeck.com
          </code>{" "}
          / <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-foreground">demo1234</code>
        </p>
      }
    >
      <AuthForm mode="login" />
    </AuthCard>
  );
}

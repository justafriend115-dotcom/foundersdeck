import type { Metadata } from "next";
import { ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";

import { AuthCard } from "@/components/auth/auth-card";

export const metadata: Metadata = {
  title: "Forgot password",
};

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      title="Forgot your password?"
      description="Reset requires verified access to your account. Log in and change your password from there."
    >
      <div className="space-y-5">
        <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-4">
          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-500">
            <Lock className="size-4 text-brand-300" />
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            For security, password changes require your{" "}
            <span className="font-medium text-foreground">current password</span>. Log in to your
            account, then use the <span className="font-medium text-foreground">Change password</span>{" "}
            flow to set a new one.
          </p>
        </div>

        <Link
          href="/login"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-lg shadow-black/25 transition-colors hover:bg-navy-800"
        >
          Log in to change your password
        </Link>

        <p className="text-center text-sm text-muted-foreground">
          Need an account?{" "}
          <Link href="/signup" className="font-medium text-brand-700 hover:text-brand-800">
            Sign up
          </Link>
        </p>
        <p className="text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 hover:text-brand-800"
          >
            <ArrowLeft className="size-4" />
            Back to log in
          </Link>
        </p>
      </div>
    </AuthCard>
  );
}
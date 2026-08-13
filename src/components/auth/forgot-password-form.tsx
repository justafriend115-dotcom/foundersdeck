"use client";

import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sentTo, setSentTo] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const email = new FormData(event.currentTarget).get("email");
    if (typeof email !== "string" || !email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const json = await res.json();
      if (!json.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      setSentTo(email.trim());
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (sentTo) {
    return (
      <div className="space-y-4 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="size-6 text-emerald-600" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-foreground">Check your inbox</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            If an account exists for <span className="font-medium text-foreground">{sentTo}</span>,
            reset instructions are on the way.
          </p>
        </div>
        <Link
          href="/login"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          <ArrowLeft className="size-4" />
          Back to log in
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@startup.com"
        />
      </div>

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <Button type="submit" variant="gradient" className="w-full" disabled={loading}>
        {loading && <Loader2 className="animate-spin" />}
        Send reset link
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Remembered it?{" "}
        <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-700">
          Back to log in
        </Link>
      </p>
    </form>
  );
}

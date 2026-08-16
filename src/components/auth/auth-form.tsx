"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordField } from "@/components/auth/password-field";
import { trackEvent } from "@/lib/analytics";
import { validatePassword } from "@/lib/password-rules";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const isLogin = mode === "login";
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const nextRef = useRef<string | null>(null);

  useEffect(() => {
    if (isLogin) {
      nextRef.current = new URLSearchParams(window.location.search).get("next");
    }
  }, [isLogin]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const data = new FormData(event.currentTarget);
    if (String(data.get("company_website") ?? "").length > 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        router.push("/dashboard");
      }, 800);
      return;
    }
    const email = String(data.get("email") ?? "").trim();

    if (!isEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (isLogin && password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (!isLogin) {
      const passwordError = validatePassword(password);
      if (passwordError) {
        setError(passwordError);
        return;
      }
      if (password !== String(data.get("confirmPassword") ?? "")) {
        setError("Passwords do not match.");
        return;
      }
    }

    setLoading(true);
    try {
      const res = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: String(data.get("name") ?? "").trim(), email, password }),
      });
      const json = await res.json();
      if (!json.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        return;
      }
      trackEvent(isLogin ? "login" : "sign_up", { method: "email" });
      const next = nextRef.current;
      router.push(next?.startsWith("/") ? next : "/dashboard");
      router.refresh();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      {!isLogin && (
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Full name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Ada Lovelace"
          />
        </div>
      )}

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

      <div>
        <div className="mb-1.5 flex items-center justify-between">
          <label htmlFor="password" className="text-sm font-medium text-foreground">
            Password
          </label>
          {isLogin && (
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-primary hover:text-secondary"
            >
              Forgot password?
            </Link>
          )}
        </div>
        <PasswordField
          id="password"
          name="password"
          value={password}
          onChange={setPassword}
          autoComplete={isLogin ? "current-password" : "new-password"}
          placeholder={isLogin ? "Your password" : "8–72 characters"}
          showRules={!isLogin}
        />
      </div>

      {!isLogin && (
        <>
          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-1.5 block text-sm font-medium text-foreground"
            >
              Confirm password
            </label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              autoComplete="new-password"
              placeholder="Repeat your password"
            />
          </div>
          <label className="flex items-start gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              name="terms"
              required
              className="mt-0.5 size-4 rounded border-border accent-primary"
            />
            <span>
              I agree to the <span className="font-medium text-foreground">Terms of Service</span>{" "}
              and <span className="font-medium text-foreground">Privacy Policy</span>.
            </span>
          </label>
        </>
      )}

      {error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      )}

      <Button type="submit" variant="gradient" className="w-full" disabled={loading}>
        {loading && <Loader2 className="animate-spin" />}
        {isLogin ? "Sign in" : "Create account"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        {isLogin ? (
          <>
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-primary hover:text-secondary">
              Sign up free
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-primary hover:text-secondary">
              Log in
            </Link>
          </>
        )}
      </p>
    </form>
  );
}

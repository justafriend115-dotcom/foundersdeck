"use client";

import { Loader2 } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CheckoutCta({
  tier,
  label,
  variant,
}: {
  tier: "free" | "raise_pass" | "pro" | "enterprise";
  label: string;
  variant: "gradient" | "outline";
}) {
  const [loading, setLoading] = useState(false);

  if (tier === "free") {
    return (
      <a href="/signup" className={cn(buttonVariants({ variant }), "mt-8 w-full")}>
        {label}
      </a>
    );
  }
  if (tier === "enterprise") {
    return (
      <a
        href="mailto:sales@foundersdeck.app"
        className={cn(buttonVariants({ variant }), "mt-8 w-full")}
      >
        {label}
      </a>
    );
  }

  async function startCheckout() {
    setLoading(true);
    try {
      const response = await fetch("/api/billing/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: tier }),
      });
      const json = await response.json();
      if (response.status === 401) {
        window.location.href = "/login?next=/pricing";
        return;
      }
      if (json?.ok && json.url) {
        window.location.href = json.url;
        return;
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={startCheckout}
      className={cn(buttonVariants({ variant }), "mt-8 w-full")}
    >
      {loading && <Loader2 className="animate-spin" />}
      {label}
    </button>
  );
}

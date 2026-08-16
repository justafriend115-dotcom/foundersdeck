"use client";

import { CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

function CompleteContent() {
  const params = useSearchParams();
  const sessionId = params.get("session_id") ?? "";
  const rawPlan = params.get("plan");
  const isDeckademy = rawPlan === "deckademy";
  const plan = isDeckademy
    ? "DECKADEMY"
    : rawPlan === "enterprise"
      ? "Enterprise"
      : "Pro";
  const [state, setState] = useState<"verifying" | "done" | "error">("verifying");

  useEffect(() => {
    if (!sessionId.startsWith("stub_")) {
      setState("done");
      return;
    }
    fetch("/api/billing/complete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, plan: plan.toLowerCase() }),
    })
      .then((response) => response.json())
      .then((json) => setState(json?.ok ? "done" : "error"))
      .catch(() => setState("error"));
  }, [sessionId, plan]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-10 text-center">
          {state === "verifying" && (
            <>
              <Loader2 className="mx-auto size-10 animate-spin text-steel-600" />
              <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-foreground">
                Confirming your subscription…
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">This only takes a second.</p>
            </>
          )}
          {state === "done" && (
            <>
              <CheckCircle2 className="mx-auto size-12 text-emerald-500" />
              <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-foreground">
                {isDeckademy
                  ? "You're now a DECKADEMY member!"
                  : `You're on the ${plan} plan!`}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                {isDeckademy
                  ? "All 8 tracks and certificates are unlocked. Happy learning!"
                  : "Your account has been upgraded. Head back to the dashboard to keep building."}
              </p>
              <Link
                href={isDeckademy ? "/deckademy" : "/dashboard"}
                className={cn(buttonVariants({ variant: "gradient" }), "mt-8 w-full")}
              >
                {isDeckademy ? "Start learning" : "Go to dashboard"}
              </Link>
            </>
          )}
          {state === "error" && (
            <>
              <h1 className="mt-6 text-2xl font-extrabold tracking-tight text-foreground">
                Something went wrong
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                We couldn&apos;t confirm your payment. Please try again.
              </p>
              <Link
                href="/#pricing"
                className={cn(buttonVariants({ variant: "outline" }), "mt-8 w-full")}
              >
                Back to pricing
              </Link>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function BillingCompletePage() {
  return (
    <Suspense>
      <CompleteContent />
    </Suspense>
  );
}

"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Container className="py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
          Something went wrong
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          An unexpected error occurred
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          {error.message || "Please try again. If the problem persists, contact support."}
        </p>
        <Button variant="gradient" size="lg" className="mt-8" onClick={() => reset()}>
          Try again
        </Button>
      </Container>
    </div>
  );
}

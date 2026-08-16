import Link from "next/link";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-border/60 bg-background/80 border-b backdrop-blur">
        <Container className="flex h-16 items-center">
          <Logo />
        </Container>
      </header>
      <main className="flex flex-1 items-center justify-center">
        <Container className="py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-steel-600">404</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            This page took the money and ran
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist  but your idea still does.
          </p>
          <Link href="/" className="mt-8 inline-block">
            <Button variant="gradient" size="lg">
              Back to home
            </Button>
          </Link>
        </Container>
      </main>
    </div>
  );
}

import { CreditCard, ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

export default function FinalCta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-500 px-6 py-20 text-center shadow-2xl shadow-navy-950/40 sm:px-16">
          <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-brand-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 size-96 rounded-full bg-brand-400/10 blur-3xl" />

          <h2 className="relative mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Your first round starts with a single deck
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg text-brand-100/80">
            Join thousands of founders building with FoundersDeck. Free to start  no credit card,
            no commitment.
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className={cn(
                "inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-brand-500 px-8 text-base font-semibold text-navy-950 shadow-lg shadow-black/30 transition-all hover:bg-brand-400 [&_svg]:size-4",
              )}
            >
              Start building free
              <ArrowRight />
            </Link>
          </div>
          <p className="relative mt-5 flex items-center justify-center gap-1.5 text-sm text-brand-200/60">
            <CreditCard className="size-4" />
            No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}

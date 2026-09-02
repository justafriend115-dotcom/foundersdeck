import { CreditCard, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="bg-[#0D1325] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#1E2D45] bg-[#0F1628] px-6 py-20 text-center sm:px-16">
          <h2
            className="mx-auto max-w-2xl text-4xl tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Your first round starts with a single deck
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Join thousands of founders building with FoundersDeck. Free to start — no credit card,
            no commitment.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-8 text-base font-semibold text-white transition-opacity hover:opacity-90 [&_svg]:size-4"
            >
              Start building free
              <ArrowRight />
            </Link>
          </div>
          <p className="mt-5 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
            <CreditCard className="size-4" />
            No credit card required
          </p>
        </div>
      </div>
    </section>
  );
}

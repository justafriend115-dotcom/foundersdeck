import { Zap } from "lucide-react";

export const metadata = { title: "Pitch Generator" };

export default function PitchPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex size-16 items-center justify-center rounded-2xl border border-[#2D2923] bg-[#161410]">
        <Zap className="size-7 text-[#C9A441]" />
      </div>
      <h1 className="mb-3 text-2xl font-semibold tracking-tight text-foreground">
        AI is stuck in traffic
      </h1>
      <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
        The Pitch Deck Generator is almost ready — we&apos;re putting the finishing touches on the
        AI engine. Check back very soon.
      </p>
      <p className="mt-6 text-xs text-muted-foreground/60">Coming soon &mdash; FoundersDeck</p>
    </div>
  );
}

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { ComingSoonLottie } from "@/components/coming-soon-lottie";

export const metadata = { title: "Coming soon" };

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 py-16">
      <div className="relative w-full max-w-3xl">
        {/* Lottie animation  coding ape at work */}
        <ComingSoonLottie className="mx-auto w-full max-w-[420px] sm:max-w-[480px]" />

        <div className="mt-6 text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-slate-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-secondary" />
            </span>
            MB is working on it
          </div>
          <h1 className="coming-soon-title mt-4 text-5xl font-black tracking-tight text-white sm:text-7xl">
            {"COMING SOON".split("").map((char, i) => (
              <span
                key={i}
                className="inline-block"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/70">
            MB is working on this right now  keep calm and stay tuned. It&apos;ll be
            worth the wait.
          </p>

          {/* Progress bar */}
          <div className="mx-auto mt-8 max-w-sm">
            <div className="h-3 overflow-hidden rounded-full border border-white/20 bg-card/10">
              <div className="build-bar h-full rounded-full bg-primary" />
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/50">
              Build progress  MB is on it
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-background/40 transition-colors hover:bg-secondary"
            >
              <ArrowLeft className="size-4" />
              Back to dashboard
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-card/10"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .coming-soon-title span {
          animation: letter-bounce 1.4s ease-in-out infinite;
        }
        @keyframes letter-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .build-bar {
          width: 42%;
          animation: build-progress 2.4s ease-in-out infinite;
        }
        @keyframes build-progress {
          0% {
            width: 12%;
          }
          50% {
            width: 68%;
          }
          100% {
            width: 12%;
          }
        }
      `}</style>
    </main>
  );
}
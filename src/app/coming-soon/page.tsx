import Link from "next/link";
import { ArrowLeft, HardHat } from "lucide-react";

export const metadata = { title: "Coming soon" };

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#1e1b2e_0%,#2d1b4e_45%,#7c3aed_100%)] px-4 py-16">
      {/* Hazard tape top + bottom */}
      <div className="absolute inset-x-0 top-0 h-5 hazard-stripes" />
      <div className="absolute inset-x-0 bottom-0 h-5 hazard-stripes" />

      {/* Construction scene */}
      <div className="relative w-full max-w-3xl">
        <div className="relative mx-auto h-72 w-full max-w-2xl">
          {/* Ground */}
          <div className="absolute bottom-0 left-0 right-0 h-14 rounded-2xl bg-[#3b2f1f] shadow-[inset_0_6px_0_rgba(255,255,255,0.08)]" />

          {/* Brick wall rising */}
          <div className="absolute bottom-14 left-6 h-20 w-44 overflow-hidden rounded-t-lg border-4 border-[#8a5a2b] bg-[#c4743a]">
            <div className="brick-pattern h-full w-full origin-bottom" />
          </div>

          {/* Scaffolding */}
          <div className="absolute bottom-14 left-6 top-10 flex h-40 w-44 flex-col justify-between border-x-4 border-[#5b4a2f]">
            <div className="h-1.5 bg-[#8a6d3f]" />
            <div className="h-1.5 bg-[#8a6d3f]" />
            <div className="h-1.5 bg-[#8a6d3f]" />
          </div>

          {/* Worker on scaffolding — hammering */}
          <div className="worker absolute bottom-[68px] left-16">
            <div className="worker-body">
              <span className="worker-hardhat" />
              <span className="worker-head" />
              <span className="worker-torso" />
              <span className="worker-legs" />
              <span className="worker-hammer" />
              <span className="spark spark-1" />
              <span className="spark spark-2" />
              <span className="spark spark-3" />
            </div>
          </div>

          {/* Crane */}
          <div className="absolute bottom-14 left-56 hidden h-[200px] w-10 sm:block">
            <div className="crane-mast absolute bottom-0 left-1/2 h-full w-2 -translate-x-1/2 bg-[#e8b23a] shadow-[inset_-2px_0_0_rgba(0,0,0,0.2)]" />
            <div className="absolute left-1/2 top-0 h-3 w-24 -translate-x-1/2 rounded-md bg-[#e8b23a] shadow-[inset_-4px_0_0_rgba(0,0,0,0.2)]" />
            <div className="crane-jib absolute left-1/2 top-0 h-2 w-64 origin-left -translate-x-1/2 rotate-[-8deg] rounded-full bg-[#e8b23a] shadow-[inset_-6px_0_0_rgba(0,0,0,0.2)]" />
            {/* Cable + hook swinging */}
            <div className="crane-cable absolute top-1 left-[calc(50%-44px)] h-24 w-px origin-top bg-white/50" />
            <div className="absolute left-[calc(50%-49px)] top-[96px] text-xl">🪝</div>
            {/* Load */}
            <div className="crane-load absolute left-[calc(50%-70px)] top-[120px] flex h-8 w-14 items-center justify-center rounded-lg border-2 border-[#8a5a2b] bg-[#c4743a] text-[10px] font-black text-white">
              DECK
            </div>
          </div>

          {/* Worker on the ground — laying bricks */}
          <div className="ground-worker absolute bottom-[52px] right-24">
            <div className="worker-body">
              <span className="worker-hardhat" />
              <span className="worker-head" />
              <span className="worker-torso worker-torso-dark" />
              <span className="worker-legs" />
              <span className="worker-hammer worker-hammer-left" />
              <span className="spark spark-4" />
              <span className="spark spark-5" />
            </div>
          </div>

          {/* Cement mixer */}
          <div className="absolute bottom-[52px] right-6 h-14 w-20">
            <div className="cement-mixer absolute bottom-0 left-0 h-10 w-10 rounded-full border-4 border-[#5b4a2f] bg-[#a98748]" />
            <div className="absolute bottom-0 right-0 h-8 w-14 rounded-md bg-[#8a6d3f]" />
          </div>

          {/* Dust puffs */}
          <span className="dust dust-1 absolute bottom-[46px] left-24" />
          <span className="dust dust-2 absolute bottom-[46px] left-40" />

          {/* Floating bobbing crane cab + sun glow */}
          <div className="absolute right-10 top-0 text-5xl opacity-40">☀️</div>
        </div>

        {/* Bouncing headline */}
        <div className="mt-10 text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-lime-300">
            <HardHat className="size-4 animate-bounce" />
            Under construction
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
            The founders are building this right now — hammering the last nails and polishing the
            paint. It&apos;ll be worth the wait.
          </p>

          {/* Progress bar */}
          <div className="mx-auto mt-8 max-w-sm">
            <div className="h-3 overflow-hidden rounded-full border border-white/20 bg-white/10">
              <div className="build-bar h-full rounded-full bg-gradient-to-r from-lime-400 to-emerald-400" />
            </div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-white/50">
              Build progress — the crew is on it
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-7 py-3.5 text-sm font-bold text-[#111827] shadow-lg shadow-lime-500/25 transition-colors hover:bg-lime-300"
            >
              <ArrowLeft className="size-4" />
              Back to dashboard
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .hazard-stripes {
          background: repeating-linear-gradient(
            -45deg,
            #facc15 0 22px,
            #111827 22px 44px
          );
        }
        .brick-pattern {
          background:
            linear-gradient(#0000 0, rgba(0, 0, 0, 0.25) 55%, #0000 57%),
            repeating-linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.18) 0 12px,
              transparent 12px 26px
            );
          transform-origin: bottom;
          animation: build-wall 2.6s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate;
        }
        @keyframes build-wall {
          from {
            transform: scaleY(0.25);
          }
          to {
            transform: scaleY(1);
          }
        }
        .crane-jib {
          transform-origin: right center;
          animation: jib-nod 3.5s ease-in-out infinite;
        }
        @keyframes jib-nod {
          0%,
          100% {
            transform: rotate(-8deg);
          }
          50% {
            transform: rotate(-11deg);
          }
        }
        .crane-cable {
          animation: cable-swing 3.5s ease-in-out infinite;
        }
        @keyframes cable-swing {
          0%,
          100% {
            transform: rotate(-12deg);
          }
          50% {
            transform: rotate(12deg);
          }
        }
        .crane-load {
          animation: load-swing 3.5s ease-in-out infinite;
        }
        @keyframes load-swing {
          0%,
          100% {
            transform: rotate(-12deg) translateY(0);
          }
          50% {
            transform: rotate(12deg) translateY(-3px);
          }
        }
        .worker-body {
          position: relative;
          width: 34px;
          height: 74px;
        }
        .worker-hardhat {
          position: absolute;
          top: 0;
          left: 50%;
          width: 26px;
          height: 11px;
          transform: translateX(-50%);
          border-radius: 6px 6px 2px 2px;
          background: #facc15;
          box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.25);
        }
        .worker-hardhat::after {
          content: "";
          position: absolute;
          top: 8px;
          left: 4px;
          width: 18px;
          height: 4px;
          border-radius: 2px;
          background: #eab308;
        }
        .worker-head {
          position: absolute;
          top: 10px;
          left: 50%;
          width: 16px;
          height: 16px;
          transform: translateX(-50%);
          border-radius: 50%;
          background: #fcd6b6;
        }
        .worker-torso {
          position: absolute;
          top: 25px;
          left: 50%;
          width: 20px;
          height: 26px;
          transform: translateX(-50%);
          border-radius: 6px 6px 3px 3px;
          background: #f97316;
          box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2);
        }
        .worker-torso-dark {
          background: #7c3aed;
        }
        .worker-legs {
          position: absolute;
          top: 50px;
          left: 50%;
          width: 20px;
          height: 22px;
          transform: translateX(-50%);
          background: #1f2937;
          clip-path: polygon(0 0, 40% 0, 40% 100%, 0 100%, 0 60%);
          animation: march 0.9s ease-in-out infinite;
        }
        @keyframes march {
          0%,
          100% {
            transform: translateX(-50%) rotate(-2deg);
          }
          50% {
            transform: translateX(-50%) rotate(2deg);
          }
        }
        .worker-hammer {
          position: absolute;
          top: 30px;
          left: 26px;
          width: 34px;
          height: 5px;
          border-radius: 3px;
          background: #92400e;
          transform-origin: left center;
          animation: hammer-swing 0.8s ease-in-out infinite;
        }
        .worker-hammer::before {
          content: "";
          position: absolute;
          top: -6px;
          right: -2px;
          width: 14px;
          height: 16px;
          border-radius: 3px;
          background: #475569;
        }
        .worker-hammer::after {
          content: "";
          position: absolute;
          top: -3px;
          left: 24px;
          width: 4px;
          height: 10px;
          border-radius: 2px;
          background: #92400e;
          transform: rotate(-12deg);
        }
        .worker-hammer-left {
          left: -14px;
          animation: hammer-swing-left 0.9s ease-in-out infinite;
        }
        @keyframes hammer-swing {
          0%,
          100% {
            transform: rotate(60deg);
          }
          50% {
            transform: rotate(-40deg);
          }
        }
        @keyframes hammer-swing-left {
          0%,
          100% {
            transform: rotate(-55deg);
          }
          50% {
            transform: rotate(45deg);
          }
        }
        .spark {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #fde047;
          opacity: 0;
        }
        .spark-1 {
          top: 26px;
          left: 52px;
          animation: sparkle 0.8s ease-out infinite;
        }
        .spark-2 {
          top: 20px;
          left: 58px;
          animation: sparkle 0.8s ease-out 0.2s infinite;
        }
        .spark-3 {
          top: 32px;
          left: 60px;
          animation: sparkle 0.8s ease-out 0.4s infinite;
        }
        .spark-4 {
          top: 26px;
          right: 18px;
          animation: sparkle 0.9s ease-out 0.15s infinite;
        }
        .spark-5 {
          top: 34px;
          right: 26px;
          animation: sparkle 0.9s ease-out 0.45s infinite;
        }
        @keyframes sparkle {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(6px, -10px) scale(0.3);
          }
        }
        .dust {
          position: absolute;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.35);
          animation: puff 1.6s ease-out infinite;
        }
        .dust-2 {
          animation-delay: 0.8s;
        }
        @keyframes puff {
          0% {
            opacity: 0.8;
            transform: translateY(0) scale(0.5);
          }
          100% {
            opacity: 0;
            transform: translateY(-18px) scale(1.6);
          }
        }
        .cement-mixer {
          animation: mixer-spin 1.6s linear infinite;
        }
        @keyframes mixer-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
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
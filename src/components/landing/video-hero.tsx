"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

const FADE_MS = 500;
const FADE_OUT_OFFSET = 0.55;

export default function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  function cancelRaf() {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }

  function animateOpacity(from: number, to: number, onDone?: () => void) {
    cancelRaf();
    const video = videoRef.current;
    if (!video) {
      onDone?.();
      return;
    }
    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - startTime) / FADE_MS, 1);
      video.style.opacity = String(from + (to - from) * t);
      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        video.style.opacity = String(to);
        rafRef.current = null;
        onDone?.();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
  }

  function currentOpacity(): number {
    const video = videoRef.current;
    if (!video || video.style.opacity === "") return 0;
    return parseFloat(video.style.opacity);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = "0";

    const handlePlaying = () => {
      if (!fadingOutRef.current) {
        animateOpacity(currentOpacity(), 1);
      }
    };

    const handleTimeUpdate = () => {
      if (!video.duration || fadingOutRef.current) return;
      if (video.currentTime >= video.duration - FADE_OUT_OFFSET) {
        fadingOutRef.current = true;
        animateOpacity(currentOpacity(), 0);
      }
    };

    const handleEnded = () => {
      fadingOutRef.current = false;
      cancelRaf();
      video.style.opacity = "0";
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        animateOpacity(0, 1);
      }, 100);
    };

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    video.play().catch(() => {});

    return () => {
      cancelRaf();
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background flex flex-col">
      {/* Background video */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover translate-y-[17%]"
        style={{ opacity: 0 }}
      />

      {/* Warm overlay */}
      <div className="absolute inset-0 bg-[#0C0B09]/68" />

      {/* Navigation */}
      <nav className="relative z-20 px-4 py-5 sm:px-6 sm:py-6">
        <div className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
          {/* Left: logo + links */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-white"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              {/* Ascending Deck mark — three staircase rectangles */}
              <svg width="22" height="20" viewBox="0 0 32 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="0"  y="14" width="18" height="14" rx="2.5" fill="#C9A441" opacity="0.35" />
                <rect x="7"  y="7"  width="18" height="14" rx="2.5" fill="#C9A441" opacity="0.65" />
                <rect x="14" y="0"  width="18" height="14" rx="2.5" fill="#C9A441" />
              </svg>
              <span className="text-base font-normal tracking-tight">
                Founders<span className="italic" style={{ color: "#C9A441" }}>Deck</span>
              </span>
            </Link>
            <div className="hidden items-center gap-6 md:flex">
              {[
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "About", href: "#about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: auth */}
          <div className="flex items-center gap-3">
            <Link href="/signup" className="hidden text-sm font-medium text-white/80 transition-opacity hover:opacity-80 sm:block">
              Sign Up
            </Link>
            <Link
              href="/login"
              className="liquid-glass rounded-full px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/5 sm:px-6 sm:py-2"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero content — two-column on large screens */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 lg:flex-row lg:items-center lg:gap-16 lg:px-12 lg:max-w-6xl lg:mx-auto lg:w-full">

        {/* Left: headline + CTAs */}
        <div className="flex-1 text-center lg:text-left">
          {/* Social proof eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/70">
            <span className="size-1.5 rounded-full bg-[#C9A441]" />
            47 founders raised this quarter using FoundersDeck
          </div>

          <h1
            className="text-balance text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Raise-ready<br />
            <em style={{ fontStyle: "italic", color: "#C9A441" }}>in 4 weeks.</em>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-white/60 lg:max-w-md">
            Seven tools that cover every document investors will ask for — from pitch deck to data room. Know exactly where you stand before your first meeting.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-[#0C0B09] transition-opacity hover:opacity-90"
              style={{ background: "#C9A441" }}
            >
              Get your raise-ready score
              <ArrowRight size={15} />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              See how it works
            </Link>
          </div>
        </div>

        {/* Right: raise-ready score widget */}
        <div className="mt-12 w-full max-w-xs shrink-0 lg:mt-0 lg:max-w-sm">
          <div
            className="rounded-2xl border border-white/10 p-6"
            style={{ background: "rgba(26,24,20,0.85)", backdropFilter: "blur(12px)" }}
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Raise-ready score</p>
                <p className="mt-0.5 text-xs text-white/40">Based on 7 investor checkpoints</p>
              </div>
              <p className="text-3xl font-semibold tabular-nums" style={{ fontFamily: "'Instrument Serif', serif", color: "#C9A441" }}>
                67<span className="text-base text-white/40">%</span>
              </p>
            </div>

            {/* Progress bar */}
            <div className="mb-5 h-1.5 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div className="h-full w-[67%] rounded-full" style={{ background: "#C9A441" }} />
            </div>

            {/* Checklist items */}
            <div className="space-y-3">
              {[
                { label: "Pitch deck", done: true },
                { label: "Financial model", done: true },
                { label: "Investor CRM", done: true },
                { label: "Data room", done: false, pct: "40%" },
                { label: "Legal documents", done: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between">
                  <span className="text-xs text-white/50">{item.label}</span>
                  {item.done ? (
                    <span className="rounded-full px-2 py-0.5 text-[10px] font-semibold" style={{ background: "rgba(201,164,65,0.15)", color: "#C9A441" }}>Done</span>
                  ) : (
                    <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-medium text-white/30" style={{ background: "rgba(255,255,255,0.04)" }}>
                      {item.pct ?? "Start"}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Deadline anchor */}
            <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4 text-xs text-white/40">
              Q4 investor season opens in
              <span className="rounded-full border border-[#9B7A2E]/50 px-2 py-0.5 text-[10px] font-semibold" style={{ background: "rgba(201,164,65,0.1)", color: "#C9A441" }}>
                29 days
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

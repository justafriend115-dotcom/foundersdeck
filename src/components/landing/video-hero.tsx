"use client";

import { ArrowRight, Camera, Globe, MessageCircle } from "lucide-react";
// Globe is kept for the social footer icon
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

      {/* Warm overlay — matches brand charcoal, not cold black */}
      <div className="absolute inset-0 bg-[#0C0B09]/60" />

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
              <svg width="20" height="18" viewBox="0 0 80 72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="20" y="4"  width="52" height="40" rx="5" fill="rgba(201,164,65,0.12)" stroke="#C9A441" strokeWidth="1.6" opacity="0.38" />
                <rect x="12" y="14" width="52" height="40" rx="5" fill="rgba(201,164,65,0.14)" stroke="#C9A441" strokeWidth="1.6" opacity="0.62" />
                <rect x="4"  y="24" width="52" height="40" rx="5" fill="rgba(201,164,65,0.18)" stroke="#C9A441" strokeWidth="1.8" />
                <line x1="12" y1="37" x2="47" y2="37" stroke="#C9A441" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
                <line x1="12" y1="44" x2="38" y2="44" stroke="#C9A441" strokeWidth="1.4" strokeLinecap="round" opacity="0.35" />
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

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-12 text-center">
        <h1
          className="mb-8 text-balance text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Built for the curious
        </h1>

        <div className="w-full max-w-xl space-y-4">
          {/* Email subscribe bar */}
          <div className="liquid-glass flex items-center gap-3 rounded-full py-2 pl-6 pr-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-base text-white outline-none placeholder:text-white/40"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex shrink-0 items-center justify-center rounded-full bg-white p-3 text-black transition-opacity hover:opacity-90"
            >
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Subtitle */}
          <p className="px-4 text-sm leading-relaxed text-white">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and
            never miss out on exciting updates.
          </p>

          {/* Manifesto */}
          <div className="flex justify-center">
            <button
              type="button"
              className="liquid-glass rounded-full px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              Read our manifesto
            </button>
          </div>
        </div>
      </div>

      {/* Social footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        {[
          { icon: Camera, label: "Instagram" },
          { icon: MessageCircle, label: "Twitter" },
          { icon: Globe, label: "Website" },
        ].map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </div>
  );
}

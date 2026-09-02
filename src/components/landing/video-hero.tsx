"use client";

import { ArrowRight, Globe, Instagram, Twitter } from "lucide-react";
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
    <div className="relative min-h-screen overflow-hidden bg-black flex flex-col">
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

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-6 py-3">
          {/* Left: logo + links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-white">
              <Globe size={24} />
              <span>FoundersDeck</span>
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              {[
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "About", href: "#about" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: auth */}
          <div className="flex items-center gap-4">
            <Link href="/signup" className="text-sm font-medium text-white transition-opacity hover:opacity-80">
              Sign Up
            </Link>
            <Link
              href="/login"
              className="liquid-glass rounded-full px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 -translate-y-[20%] flex-col items-center justify-center px-6 py-12 text-center">
        <h1
          className="mb-8 whitespace-nowrap text-5xl tracking-tight text-white md:text-6xl lg:text-7xl"
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
          { icon: Instagram, label: "Instagram" },
          { icon: Twitter, label: "Twitter" },
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

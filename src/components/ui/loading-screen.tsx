"use client";

import { useEffect, useRef, useState } from "react";

// ── Shared shimmer skeleton ──────────────────────────────────────────────────

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-lg ${className ?? ""}`}
      style={{
        background: "linear-gradient(90deg, #1E1B16 25%, #2A2520 50%, #1E1B16 75%)",
        backgroundSize: "200% 100%",
        animation: "fdShimmer 1.6s ease-in-out infinite",
      }}
    />
  );
}

// ── Desktop interactive loading ──────────────────────────────────────────────

const MESSAGES = [
  "Preparing your workspace…",
  "Loading founder tools…",
  "Syncing your data…",
  "Configuring your stack…",
  "Almost ready…",
];

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  gold: boolean;
};

function DesktopLoader({ title }: { title: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setMsgIdx((i) => (i + 1) % MESSAGES.length), 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sync = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    sync();

    const ro = new ResizeObserver(sync);
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    canvas.addEventListener("mousemove", onMove);

    const nodes: Node[] = Array.from({ length: 58 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      r: Math.random() * 1.8 + 1.1,
      gold: Math.random() < 0.18,
    }));

    let raf: number;

    const tick = () => {
      const W = canvas.width;
      const H = canvas.height;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.fillStyle = "#0C0B09";
      ctx.fillRect(0, 0, W, H);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Soft mouse attraction
        const dx = mx - n.x;
        const dy = my - n.y;
        const md = Math.sqrt(dx * dx + dy * dy);
        if (md < 210 && md > 0) {
          n.vx += (dx / md) * 0.02;
          n.vy += (dy / md) * 0.02;
        }

        n.vx *= 0.983;
        n.vy *= 0.983;
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) n.x += W;
        if (n.x > W) n.x -= W;
        if (n.y < 0) n.y += H;
        if (n.y > H) n.y -= H;

        // Edges to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const ex = m.x - n.x;
          const ey = m.y - n.y;
          const ed = Math.sqrt(ex * ex + ey * ey);
          if (ed < 135) {
            const t = 1 - ed / 135;
            const isGold = n.gold || m.gold;
            ctx.beginPath();
            ctx.lineWidth = isGold ? 0.9 : 0.5;
            ctx.strokeStyle = isGold
              ? `rgba(201,164,65,${t * 0.52})`
              : `rgba(45,41,35,${t * 0.95})`;
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes on top of edges
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.gold
          ? "rgba(201,164,65,0.88)"
          : "rgba(139,125,107,0.42)";
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="relative flex min-h-[72vh] items-center justify-center overflow-hidden rounded-xl border border-border">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Radial glow behind text */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,164,65,0.075) 0%, transparent 68%)",
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 flex select-none flex-col items-center gap-3 text-center">
        <div
          className="mb-1 flex size-12 items-center justify-center rounded-xl border border-[#C9A441]/30 text-sm font-bold tracking-widest text-[#C9A441]"
          style={{ background: "rgba(201,164,65,0.07)" }}
        >
          FD
        </div>

        <p className="text-[15px] font-semibold text-foreground">{title}</p>

        <p
          className="text-[13px] text-muted-foreground"
          style={{ minWidth: "14rem", transition: "opacity 0.35s" }}
        >
          {MESSAGES[msgIdx]}
        </p>

        <div className="mt-1 flex gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="size-1.5 rounded-full bg-[#C9A441]/55"
              style={{ animation: `fdDot 1.4s ease-in-out ${i * 0.22}s infinite` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Public component ─────────────────────────────────────────────────────────

export function LoadingScreen({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Desktop: interactive canvas */}
      <div className="hidden lg:block">
        <DesktopLoader title={title} />
      </div>

      {/* Mobile: page-specific skeleton */}
      <div className="lg:hidden">{children}</div>

      <style>{`
        @keyframes fdShimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes fdDot {
          0%, 80%, 100% { opacity: 0.22; transform: scale(0.8); }
          40%            { opacity: 1;    transform: scale(1);   }
        }
      `}</style>
    </>
  );
}

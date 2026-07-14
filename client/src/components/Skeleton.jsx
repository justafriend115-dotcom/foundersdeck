// client/src/components/Skeleton.jsx — reusable skeleton loading primitives

/** Basic shimmering block. Size with width/height; shape with radius. */
export function Skeleton({ width = "100%", height = 14, radius = 6, style = {} }) {
  return (
    <div
      className="skeleton"
      style={{ width, height, borderRadius: radius, ...style }}
    />
  );
}

/** A row of shimmering text lines (last line shorter, like real text). */
export function SkeletonText({ lines = 3, gap = 10 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap }}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} height={12} width={i === lines - 1 ? "60%" : "100%"} />
      ))}
    </div>
  );
}

/** Skeleton for a session-history row (icon + title + meta + actions). */
export function SessionRowSkeleton() {
  return (
    <div className="glass-card" style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 16 }}>
      <Skeleton width={44} height={44} radius={12} style={{ flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
          <Skeleton width={140} height={14} />
          <Skeleton width={70} height={14} radius={99} />
        </div>
        <Skeleton width="70%" height={11} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
        <Skeleton width={72} height={10} />
        <Skeleton width={58} height={26} radius={8} />
      </div>
    </div>
  );
}

/** Skeleton list of session rows. */
export function SessionListSkeleton({ rows = 4 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {Array.from({ length: rows }).map((_, i) => (
        <SessionRowSkeleton key={i} />
      ))}
    </div>
  );
}

/** Skeleton stat card (icon + number + label). */
export function StatCardSkeleton() {
  return (
    <div className="glass-card" style={{ padding: "18px 20px" }}>
      <Skeleton width={26} height={26} radius={8} style={{ marginBottom: 12 }} />
      <Skeleton width={64} height={22} style={{ marginBottom: 8 }} />
      <Skeleton width={90} height={11} />
    </div>
  );
}

/** Full dashboard skeleton — mirrors the Dashboard layout. */
export function DashboardSkeleton() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 0 60px" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <Skeleton width={130} height={11} style={{ marginBottom: 12 }} />
        <Skeleton width={260} height={26} style={{ marginBottom: 10 }} />
        <Skeleton width={100} height={13} />
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 14, marginBottom: 32 }}>
        {Array.from({ length: 4 }).map((_, i) => <StatCardSkeleton key={i} />)}
      </div>

      {/* Health bar */}
      <div className="glass-card" style={{ padding: "20px 24px", marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
          <Skeleton width={180} height={15} />
          <Skeleton width={46} height={20} />
        </div>
        <Skeleton height={10} radius={99} style={{ marginBottom: 16 }} />
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} width={110} height={12} />)}
        </div>
      </div>

      {/* Two-column: recent sessions + quick launch */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {Array.from({ length: 2 }).map((_, col) => (
          <div key={col}>
            <Skeleton width={130} height={15} style={{ marginBottom: 14 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="glass-card" style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                  <Skeleton width={24} height={24} radius={8} style={{ flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <Skeleton width="70%" height={13} style={{ marginBottom: 6 }} />
                    <Skeleton width="40%" height={10} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Skeleton for sidebar project list rows. */
export function SidebarProjectsSkeleton({ rows = 3 }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "4px 12px" }}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 12px" }}>
          <Skeleton width={8} height={8} radius="50%" style={{ flexShrink: 0 }} />
          <Skeleton width={`${75 - i * 12}%`} height={12} />
        </div>
      ))}
    </div>
  );
}

/** Skeleton shown while AI output is generating — mimics the formatted output card. */
export function OutputSkeleton({ accent = "#6C63FF", message }) {
  return (
    <div>
      <div style={{ marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 18, height: 18, flexShrink: 0, borderRadius: "50%",
          border: `2px solid ${accent}33`, borderTopColor: accent,
          animation: "spin 0.8s linear infinite",
        }} />
        <span style={{ fontSize: 13, color: "var(--text-secondary)", fontStyle: "italic" }}>
          {message || "Generating…"}
        </span>
      </div>
      <div className="glass-card" style={{ padding: 28 }}>
        <Skeleton width="45%" height={18} style={{ marginBottom: 18 }} />
        <SkeletonText lines={3} />
        <div style={{ height: 22 }} />
        <Skeleton width="35%" height={16} style={{ marginBottom: 14 }} />
        <SkeletonText lines={4} />
        <div style={{ height: 22 }} />
        <Skeleton width="40%" height={16} style={{ marginBottom: 14 }} />
        <SkeletonText lines={2} />
      </div>
    </div>
  );
}

/** Centered full-view spinner for lazy-loaded views. */
export function ViewLoader() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh" }}>
      <div style={{
        width: 32, height: 32, borderRadius: "50%",
        border: "3px solid rgba(108,99,255,0.2)", borderTopColor: "#6C63FF",
        animation: "spin 0.8s linear infinite",
      }} />
    </div>
  );
}

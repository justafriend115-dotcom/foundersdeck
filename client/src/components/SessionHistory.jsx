// client/src/components/SessionHistory.jsx
import { TOOLS } from "../tools/toolConfig.js";
import { categoryMeta } from "../styles/tokens.js";

export default function SessionHistory({ sessions, onOpenSession, onDeleteSession }) {
  const sorted = [...sessions].sort(
    (a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
  );

  if (sorted.length === 0) {
    return (
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 0 60px" }}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 6 }}>Session History</div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Saved Sessions</h2>
        </div>
        <div className="glass-card" style={{ padding: 48, textAlign: "center", color: "var(--text-muted)" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
          <p style={{ fontSize: 14 }}>No sessions saved yet. Generate something with a tool to save it here.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 0 60px" }}>
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 6 }}>Session History</div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>Saved Sessions</h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 6 }}>{sorted.length} session{sorted.length !== 1 ? "s" : ""} saved</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {sorted.map((session, i) => {
          const tool = TOOLS.find((t) => t.id === session.tool);
          const cat  = categoryMeta[session.category];
          const ts   = session.createdAt?.seconds
            ? new Date(session.createdAt.seconds * 1000).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
            : "—";

          const preview = session.output
            ? session.output.slice(0, 120).replace(/\n/g, " ").trim() + "…"
            : session.calcData
            ? "Calculator session"
            : "—";

          return (
            <div key={session.id || i} className="glass-card"
              style={{ padding: "18px 22px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              {/* Icon */}
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: (cat?.color || "#6C63FF") + "18",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 22,
              }}>
                {tool?.icon || "🔧"}
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)" }}>
                    {session.toolLabel || tool?.label || session.tool}
                  </span>
                  {cat && (
                    <span style={{ fontSize: 10, background: (cat.color || "#6C63FF") + "22", color: cat.color || "#6C63FF", padding: "2px 8px", borderRadius: 99, fontWeight: 700 }}>
                      {cat.icon} {cat.label}
                    </span>
                  )}
                  <span style={{ fontSize: 10, background: "rgba(255,255,255,0.05)", color: "var(--text-muted)", padding: "2px 8px", borderRadius: 99, fontWeight: 600 }}>
                    {session.type === "calculator" ? "🔢 Calculator" : "✨ AI"}
                  </span>
                </div>
                <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%" }}>
                  {preview}
                </p>
              </div>

              {/* Meta + actions */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8, flexShrink: 0 }}>
                <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 500 }}>{ts}</span>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn-secondary" style={{ padding: "5px 12px", fontSize: 12 }} onClick={() => onOpenSession(session)}>
                    View
                  </button>
                  {onDeleteSession && (
                    <button style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 13, padding: "5px 8px" }} onClick={() => onDeleteSession(session)}>
                      ✕
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

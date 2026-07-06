// client/src/components/Dashboard.jsx
import { useMemo } from "react";
import { TOOLS } from "../tools/toolConfig.js";
import { categoryMeta } from "../styles/tokens.js";

export default function Dashboard({ activeProject, sessions, onOpenTool, onSetView }) {
  const totalTools = TOOLS.length;

  const toolsUsed = useMemo(() => {
    const ids = new Set(sessions.map((s) => s.tool));
    return ids.size;
  }, [sessions]);

  const healthScore = useMemo(() => {
    const catsUsed = new Set(sessions.map((s) => s.category));
    return Math.round((catsUsed.size / Object.keys(categoryMeta).length) * 100);
  }, [sessions]);

  const lastActive = useMemo(() => {
    if (!sessions.length) return null;
    const latest = sessions.reduce((a, b) =>
      (a.createdAt?.seconds || 0) > (b.createdAt?.seconds || 0) ? a : b
    );
    const ts = latest.createdAt?.seconds
      ? new Date(latest.createdAt.seconds * 1000)
      : null;
    if (!ts) return null;
    const diff = Math.floor((Date.now() - ts) / 1000);
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
    return `${Math.floor(diff / 86400)}d ago`;
  }, [sessions]);

  const recentSessions = useMemo(() => {
    return [...sessions]
      .sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0))
      .slice(0, 4);
  }, [sessions]);

  const catProgress = useMemo(() => {
    return Object.entries(categoryMeta).map(([key, meta]) => {
      const catTools = TOOLS.filter((t) => t.category === key);
      const used = catTools.filter((t) => sessions.some((s) => s.tool === t.id));
      return { key, meta, total: catTools.length, used: used.length };
    });
  }, [sessions]);

  // Quick-launch tools (most common)
  const quickTools = [
    TOOLS.find(t => t.id === "pitch-deck"),
    TOOLS.find(t => t.id === "financials"),
    TOOLS.find(t => t.id === "job-description"),
    TOOLS.find(t => t.id === "launch-checklist"),
  ].filter(Boolean);

  if (!activeProject) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 400, gap: 16, color: "var(--text-secondary)" }}>
        <div style={{ fontSize: 48 }}>🚀</div>
        <h3 style={{ fontSize: 20, color: "var(--text-primary)", fontWeight: 700 }}>Create your first project</h3>
        <p style={{ fontSize: 14, textAlign: "center", maxWidth: 320 }}>Select or create a project from the sidebar to start using your founder tools.</p>
      </div>
    );
  }

  const healthColor = healthScore >= 60 ? "#43C6AC" : healthScore >= 40 ? "#F7971E" : "#6C63FF";

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 0 60px" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 6 }}>
          Project Dashboard
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>
          {activeProject.name}
        </h2>
        {activeProject.industry && (
          <p style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 6 }}>{activeProject.industry}</p>
        )}
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 14, marginBottom: 32 }}>
        {[
          { label: "Sessions Saved",  value: sessions.length,           icon: "💾", color: "#6C63FF" },
          { label: "Tools Used",      value: `${toolsUsed}/${totalTools}`, icon: "🧰", color: "#43C6AC" },
          { label: "Last Active",     value: lastActive || "—",          icon: "🕐", color: "#4FC3F7" },
          { label: "Startup Health",  value: `${healthScore}%`,          icon: "❤️", color: healthColor },
        ].map(({ label, value, icon, color }) => (
          <div key={label} className="glass-card" style={{ padding: "18px 20px" }}>
            <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
            <div style={{ fontSize: 24, fontWeight: 900, color, marginBottom: 2 }}>{value}</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Health bar */}
      <div className="glass-card" style={{ padding: "20px 24px", marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <h4 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>Startup Coverage Score</h4>
          <span style={{ fontSize: 22, fontWeight: 900, color: healthColor }}>{healthScore}%</span>
        </div>
        <div style={{ height: 10, background: "rgba(255,255,255,0.05)", borderRadius: 99, overflow: "hidden", marginBottom: 16 }}>
          <div style={{ height: "100%", width: `${healthScore}%`, background: `linear-gradient(90deg, #6C63FF, ${healthColor})`, borderRadius: 99, transition: "width 0.6s ease" }} />
        </div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {catProgress.map(({ key, meta, total, used }) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: used > 0 ? meta.color : "var(--text-muted)" }} />
              <span style={{ color: used > 0 ? "var(--text-secondary)" : "var(--text-muted)" }}>
                {meta.icon} {meta.label}: {used}/{total}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Recent Sessions */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <h4 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>Recent Sessions</h4>
            {sessions.length > 0 && (
              <button className="btn-secondary" style={{ padding: "4px 12px", fontSize: 12 }} onClick={() => onSetView("history")}>View all</button>
            )}
          </div>
          {recentSessions.length === 0 ? (
            <div className="glass-card" style={{ padding: 24, textAlign: "center", color: "var(--text-muted)", fontSize: 13 }}>
              No sessions yet. Start using a tool below.
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {recentSessions.map((s, i) => {
                const cat = categoryMeta[s.category];
                return (
                  <div key={i} className="glass-card" style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>
                      {TOOLS.find(t => t.id === s.tool)?.icon || "🔧"}
                    </span>
                    <div style={{ flex: 1, overflow: "hidden" }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {s.toolLabel || s.tool}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2 }}>
                        {cat ? `${cat.icon} ${cat.label}` : s.category}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick Launch */}
        <div>
          <h4 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 14px" }}>Quick Launch</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {quickTools.map((tool) => {
              const cat = categoryMeta[tool.category];
              return (
                <button key={tool.id} className="glass-card"
                  onClick={() => onOpenTool(tool)}
                  style={{
                    padding: "14px 16px", display: "flex", alignItems: "center", gap: 12,
                    cursor: "pointer", border: "1px solid var(--border-color)", textAlign: "left",
                    background: "rgba(255,255,255,0.02)", transition: "all 0.15s",
                  }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{tool.icon}</span>
                  <div style={{ flex: 1, overflow: "hidden" }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {tool.label}
                    </div>
                    <div style={{ fontSize: 11, marginTop: 2, color: cat?.color }}>
                      {cat?.icon} {cat?.label}
                    </div>
                  </div>
                  <span style={{ color: "var(--text-muted)", fontSize: 16 }}>→</span>
                </button>
              );
            })}
            <button className="btn-premium" style={{ padding: "12px", width: "100%", marginTop: 4 }} onClick={() => onSetView("tools")}>
              Browse All 20 Tools →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

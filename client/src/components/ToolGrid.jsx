// client/src/components/ToolGrid.jsx
import { useState } from "react";
import { TOOLS } from "../tools/toolConfig.js";
import { categoryMeta } from "../styles/tokens.js";

export default function ToolGrid({ onSelectTool, sessions }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const usedTools = new Set(sessions.map((s) => s.tool));

  const categories = [
    { key: "all", label: "All Tools", icon: "🧰" },
    ...Object.entries(categoryMeta).map(([key, meta]) => ({ key, ...meta })),
  ];

  const displayTools = activeCategory === "all"
    ? TOOLS
    : TOOLS.filter((t) => t.category === activeCategory);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 0 60px" }}>
      {/* Header */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 6 }}>
          All Tools
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>
          Your Founder Toolkit
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 14, marginTop: 6 }}>
          20 tools across 5 categories. AI-powered generators and interactive calculators.
        </p>
      </div>

      {/* Category tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          const catColor = cat.color || "#6C63FF";
          return (
            <button key={cat.key} onClick={() => setActiveCategory(cat.key)}
              style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "8px 16px", borderRadius: 10, border: "none",
                cursor: "pointer", fontSize: 13, fontWeight: isActive ? 700 : 500,
                fontFamily: "inherit", transition: "all 0.15s",
                background: isActive ? catColor + "22" : "rgba(255,255,255,0.03)",
                color: isActive ? catColor : "var(--text-secondary)",
                outline: isActive ? `1px solid ${catColor}44` : "1px solid transparent",
              }}>
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Tool grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
        {displayTools.map((tool) => {
          const cat    = categoryMeta[tool.category];
          const isUsed = usedTools.has(tool.id);
          const accent = cat?.color || "#6C63FF";
          return (
            <button key={tool.id} onClick={() => onSelectTool(tool)}
              className="glass-card tool-card"
              style={{
                padding: "20px 22px", textAlign: "left", cursor: "pointer",
                border: `1px solid ${isUsed ? accent + "33" : "var(--border-color)"}`,
                background: isUsed ? accent + "08" : "rgba(255,255,255,0.02)",
                display: "flex", flexDirection: "column", gap: 10,
                transition: "all 0.2s", fontFamily: "inherit",
              }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <span style={{ fontSize: 28 }}>{tool.icon}</span>
                <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                  {isUsed && (
                    <span style={{ fontSize: 10, background: accent + "22", color: accent, padding: "2px 7px", borderRadius: 99, fontWeight: 700 }}>Done</span>
                  )}
                  <span style={{
                    fontSize: 10, padding: "2px 7px", borderRadius: 99, fontWeight: 700,
                    background: tool.type === "ai" ? "rgba(108,99,255,0.15)" : "rgba(67,198,172,0.15)",
                    color: tool.type === "ai" ? "#6C63FF" : "#43C6AC",
                  }}>
                    {tool.type === "ai" ? "✨ AI" : "🔢 Calc"}
                  </span>
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4, margin: "0 0 5px" }}>{tool.label}</h4>
                <p style={{ fontSize: 12, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>{tool.description}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: accent }} />
                <span style={{ fontSize: 11, color: accent, fontWeight: 600 }}>{cat?.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

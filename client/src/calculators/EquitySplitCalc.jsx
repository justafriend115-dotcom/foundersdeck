// client/src/calculators/EquitySplitCalc.jsx
import { useState } from "react";

const DEFAULT_FOUNDERS = [
  { name: "Founder 1", idea: 3, commitment: 3, experience: 3, capital: 1, responsibility: 3 },
  { name: "Founder 2", idea: 2, commitment: 3, experience: 2, capital: 1, responsibility: 2 },
];

const FACTORS = [
  { key: "idea",           label: "Idea Origination",      weight: 10 },
  { key: "commitment",     label: "Full-time Commitment",   weight: 30 },
  { key: "experience",     label: "Domain Experience",      weight: 25 },
  { key: "capital",        label: "Capital Contribution",   weight: 15 },
  { key: "responsibility", label: "Ongoing Responsibility", weight: 20 },
];

export default function EquitySplitCalc({ onSave }) {
  const [founders, setFounders] = useState(DEFAULT_FOUNDERS);

  const scores = founders.map((f) =>
    FACTORS.reduce((sum, factor) => sum + f[factor.key] * factor.weight, 0)
  );
  const total    = scores.reduce((a, b) => a + b, 0);
  const percents = scores.map((s) => ((s / total) * 100).toFixed(1));

  const updateFounder = (i, key, val) =>
    setFounders((prev) => prev.map((f, idx) => (idx === i ? { ...f, [key]: val } : f)));

  const addFounder = () =>
    setFounders((prev) => [
      ...prev,
      { name: `Founder ${prev.length + 1}`, idea: 2, commitment: 2, experience: 2, capital: 1, responsibility: 2 },
    ]);

  const removeFounder = (i) =>
    setFounders((prev) => prev.filter((_, idx) => idx !== i));

  const COLORS = ["#6C63FF", "#43C6AC", "#FF6584", "#F7971E", "#4FC3F7"];

  return (
    <div>
      <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700 }}>Equity Split Calculator</h3>
      <p style={{ color: "var(--text-secondary)", fontSize: 13, marginBottom: 24 }}>
        Rate each founder 1–5 on each contribution factor. Weights are applied automatically.
      </p>

      {/* Stacked bar results */}
      <div style={{ display: "flex", gap: 0, borderRadius: 10, overflow: "hidden", height: 44, marginBottom: 8 }}>
        {percents.map((p, i) => (
          <div key={i} style={{
            flex: parseFloat(p),
            background: COLORS[i % COLORS.length],
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 800, color: "#fff",
            transition: "flex 0.4s ease",
          }}>
            {p}%
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16, marginBottom: 24, flexWrap: "wrap" }}>
        {founders.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-secondary)" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: COLORS[i % COLORS.length], display: "inline-block" }} />
            {f.name} — {percents[i]}%
          </div>
        ))}
      </div>

      {founders.map((f, i) => (
        <div key={i} className="glass-card" style={{ padding: "20px", marginBottom: 14 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <input
              value={f.name}
              onChange={(e) => updateFounder(i, "name", e.target.value)}
              style={{ background: "transparent", border: "none", color: "var(--text-primary)", fontSize: 15, fontWeight: 700, outline: "none", fontFamily: "inherit", flex: 1 }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 22, fontWeight: 800, color: COLORS[i % COLORS.length] }}>{percents[i]}%</span>
              {founders.length > 2 && (
                <button onClick={() => removeFounder(i)} style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 16, padding: "4px" }}>✕</button>
              )}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
            {FACTORS.map((factor) => (
              <div key={factor.key}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                  <span style={{ fontSize: 12, color: "var(--text-secondary)", fontWeight: 500 }}>{factor.label}</span>
                  <span style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600 }}>{f[factor.key]}/5 · {factor.weight}%</span>
                </div>
                <input
                  type="range" min="1" max="5" value={f[factor.key]}
                  onChange={(e) => updateFounder(i, factor.key, Number(e.target.value))}
                  style={{ width: "100%", accentColor: COLORS[i % COLORS.length] }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
        <button className="btn-secondary" style={{ padding: "10px 20px" }} onClick={addFounder}>
          + Add Co-Founder
        </button>
        <button className="btn-premium" style={{ padding: "10px 20px" }} onClick={() => onSave({ founders, percents })}>
          Save to Project
        </button>
      </div>
    </div>
  );
}

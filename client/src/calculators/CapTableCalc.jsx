// client/src/calculators/CapTableCalc.jsx
import { useState } from "react";

const DEFAULT_ROWS = [
  { name: "Founder 1",    type: "Founder",   shares: 4000000, note: "Common stock" },
  { name: "Founder 2",    type: "Founder",   shares: 3000000, note: "Common stock" },
  { name: "Options Pool", type: "Pool",      shares: 1000000, note: "10% post-seed" },
  { name: "Seed Investor",type: "Investor",  shares: 2000000, note: "$500k @ $5M pre" },
];

const TYPE_COLORS = { Founder: "#6C63FF", Pool: "#43C6AC", Investor: "#F7971E", Other: "#FF6584" };

export default function CapTableCalc({ onSave }) {
  const [rows, setRows]     = useState(DEFAULT_ROWS);
  const [newRow, setNewRow] = useState({ name: "", type: "Founder", shares: "", note: "" });

  const totalShares = rows.reduce((s, r) => s + Number(r.shares || 0), 0);

  const addRow = () => {
    if (!newRow.name || !newRow.shares) return;
    setRows((p) => [...p, { ...newRow, shares: Number(newRow.shares) }]);
    setNewRow({ name: "", type: "Founder", shares: "", note: "" });
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-color)",
    borderRadius: 8, padding: "8px 12px", color: "var(--text-primary)",
    fontSize: 13, outline: "none", fontFamily: "inherit", width: "100%",
  };

  return (
    <div>
      <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700 }}>Cap Table Builder</h3>
      <p style={{ color: "var(--text-secondary)", fontSize: 13, marginBottom: 24 }}>
        Total shares: <strong style={{ color: "var(--text-primary)" }}>{totalShares.toLocaleString()}</strong>
      </p>

      {/* Ownership bar */}
      <div style={{ display: "flex", height: 36, borderRadius: 10, overflow: "hidden", marginBottom: 20, gap: 2 }}>
        {rows.map((r, i) => (
          <div key={i}
            style={{ flex: r.shares / totalShares, background: TYPE_COLORS[r.type] || "#888", opacity: 0.85, transition: "flex 0.3s ease" }}
            title={`${r.name}: ${((r.shares / totalShares) * 100).toFixed(1)}%`}
          />
        ))}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", gap: 20, marginBottom: 24, flexWrap: "wrap" }}>
        {Object.entries(TYPE_COLORS).map(([type, color]) => (
          <div key={type} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "var(--text-secondary)" }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: color, display: "inline-block" }} />
            {type}
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="glass-card" style={{ padding: 0, overflow: "hidden", marginBottom: 16 }}>
        <table className="premium-table" style={{ margin: 0 }}>
          <thead>
            <tr>
              {["Stakeholder","Type","Shares","Ownership","Notes",""].map((h, i) => (
                <th key={i}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 600 }}>{r.name}</td>
                <td>
                  <span style={{
                    background: (TYPE_COLORS[r.type] || "#888") + "22",
                    color: TYPE_COLORS[r.type] || "#888",
                    padding: "2px 8px", borderRadius: 4,
                    fontSize: 11, fontWeight: 700,
                  }}>{r.type}</span>
                </td>
                <td>{Number(r.shares).toLocaleString()}</td>
                <td style={{ fontWeight: 700, color: TYPE_COLORS[r.type] }}>
                  {((r.shares / totalShares) * 100).toFixed(2)}%
                </td>
                <td style={{ color: "var(--text-secondary)", fontSize: 12 }}>{r.note}</td>
                <td>
                  <button onClick={() => setRows((p) => p.filter((_, idx) => idx !== i))}
                    style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 14 }}>✕</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add row */}
      <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
        <input placeholder="Name" value={newRow.name} onChange={(e) => setNewRow((p) => ({ ...p, name: e.target.value }))}
          style={{ ...inputStyle, flex: "2 1 120px" }} />
        <select value={newRow.type} onChange={(e) => setNewRow((p) => ({ ...p, type: e.target.value }))}
          style={{ ...inputStyle, flex: "1 1 100px" }}>
          {Object.keys(TYPE_COLORS).map((t) => <option key={t}>{t}</option>)}
        </select>
        <input placeholder="Shares" type="number" value={newRow.shares} onChange={(e) => setNewRow((p) => ({ ...p, shares: e.target.value }))}
          style={{ ...inputStyle, flex: "1 1 100px" }} />
        <input placeholder="Notes (optional)" value={newRow.note} onChange={(e) => setNewRow((p) => ({ ...p, note: e.target.value }))}
          style={{ ...inputStyle, flex: "2 1 140px" }} />
        <button className="btn-secondary" style={{ padding: "8px 16px", flexShrink: 0 }} onClick={addRow}>Add Row</button>
      </div>

      <button className="btn-premium" style={{ padding: "11px 24px", background: "linear-gradient(135deg,#43C6AC,#43C6AC99)" }} onClick={() => onSave({ rows, totalShares })}>
        Save to Project
      </button>
    </div>
  );
}

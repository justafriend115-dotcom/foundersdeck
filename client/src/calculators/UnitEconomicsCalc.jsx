// client/src/calculators/UnitEconomicsCalc.jsx
import { useState } from "react";

export default function UnitEconomicsCalc({ onSave }) {
  const [inputs, setInputs] = useState({
    cac:         150,
    avgRevenue:   49,
    churnRate:     5,
    grossMargin:  70,
    paybackMonths: 0, // auto-calculated
  });

  const set = (key, val) => setInputs((p) => ({ ...p, [key]: Number(val) }));

  // Derived metrics
  const monthlyChurn  = inputs.churnRate / 100;
  const ltv           = monthlyChurn > 0 ? (inputs.avgRevenue * (inputs.grossMargin / 100)) / monthlyChurn : 0;
  const ltvCacRatio   = inputs.cac > 0 ? ltv / inputs.cac : 0;
  const payback       = inputs.avgRevenue > 0 ? inputs.cac / (inputs.avgRevenue * (inputs.grossMargin / 100)) : 0;
  const ltvCacColor   = ltvCacRatio >= 3 ? "#43C6AC" : ltvCacRatio >= 1 ? "#F7971E" : "#F43F5E";

  const inputStyle = {
    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-color)",
    borderRadius: 8, padding: "10px 12px 10px 24px", color: "var(--text-primary)",
    fontSize: 14, outline: "none", fontFamily: "inherit", width: "100%",
  };

  const FieldRow = ({ label, keyName, prefix = "$", suffix, helper }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--border-color)" }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{label}</div>
        {helper && <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>{helper}</div>}
      </div>
      <div style={{ position: "relative", width: 180, flexShrink: 0 }}>
        <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontSize: 13, zIndex: 1 }}>{prefix}</span>
        <input type="number" value={inputs[keyName]} onChange={(e) => set(keyName, e.target.value)} style={inputStyle} />
        {suffix && <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontSize: 13 }}>{suffix}</span>}
      </div>
    </div>
  );

  const Metric = ({ label, value, unit = "", color, benchmark, icon }) => (
    <div className="glass-card" style={{ padding: "18px 20px", textAlign: "center" }}>
      <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
      <div style={{ fontSize: 26, fontWeight: 900, color: color || "var(--text-primary)", marginBottom: 4 }}>
        {value}{unit}
      </div>
      <div style={{ fontSize: 13, color: "var(--text-secondary)", fontWeight: 600, marginBottom: 4 }}>{label}</div>
      {benchmark && <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{benchmark}</div>}
    </div>
  );

  return (
    <div>
      <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700 }}>Unit Economics Calculator</h3>
      <p style={{ color: "var(--text-secondary)", fontSize: 13, marginBottom: 24 }}>
        Calculate the fundamental health of your business model.
      </p>

      {/* Inputs */}
      <div className="glass-card" style={{ padding: "0 20px", marginBottom: 28 }}>
        <FieldRow label="Customer Acquisition Cost (CAC)" keyName="cac" helper="Total sales & marketing spend ÷ new customers acquired" />
        <FieldRow label="Average Monthly Revenue per Customer" keyName="avgRevenue" helper="MRR per customer or average transaction value" />
        <FieldRow label="Monthly Churn Rate" keyName="churnRate" prefix="%" helper="% of customers lost each month (e.g. 3 = 3%)" />
        <FieldRow label="Gross Margin" keyName="grossMargin" prefix="%" suffix="%" helper="Revenue minus direct costs as a percentage" />
      </div>

      {/* Results */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 14, marginBottom: 24 }}>
        <Metric icon="🎯" label="CAC"          value={`$${inputs.cac.toLocaleString()}`}    benchmark="Lower is better" />
        <Metric icon="💰" label="LTV"          value={`$${ltv.toFixed(0)}`}               color="#6C63FF" benchmark="Higher than CAC ideally" />
        <Metric icon="⚡" label="LTV:CAC"      value={ltvCacRatio.toFixed(2)}            color={ltvCacColor} benchmark="Target: ≥3x" />
        <Metric icon="⏱️" label="Payback Period" value={payback.toFixed(1)}  unit=" mo"  benchmark="Target: &lt;12 months" />
        <Metric icon="📊" label="Gross Margin"  value={`${inputs.grossMargin}%`}          benchmark="SaaS target: 70-80%" />
      </div>

      {/* Health signal */}
      <div className="glass-card" style={{ padding: 16, marginBottom: 24, borderLeft: `3px solid ${ltvCacColor}` }}>
        <p style={{ margin: 0, fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          {ltvCacRatio >= 3 
            ? <><strong style={{ color: "#43C6AC" }}>✅ Strong unit economics.</strong> LTV:CAC of {ltvCacRatio.toFixed(2)}x means for every $1 you spend on acquisition, you earn ${ltvCacRatio.toFixed(2)} back. This is investor-ready.</>
            : ltvCacRatio >= 1
            ? <><strong style={{ color: "#F7971E" }}>⚠️ Improving, but not yet benchmark.</strong> LTV:CAC of {ltvCacRatio.toFixed(2)}x is positive, but most investors want ≥3x. Reduce CAC or improve retention.</>
            : <><strong style={{ color: "#F43F5E" }}>🔴 Unit economics are upside-down.</strong> LTV:CAC of {ltvCacRatio.toFixed(2)}x means you're losing money on each customer. Prioritize churn reduction or CAC optimization.</>
          }
        </p>
      </div>

      <button className="btn-premium" style={{ padding: "11px 24px", background: "linear-gradient(135deg,#4FC3F7,#4FC3F799)" }}
        onClick={() => onSave({ inputs, ltv, ltvCacRatio, payback })}>
        Save to Project
      </button>
    </div>
  );
}

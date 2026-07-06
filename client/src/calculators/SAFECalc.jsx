// client/src/calculators/SAFECalc.jsx
import { useState } from "react";

export default function SAFECalc({ onSave }) {
  const [inputs, setInputs] = useState({
    safeAmount:    500000,
    valCap:       5000000,
    discount:           20,
    priceRound:   8000000,
    pricePerShare:         1,
  });

  const set = (key, val) => setInputs((p) => ({ ...p, [key]: Number(val) }));

  // Calculations
  const totalPreShares  = inputs.priceRound / inputs.pricePerShare;
  const capPrice        = inputs.valCap / totalPreShares;
  const discountPrice   = inputs.pricePerShare * (1 - inputs.discount / 100);
  const conversionPrice = Math.min(capPrice, discountPrice);
  const sharesIssued    = inputs.safeAmount / conversionPrice;
  const ownershipPct    = (sharesIssued / (totalPreShares + sharesIssued)) * 100;
  const effectiveDiscount = ((inputs.pricePerShare - conversionPrice) / inputs.pricePerShare) * 100;
  const convertedVia    = conversionPrice === capPrice ? "Valuation Cap" : "Discount Rate";

  const inputStyle = {
    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-color)",
    borderRadius: 8, padding: "10px 12px", color: "var(--text-primary)",
    fontSize: 14, outline: "none", fontFamily: "inherit", width: "100%",
  };

  const Field = ({ label, keyName, prefix = "$", suffix }) => (
    <div>
      <label style={{ display: "block", fontSize: 12, color: "var(--text-secondary)", marginBottom: 6, fontWeight: 500 }}>{label}</label>
      <div style={{ position: "relative" }}>
        {prefix && <span style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontSize: 14 }}>{prefix}</span>}
        <input
          type="number" value={inputs[keyName]}
          onChange={(e) => set(keyName, e.target.value)}
          style={{ ...inputStyle, paddingLeft: prefix ? 22 : 12, paddingRight: suffix ? 30 : 12 }}
        />
        {suffix && <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontSize: 13 }}>{suffix}</span>}
      </div>
    </div>
  );

  const Result = ({ label, value, color, note }) => (
    <div className="glass-card" style={{ padding: "16px 20px", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: color || "var(--text-primary)", marginBottom: note ? 4 : 0 }}>{value}</div>
      {note && <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{note}</div>}
    </div>
  );

  return (
    <div>
      <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700 }}>SAFE Note Calculator</h3>
      <p style={{ color: "var(--text-secondary)", fontSize: 13, marginBottom: 24 }}>Calculate conversion price and dilution at your next priced round.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14, marginBottom: 28 }}>
        <Field label="SAFE Investment Amount" keyName="safeAmount" />
        <Field label="Valuation Cap" keyName="valCap" />
        <Field label="Discount Rate" keyName="discount" prefix="%" />
        <Field label="Next Round Pre-Money Valuation" keyName="priceRound" />
        <Field label="Price Per Share at Next Round" keyName="pricePerShare" />
      </div>

      <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: 24, marginBottom: 24 }}>
        <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 16 }}>
          Conversion Results
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
          <Result label="Cap-Based Price"      value={`$${capPrice.toFixed(4)}`}             note="Based on valuation cap" />
          <Result label="Discount-Based Price" value={`$${discountPrice.toFixed(4)}`}         note="Based on discount rate" />
          <Result label="Conversion Price"     value={`$${conversionPrice.toFixed(4)}`}       color="#6C63FF" note={`Converts via ${convertedVia}`} />
          <Result label="Shares Issued"        value={Math.round(sharesIssued).toLocaleString()} note="To SAFE holder at conversion" />
          <Result label="Ownership %"          value={`${ownershipPct.toFixed(2)}%`}          color="#43C6AC" note="Post-conversion ownership" />
          <Result label="Effective Discount"   value={`${effectiveDiscount.toFixed(1)}%`}     color="#F7971E" note="vs. next round price" />
        </div>
      </div>

      {/* Converts via explanation */}
      <div className="glass-card" style={{ padding: 16, marginBottom: 24, borderLeft: "3px solid #6C63FF", background: "rgba(108, 99, 255, 0.04)" }}>
        <p style={{ margin: 0, fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          <strong style={{ color: "var(--text-primary)" }}>💡 Converts via {convertedVia}</strong> — The SAFE will convert at the lower of the two prices.
          {convertedVia === "Valuation Cap"
            ? ` The valuation cap ($${(inputs.valCap/1000000).toFixed(1)}M) protects the investor by capping your pre-money valuation for conversion purposes.`
            : ` The ${inputs.discount}% discount gives the investor a better price than new investors in the next round.`
          }
        </p>
      </div>

      <button className="btn-premium" style={{ padding: "11px 24px" }} onClick={() => onSave({ inputs, conversionPrice, sharesIssued, ownershipPct, convertedVia })}>
        Save to Project
      </button>
    </div>
  );
}

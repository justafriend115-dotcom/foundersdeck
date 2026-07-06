// client/src/components/modals/NewProjectModal.jsx
import { useState } from "react";

export default function NewProjectModal({ onSave, onClose }) {
  const [name, setName]         = useState("");
  const [industry, setIndustry] = useState("");
  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
      <div className="glass-card" style={{ width: 400, maxWidth: "90vw", padding: "28px" }}>
        <h3 style={{ margin: "0 0 20px", fontSize: 18, fontWeight: 700 }}>New Project</h3>
        <div style={{ marginBottom: 14 }}>
          <label style={{ display: "block", fontSize: 12, color: "#888", marginBottom: 6, fontWeight: 500 }}>Company / Project Name *</label>
          <input className="styled-input" autoFocus placeholder="e.g. Acme AI" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label style={{ display: "block", fontSize: 12, color: "#888", marginBottom: 6, fontWeight: 500 }}>Industry</label>
          <input className="styled-input" placeholder="e.g. FinTech, SaaS, HealthTech" value={industry} onChange={(e) => setIndustry(e.target.value)} />
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
          <button className="btn-secondary" style={{ padding: "8px 16px" }} onClick={onClose}>Cancel</button>
          <button className="btn-premium" style={{ padding: "8px 16px" }} onClick={() => name.trim() && onSave({ name: name.trim(), industry: industry.trim() })}>
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
}

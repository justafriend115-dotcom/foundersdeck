// client/src/calculators/FundraisingTracker.jsx
import { useState } from "react";

const STAGES = ["contacted", "meeting", "due-diligence", "closed", "passed"];
const STAGE_META = {
  "contacted":     { label: "Contacted",     color: "#6C63FF", icon: "✉️" },
  "meeting":       { label: "Meeting",       color: "#4FC3F7", icon: "📅" },
  "due-diligence": { label: "Due Diligence", color: "#F7971E", icon: "🔍" },
  "closed":        { label: "Closed ✅",     color: "#43C6AC", icon: "🎉" },
  "passed":        { label: "Passed",        color: "#F43F5E", icon: "🚫" },
};

const EMPTY_CONTACT = { name: "", firm: "", email: "", stage: "contacted", amount: "", notes: "" };

export default function FundraisingTracker({ onSave, initialData }) {
  const [contacts, setContacts]         = useState(initialData?.contacts || []);
  const [showForm, setShowForm]         = useState(false);
  const [form, setForm]                 = useState(EMPTY_CONTACT);
  const [editIndex, setEditIndex]       = useState(null);
  const [filterStage, setFilterStage]   = useState("all");

  const setField = (key, val) => setForm((p) => ({ ...p, [key]: val }));

  const saveContact = () => {
    if (!form.name.trim()) return;
    if (editIndex !== null) {
      setContacts((p) => p.map((c, i) => i === editIndex ? { ...form } : c));
      setEditIndex(null);
    } else {
      setContacts((p) => [...p, { ...form }]);
    }
    setForm(EMPTY_CONTACT);
    setShowForm(false);
  };

  const deleteContact = (i) => setContacts((p) => p.filter((_, idx) => idx !== i));

  const startEdit = (i) => {
    setForm({ ...contacts[i] });
    setEditIndex(i);
    setShowForm(true);
  };

  const updateStage = (i, stage) =>
    setContacts((p) => p.map((c, idx) => idx === i ? { ...c, stage } : c));

  const filtered = filterStage === "all" ? contacts : contacts.filter((c) => c.stage === filterStage);

  // Summary stats
  const totalPipeline  = contacts.reduce((s, c) => s + (Number(c.amount) || 0), 0);
  const closedAmount   = contacts.filter(c => c.stage === "closed").reduce((s, c) => s + (Number(c.amount) || 0), 0);
  const stageCounts    = Object.fromEntries(STAGES.map(s => [s, contacts.filter(c => c.stage === s).length]));

  const inputStyle = {
    background: "rgba(255,255,255,0.03)", border: "1px solid var(--border-color)",
    borderRadius: 8, padding: "8px 12px", color: "var(--text-primary)",
    fontSize: 13, outline: "none", fontFamily: "inherit", width: "100%",
  };

  return (
    <div>
      <h3 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 700 }}>Fundraising Tracker</h3>
      <p style={{ color: "var(--text-secondary)", fontSize: 13, marginBottom: 20 }}>
        Track your investor pipeline from first contact to close.
      </p>

      {/* Stats bar */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12, marginBottom: 24 }}>
        {[
          { label: "Total Investors", value: contacts.length, color: "#6C63FF" },
          { label: "Total Pipeline",  value: `$${(totalPipeline/1000).toFixed(0)}k`, color: "#4FC3F7" },
          { label: "Closed",          value: `$${(closedAmount/1000).toFixed(0)}k`,  color: "#43C6AC" },
          { label: "Active Convos",   value: stageCounts["meeting"] + stageCounts["due-diligence"], color: "#F7971E" },
        ].map(({ label, value, color }) => (
          <div key={label} className="glass-card" style={{ padding: "14px 16px", textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 900, color }}>{value}</div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 2, fontWeight: 600 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Pipeline funnel */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {STAGES.filter(s => s !== "passed").map(s => (
          <div key={s} style={{ textAlign: "center", flex: 1, minWidth: 80 }}>
            <div style={{ background: STAGE_META[s].color + "22", border: `1px solid ${STAGE_META[s].color}44`, borderRadius: 8, padding: "10px 6px", marginBottom: 4 }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: STAGE_META[s].color }}>{stageCounts[s]}</div>
            </div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", fontWeight: 600 }}>{STAGE_META[s].label.replace(" ✅","")}</div>
          </div>
        ))}
      </div>

      {/* Filter + Add */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, gap: 12, flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          <button onClick={() => setFilterStage("all")}
            className={filterStage === "all" ? "btn-premium" : "btn-secondary"}
            style={{ padding: "6px 12px", fontSize: 12, borderRadius: 8 }}>All</button>
          {STAGES.map(s => (
            <button key={s} onClick={() => setFilterStage(s)}
              className={filterStage === s ? "btn-premium" : "btn-secondary"}
              style={{ padding: "6px 12px", fontSize: 12, borderRadius: 8 }}>
              {STAGE_META[s].icon} {STAGE_META[s].label.replace(" ✅","")}
            </button>
          ))}
        </div>
        <button className="btn-premium" style={{ padding: "8px 16px" }} onClick={() => { setShowForm(true); setEditIndex(null); setForm(EMPTY_CONTACT); }}>
          + Add Investor
        </button>
      </div>

      {/* Add / edit form */}
      {showForm && (
        <div className="glass-card" style={{ padding: 20, marginBottom: 20, border: "1px solid #6C63FF44" }}>
          <h4 style={{ margin: "0 0 16px", fontSize: 15 }}>{editIndex !== null ? "Edit Investor" : "Add Investor"}</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12, marginBottom: 12 }}>
            <div>
              <label style={{ fontSize: 11, color: "var(--text-muted)", display: "block", marginBottom: 4, fontWeight: 600 }}>Investor Name *</label>
              <input style={inputStyle} placeholder="Sarah Chen" value={form.name} onChange={(e) => setField("name", e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 11, color: "var(--text-muted)", display: "block", marginBottom: 4, fontWeight: 600 }}>Firm</label>
              <input style={inputStyle} placeholder="Sequoia Capital" value={form.firm} onChange={(e) => setField("firm", e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 11, color: "var(--text-muted)", display: "block", marginBottom: 4, fontWeight: 600 }}>Email</label>
              <input style={inputStyle} placeholder="sarah@sequoia.com" value={form.email} onChange={(e) => setField("email", e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 11, color: "var(--text-muted)", display: "block", marginBottom: 4, fontWeight: 600 }}>Target Amount ($)</label>
              <input style={inputStyle} type="number" placeholder="500000" value={form.amount} onChange={(e) => setField("amount", e.target.value)} />
            </div>
            <div>
              <label style={{ fontSize: 11, color: "var(--text-muted)", display: "block", marginBottom: 4, fontWeight: 600 }}>Stage</label>
              <select style={inputStyle} value={form.stage} onChange={(e) => setField("stage", e.target.value)}>
                {STAGES.map(s => <option key={s} value={s}>{STAGE_META[s].label}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 11, color: "var(--text-muted)", display: "block", marginBottom: 4, fontWeight: 600 }}>Notes</label>
              <input style={inputStyle} placeholder="Met at YC Demo Day..." value={form.notes} onChange={(e) => setField("notes", e.target.value)} />
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button className="btn-premium" style={{ padding: "8px 20px" }} onClick={saveContact}>
              {editIndex !== null ? "Update" : "Add"}
            </button>
            <button className="btn-secondary" style={{ padding: "8px 16px" }} onClick={() => { setShowForm(false); setEditIndex(null); }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Contact list */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 0", color: "var(--text-muted)", fontSize: 14 }}>
          {contacts.length === 0 ? "No investors tracked yet. Add your first contact →" : "No investors in this stage."}
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {filtered.map((c, i) => {
            const realIdx = contacts.indexOf(c);
            const meta = STAGE_META[c.stage];
            return (
              <div key={i} className="glass-card" style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: 160 }}>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
                    {c.firm}{c.email ? ` · ${c.email}` : ""}
                  </div>
                  {c.notes && <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 4, fontStyle: "italic" }}>{c.notes}</div>}
                </div>
                {c.amount && (
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#43C6AC" }}>${Number(c.amount).toLocaleString()}</div>
                )}
                <select value={c.stage} onChange={(e) => updateStage(realIdx, e.target.value)}
                  style={{ background: meta.color + "22", border: `1px solid ${meta.color}55`, color: meta.color, fontWeight: 700, fontSize: 12, borderRadius: 8, padding: "6px 10px", outline: "none", cursor: "pointer", fontFamily: "inherit" }}>
                  {STAGES.map(s => <option key={s} value={s} style={{ background: "#111220", color: "var(--text-primary)" }}>{STAGE_META[s].label}</option>)}
                </select>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: 12 }} onClick={() => startEdit(realIdx)}>Edit</button>
                  <button style={{ background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 14, padding: "6px" }} onClick={() => deleteContact(realIdx)}>✕</button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div style={{ marginTop: 24 }}>
        <button className="btn-premium" style={{ padding: "11px 24px" }} onClick={() => onSave({ contacts })}>
          Save to Project
        </button>
      </div>
    </div>
  );
}

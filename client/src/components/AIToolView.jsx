// client/src/components/AIToolView.jsx
import { useState, useRef } from "react";
import { FIELDS_BASE, FIELDS_EXTRA } from "../tools/toolConfig.js";
import { PROMPTS } from "../tools/prompts.js";
import { categoryMeta } from "../styles/tokens.js";
import FormattedOutput from "./FormattedOutput.jsx";
import { auth } from "../firebase.js";

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? "" : "http://localhost:3001");

const LOADING_MESSAGES = [
  "Consulting the founder playbook…",
  "Applying 10,000 hours of startup wisdom…",
  "Crunching market data…",
  "Crafting investor-ready content…",
  "Almost there — putting the finishing touches…",
];

export default function AIToolView({ user, tool, activeProject, onSave, onBack }) {
  const cat = categoryMeta[tool.category];
  const accent = cat?.color || "#6C63FF";

  const fields = [
    ...FIELDS_BASE,
    ...(FIELDS_EXTRA[tool.id] || []),
  ];

  const initialData = {};
  fields.forEach((f) => { initialData[f.key] = ""; });

  const [formData, setFormData]   = useState(initialData);
  const [output, setOutput]       = useState("");
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");
  const [loadMsg, setLoadMsg]     = useState(LOADING_MESSAGES[0]);
  const [saving, setSaving]       = useState(false);
  const loadInterval              = useRef(null);
  const outputRef                 = useRef(null);

  const setField = (key, val) => setFormData((p) => ({ ...p, [key]: val }));

  const handleGenerate = async () => {
    if (!user) {
      setError("Please sign in to generate AI content. Demo mode is view-only for AI.");
      return;
    }

    const missing = fields.filter((f) => f.required !== false && !formData[f.key]);
    if (!formData.company) { setError("Please enter your company name."); return; }

    setLoading(true);
    setError("");
    setOutput("");
    let msgIndex = 0;
    loadInterval.current = setInterval(() => {
      msgIndex = (msgIndex + 1) % LOADING_MESSAGES.length;
      setLoadMsg(LOADING_MESSAGES[msgIndex]);
    }, 2500);

    try {
      const promptFn = PROMPTS[tool.id];
      if (!promptFn) throw new Error("No prompt configured for this tool.");
      const prompt = promptFn(formData);

      const token = await auth.currentUser.getIdToken();

      const res = await fetch(`${API_URL}/api/generate`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        let errMsg = `Server error: ${res.status}`;
        try {
          const errData = await res.json();
          if (errData?.error) errMsg = errData.error;
        } catch (_) {}
        throw new Error(errMsg);
      }

      const data = await res.json();
      setOutput(data.result || "No response received.");
      setTimeout(() => outputRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    } catch (err) {
      setError(err.message || "Something went wrong. Make sure the server is running.");
      console.error(err);
    } finally {
      setLoading(false);
      clearInterval(loadInterval.current);
    }
  };

  const handleSave = async () => {
    if (!output || !activeProject) return;
    setSaving(true);
    try {
      await onSave({
        tool: tool.id,
        toolLabel: tool.label,
        category: tool.category,
        type: "ai",
        formData,
        output,
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "32px 0 80px" }}>
      {/* Header */}
      <button onClick={onBack}
        style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", border: "none", color: "var(--text-muted)", cursor: "pointer", fontSize: 13, fontFamily: "inherit", marginBottom: 20, padding: 0 }}>
        ← Back to Tools
      </button>

      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 28 }}>
        <div style={{ width: 52, height: 52, borderRadius: 14, background: accent + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>
          {tool.icon}
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
            <span style={{ fontSize: 11, color: accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px" }}>
              {cat?.icon} {cat?.label}
            </span>
            <span style={{ fontSize: 10, background: "rgba(108,99,255,0.15)", color: "#6C63FF", padding: "2px 8px", borderRadius: 99, fontWeight: 700 }}>✨ AI Tool</span>
          </div>
          <h2 style={{ fontSize: 24, fontWeight: 800, margin: "0 0 6px", color: "var(--text-primary)" }}>{tool.label}</h2>
          <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0 }}>{tool.description}</p>
        </div>
      </div>

      {/* Form */}
      <div className="glass-card" style={{ padding: 28, marginBottom: 24 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 20px", color: "var(--text-primary)" }}>
          Tell us about your startup
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {fields.map((field) => (
            <div key={field.key} style={field.key === "clause" || field.key === "safeTerms" ? { gridColumn: "1 / -1" } : {}}>
              <label style={{ display: "block", fontSize: 12, color: "var(--text-secondary)", marginBottom: 6, fontWeight: 600 }}>
                {field.label}
              </label>
              {field.key === "clause" || field.key === "safeTerms" ? (
                <textarea
                  className="styled-input"
                  placeholder={field.placeholder}
                  value={formData[field.key]}
                  onChange={(e) => setField(field.key, e.target.value)}
                  rows={4}
                  style={{ resize: "vertical", fontFamily: "inherit", lineHeight: 1.6 }}
                />
              ) : (
                <input
                  className="styled-input"
                  placeholder={field.placeholder}
                  value={formData[field.key]}
                  onChange={(e) => setField(field.key, e.target.value)}
                />
              )}
            </div>
          ))}
        </div>

        {error && (
          <div style={{ marginTop: 16, padding: "12px 16px", background: "rgba(244, 63, 94, 0.08)", border: "1px solid rgba(244, 63, 94, 0.2)", borderRadius: 10, color: "#F43F5E", fontSize: 13, display: "flex", gap: 8 }}>
            ⚠️ {error}
          </div>
        )}

        <div style={{ marginTop: 20, display: "flex", gap: 12, alignItems: "center" }}>
          <button
            className="btn-premium"
            style={{ padding: "12px 28px", fontSize: 15, background: `linear-gradient(135deg, ${accent}, ${accent}BB)`, opacity: loading ? 0.7 : 1 }}
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? "Generating…" : `Generate ${tool.label}`}
          </button>
          {!activeProject && (
            <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Sign in or create a project to save results.</span>
          )}
        </div>

        {loading && (
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 18, height: 18, border: `2px solid ${accent}33`, borderTopColor: accent, borderRadius: "50%", animation: "spin 0.8s linear infinite", flexShrink: 0 }} />
            <span style={{ fontSize: 13, color: "var(--text-secondary)", fontStyle: "italic" }}>{loadMsg}</span>
          </div>
        )}
      </div>

      {/* Output */}
      {output && (
        <div ref={outputRef}>
          <div style={{ marginBottom: 16 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>Generated Output</h3>
            <p style={{ fontSize: 12, color: "var(--text-muted)", margin: "4px 0 0" }}>
              Powered by Claude AI — always review before sharing
            </p>
          </div>
          <FormattedOutput
            toolId={tool.id}
            output={output}
            onSave={activeProject ? handleSave : null}
            saving={saving}
            activeProject={activeProject}
          />
        </div>
      )}
    </div>
  );
}

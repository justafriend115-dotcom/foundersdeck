// client/src/components/FormattedOutput.jsx
import { useState, useEffect, useRef } from "react";
import { TOOLS } from "../tools/toolConfig.js";

// ─── TEXT PARSERS FOR RICH RENDERING ──────────────────────────────────────────

const parsePitchDeck = (text) => {
  const slides = [];
  const parts = text.split(/(?=Slide\s+\d+|###\s+Slide\s+\d+)/gi);
  let intro = "";
  if (parts[0] && !parts[0].match(/Slide\s+\d+|###\s+Slide\s+\d+/i)) {
    intro = parts.shift();
  }
  parts.forEach((part, index) => {
    const headerMatch = part.match(/(?:Slide\s+(\d+)[:\s\-\u2013\u2014]*([^\n]+)|###\s+Slide\s+(\d+)[:\s\-\u2013\u2014]*([^\n]+))/i);
    const num = headerMatch ? (headerMatch[1] || headerMatch[3]) : (index + 1);
    const title = headerMatch ? (headerMatch[2] || headerMatch[4]).trim() : `Slide ${num}`;
    const messageMatch = part.match(/(?:Key Message|Key message|Message)[:\s\-\u2013\u2014]*([^\n]+)/i);
    const message = messageMatch ? messageMatch[1].trim() : "";
    const notesMatch = part.match(/(?:Speaker [nN]otes?|Speaker [tT]ip|Speaker note tip)[:\s\-\u2013\u2014]*([^\n]+(?:\n\s*[^-\n].*)*)/i);
    const notes = notesMatch ? notesMatch[1].trim() : "";
    const lines = part.split("\n");
    const bullets = [];
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.match(/^[\-\*\+\u2022]\s+(.+)/)) {
        const bulletText = trimmed.replace(/^[\-\*\+\u2022]\s+/, "").trim();
        if (!bulletText.match(/Key Message|Speaker Note|Slide \d+/i)) {
          bullets.push(bulletText);
        }
      }
    });
    slides.push({
      num,
      title,
      message,
      bullets: bullets.length > 0 ? bullets : [part.replace(/Slide\s+\d+.*/, "").trim()],
      notes
    });
  });
  return { intro, slides };
};

const parseMarkdownTable = (markdownText) => {
  const lines = markdownText.split("\n");
  const tableData = [];
  let currentTable = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("|") && line.endsWith("|")) {
      const cells = line.split("|").map(c => c.trim()).filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
      if (line.match(/^\|[\s\-:|]+$/)) {
        continue;
      }
      if (!currentTable) {
        currentTable = { headers: cells, rows: [] };
      } else {
        currentTable.rows.push(cells);
      }
    } else {
      if (currentTable) {
        tableData.push(currentTable);
        currentTable = null;
      }
    }
  }
  if (currentTable) {
    tableData.push(currentTable);
  }
  return tableData;
};

const parseScenarios = (text) => {
  const parsed = {
    Conservative: { text: "", tables: [] },
    Base: { text: "", tables: [] },
    Optimistic: { text: "", tables: [] },
    General: { text: "", tables: [] }
  };
  const parts = text.split(/(?=###?\s*(?:Conservative|Base|Optimistic)\s*(?:Scenario|Projections)?)/gi);
  parts.forEach(part => {
    const trimmed = part.trim();
    if (trimmed.match(/Conservative/i)) {
      parsed.Conservative.text = trimmed;
      parsed.Conservative.tables = parseMarkdownTable(trimmed);
    } else if (trimmed.match(/Base/i)) {
      parsed.Base.text = trimmed;
      parsed.Base.tables = parseMarkdownTable(trimmed);
    } else if (trimmed.match(/Optimistic/i)) {
      parsed.Optimistic.text = trimmed;
      parsed.Optimistic.tables = parseMarkdownTable(trimmed);
    } else {
      parsed.General.text += (parsed.General.text ? "\n\n" : "") + trimmed;
    }
  });
  if (parsed.Conservative.tables.length === 0 && parsed.Base.tables.length === 0 && parsed.Optimistic.tables.length === 0) {
    const allTables = parseMarkdownTable(text);
    if (allTables.length >= 3) {
      parsed.Conservative.tables = [allTables[0]];
      parsed.Base.tables = [allTables[1]];
      parsed.Optimistic.tables = [allTables[2]];
    } else {
      parsed.General.tables = allTables;
    }
  }
  return parsed;
};

const parseFinancials = (text) => {
  const sections = {
    summary: "",
    metrics: [],
    economics: "",
    runway: "",
    checklist: [],
    redFlags: []
  };
  const parts = text.split(/(?=(?:###?\s*(?:[1-6]\.|Financial Health|Key Metrics|Unit Economics|Burn & Runway|Fundraising Readiness|Red Flags)))/gi);
  parts.forEach(part => {
    const trimmed = part.trim();
    if (trimmed.match(/Financial Health|1\./i)) {
      sections.summary = trimmed.replace(/^(?:###?\s*)?(?:1\.\s*)?(?:Financial Health Summary|Financial Health)?/i, "").trim();
    } else if (trimmed.match(/Key Metrics|2\./i)) {
      const lines = trimmed.split("\n");
      lines.forEach(l => {
        const line = l.trim();
        if (line.match(/^[\-\*\+\u2022]/)) {
          const content = line.replace(/^[\-\*\+\u2022]\s*/, "").trim();
          const splitIdx = content.indexOf(":");
          if (splitIdx > 0) {
            const name = content.substring(0, splitIdx).trim();
            const desc = content.substring(splitIdx + 1).trim();
            sections.metrics.push({ name, desc });
          } else {
            sections.metrics.push({ name: content, desc: "" });
          }
        }
      });
    } else if (trimmed.match(/Unit Economics|3\./i)) {
      sections.economics = trimmed.replace(/^(?:###?\s*)?(?:3\.\s*)?(?:Unit Economics Breakdown|Unit Economics)?/i, "").trim();
    } else if (trimmed.match(/Burn & Runway|4\./i)) {
      sections.runway = trimmed.replace(/^(?:###?\s*)?(?:4\.\s*)?(?:Burn & Runway Analysis|Burn & Runway)?/i, "").trim();
    } else if (trimmed.match(/Fundraising Readiness|5\./i)) {
      const lines = trimmed.split("\n");
      lines.forEach(l => {
        const line = l.trim();
        if (line.match(/^[\-\*\+\u2022]/)) {
          const content = line.replace(/^[\-\*\+\u2022]\s*(?:\[\s*\])?\s*/, "").trim();
          sections.checklist.push(content);
        }
      });
    } else if (trimmed.match(/Red Flags|6\./i)) {
      const lines = trimmed.split("\n");
      lines.forEach(l => {
        const line = l.trim();
        if (line.match(/^[\-\*\+\u2022]/)) {
          const content = line.replace(/^[\-\*\+\u2022]\s*/, "").trim();
          sections.redFlags.push(content);
        }
      });
    }
  });
  return sections;
};

const renderScriptWithCues = (text) => {
  const parts = text.split(/(\[[^\]]+\])/g);
  return parts.map((part, idx) => {
    if (part.startsWith("[") && part.endsWith("]")) {
      const cue = part.slice(1, -1);
      return (
        <span key={idx} style={{
          background: "rgba(255, 101, 132, 0.12)",
          border: "1px solid rgba(255, 101, 132, 0.3)",
          color: "#FF6584",
          padding: "2px 8px",
          borderRadius: "12px",
          fontSize: "12px",
          fontWeight: "600",
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
          margin: "0 4px",
          fontFamily: "var(--font-body)"
        }}>
          🎥 {cue}
        </span>
      );
    }
    return <span key={idx}>{part}</span>;
  });
};

const renderTable = (table) => {
  if (!table || !table.headers) return null;
  return (
    <div style={{ overflowX: "auto", margin: "16px 0", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.06)" }}>
      <table className="premium-table" style={{ margin: 0 }}>
        <thead>
          <tr>
            {table.headers.map((h, idx) => (
              <th key={idx}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rIdx) => (
            <tr key={rIdx}>
              {row.map((cell, cIdx) => (
                <td key={cIdx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ─── TELEPROMPTER MODAL ──────────────────────────────────────────────────────

function TeleprompterModal({ text, onClose }) {
  const scrollRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [wpm, setWpm] = useState(130);
  const [fontSize, setFontSize] = useState(28);
  const [scrolledText, setScrolledText] = useState("");

  useEffect(() => {
    if (text) setScrolledText(text);
  }, [text]);

  useEffect(() => {
    if (!isPlaying) return;
    let animationFrameId;
    let lastTime = performance.now();
    const pixelsPerSecond = (wpm / 60) * (fontSize * 1.5) * 0.18;
    const scroll = (now) => {
      const delta = (now - lastTime) / 1000;
      lastTime = now;
      if (scrollRef.current) {
        scrollRef.current.scrollTop += pixelsPerSecond * delta;
        if (scrollRef.current.scrollTop + scrollRef.current.clientHeight >= scrollRef.current.scrollHeight - 5) {
          setIsPlaying(false);
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };
    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, wpm, fontSize]);

  const renderTeleprompterText = (rawText) => {
    const parts = rawText.split(/(\[[^\]]+\])/g);
    return parts.map((part, idx) => {
      if (part.startsWith("[") && part.endsWith("]")) {
        return (
          <span key={idx} style={{ color: "rgba(255, 101, 132, 0.4)", fontSize: "0.75em", fontStyle: "italic", display: "inline-block", margin: "0 10px" }}>
            {part}
          </span>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "#06070C", zIndex: 1000, display: "flex", flexDirection: "column", padding: "20px 40px 40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: 16, marginBottom: 20 }}>
        <h3 style={{ fontSize: 20, color: "#fff" }}>🎤 Pitch Teleprompter</h3>
        <button className="btn-secondary" style={{ padding: "8px 16px" }} onClick={onClose}>Exit Teleprompter</button>
      </div>
      <div className="glass-card" style={{ display: "flex", gap: 24, padding: "16px 24px", alignItems: "center", justifyContent: "center", marginBottom: 24, background: "rgba(255,255,255,0.02)", flexWrap: "wrap" }}>
        <button className="btn-premium" style={{ width: 120, background: isPlaying ? "var(--accent)" : "var(--primary-gradient)" }} onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "⏸️ Pause" : "▶️ Play"}
        </button>
        <button className="btn-secondary" style={{ padding: "10px 16px" }} onClick={() => { setIsPlaying(false); if (scrollRef.current) scrollRef.current.scrollTop = 0; }}>🔄 Reset</button>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <label style={{ fontSize: 12, color: "var(--text-secondary)", fontWeight: 600 }}>Speed (WPM):</label>
          <input type="range" min="80" max="240" step="5" value={wpm} onChange={(e) => setWpm(Number(e.target.value))} style={{ width: 120, cursor: "pointer" }} />
          <span style={{ fontSize: 13, width: 30, textAlign: "right", fontWeight: 700 }}>{wpm}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <label style={{ fontSize: 12, color: "var(--text-secondary)", fontWeight: 600 }}>Text Size:</label>
          <button className="btn-secondary" style={{ padding: "4px 10px", minWidth: 0 }} onClick={() => setFontSize(Math.max(16, fontSize - 4))}>A-</button>
          <span style={{ fontSize: 13, fontWeight: 700 }}>{fontSize}px</span>
          <button className="btn-secondary" style={{ padding: "4px 10px", minWidth: 0 }} onClick={() => setFontSize(Math.min(48, fontSize + 4))}>A+</button>
        </div>
      </div>
      <div style={{ flex: 1, position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, background: "#090A10" }}>
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: fontSize * 1.8, transform: "translateY(-50%)", background: "rgba(99, 102, 241, 0.08)", borderTop: "1px solid rgba(99, 102, 241, 0.3)", borderBottom: "1px solid rgba(99, 102, 241, 0.3)", pointerEvents: "none" }} />
        <div ref={scrollRef} style={{ width: "100%", height: "100%", overflowY: "auto", padding: "200px 40px", scrollBehavior: "smooth" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", fontSize: fontSize, lineHeight: 1.8, textAlign: "center", color: "#E2E8F0", fontFamily: "var(--font-display)" }}>
            {renderTeleprompterText(scrolledText)}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── RENDERERS ───────────────────────────────────────────────────────────────

function PitchDeckRenderer({ output, onCopy, copied, onDownload, onSave, saving }) {
  const [slideData, setSlideData] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isGridView, setIsGridView] = useState(false);

  useEffect(() => {
    if (output) setSlideData(parsePitchDeck(output));
  }, [output]);

  if (!slideData || slideData.slides.length === 0) {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginBottom: 16 }}>
          <button className="btn-secondary" style={{ padding: "8px 16px" }} onClick={onCopy}>{copied ? "Copied!" : "Copy"}</button>
          <button className="btn-secondary" style={{ padding: "8px 16px" }} onClick={() => onDownload("md")}>Download .md</button>
          {onSave && <button className="btn-premium" style={{ padding: "8px 16px" }} onClick={onSave} disabled={saving}>{saving ? "Saving..." : "Save to Project"}</button>}
        </div>
        <pre style={{ whiteSpace: "pre-wrap", color: "var(--text-secondary)", lineHeight: 1.7, fontSize: 14 }}>{output}</pre>
      </div>
    );
  }

  const { intro, slides } = slideData;
  const currentSlide = slides[activeIndex];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
        <button className="btn-secondary" style={{ padding: "8px 14px" }} onClick={() => setIsGridView(!isGridView)}>
          {isGridView ? "👁️ Carousel View" : "📱 Grid View"}
        </button>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn-secondary" style={{ padding: "8px 14px" }} onClick={onCopy}>{copied ? "Copied!" : "Copy"}</button>
          <button className="btn-secondary" style={{ padding: "8px 14px" }} onClick={() => onDownload("md")}>Download .md</button>
          {onSave && <button className="btn-premium" style={{ padding: "8px 14px" }} onClick={onSave} disabled={saving}>{saving ? "Saving..." : "Save to Project"}</button>}
        </div>
      </div>

      {intro && <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>{intro}</p>}

      {isGridView ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {slides.map((slide, idx) => (
            <div key={idx} className="glass-card" style={{ padding: 20, cursor: "pointer", border: activeIndex === idx ? "1px solid var(--primary)" : "1px solid var(--border-color)" }} onClick={() => { setActiveIndex(idx); setIsGridView(false); }}>
              <span style={{ fontSize: 11, color: "var(--primary)", fontWeight: 700 }}>SLIDE {slide.num}</span>
              <h4 style={{ fontSize: 15, marginTop: 4, marginBottom: 8, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{slide.title}</h4>
              <p style={{ fontSize: 12, color: "var(--text-secondary)", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden", lineHeight: 1.4 }}>{slide.message}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="slide-card">
          <div className="glass-card" style={{ minHeight: 340, padding: 32, display: "flex", flexDirection: "column", justifyContent: "space-between", borderLeft: "4px solid var(--primary)", position: "relative" }}>
            <div style={{ position: "absolute", top: 20, right: 24, fontSize: 12, color: "var(--text-muted)", fontWeight: 700 }}>
              SLIDE {activeIndex + 1} OF {slides.length}
            </div>
            <div>
              <span style={{ fontSize: 12, color: "var(--primary)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>Slide {currentSlide.num}</span>
              <h3 style={{ fontSize: 24, marginTop: 6, marginBottom: 16, color: "#fff" }}>{currentSlide.title}</h3>
              {currentSlide.message && (
                <div style={{ background: "rgba(255,255,255,0.02)", borderLeft: "2px solid rgba(255,255,255,0.1)", padding: "10px 14px", borderRadius: 4, marginBottom: 20 }}>
                  <p style={{ fontSize: 13, fontStyle: "italic", color: "var(--text-secondary)", margin: 0 }}>&ldquo;{currentSlide.message}&rdquo;</p>
                </div>
              )}
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {currentSlide.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 10, display: "flex", alignItems: "flex-start", gap: 10, lineHeight: 1.5 }}>
                    <span style={{ color: "var(--primary)", marginTop: 2 }}>✦</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            {currentSlide.notes && (
              <div style={{ background: "rgba(99, 102, 241, 0.05)", border: "1px dashed rgba(99, 102, 241, 0.2)", borderRadius: 10, padding: "14px 18px", marginTop: 24 }}>
                <span style={{ display: "block", fontSize: 11, color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 4 }}>💡 Speaker Tip</span>
                <p style={{ fontSize: 12, color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>{currentSlide.notes}</p>
              </div>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 16 }}>
            <button className="btn-secondary" disabled={activeIndex === 0} style={{ padding: "8px 16px" }} onClick={() => setActiveIndex(activeIndex - 1)}>← Previous</button>
            <div style={{ display: "flex", gap: 6 }}>
              {slides.map((_, idx) => (
                <button key={idx} onClick={() => setActiveIndex(idx)} style={{ width: 8, height: 8, padding: 0, borderRadius: "50%", border: "none", cursor: "pointer", background: activeIndex === idx ? "var(--primary)" : "rgba(255,255,255,0.15)", transition: "background 0.2s" }} />
              ))}
            </div>
            <button className="btn-secondary" disabled={activeIndex === slides.length - 1} style={{ padding: "8px 16px" }} onClick={() => setActiveIndex(activeIndex + 1)}>Next →</button>
          </div>
        </div>
      )}
    </div>
  );
}

function PitchVideoRenderer({ output, onCopy, copied, onDownload, onSave, saving }) {
  const [teleprompterOpen, setTeleprompterOpen] = useState(false);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
        <button className="btn-premium" style={{ padding: "8px 16px" }} onClick={() => setTeleprompterOpen(true)}>🎙️ Open Teleprompter Mode</button>
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn-secondary" style={{ padding: "8px 14px" }} onClick={onCopy}>{copied ? "Copied!" : "Copy"}</button>
          <button className="btn-secondary" style={{ padding: "8px 14px" }} onClick={() => onDownload("md")}>Download .md</button>
          {onSave && <button className="btn-premium" style={{ padding: "8px 14px" }} onClick={onSave} disabled={saving}>{saving ? "Saving..." : "Save to Project"}</button>}
        </div>
      </div>
      <div className="glass-card" style={{ padding: 24, lineHeight: 1.8, fontSize: 14 }}>
        {renderScriptWithCues(output)}
      </div>
      {teleprompterOpen && <TeleprompterModal text={output} onClose={() => setTeleprompterOpen(false)} />}
    </div>
  );
}

function FinancialTrackerRenderer({ output, onCopy, copied, onDownload, onSave, saving }) {
  const [data, setData] = useState(null);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    if (output) setData(parseFinancials(output));
  }, [output]);

  if (!data) return null;
  const { summary, metrics, economics, runway, checklist, redFlags } = data;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginBottom: 20 }}>
        <button className="btn-secondary" style={{ padding: "8px 14px" }} onClick={onCopy}>{copied ? "Copied!" : "Copy"}</button>
        <button className="btn-secondary" style={{ padding: "8px 14px" }} onClick={() => onDownload("md")}>Download .md</button>
        {onSave && <button className="btn-premium" style={{ padding: "8px 14px" }} onClick={onSave} disabled={saving}>{saving ? "Saving..." : "Save to Project"}</button>}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {summary && (
          <div className="glass-card" style={{ padding: 24, borderLeft: "4px solid #43C6AC" }}>
            <h4 style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: "1px", color: "#43C6AC", marginBottom: 10 }}>🩺 Financial Health Summary</h4>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--text-primary)" }}>{summary}</p>
          </div>
        )}

        {metrics.length > 0 && (
          <div>
            <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 14, color: "var(--text-primary)" }}>📊 Key Metrics to Track</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 14 }}>
              {metrics.map((metric, idx) => (
                <div key={idx} className="glass-card" style={{ padding: 18, background: "rgba(255,255,255,0.015)" }}>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ fontSize: 20, background: "rgba(67, 198, 172, 0.1)", color: "#43C6AC", width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>📈</span>
                    <div>
                      <h5 style={{ fontSize: 14, fontWeight: 700, color: "var(--text-primary)", marginBottom: 4 }}>{metric.name}</h5>
                      <p style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>{metric.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {economics && (
            <div className="glass-card" style={{ padding: 20 }}>
              <h4 style={{ fontSize: 14, color: "#43C6AC", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 12 }}>💰 Unit Economics</h4>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", whiteSpace: "pre-wrap", lineHeight: 1.6 }}>{economics}</p>
            </div>
          )}
          {runway && (
            <div className="glass-card" style={{ padding: 20 }}>
              <h4 style={{ fontSize: 14, color: "#43C6AC", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 12 }}>🔥 Burn & Runway Analysis</h4>
              <p style={{ fontSize: 13, color: "var(--text-secondary)", whiteSpace: "pre-wrap", lineHeight: 1.6 }}>{runway}</p>
            </div>
          )}
        </div>

        {checklist.length > 0 && (
          <div className="glass-card" style={{ padding: 24 }}>
            <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 16 }}>📋 Fundraising Readiness Checklist</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {checklist.map((item, idx) => (
                <label key={idx} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", fontSize: 13, color: checkedItems[idx] ? "var(--text-muted)" : "var(--text-secondary)" }}>
                  <input type="checkbox" checked={!!checkedItems[idx]} onChange={() => setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }))} style={{ width: 16, height: 16, accentColor: "#43C6AC", cursor: "pointer" }} />
                  <span style={{ textDecoration: checkedItems[idx] ? "line-through" : "none" }}>{item}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {redFlags.length > 0 && (
          <div className="glass-card" style={{ padding: 24, border: "1px solid rgba(244, 63, 94, 0.25)" }}>
            <h4 style={{ fontSize: 15, fontWeight: 700, color: "#F43F5E", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>⚠️ Red Flags to Watch</h4>
            <ul style={{ listStyleType: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {redFlags.map((flag, idx) => (
                <li key={idx} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  <span style={{ color: "#F43F5E" }}>•</span>
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

function RevenueProjectionsRenderer({ output, onCopy, copied, onDownload, onSave, saving }) {
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("Base");

  useEffect(() => {
    if (output) setData(parseScenarios(output));
  }, [output]);

  if (!data) return null;
  const currentScenario = data[activeTab] || { text: "", tables: [] };
  const hasTabs = data.Conservative?.tables?.length > 0 || data.Base?.tables?.length > 0 || data.Optimistic?.tables?.length > 0;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
        {hasTabs ? (
          <div style={{ display: "flex", gap: 6, background: "rgba(255,255,255,0.03)", padding: 4, borderRadius: 10, border: "1px solid rgba(255,255,255,0.05)" }}>
            {["Conservative", "Base", "Optimistic"].map(tab => (
              <button 
                key={tab} 
                className={activeTab === tab ? "btn-premium" : "btn-secondary"} 
                style={{ padding: "6px 14px", fontSize: 12, border: "none", borderRadius: 8, background: activeTab === tab ? "var(--primary-gradient)" : "transparent", color: activeTab === tab ? "#fff" : "var(--text-secondary)" }}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        ) : <div />}
        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn-secondary" style={{ padding: "8px 14px" }} onClick={onCopy}>{copied ? "Copied!" : "Copy"}</button>
          <button className="btn-secondary" style={{ padding: "8px 14px" }} onClick={() => onDownload("md")}>Download .md</button>
          {onSave && <button className="btn-premium" style={{ padding: "8px 14px" }} onClick={onSave} disabled={saving}>{saving ? "Saving..." : "Save to Project"}</button>}
        </div>
      </div>

      {hasTabs ? (
        <div className="slide-card">
          <div className="glass-card" style={{ padding: 24 }}>
            <h3 style={{ fontSize: 18, marginBottom: 12, color: "#fff" }}>{activeTab} Scenario Projections</h3>
            {currentScenario.tables.map((table, idx) => (
              <div key={idx}>{renderTable(table)}</div>
            ))}
            {currentScenario.text && (
              <div style={{ marginTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16, fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6, whiteSpace: "pre-wrap" }}>
                {currentScenario.text.replace(/\|[\s\S]*?\|/g, "").trim()}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="glass-card" style={{ padding: 24 }}>
          {data.General?.tables?.map((table, idx) => (
            <div key={idx}>{renderTable(table)}</div>
          ))}
          <pre style={{ whiteSpace: "pre-wrap", color: "var(--text-secondary)", lineHeight: 1.6, fontSize: 13, marginTop: 16 }}>{data.General?.text}</pre>
        </div>
      )}
    </div>
  );
}

// ─── EXPORTED WRAPPER ────────────────────────────────────────────────────────

export default function FormattedOutput({ toolId, output, onSave, saving, activeProject }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const handleDownload = (format) => {
    const filename = `${activeProject.name.toLowerCase().replace(/\s+/g, "-")}-${toolId}.${format === "md" ? "md" : "txt"}`;
    const cleanContent = format === "md" 
      ? `# ${activeProject.name} - ${toolId}\n\n${output}`
      : output;
    const blob = new Blob([cleanContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (toolId === "pitch-deck") {
    return <PitchDeckRenderer output={output} onCopy={handleCopy} copied={copied} onDownload={handleDownload} onSave={onSave} saving={saving} />;
  }
  if (toolId === "pitch-video") {
    return <PitchVideoRenderer output={output} onCopy={handleCopy} copied={copied} onDownload={handleDownload} onSave={onSave} saving={saving} />;
  }
  if (toolId === "financials") {
    return <FinancialTrackerRenderer output={output} onCopy={handleCopy} copied={copied} onDownload={handleDownload} onSave={onSave} saving={saving} />;
  }
  if (toolId === "projections") {
    return <RevenueProjectionsRenderer output={output} onCopy={handleCopy} copied={copied} onDownload={handleDownload} onSave={onSave} saving={saving} />;
  }

  // General AI Output display with parsed headings and lists
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginBottom: 16 }}>
        <button className="btn-secondary" style={{ padding: "8px 16px" }} onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>
        <button className="btn-secondary" style={{ padding: "8px 16px" }} onClick={() => handleDownload("md")}>Download .md</button>
        {onSave && <button className="btn-premium" style={{ padding: "8px 16px" }} onClick={onSave} disabled={saving}>{saving ? "Saving..." : "Save to Project"}</button>}
      </div>
      <div className="glass-card parsed-content" style={{ padding: 28, lineHeight: 1.7, fontSize: 14 }}>
        <pre style={{ whiteSpace: "pre-wrap", color: "var(--text-secondary)", fontFamily: "inherit", margin: 0 }}>{output}</pre>
      </div>
    </div>
  );
}

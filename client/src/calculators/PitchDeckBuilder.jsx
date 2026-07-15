import { useState, useEffect, useRef } from "react";
import "./PitchDeckBuilder.css";

export default function PitchDeckBuilder({ onSave }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [state, setState] = useState({
    logoDataUrl: null,
    bgColor: "#ffffff",
    accentColor: "#1d4ed8",
    title: "Acme Corp",
    tagline: "Building the future of logistics",
    presenter: "Jane Doe",
    date: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
    problem: "Current logistics are slow.\nTracking is opaque.\nCosts are skyrocketing.",
    solution: "AI-driven route optimization.\nReal-time GPS tracking.\nPredictive cost analytics.",
    tam: "$120B",
    sam: "$18B",
    som: "$2.5B",
    businessModel: "SaaS subscription ($499/mo) + Transaction fee (2%)",
    team1Name: "Jane Doe",
    team1Title: "CEO, ex-Amazon",
    team1Bio: "10 years in supply chain.",
    team2Name: "John Smith",
    team2Title: "CTO, ex-Google",
    team2Bio: "Led ML teams for 8 years.",
    fundingAsk: "$3.5M",
    useOfFunds: "Product dev (40%), Sales (30%), Ops (20%), Reserve (10%)",
  });

  const previewRef = useRef(null);

  const steps = [
    "Brand & Title",
    "Problem",
    "Solution",
    "Market",
    "Business Model",
    "Team",
    "Financials & Ask",
    "Export",
  ];

  const isLight = (hex) => {
    let c = hex.replace("#", "");
    if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
    const r = parseInt(c.substring(0, 2), 16);
    const g = parseInt(c.substring(2, 4), 16);
    const b = parseInt(c.substring(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
  };

  const isDark = isLight(state.bgColor) < 128;
  const textColor = isDark ? "#FFFFFF" : "#0b1120";
  const subColor = isDark ? "#cbd5e1" : "#475569";

  const renderPreview = () => {
    const s = state;
    let bodyHtml = "";
    let titleText = "";

    switch (currentStep) {
      case 0:
        titleText = "Title Slide";
        bodyHtml = `
          <div style="flex:1;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:0.5rem;">
            ${s.logoDataUrl ? `<img src="${s.logoDataUrl}" style="max-height:60px;max-width:150px;object-fit:contain;margin-bottom:0.5rem;" alt="logo" />` : ""}
            <div style="font-size:2.5rem;font-weight:700;color:${textColor};">${s.title}</div>
            <div style="font-size:1.2rem;color:${subColor};">${s.tagline}</div>
            <div style="font-size:0.9rem;color:${subColor};margin-top:0.5rem;">${s.presenter} · ${s.date}</div>
          </div>
        `;
        break;
      case 1:
        titleText = "The Problem";
        bodyHtml = `<div style="display:flex;flex-direction:column;gap:0.5rem;"><ul>${s.problem
          .split("\n")
          .filter((p) => p.trim())
          .map((p) => `<li>${p}</li>`)
          .join("")}</ul></div>`;
        break;
      case 2:
        titleText = "Our Solution";
        bodyHtml = `<div style="display:flex;flex-direction:column;gap:0.5rem;"><ul>${s.solution
          .split("\n")
          .filter((p) => p.trim())
          .map((p) => `<li>${p}</li>`)
          .join("")}</ul></div>`;
        break;
      case 3:
        titleText = "Market Opportunity";
        bodyHtml = `
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;text-align:center;margin-top:1rem;">
            <div><strong style="font-size:1.8rem;color:${textColor};">${s.tam}</strong><br/><span style="font-size:0.8rem;color:${subColor};">TAM</span></div>
            <div><strong style="font-size:1.8rem;color:${textColor};">${s.sam}</strong><br/><span style="font-size:0.8rem;color:${subColor};">SAM</span></div>
            <div><strong style="font-size:1.8rem;color:${textColor};">${s.som}</strong><br/><span style="font-size:0.8rem;color:${subColor};">SOM</span></div>
          </div>
        `;
        break;
      case 4:
        titleText = "Business Model";
        bodyHtml = `<div style="font-size:1.1rem;">${s.businessModel}</div>`;
        break;
      case 5:
        titleText = "Our Team";
        bodyHtml = `
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-top:0.5rem;">
            <div><strong>${s.team1Name}</strong><br/><span style="color:${subColor};">${s.team1Title}</span><br/><span style="font-size:0.85rem;">${s.team1Bio}</span></div>
            <div><strong>${s.team2Name}</strong><br/><span style="color:${subColor};">${s.team2Title}</span><br/><span style="font-size:0.85rem;">${s.team2Bio}</span></div>
          </div>
        `;
        break;
      case 6:
        titleText = "Financials & The Ask";
        bodyHtml = `
          <div style="display:flex;flex-direction:column;gap:0.75rem;justify-content:center;height:100%;">
            <div><strong style="font-size:1.8rem;color:${textColor};">${s.fundingAsk}</strong> <span style="font-size:0.9rem;color:${subColor};">Funding Ask</span></div>
            <div><strong>Use of Funds:</strong> ${s.useOfFunds}</div>
          </div>
        `;
        break;
      case 7:
        titleText = "✨ Ready to Export";
        bodyHtml = `
          <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:0.5rem;height:100%;">
            <div style="font-size:2rem;">📥</div>
            <div style="font-size:1.1rem;color:${textColor};">Your pitch deck is ready.</div>
            <div style="font-size:0.9rem;color:${subColor};">Click the download button below.</div>
          </div>
        `;
        break;
      default:
        bodyHtml = "";
    }

    return { titleText, bodyHtml };
  };

  const { titleText, bodyHtml } = renderPreview();

  const handleInputChange = (field, value) => {
    setState((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setState((prev) => ({ ...prev, logoDataUrl: ev.target.result }));
    };
    reader.readAsDataURL(file);
  };

  const generatePPTX = async () => {
    // Dynamically import PptxGenJS
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/gh/gitbrent/PptxGenJS@3.12.0/dist/pptxgen.bundle.js";
    script.onload = () => {
      const pptx = new window.PptxGenJS();
      pptx.defineLayout({ name: "WIDE", width: 13.33, height: 7.5 });
      pptx.layout = "WIDE";

      const bg = state.bgColor || "#ffffff";
      const accent = state.accentColor || "#1d4ed8";
      const isDarkBg = isLight(bg) < 128;
      const textCol = isDarkBg ? "#FFFFFF" : "#0b1120";
      const subCol = isDarkBg ? "#cbd5e1" : "#475569";

      const addSlide = (title, bodyTexts, isTitle = false) => {
        const slide = pptx.addSlide();
        slide.background = { color: bg };
        slide.addShape(pptx.ShapeType.rect, {
          x: 0,
          y: 0,
          w: 13.33,
          h: 0.15,
          fill: { color: accent },
        });

        if (isTitle) {
          if (state.logoDataUrl) {
            try {
              slide.addImage({
                data: state.logoDataUrl,
                x: 0.8,
                y: 0.8,
                w: 2.0,
                h: 0.8,
              });
            } catch (e) {}
          }
          slide.addText(state.title || "Company", {
            x: 0.8,
            y: 2.5,
            w: 11.7,
            h: 1.5,
            fontSize: 44,
            fontFace: "Arial",
            color: textCol,
            bold: true,
            align: "center",
          });
          slide.addText(state.tagline || "", {
            x: 0.8,
            y: 4.0,
            w: 11.7,
            h: 0.8,
            fontSize: 22,
            fontFace: "Arial",
            color: subCol,
            align: "center",
          });
          slide.addText(`${state.presenter}  ·  ${state.date}`, {
            x: 0.8,
            y: 5.5,
            w: 11.7,
            h: 0.6,
            fontSize: 16,
            fontFace: "Arial",
            color: subCol,
            align: "center",
          });
        } else {
          slide.addShape(pptx.ShapeType.rect, {
            x: 0,
            y: 0,
            w: 13.33,
            h: 1.2,
            fill: { color: accent },
          });
          slide.addText(title || "Slide", {
            x: 0.8,
            y: 0.1,
            w: 11.7,
            h: 1.0,
            fontSize: 28,
            fontFace: "Arial",
            color: "#FFFFFF",
            bold: true,
            align: "left",
          });

          let yPos = 1.8;
          if (Array.isArray(bodyTexts)) {
            bodyTexts.forEach((text, idx) => {
              slide.addText(text, {
                x: 0.8,
                y: yPos + idx * 0.6,
                w: 11.7,
                h: 0.6,
                fontSize: 18,
                fontFace: "Arial",
                color: textCol,
                align: "left",
                bullet: true,
              });
            });
          } else {
            slide.addText(bodyTexts || " ", {
              x: 0.8,
              y: 1.8,
              w: 11.7,
              h: 4.0,
              fontSize: 20,
              fontFace: "Arial",
              color: textCol,
              align: "left",
              valign: "top",
            });
          }
        }
      };

      addSlide("", [], true);
      addSlide("The Problem", state.problem.split("\n").filter((p) => p.trim()));
      addSlide("Our Solution", state.solution.split("\n").filter((p) => p.trim()));

      const slide3 = pptx.addSlide();
      slide3.background = { color: bg };
      slide3.addShape(pptx.ShapeType.rect, {
        x: 0,
        y: 0,
        w: 13.33,
        h: 1.2,
        fill: { color: accent },
      });
      slide3.addText("Market Opportunity", {
        x: 0.8,
        y: 0.1,
        w: 11.7,
        h: 1.0,
        fontSize: 28,
        fontFace: "Arial",
        color: "#FFFFFF",
        bold: true,
        align: "left",
      });
      [["TAM", state.tam], ["SAM", state.sam], ["SOM", state.som]].forEach((item, idx) => {
        const xPos = 0.8 + idx * 3.9;
        slide3.addShape(pptx.ShapeType.rect, {
          x: xPos,
          y: 2.5,
          w: 3.5,
          h: 2.5,
          fill: { color: isDarkBg ? "#2d3748" : "#f1f5f9" },
          line: { color: accent, width: 1 },
        });
        slide3.addText(item[1], {
          x: xPos,
          y: 2.8,
          w: 3.5,
          h: 1.2,
          fontSize: 32,
          fontFace: "Arial",
          color: textCol,
          bold: true,
          align: "center",
        });
        slide3.addText(item[0], {
          x: xPos,
          y: 4.2,
          w: 3.5,
          h: 0.6,
          fontSize: 16,
          fontFace: "Arial",
          color: subCol,
          align: "center",
        });
      });

      addSlide("Business Model", state.businessModel);

      const slide5 = pptx.addSlide();
      slide5.background = { color: bg };
      slide5.addShape(pptx.ShapeType.rect, {
        x: 0,
        y: 0,
        w: 13.33,
        h: 1.2,
        fill: { color: accent },
      });
      slide5.addText("Our Team", {
        x: 0.8,
        y: 0.1,
        w: 11.7,
        h: 1.0,
        fontSize: 28,
        fontFace: "Arial",
        color: "#FFFFFF",
        bold: true,
        align: "left",
      });
      [[state.team1Name, state.team1Title, state.team1Bio], [state.team2Name, state.team2Title, state.team2Bio]].forEach((member, idx) => {
        const xPos = 0.8 + idx * 5.5;
        slide5.addText(member[0], {
          x: xPos,
          y: 1.8,
          w: 4.5,
          h: 0.8,
          fontSize: 22,
          fontFace: "Arial",
          color: textCol,
          bold: true,
        });
        slide5.addText(member[1], {
          x: xPos,
          y: 2.6,
          w: 4.5,
          h: 0.6,
          fontSize: 18,
          fontFace: "Arial",
          color: accent,
          bold: true,
        });
        slide5.addText(member[2] || " ", {
          x: xPos,
          y: 3.2,
          w: 4.5,
          h: 0.8,
          fontSize: 16,
          fontFace: "Arial",
          color: subCol,
        });
      });

      const slide6 = pptx.addSlide();
      slide6.background = { color: bg };
      slide6.addShape(pptx.ShapeType.rect, {
        x: 0,
        y: 0,
        w: 13.33,
        h: 1.2,
        fill: { color: accent },
      });
      slide6.addText("Financials & The Ask", {
        x: 0.8,
        y: 0.1,
        w: 11.7,
        h: 1.0,
        fontSize: 28,
        fontFace: "Arial",
        color: "#FFFFFF",
        bold: true,
        align: "left",
      });
      slide6.addText(`Funding Ask: ${state.fundingAsk}`, {
        x: 0.8,
        y: 2.0,
        w: 11.7,
        h: 1.0,
        fontSize: 32,
        fontFace: "Arial",
        color: textCol,
        bold: true,
      });
      slide6.addText(`Use of Funds:\n${state.useOfFunds}`, {
        x: 0.8,
        y: 3.2,
        w: 11.7,
        h: 2.5,
        fontSize: 20,
        fontFace: "Arial",
        color: subCol,
        valign: "top",
      });

      pptx.writeFile({ fileName: "pitch_deck.pptx" });
    };
    document.head.appendChild(script);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={{ display: "block", fontWeight: "600", marginBottom: "0.5rem" }}>Company Logo</label>
              <input type="file" accept="image/*" onChange={handleLogoUpload} style={{ padding: "0.5rem" }} />
              {state.logoDataUrl && <span style={{ marginLeft: "1rem", color: "#22c55e" }}>✅ Logo loaded</span>}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
              <input placeholder="Company Name" value={state.title} onChange={(e) => handleInputChange("title", e.target.value)} />
              <input placeholder="Tagline" value={state.tagline} onChange={(e) => handleInputChange("tagline", e.target.value)} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
              <input placeholder="Presenter Name" value={state.presenter} onChange={(e) => handleInputChange("presenter", e.target.value)} />
              <input placeholder="Date" value={state.date} onChange={(e) => handleInputChange("date", e.target.value)} />
            </div>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem" }}>
              <div>
                <label>Background Color</label>
                <input type="color" value={state.bgColor} onChange={(e) => handleInputChange("bgColor", e.target.value)} style={{ width: "60px", height: "40px", cursor: "pointer" }} />
              </div>
              <div>
                <label>Accent Color</label>
                <input type="color" value={state.accentColor} onChange={(e) => handleInputChange("accentColor", e.target.value)} style={{ width: "60px", height: "40px", cursor: "pointer" }} />
              </div>
            </div>
          </>
        );
      case 1:
        return <textarea placeholder="Problem (one per line)" value={state.problem} onChange={(e) => handleInputChange("problem", e.target.value)} style={{ width: "100%", minHeight: "120px", padding: "0.6rem", border: "1px solid #d1d9e6", borderRadius: "10px" }} />;
      case 2:
        return <textarea placeholder="Solution (one per line)" value={state.solution} onChange={(e) => handleInputChange("solution", e.target.value)} style={{ width: "100%", minHeight: "120px", padding: "0.6rem", border: "1px solid #d1d9e6", borderRadius: "10px" }} />;
      case 3:
        return (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            <input placeholder="TAM" value={state.tam} onChange={(e) => handleInputChange("tam", e.target.value)} />
            <input placeholder="SAM" value={state.sam} onChange={(e) => handleInputChange("sam", e.target.value)} />
            <input placeholder="SOM" value={state.som} onChange={(e) => handleInputChange("som", e.target.value)} />
          </div>
        );
      case 4:
        return <textarea placeholder="Business Model" value={state.businessModel} onChange={(e) => handleInputChange("businessModel", e.target.value)} style={{ width: "100%", minHeight: "100px", padding: "0.6rem", border: "1px solid #d1d9e6", borderRadius: "10px" }} />;
      case 5:
        return (
          <>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
              <input placeholder="Team Member 1 Name" value={state.team1Name} onChange={(e) => handleInputChange("team1Name", e.target.value)} />
              <input placeholder="Title" value={state.team1Title} onChange={(e) => handleInputChange("team1Title", e.target.value)} />
            </div>
            <input placeholder="Bio" value={state.team1Bio} onChange={(e) => handleInputChange("team1Bio", e.target.value)} style={{ width: "100%", marginBottom: "1.25rem", padding: "0.6rem", border: "1px solid #d1d9e6", borderRadius: "10px" }} />
            <hr style={{ margin: "1rem 0", borderColor: "#e2e8f0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
              <input placeholder="Team Member 2 Name" value={state.team2Name} onChange={(e) => handleInputChange("team2Name", e.target.value)} />
              <input placeholder="Title" value={state.team2Title} onChange={(e) => handleInputChange("team2Title", e.target.value)} />
            </div>
            <input placeholder="Bio" value={state.team2Bio} onChange={(e) => handleInputChange("team2Bio", e.target.value)} style={{ width: "100%", padding: "0.6rem", border: "1px solid #d1d9e6", borderRadius: "10px" }} />
          </>
        );
      case 6:
        return (
          <>
            <input placeholder="Funding Ask" value={state.fundingAsk} onChange={(e) => handleInputChange("fundingAsk", e.target.value)} style={{ width: "100%", marginBottom: "1.25rem", padding: "0.6rem", border: "1px solid #d1d9e6", borderRadius: "10px" }} />
            <textarea placeholder="Use of Funds" value={state.useOfFunds} onChange={(e) => handleInputChange("useOfFunds", e.target.value)} style={{ width: "100%", minHeight: "100px", padding: "0.6rem", border: "1px solid #d1d9e6", borderRadius: "10px" }} />
          </>
        );
      case 7:
        return (
          <div style={{ textAlign: "center", padding: "2rem 0" }}>
            <p style={{ fontSize: "1.1rem", color: "#0b1120", marginBottom: "1rem" }}>Your deck contains 8 slides and is ready to export.</p>
            <button onClick={generatePPTX} style={{ padding: "0.8rem 3rem", fontSize: "1rem", background: "#16a34a", color: "white", border: "none", borderRadius: "40px", cursor: "pointer", fontWeight: "600" }}>
              📥 Download .pptx
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Preview */}
      <div
        ref={previewRef}
        style={{
          background: state.bgColor,
          color: textColor,
          borderRadius: "16px",
          padding: "2rem",
          minHeight: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          border: "1px solid #e2e8f0",
        }}
      >
        {titleText && <h2 style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem", color: textColor }}>{titleText}</h2>}
        <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </div>

      {/* Steps */}
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "center", flexWrap: "wrap" }}>
        {steps.map((step, idx) => (
          <button key={idx} onClick={() => setCurrentStep(idx)} style={{ padding: "0.6rem 1.2rem", borderRadius: "20px", border: idx === currentStep ? "2px solid #1d4ed8" : "1px solid #e2e8f0", background: idx === currentStep ? "#dbeafe" : "white", color: idx === currentStep ? "#1d4ed8" : "#475569", cursor: "pointer", fontWeight: idx === currentStep ? "600" : "500", fontSize: "0.85rem" }}>
            {step}
          </button>
        ))}
      </div>

      {/* Form */}
      {renderForm()}

      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "1.5rem", borderTop: "1px solid #e2e8f0" }}>
        <button onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0} style={{ padding: "0.6rem 1.8rem", border: "none", borderRadius: "40px", background: "#e2e8f0", color: "#1e293b", cursor: currentStep === 0 ? "not-allowed" : "pointer", opacity: currentStep === 0 ? 0.4 : 1, fontWeight: "600" }}>
          ← Back
        </button>
        <button onClick={() => setCurrentStep(Math.min(7, currentStep + 1))} disabled={currentStep === 7} style={{ padding: "0.6rem 1.8rem", border: "none", borderRadius: "40px", background: currentStep === 7 ? "#e2e8f0" : "#1d4ed8", color: currentStep === 7 ? "#1e293b" : "white", cursor: currentStep === 7 ? "not-allowed" : "pointer", fontWeight: "600" }}>
          {currentStep === 7 ? "✓ Done" : "Next →"}
        </button>
      </div>
    </div>
  );
}

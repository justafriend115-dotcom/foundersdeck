import { ImageResponse } from "next/og";

export const dynamic = "force-dynamic";
export const alt = "FoundersDeck — AI-powered tools to launch your startup";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f172a",
        color: "#f8fafc",
        fontFamily: "system-ui, sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-180px",
          left: "-160px",
          width: "560px",
          height: "560px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(37,99,235,0.45), transparent 65%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-200px",
          right: "-140px",
          width: "600px",
          height: "600px",
          borderRadius: "9999px",
          background: "radial-gradient(circle, rgba(147,51,234,0.4), transparent 65%)",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "92px",
            height: "92px",
            borderRadius: "24px",
            background: "linear-gradient(135deg, #2563eb, #4f46e5 50%, #9333ea)",
            boxShadow: "0 24px 48px rgba(79,70,229,0.45)",
            fontSize: "48px",
          }}
        >
          ✦
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "72px",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1,
            }}
          >
            Founders<span style={{ color: "#a5b4fc" }}>Deck</span>
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#94a3b8",
              fontWeight: 500,
            }}
          >
            Idea → investment-ready, in one place
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "14px",
          marginTop: "12px",
        }}
      >
        {["Pitch decks", "Business plans", "Financial projections", "Investor CRM"].map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 20px",
              borderRadius: "9999px",
              border: "1px solid rgba(148,163,184,0.3)",
              background: "rgba(30,41,59,0.7)",
              fontSize: "20px",
              fontWeight: 600,
              color: "#cbd5e1",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}

import "dotenv/config";
import express from "express";
import cors from "cors";
import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

import Anthropic from "@anthropic-ai/sdk";

initializeApp({
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID,
});

const app = express();
const PORT = process.env.PORT || 3001;

// The frontend (Vercel) calls this API (Render) cross-origin. Auth is enforced
// per-request via Firebase Bearer tokens; set ALLOWED_ORIGIN (comma-separated)
// to additionally lock CORS down to your frontend domain(s).
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN
    ? process.env.ALLOWED_ORIGIN.split(",").map((o) => o.trim())
    : "*",
}));
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));

// Auth Middleware
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: Missing token" });
  }
  const token = authHeader.split("Bearer ")[1];
  try {
    const decodedToken = await getAuth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res.status(401).json({ error: `Unauthorized: Invalid token. Details: ${error.message}` });
  }
};

app.post("/api/generate", verifyToken, async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: "Missing prompt" });
  if (!process.env.ANTHROPIC_API_KEY) return res.status(500).json({ error: "API key not configured" });

  try {
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const msg = await anthropic.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 8192,
      messages: [{ role: "user", content: prompt }],
    });

    const text = msg.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("");

    res.json({ result: text });
  } catch (err) {
    console.error("Anthropic API error:", err);
    res.status(500).json({ error: `Internal server error: ${err.message}` });
  }
});

// Render runs this as a long-lived web service — it must always bind a port.
// (Render injects PORT; the NODE_ENV guard here previously prevented the server
// from listening in production, which fails Render's port detection.)
app.listen(PORT, () => console.log(`FounderKit server running on port ${PORT}`));

export default app;

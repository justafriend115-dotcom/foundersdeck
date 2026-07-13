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

app.use(cors({
  origin: process.env.NODE_ENV === "production"
    ? process.env.ALLOWED_ORIGIN || "https://foundersdeck.web.app"
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
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 2048,
      messages: [{ role: "user", content: prompt }],
    });

    const text = msg.content[0].text;

    res.json({ result: text });
  } catch (err) {
    console.error("Anthropic API error:", err);
    res.status(500).json({ error: `Internal server error: ${err.message}` });
  }
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`FounderKit server running on port ${PORT}`));
}
export default app;

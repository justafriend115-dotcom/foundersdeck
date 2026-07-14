# FounderKit — AI Startup Toolkit

An AI-powered startup toolkit built with React + Firebase + Anthropic Claude. Users sign in with Google or Apple, create Projects (one per company/venture), and run AI tools per project. All inputs, outputs, and history are saved to their account automatically.

## Tools

| Tool | What it generates |
|------|-------------------|
| 📊 Pitch Deck | 10-slide investor pitch deck outline with speaker notes |
| 🎬 Pitch Video Script | 2-minute structured video script with visual cues |
| 💰 Financial Tracker | CFO-style financial overview, KPIs, investor readiness checklist |
| 📈 Revenue Projections | 3-scenario (Conservative/Base/Optimistic) 3-year financial table |

Plus interactive calculators: Equity Split, Cap Table, SAFE Note, Unit Economics, and Fundraising Tracker.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 (Vite) |
| Backend | Node.js + Express (API proxy) |
| Auth | Firebase Authentication (Google + Apple OAuth) |
| Database | Firebase Firestore |
| AI | Anthropic Claude API (`claude-opus-4-8`) |
| Styling | Inline React styles |
| Fonts | Inter (Google Fonts) |
| Deployment | Vercel (frontend) + Render (backend) |

## Project Structure

```
founderkit/
├── client/                        # React frontend (Vite)
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── .env
│   └── src/
│       ├── main.jsx
│       ├── firebase.js
│       └── App.jsx
│
├── api/                           # Node.js API proxy (Render web service)
│   ├── index.js
│   ├── package.json
│   ├── Dockerfile
│   └── .env
│
├── firestore.rules
├── vercel.json
├── .gitignore
└── README.md
```

## Setup & Installation

### Prerequisites

- Node.js 18+
- A Firebase project (https://console.firebase.google.com) — used for Auth + Firestore only
- An Anthropic API key (https://console.anthropic.com)
- For Apple Sign-In: an Apple Developer account ($99/yr)

### Step 1 — Configure Environment Variables

**`api/.env`**
```
ANTHROPIC_API_KEY=sk-ant-your-key-here
PORT=3001
NODE_ENV=development
```

**`client/.env`** — copy your Firebase config values:
```
VITE_API_URL=http://localhost:3001
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

### Step 2 — Install Dependencies & Run Locally

```bash
# API
cd api
npm install
npm run dev          # runs on :3001

# Client (in a new terminal)
cd client
npm install
npm run dev          # runs on :5173 (proxies /api to :3001)
```

## Deployment

### Frontend → Vercel

`vercel.json` builds the client and serves it as an SPA.

```bash
vercel --prod
```

Environment variables in the Vercel project settings (used at build time):

| Variable | Value |
|----------|-------|
| `VITE_API_URL` | Your Render backend URL, e.g. `https://foundersdeck.onrender.com` |
| `VITE_FIREBASE_*` | Your Firebase config values (same as `client/.env`) |

### Backend → Render

Deploy `api/` as a **Web Service** (Root Directory: `api`). Render can build it either natively (Build: `npm install`, Start: `npm start`) or via the included `Dockerfile`. The server binds to the `PORT` Render injects.

Environment variables in the Render service settings:

| Variable | Value |
|----------|-------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key |
| `NODE_ENV` | `production` |
| `FIREBASE_PROJECT_ID` | Your Firebase project ID (used to verify auth tokens) |
| `ALLOWED_ORIGIN` | (Optional) your Vercel domain(s), comma-separated, to lock down CORS |

### Firestore Rules

```bash
firebase deploy --only firestore:rules
```

## Firestore Data Model

```
/users/{userId}
  - email, displayName, photoURL, createdAt

/users/{userId}/projects/{projectId}
  - name, industry, createdAt, updatedAt

/users/{userId}/projects/{projectId}/sessions/{sessionId}
  - tool, toolLabel, formData, output, calcData, type, createdAt
```

## Quick Reference

| Command | What it does |
|---------|-------------|
| `cd api && npm run dev` | Start backend locally |
| `cd client && npm run dev` | Start frontend locally |
| `cd client && npm run build` | Build for production |
| `vercel --prod` | Deploy frontend |
| `git push` | Deploy backend (Render auto-deploys from the repo) |
| `firebase deploy --only firestore:rules` | Deploy security rules |

## Adding a New Tool

1. Add entry to `TOOLS` array in `client/src/tools/toolConfig.js`
2. Add prompt function to `PROMPTS` object in `client/src/tools/prompts.js`
3. Optionally add fields to `FIELDS_EXTRA`
4. Done — all UI renders from config

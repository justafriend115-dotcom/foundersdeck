# FounderKit — AI Startup Toolkit

An AI-powered startup toolkit built with React + Firebase + Anthropic Claude. Users sign in with Google or Apple, create Projects (one per company/venture), and run four AI tools per project. All inputs, outputs, and history are saved to their account automatically.

## Tools

| Tool | What it generates |
|------|-------------------|
| 📊 Pitch Deck | 10-slide investor pitch deck outline with speaker notes |
| 🎬 Pitch Video Script | 2-minute structured video script with visual cues |
| 💰 Financial Tracker | CFO-style financial overview, KPIs, investor readiness checklist |
| 📈 Revenue Projections | 3-scenario (Conservative/Base/Optimistic) 3-year financial table |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 (Vite) |
| Backend | Node.js + Express (API proxy) |
| Auth | Firebase Authentication (Google + Apple OAuth) |
| Database | Firebase Firestore |
| AI | Anthropic Claude API (claude-sonnet-4-6) |
| Styling | Inline React styles |
| Fonts | Inter (Google Fonts) |
| Deployment | Firebase Hosting (frontend) + Cloud Run (backend) |

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
├── server/                        # Node.js API proxy
│   ├── index.js
│   ├── package.json
│   ├── Dockerfile
│   └── .env
│
├── firestore.rules
├── firebase.json
├── .firebaserc
├── .gitignore
└── README.md
```

## Setup & Installation

### Prerequisites

- Node.js 18+
- A Firebase project (https://console.firebase.google.com)
- An Anthropic API key (https://console.anthropic.com)
- For Apple Sign-In: an Apple Developer account ($99/yr)

### Step 1 — Configure Environment Variables

**`server/.env`**
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
# Server
cd server
npm install
node index.js        # runs on :3001

# Client (in a new terminal)
cd client
npm install
npm run dev          # runs on :5173
```

## Deployment

### Frontend → Firebase Hosting

```bash
cd client && npm run build && cd ..
firebase deploy --only hosting
```

### Backend → Cloud Run

```bash
cd server
gcloud run deploy founderkit-api \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --set-env-vars ANTHROPIC_API_KEY=sk-ant-...,NODE_ENV=production,ALLOWED_ORIGIN=https://your-project.web.app
```

After deploying, update `VITE_API_URL` in `client/.env` to the Cloud Run URL, then rebuild and redeploy hosting.

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
  - tool, toolLabel, formData, output, createdAt
```

## Quick Reference

| Command | What it does |
|---------|-------------|
| `cd server && node index.js` | Start backend locally |
| `cd client && npm run dev` | Start frontend locally |
| `cd client && npm run build` | Build for production |
| `firebase deploy --only hosting` | Deploy frontend |
| `firebase deploy --only firestore:rules` | Deploy security rules |
| `gcloud run deploy founderkit-api --source .` | Deploy backend |

## Adding a New Tool

1. Add entry to `TOOLS` array in `App.jsx`
2. Add prompt function to `PROMPTS` object
3. Optionally add fields to `FIELDS_EXTRA`
4. Done — all UI renders from config

# FoundersDeck

AI-powered tools to launch your startup — pitch decks, business plans, financial projections, contingency planning and investor CRM, in one place.

## Features

- **Pitch deck generator** — AI-built 7-slide decks from a one-page brief (OpenAI or Anthropic, mock fallback without keys)
- **Business plan builder** — guided sections with AI suggestions
- **Financial projections** — revenue, burn and runway model with AI assist
- **Contingency planner** — risk registry and mitigation playbooks
- **Investor CRM** — investor pipeline, notes and meeting tracking
- **Legal hub** — due-diligence and compliance checklist
- **Auth** — email/password signup, login, forgot/reset password (HMAC-signed sessions)
- **Billing** — Stripe Checkout, billing portal and webhooks; stub mode without keys
- **Plans** — Free (3 AI decks) / Pro (unlimited) / Enterprise

## Stack

Next.js 14 (App Router), TypeScript, Tailwind CSS, Prisma, PostgreSQL (Neon), `lucide-react`.

## Getting started

```bash
npm install
cp .env.example .env
npm run db:migrate
npm run db:seed      # creates demo@foundersdeck.com / demo1234
npm run dev
```

Open http://localhost:3000 — sign in with the demo account or sign up.

## Scripts

| Command                  | Description                                            |
| ------------------------ | ------------------------------------------------------ |
| `npm run dev`            | Start dev server                                       |
| `npm run build`          | Production build                                       |
| `npm run start`          | Serve production build                                 |
| `npm run lint`           | ESLint                                                 |
| `npm run db:migrate`     | Apply Prisma migrations                                |
| `npm run db:seed`        | Seed demo user + sample data                           |
| `npm run db:rls`         | Apply Postgres row-level security policies (prod only) |
| `npx prettier --write .` | Format code                                            |

## Environment variables

| Variable                                 | Purpose                                                                                                                    |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `DATABASE_URL`                           | Prisma connection string (PostgreSQL — Neon free tier works)                                                             |
| `OPENAI_API_KEY`                         | AI decks/suggestions via OpenAI (falls back to Anthropic, then mock)                                                       |
| `ANTHROPIC_API_KEY`                      | AI decks/suggestions via Anthropic                                                                                         |
| `QWEN_IMAGE_API_KEY`                     | NVIDIA NIM image generation for pitch deck slide visuals (defaults to flux.1-dev; set `QWEN_IMAGE_API_URL` for qwen-image) |
| `QWEN_IMAGE_EDIT_API_KEY`                | NVIDIA NIM image edit for slide refinement (defaults to flux.1-kontext-dev; falls back to a fresh generation)              |
| `AI_MODEL_OPENAI` / `AI_MODEL_ANTHROPIC` | Optional model overrides                                                                                                   |
| `STRIPE_SECRET_KEY`                      | Live Stripe billing (empty = stub mode with instant demo checkout)                                                         |
| `STRIPE_WEBHOOK_SECRET`                  | Stripe webhook signature verification                                                                                      |
| `STRIPE_PRICE_PRO_MONTHLY`               | Price ID for the Pro monthly subscription                                                                                  |
| `FD_AUTH_SECRET`                         | Session signing secret (dev fallback used when empty)                                                                      |
| `FD_ENCRYPTION_KEY`                      | AES-256-GCM at-rest encryption for tool content + CRM notes (dev fallback used when empty)                                 |
| `NEXT_PUBLIC_GA_ID`                      | GA4 measurement id for analytics (empty = none)                                                                            |
| `NEXT_PUBLIC_APP_URL`                    | Public URL for SEO metadata, sitemap and OG image                                                                          |

**Stub-first philosophy:** every paid integration runs without keys. Add keys to `.env` and restart — the app switches to the real provider (AI, Stripe) with no code changes. `npm run dev` prints nothing until you hit an API; errors surface in the browser.

## Architecture

- `src/app/api/` — route handlers: `auth/*`, `tools/*` (CRUD + AI), `billing/*`, `ai/suggest`, `health`
- `src/lib/` — `ai/` (provider + deck generation), `billing/` (Stripe), `auth/` (sessions + store), `db.ts`, `plans.ts`, `tool-store.ts`, `analytics.ts`
- `src/components/` — `dashboard/`, `tools/`, `landing/`, `billing/`, `auth/`, `ui/`
- `prisma/` — schema, migrations, seed

Data is stored per-user via tool routes with safe default fallbacks (`src/lib/tool-store.ts`); AI generation is always server-side.

## Deploy (Vercel)

1. Push this repo to GitHub, then **Import** it in Vercel (framework auto-detected as Next.js; `vercel.json` sets the build command to `prisma migrate deploy && next build`).
2. Add environment variables in Vercel (Production + Preview): `DATABASE_URL` (your Neon connection string), `FD_AUTH_SECRET`, `FD_ENCRYPTION_KEY`, and optionally the AI/Stripe keys from the table above.
3. Deploy. Migrations apply automatically on build; run `npm run db:seed` once locally against the same DB (or set up a seed script in Vercel) to create `demo@foundersdeck.com` / `demo1234`.

## Production notes

- **Database:** PostgreSQL. Point `DATABASE_URL` at your Neon/Postgres instance and run `npm run db:migrate`. Migrations are checked in; `vercel.json` runs `prisma migrate deploy` on build.
- **Row-level security:** run `npm run db:rls` against the production DB to enable RLS on all user-data tables (scoped to the session GUC `app.current_user_id` — see `src/lib/rls.ts`). With RLS active, every request must run inside `withUserId`/`inUserContext`, so wire those into the auth helpers before enabling.
- **At-rest encryption:** set `FD_ENCRYPTION_KEY` (base64, 32+ bytes). Tool content and CRM notes are AES-256-GCM encrypted; existing plaintext rows decrypt gracefully, but once encrypted with a key, that key is required.
- **Stripe webhooks:** point Stripe → `https://your-domain.com/api/billing/webhook` and select `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`.
- **AI:** set `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`. Without keys the app serves mock decks so the product stays usable.
- **Auth:** set `FD_AUTH_SECRET` to a long random value. Passwords are stored as salted scrypt hashes; login/signup/reset are rate-limited (10 attempts / 15 min per IP+email) and the signup form includes a honeypot for bot filtering.
- **Uptime:** `GET /api/health` returns `{ ok, db }` (503 when the DB is unreachable).

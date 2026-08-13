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

Next.js 14 (App Router), TypeScript, Tailwind CSS, Prisma, SQLite (dev), `lucide-react`.

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

| Command              | Description                            |
| -------------------- | -------------------------------------- |
| `npm run dev`        | Start dev server                       |
| `npm run build`      | Production build                       |
| `npm run start`      | Serve production build                 |
| `npm run lint`       | ESLint                                 |
| `npm run db:migrate` | Apply Prisma migrations                |
| `npm run db:seed`    | Seed demo user + sample data           |
| `npx prettier --write .` | Format code                        |

## Environment variables

| Variable                    | Purpose                                                       |
| --------------------------- | ------------------------------------------------------------- |
| `DATABASE_URL`              | Prisma connection string (SQLite `file:./dev.db` in dev)      |
| `OPENAI_API_KEY`            | AI decks/suggestions via OpenAI (falls back to Anthropic, then mock) |
| `ANTHROPIC_API_KEY`         | AI decks/suggestions via Anthropic                            |
| `AI_MODEL_OPENAI` / `AI_MODEL_ANTHROPIC` | Optional model overrides                     |
| `STRIPE_SECRET_KEY`         | Live Stripe billing (empty = stub mode with instant demo checkout) |
| `STRIPE_WEBHOOK_SECRET`     | Stripe webhook signature verification                         |
| `STRIPE_PRICE_PRO_MONTHLY`  | Price ID for the Pro monthly subscription                     |
| `FD_AUTH_SECRET`            | Session signing secret (dev fallback used when empty)         |
| `NEXT_PUBLIC_GA_ID`         | GA4 measurement id for analytics (empty = none)               |
| `NEXT_PUBLIC_APP_URL`       | Public URL for SEO metadata, sitemap and OG image             |

**Stub-first philosophy:** every paid integration runs without keys. Add keys to `.env` and restart — the app switches to the real provider (AI, Stripe) with no code changes. `npm run dev` prints nothing until you hit an API; errors surface in the browser.

## Architecture

- `src/app/api/` — route handlers: `auth/*`, `tools/*` (CRUD + AI), `billing/*`, `ai/suggest`, `health`
- `src/lib/` — `ai/` (provider + deck generation), `billing/` (Stripe), `auth/` (sessions + store), `db.ts`, `plans.ts`, `tool-store.ts`, `analytics.ts`
- `src/components/` — `dashboard/`, `tools/`, `landing/`, `billing/`, `auth/`, `ui/`
- `prisma/` — schema, migrations, seed

Data is stored per-user via tool routes with safe default fallbacks (`src/lib/tool-store.ts`); AI generation is always server-side.

## Production notes

- **Database:** switch `DATABASE_URL` to Postgres for production (Vercel/Neon etc.); no schema or code changes required.
- **Stripe webhooks:** point Stripe → `https://your-domain.com/api/billing/webhook` and select `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`.
- **AI:** set `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`. Without keys the app serves mock decks so the product stays usable.
- **Auth:** set `FD_AUTH_SECRET` to a long random value.
- **Uptime:** `GET /api/health` returns `{ ok, db }` (503 when the DB is unreachable).

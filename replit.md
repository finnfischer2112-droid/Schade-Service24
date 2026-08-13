# Schaden-Service24 Landingpage

Hochkonvertierende Google-Ads-Landingpage für Schaden-Service24, einen unabhängigen KFZ-Sachverständigen im Raum Kaiserslautern (RCS Gries & Kahnert UG, Waldmohr).

## Product

- Single-page Landingpage (`artifacts/landingpage`, Route `/`), rein frontend, kein Backend.
- Primärer CTA überall: "Jetzt kostenfrei starten" → `CTA_URL` in `artifacts/landingpage/src/config.ts` (aktuell Formular auf rcs.stageberry.net); Telefon 06373 2093898, E-Mail info@schaden-service24.com.
- CI: Weiß + Markenblau #015A9D, CTA-Akzent Orange.
- SEO: Title/Meta/OG/JSON-LD statisch in `index.html`, robots.txt + sitemap.xml in `public/`.
- Tracking-Vorbereitung: `src/lib/tracking.ts` pusht Events (cta_click, phone_click, email_click) in `window.dataLayer`; keine IDs eingetragen.

## Gotchas (project-specific)

- Keine erfundenen Claims/Zahlen/Bewertungen verwenden (rechtliche Vorgabe des Users); alte E-Mail info@reifencentersaar.de darf nirgends auftauchen.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details

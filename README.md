# topic-coaching

Coaching topic site — **coaching.rooquiz.com** (deployed on Vercel).

Hosts every coaching-domain/industry quiz. SEO + sharing draw B2C users to take and share quizzes; landing pages guide B2B users to sign up for RooQuiz.

**Fully static site** — `next build` (with `output: 'export'`) pre-renders the whole site to plain HTML/CSS/JS in `out/`. No SSR, no ISR, no serverless functions. All quiz data is fetched from Payload **at build time** and baked into the HTML; refreshing content means rebuilding and redeploying.

## Architecture in one line

- **Quiz-taking experience**: reuses the cairo quiz player (embeds `quizster.app/a/{token}?embed=1` in an iframe, auto-resizes height via postMessage).
- **Quiz data**: build-time GraphQL calls Payload's `getPublicForm(publicToken)` (`payload.rooquiz.com/api/graphql`), fetched once during `next build` and frozen into the static output.
- **Centralized config**: a single root-level `site.config.ts` (validated with zod) — site info (name/tagline/CTA) + categories + the quiz list all live here.
- **OG images**: generated at build time by `opengraph-image.tsx` file conventions (home / category / quiz) into static PNGs — no runtime image endpoint.
- This site **does not render result pages** (cairo handles those) and **does not touch the Payload backend**.

## Directory

```
site.config.ts             # the only config file (site info + categories + quiz list — edit here)
src/lib/env.ts             # deployment env vars (domains, with production defaults)
src/lib/payload.ts         # Payload GraphQL client + getPublicFormMeta (unstable_cache)
src/lib/content.ts         # reads the list + hydrates each entry
src/lib/cairo.ts           # embed / fullscreen / signup URL builders (incl. UTM)
src/lib/seo.ts             # metadata + JSON-LD
src/lib/og.tsx             # shared OG-image renderer (used by the opengraph-image.tsx files)
src/components/QuizEmbed.tsx  # client component that embeds cairo
src/app/                   # home / c/[category] / q/[slug] / opengraph-image / sitemap / robots / llms.txt
```

## Development

```bash
pnpm install
cp .env.example .env.local   # override as needed
pnpm dev                     # http://localhost:8100
pnpm typecheck
pnpm build                    # static export → out/ (ready to deploy to any static host)
```

## Adding a quiz

1. Create and publish a form in berlin, then grab the `publicToken` from its public link.
2. Add an entry to `quizzes` in `site.config.ts` (specify `slug`, `categorySlugs`, and optionally `seo`).
3. Rebuild and redeploy — the build pulls the title/description/cover from Payload and bakes them into the static pages. (Since the site is fully static, content changes only go live on a new build.)

Site info (name, tagline, home hero, CTA copy, footer) and categories are also edited in `site.config.ts`.

## Environment variables

See `.env.example`: `NEXT_PUBLIC_PAYLOAD_SERVER_DOMAIN` / `NEXT_PUBLIC_CAIRO_DOMAIN` /
`NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_SIGNUP_URL`.

## Deployment

Vercel project → bind the domain `coaching.rooquiz.com` → set the env vars above. Vercel auto-detects the Next.js static export and serves `out/` from its global CDN.

> Because the site is a pure static export (no serverless/edge functions), the `regions` setting in `vercel.json` (`sfo1`) has no runtime effect — static assets are served from the CDN edge worldwide. It's kept as a documented intent only.

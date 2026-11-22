# AGENTS.md

## What this is
Single-package Next.js 16 personal portfolio (App Router, React 19, TypeScript, Tailwind 3.4, Framer Motion). All app code lives under `src/`; no monorepo, no backend, no test suite.

## Commands (from package.json)
- `npm run dev` / `npm run build` / `npm run start` — Next dev/build/prod server.
- `npm run lint` → `eslint .` using the flat config in `eslint.config.mjs` (ESLint 9 + `eslint-config-next/core-web-vitals` + `/typescript`). There is no `.eslintrc.json` anymore. `npm run lint:fix` auto-fixes.
- `npm run typecheck` → `tsc --noEmit`. `npm run typecheck:strict` → `tsc -p tsconfig.strict.json` (opt-in, not in CI; currently passes).
- `npm run verify` → `lint && typecheck && build`, the local equivalent of CI.
- No test runner or `test` script exists; don't invent one.
- CI (`.github/workflows/ci.yml`, Node 20, push/PR to `main`): `npm ci` → `lint` → `typecheck` → `build`.
- Environment quirk here: `node` fails with `libsimdjson.so.36` missing. Workaround: `ln -sf /usr/lib/libsimdjson.so.37 /tmp/opencode/nodelib/libsimdjson.so.36` and prefix commands with `LD_LIBRARY_PATH=/tmp/opencode/nodelib`.

## Architecture / data flow
- Path alias `@/*` → `./src/*`. `moduleResolution: bundler` is enforced by Next 16.4 — both tsconfigs use it.
- **Content is data-driven and real**: `src/data/projects.ts` holds the actual repos (public + confidential work projects), `src/data/personal.ts` holds `personalInfo`/`socialLinks`/`skills`/`aboutMe`. Canonical public name is **"Hans Ordoñez"** — don't reintroduce the old "Hanserld" bio.
- `Project.image` is optional. `ProjectVisual` renders a local capture from `public/images/projects/` or a tone-based branded fallback; confidential projects show a lock badge. Tailwind scans only `src/components` and `src/app`, so keep class strings there (not in data files).
- `ProjectCard` uses an absolutely positioned `<Link>` overlay (`z-10`) with action links at `z-20` so the whole card is clickable **without nested anchors**. Preserve this pattern.
- `src/lib/site.ts` is the single source for `SITE_URL` (env `NEXT_PUBLIC_SITE_URL`, trailing slash stripped, Vercel default), `SITE_NAME`, description and social links. Metadata, canonical, `app/robots.ts` and `app/sitemap.ts` all derive from it. `public/robots.txt` was deleted — do not recreate it with a hardcoded domain.
- `layout.tsx` metadata now derives from `personal.ts`/`site.ts` and emits `Person` JSON-LD. Sitemap dates come from `Project.updatedAt` (stable across deploys).
- Theme: `next-themes` class strategy, default dark; `ThemeProvider` also wraps children in `MotionConfig reducedMotion="user"`. Colors are HSL CSS variables in `globals.css` mapped in `tailwind.config.ts`; new colors need both.
- `public/` holds `og-image.png`, `site.webmanifest` and favicons referenced from `layout.tsx`.

## Gotchas
- EmailJS uses **`@emailjs/browser`** (the old `emailjs-com` was removed) with `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `_TEMPLATE_ID`, `_PUBLIC_KEY`. Missing creds show the author's email instead of a fake success. `.env.local` is gitignored; `.env.example` is the template.
- External project images must be allowlisted in `next.config.js` `images.remotePatterns` (Unsplash, GitHub avatars, placeholder.com). The same file sets global security headers. New project captures are local, so no allowlist needed.
- Project cards/detail pages are static-generated from `projects[].id` (slug). Changing an id changes the public URL and sitemap entry.
- Production `npm audit` is clean; 3 moderate dev-only advisories remain (glob/minimatch/sucrase).
- UI copy, comments, and docs are largely Spanish; preserve the existing language when editing.

## Docs reliability
`README.md` was partially updated, but `MEJORAS.md`, `MEJORAS_IMPLEMENTADAS.md`, `PERSONALIZACION.md` and `.github/copilot-instructions.md` are stale (e.g. they claim `moduleResolution: node` and hardcoded EmailJS credentials). Prefer `package.json`, config files, CI, and source over prose. No `opencode.json` is configured.

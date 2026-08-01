# TravelSafe24

A Next.js marketing landing page for "TravelSafe24," a concept product that
helps people search, compare, and find the city that best fits what they're
looking for. This repository is a front-end portfolio piece: it demonstrates
building a polished, accessible marketing site plus a few supporting account
pages, not a working product.

## What this demonstrates

- A Next.js (App Router) + TypeScript project using Tailwind CSS v4 and
  shadcn/ui-style components (`Card`, `Button`, `Sheet`, `Separator`, plus
  hand-built `Input`/`Label`).
- A responsive header with a Radix `Sheet`-based mobile navigation drawer.
- A hero section with a small typing-text animation (GSAP-driven cursor).
- Accessible, client-validated forms (Contact, Log in, Register) using
  `aria-invalid` / `aria-describedby` and honest status messages instead of
  fake success states.
- An original inline SVG illustration instead of a photo/screenshot asset.

## Tech used

- [Next.js](https://nextjs.org) 16 (App Router), React 19, TypeScript
- Tailwind CSS v4, `class-variance-authority`, `tailwind-merge`
- Radix UI primitives (via `radix-ui`) for the `Sheet` mobile menu
- GSAP for the hero's cursor-blink animation
- ESLint (`eslint-config-next`)

## Running it locally

```bash
pnpm install
pnpm dev
# then open http://localhost:3000
```

Other useful scripts:

```bash
pnpm lint    # ESLint
pnpm build   # Production build (also type-checks)
```

## Pages

- `/` &mdash; the landing page (Hero, Features, Footer).
- `/about` &mdash; a short description of the TravelSafe24 concept and this
  project's honest scope.
- `/contact` &mdash; a contact form.
- `/login` and `/register` &mdash; account UI mockups.

## Scope and honesty notes

- **This is a landing page and UI demo, not a working product.** There is no
  city database, no matching/scoring engine, and no backend.
- **None of the forms submit anywhere.** Contact, Log in, and Register all
  validate input in the browser (required fields, email format, password
  length/confirmation) and show an explicit message stating that nothing was
  actually sent, and that no account or session was actually created.
- **The "fit score" illustration on the landing page is original artwork**
  (`components/CityScoreIllustration.tsx`, plain inline SVG), not a photo or
  a map screenshot.

## Project history / cleanup notes

This repository was bootstrapped with `create-next-app` and then partially
built out; the README was still the untouched scaffold text, and a few
loose ends remained:

- `package.json`'s `name` field said `"job-app"` (left over from a different
  starter/copy-paste) and has been corrected to `travelsafe24-frontend`.
- Two stray empty scratch files, `test.txt` and `text.tct`, were removed.
- The default `create-next-app` metadata ("Create Next App" title/description)
  in `app/layout.tsx` has been replaced with real title/description text,
  and the page content is now wrapped in a semantic `<main>` landmark with a
  "Skip to main content" link.
- `public/hero.png` was a cropped map screenshot (Hamburg district
  boundaries, in a Google Maps-style rendering, with no attribution or
  Google branding retained) used as a "Features" section image. Cropped map
  screenshots without required attribution are a licensing risk, and the
  file's real provenance couldn't be confirmed, so it was removed and
  replaced with an original inline SVG illustration.
- `app/favicon.ico` was the unmodified default Next.js/Vercel triangle icon,
  effectively using Vercel's mark as this unrelated project's favicon. It
  was removed and replaced with an original icon at `app/icon.svg` (a simple
  pin-in-shield mark in the site's accent color), which Next.js picks up
  automatically via its file-based icon convention.
- The unused default `create-next-app` sample images
  (`next.svg`, `vercel.svg`, `file.svg`, `globe.svg`, `window.svg`) were
  removed; none of them were referenced anywhere in the code.
- The header's nav linked to `/about`, `/contact`, `/login`, and `/register`,
  none of which existed, so every one of those links 404'd. All four pages
  were built: `/about` (static copy), `/contact` (validated contact form),
  and `/login` / `/register` (validated UI-only account forms, explicit that
  they are demos with no real authentication).
- `components/TextType.tsx` had two lint errors under this project's ESLint
  config (React Compiler's `react-hooks/refs` rule, and a missing
  `useEffect` dependency). Both were fixed: the dynamic root element is now
  rendered via JSX (so the ref is a literal JSX attribute rather than a
  ref threaded through a spread props object into `createElement`), and the
  memoized `getRandomSpeed` callback was added to its effect's dependency
  array.
- `pnpm lint` and `pnpm build` both pass as of this cleanup.

## Screenshot

`docs/screenshot.png` (add a screenshot here once available)

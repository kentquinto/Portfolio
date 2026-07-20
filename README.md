# Kent Quinto — Portfolio

Personal portfolio site: a single-page, horizontally-scrolling story across nine sections
(Hero, About, Skills, Projects, Process, Experience, Languages, Playground, Contact).

**Live**: TBD — deploying to Vercel on a custom domain soon.

Design reference (tokens, copy, layout, motion for every section): [`docs/design-brief.md`](docs/design-brief.md).

## Stack

- [Vite](https://vitejs.dev/) + React 19 + TypeScript
- CSS Modules over a shared design-tokens stylesheet (`src/styles/tokens.css`)
- [Framer Motion](https://www.framer.com/motion/) for scroll-tied reveals, parallax, and magnetic/tilt/hover interactions
- ESLint + Prettier + Husky (pre-commit `lint-staged`) + Vitest

## Project structure

```
src/
  components/
    layout/       Portfolio shell: ScrollContainer, ProgressBar, NavRail, TopActions, SectionShell
    sections/      One folder per section (Hero, About, Skills, ...), each Component.tsx + Component.module.css,
                   with that section's own subcomponents (e.g. ProjectCard, Polaroid) co-located alongside it
  context/         One concern per file: xContext.ts (raw context) + XProvider.tsx (component) + a matching hook in src/hooks/
  hooks/           useScrollProgress, useReveal, useMagnetic, useCardTilt, useMousePhysics, useDrawingCanvas, ...
  data/            Section content and copy — nothing user-facing is hardcoded in JSX
  styles/          tokens.css (design tokens as CSS custom properties) + global.css (resets, shared keyframes)
  utils/           Pure, unit-tested logic (e.g. the scroll-reveal math), independent of React/Framer Motion
  assets/          Optimized WebP photos and screenshots, organized by the section that uses them
```

## Development

```bash
npm install
npm run dev          # start the dev server
npm run build         # type-check + production build
npm run test           # run the Vitest suite
npm run lint            # eslint
npm run format          # prettier --write
```

## Deployment

Deploys to [Vercel](https://vercel.com) from `main` — a Vite static build (`npm run build`, output `dist/`), no server-side code or environment variables required. `develop` and feature branches get their own Vercel preview deployments automatically once the project is connected.

## Workflow

This repo follows git-flow:

- `main` — deployable, mirrors production (Vercel)
- `develop` — integration branch, and the GitHub default branch
- `feature/*`, `fix/*`, `chore/*`, `content/*` — one branch per unit of work, PR'd into `develop` and squash-merged
  (`feat:`, `fix:`, `chore:`, `content:` commit prefixes respectively)

`develop` only merges into `main` once it's in a fully shippable state.

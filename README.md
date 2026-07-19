# Kent Quinto — Portfolio

Personal portfolio site: a single-page, horizontally-scrolling story across nine sections
(Hero, About, Skills, Projects, Process, Experience, Languages, Playground, Contact).

Full design spec (copy, tokens, interactions, state shape): [`docs/design-brief.md`](docs/design-brief.md).

## Stack

- [Vite](https://vitejs.dev/) + React + TypeScript
- CSS Modules over a shared design-tokens stylesheet
- [Framer Motion](https://www.framer.com/motion/) for scroll-tied reveals, parallax, and magnetic/tilt interactions
- ESLint + Prettier + Husky + Vitest

## Development

```bash
npm install
npm run dev
```

## Workflow

This repo follows git-flow:

- `main` — deployable, mirrors production (Vercel)
- `develop` — integration branch
- `feature/*`, `fix/*`, `chore/*` — one branch per unit of work, PR'd into `develop`

`develop` only merges into `main` once it's in a fully shippable state.

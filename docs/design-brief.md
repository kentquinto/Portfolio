# Design Brief — Kent Quinto Portfolio

## Overview

A single-page, horizontally-scrolling developer portfolio for Kent Quinto (full-stack web developer). Nine sections play out left-to-right like a story: Hero, About, Skills, Projects, Process, Experience, Languages, Playground, Contact. Desktop scrolls horizontally (mouse wheel is remapped to horizontal scroll); narrow viewports (≤860px) switch to normal vertical stacking.

## Source material

An HTML/JS prototype (`Kent Quinto Portfolio.dc.html`, built in an internal design-tool format) and a set of reference screenshots (`01-hero.png` … `09-contact.png`) captured the intended look, motion, and interaction during design. They are **not** shipped in this repo — this document is the durable spec, and the React implementation is built directly from it, not by embedding or porting the prototype file.

## Fidelity

**High-fidelity.** Colors, typography, spacing, copy, and interaction behavior below are final — recreate pixel-for-pixel where practical.

## Design Tokens

**Colors**

- Paper background (primary): `#f6f4ef`
- Paper background (alt, alternates every other section): `#f2efe8`
- Ink / primary text: `#1a1917`
- Muted label text: `#a4998a`
- Secondary body text: `#6b675e` / `#3f3c37`
- Borders: `#e6e2d8` / `#e0dccf` / `#d8d3c3`
- Accent violet (default theme accent, CSS var `--kq-accent`): `#7d6bf0`
- Accent amber: `#f0b53d`
- Accent green: `#4bb17e`
- Accent coral: `#ef7a6b`

**Typography**

- Headings / UI labels: Space Grotesk (weights 400/500/600/700)
- Body copy: Inter (400/500/600)
- Accent word/italic emphasis: Instrument Serif (italic)
- All three loaded from Google Fonts.
- Hero H1: 96px/0.96 line-height, -0.03em letter-spacing. Section H2s: 44px, -0.02em. Eyebrow labels: 13px, 0.24em letter-spacing, uppercase.

**Spacing / shape**

- Section padding: `110px 90px 70px 190px` (extra left padding clears the fixed left nav rail)
- Card radius: 16–18px. Pills/buttons: fully rounded (`border-radius:100px`).
- Card shadow: `0 24–30px 50–60px -28/-30px rgba(26,25,23,0.3–0.35)`

## Global Chrome (present on every section)

- **Progress bar**: fixed top, 3px, fill = `var(--kq-accent)`, width = scroll progress (0–100%).
- **Left nav rail** (desktop: fixed left, vertical, vertically centered; mobile: fixed bottom bar, horizontal): one dot per section (9 dots). Active dot scales 1.4× and turns accent color; its label (`01 Hero`, `02 About`, …) fades in — inactive labels are invisible (opacity 0), only the active section's label shows. Click scrolls to that section.
- **Top-right persistent actions**: `EMAIL` (mailto link) and a `RESUME` pill button that opens the résumé PDF in a new tab.

## Screens / Sections

### 01 — Hero

- Purpose: first impression, name/role, primary CTA.
- Layout: full-bleed section, content column with `justify-content:space-between` (name top, headline mid, CTA row + socials + scroll hint at bottom).
- Components: name "KENT QUINTO" (top-left), eyebrow "FULL-STACK WEB DEVELOPER", 3-line headline "Building _software_ people rely on." (middle line word "software" in italic serif), 3 floating decorative shapes (circle gradient, rounded square, ring outline) that drift via CSS keyframe float + parallax on mouse move, a black pill CTA "Explore the work →" that scrolls to Projects, and a column (bottom-right) with EMAIL/LINKEDIN/GITHUB links above a small "SCROLL ↓" hint.
- Interaction: CTA and the pill are "magnetic" — they translate toward the cursor within ~140px, snapping back on mouseleave.

### 02 — About

- Layout: two columns, left 40% (bio text), right 60% (relative-positioned photo/sticky-note collage).
- Components: heading "The person behind the pixels.", two bio paragraphs (career-switcher story: hospitality → full-stack dev), three tag pills ("Based in Barcelona, Spain", "Open to opportunities", "Career switcher"), 3 rotated "polaroid" placeholders (striped placeholder area + monospace caption) and 2 rotated sticky notes in italic serif ("Coffee-powered.", "Always shipping.") on amber/green backgrounds.

### 03 — Skills

- Layout: heading + subhead, then a full-width/height relative canvas of 8 absolutely-positioned floating circular "bubbles" (each with a CSS float animation, own duration/size/position).
- Components: bubbles for PHP, Laravel, React.js, MySQL, Docker, JavaScript, REST APIs, Tailwind CSS — each a translucent-fill circle with the skill name; on hover, a dark tooltip appears below the bubble with a one-line note (e.g. "APIs & MVC architecture").

### 04 — Projects (centerpiece)

- Layout: heading, then a horizontal row of overlapping cards (each card `margin-left:-40px` except the first, so they fan out with depth via z-index).
- Components: 3 project cards — TCG Manager (REST API), TCG Manager (React Frontend), TODO App — each with an image placeholder, category/year row, title, description, 2 tech tags, and a "View project →" link (opens the GitHub repo).
- Interaction: mouse-move tilt — each card rotates on X/Y based on cursor position within it (`perspective(900px) rotateX/rotateY`) plus a slight lift + scale; resets on mouse leave.

### 05 — Process

- Layout: heading, then a horizontal line with 7 evenly-spaced circular step markers.
- Components: Discover → Research → Sketch → Design → Prototype → Build → Launch, each a numbered outlined circle (color cycles through the 4 accents) with a label beneath.

### 06 — Experience

- Layout: horizontal timeline line with 3 markers, alternating label position above/below the line.
- Components: ETP Xavier (Bachillerato of Science, 2017–2019) — Hospitality Professional (Multiple Hotels & Restaurants, Barcelona, 2019–2025) — IT Academy (Full-Stack Web Development, 2026–Present). Each marker: small filled dot, role + company (above or below), years beneath.

### 07 — Languages

- Layout: heading + row of 4 slightly-rotated cards.
- Components: English (Advanced — Professional), Spanish (Advanced — Professional), Catalan (Advanced — Working), Tagalog (Native — Professional) — each card has a colored circular 2-letter badge (EN/ES/CA/TL), language name, and proficiency level.

### 08 — Playground

- Layout: heading, then 3 equal-height panels side by side.
- Panel A — **Mouse physics**: 5 shapes inside a bordered box; on mouse move, each shape is repelled away from the cursor proportionally to proximity (radius ~180px), resetting to origin on mouse leave.
- Panel B — **Theme switcher**: 4 color swatch buttons (violet/amber/green/coral). Clicking one sets the CSS custom property `--kq-accent` on `document.documentElement` (recoloring the progress bar, active nav dot, button hovers, and drawing-pen color site-wide) and shows a ring around the active swatch plus a "Live preview" pill in the active color.
- Panel C — **Draw**: an HTML canvas the user can free-draw on with the mouse (stroke color = current theme accent), plus a "CLEAR" button.

### 09 — Contact

- Layout: centered content block, vertically centered in the viewport.
- Components: heading "Let's build something _memorable_." (italic serif emphasis), a large email link (`kentquinto1@gmail.com`, "magnetic" like the hero CTA) with a small paper-airplane glyph, a link row (LINKEDIN, GITHUB, RESUME pill — opens PDF), and a footer copyright line.

## Interactions & Behavior (site-wide)

- **Horizontal scroll (desktop)**: a single scroll container holds all 9 sections in a row (`display:flex; overflow-x:auto`). A `wheel` listener remaps vertical wheel delta to `scrollLeft` so a normal mouse wheel/trackpad scrolls the story sideways.
- **Vertical fallback (mobile, ≤860px)**: same container switches to `flex-direction:column; overflow-y:auto`; the wheel remap is disabled; the nav rail relocates to a fixed bottom bar.
- **Scroll-tied reveals**: a single `scrollProgress` float (0…8, one integer per section) drives every section's entrance animation. Each section (and, for list content, each item) computes a 0–1 "reveal" value from how close `scrollProgress` is to its own index, driving `opacity` and a `translateY` (items further away are more faded/offset). List items (skills, projects, process steps, timeline, languages) stagger in via a small per-index offset subtracted from the reveal.
- **Parallax**: 3 decorative hero shapes translate opposite the cursor position (relative to viewport center), scaled by a per-shape "depth" factor.
- **Magnetic buttons**: any element flagged for the effect translates toward the cursor (capped pull, ~0.28× the offset) when the cursor is within ~140px, and springs back via CSS transition on mouse leave.
- **Keyboard nav**: ArrowRight/ArrowDown → next section, ArrowLeft/ArrowUp → previous section (ignored while focus is in the drawing canvas).
- **Reduced motion**: parallax/magnetic mouse-follow effects are skipped when `prefers-reduced-motion: reduce` is set.
- **Accessibility**: nav buttons carry `aria-label`s; semantic `<nav>`/`<section>` landmarks are used throughout.

## State Shape (reference — implementation is componentized, see root README)

- `scrollProgress: number` — 0..8, updated (throttled via rAF) on scroll.
- `isMobile: boolean` — from a `window.resize` listener against an 860px breakpoint; drives scroll axis, nav layout, and section sizing.
- `hoveredSkillIndex: number | null` — which skill bubble's tooltip is open.
- `themeAccent: string` (hex) — current accent color chosen in the theme switcher; also applied as a CSS custom property so plain CSS (`var(--kq-accent)`) picks it up without prop-drilling.
- Derived per-render: `navActiveIndex = round(scrollProgress)`, and a `reveal(sectionIndex, itemIndex?)` helper `= clamp(0,1, (1 - |scrollProgress - sectionIndex|) * 1.6 - itemIndex * spread)`.
- Drawing canvas keeps its own local (non-React) mutable state for the in-progress stroke (`isDrawing`, `lastX/lastY`) for performance — no need to route through React state.

## Assets

- No photographic/image assets — the About "polaroids" and Project card images are intentionally placeholders (striped `repeating-linear-gradient` fills with a monospace caption like "photo — studio" / "project image"). Replace with real photography/screenshots when available.
- Fonts: Space Grotesk, Inter, Instrument Serif — all Google Fonts, no licensing concerns.
- Résumé PDF (linked from the RESUME buttons) — to be supplied by Kent and hosted from `public/resume/`; not committed yet.

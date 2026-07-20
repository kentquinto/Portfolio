# Design Reference — Kent Quinto Portfolio

Documents the design system and interaction behavior this site was built to: copy, tokens,
layout, and motion for all 9 sections. Written as the spec during the build; kept here
afterward as the reference for how each section is _supposed_ to look and behave — useful
when touching a section's CSS or adding new content to it.

## Overview

A single-page, horizontally-scrolling developer portfolio for Kent Quinto (full-stack web developer). Nine sections play out left-to-right like a story: Hero, About, Skills, Projects, Process, Experience, Languages, Playground, Contact. Desktop scrolls horizontally (mouse wheel is remapped to horizontal scroll); narrow viewports (≤860px) switch to normal vertical stacking.

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
- **Left nav rail** (desktop: fixed left, vertical, vertically centered; mobile: fixed bottom bar, horizontal, dots only): one dot per section (9 dots). Active dot scales 1.4× and turns accent color; its label (`01 Hero`, `02 About`, …) fades in on desktop — inactive labels are invisible (opacity 0), only the active section's label shows. Click scrolls to that section.
- **Mobile scroll-nav buttons** (mobile only): a floating ↑/↓ pair on the right edge, vertically centered, moving one section at a time. Disables the relevant arrow on the first/last section. Exists because native touch scroll-chaining — does a swipe scroll a tall section's own content, or advance to the next section? — can't be made reliable purely through gesture detection; the buttons give an explicit, unambiguous way to move on regardless of how tall a section's content is.
- **Top-right persistent actions**: `EMAIL` (mailto link) and a `RESUME` pill button that opens the résumé PDF in a new tab.

## Screens / Sections

### 01 — Hero

- Purpose: first impression, name/role, primary CTA.
- Layout: full-bleed section, content column with `justify-content:space-between` (name top, headline mid, CTA row + socials + scroll hint at bottom).
- Components: name "KENT QUINTO" (top-left), eyebrow "FULL-STACK WEB DEVELOPER", 3-line headline "Building _software_ people rely on." (middle line word "software" in italic serif), 3 floating decorative shapes (circle gradient, rounded square, ring outline) that drift via CSS keyframe float + parallax on mouse move, a black pill CTA "Explore the work →" that scrolls to Projects, and a column (bottom-right) with EMAIL/LINKEDIN/GITHUB links above a small "SCROLL ↓" hint.
- Interaction: CTA and the pill are "magnetic" — they translate toward the cursor within ~140px, snapping back on mouseleave.

### 02 — About

- Layout: two columns, left 40% (bio text), right 60% (relative-positioned photo/sticky-note collage).
- Components: heading "The person behind the pixels.", bio paragraphs (career-switcher story: hospitality → full-stack dev, plus client work alongside coursework), three tag pills ("Based in Barcelona, Spain", "Open to opportunities", "Career switcher"), 3 rotated polaroids (real photos: a reading break, a coding session, an off-the-clock travel shot) and 2 rotated sticky notes in italic serif ("Coffee-powered.", "Always shipping.") on amber/green backgrounds.
- Interaction: hovering a polaroid brings it to front and scales it up slightly, so a caption covered by an overlapping card becomes fully readable.

### 03 — Skills

- Layout: heading + subhead, then a full-width/height relative canvas of absolutely-positioned floating circular "bubbles" (each with a CSS float animation, own duration/size/position).
- Components: bubbles for PHP, Laravel, React.js, MySQL, Docker, JavaScript, REST APIs, Tailwind CSS, Claude Code — each a translucent-fill circle with the skill name; on hover, a dark tooltip appears below the bubble with a one-line note (e.g. "APIs & MVC architecture").
- Mobile: the desktop scatter overlaps and clips at a phone's width, so every bubble gets a dedicated mobile position instead — a spacious two-column stack, no overlap, no horizontal scroll.

### 04 — Projects (centerpiece)

- Layout: heading, then a horizontal row of overlapping cards (each card `margin-left:-40px` except the first, so they fan out with depth via z-index).
- Components: project cards — TCG Manager (REST API), TCG Manager (React Frontend), and this portfolio itself — each with a real screenshot, category/year row, title, description, 2 tech tags, and a "View project →" link (opens the GitHub repo).
- Interaction: mouse-move tilt — each card rotates on X/Y based on cursor position within it (`perspective(900px) rotateX/rotateY`) plus a slight lift + scale; resets on mouse leave. Hovering a card also brings it fully to the front (above the cards overlapping it), so it stays readable regardless of its position in the fan.

### 05 — Process

- Layout: heading, then a horizontal line with 7 evenly-spaced circular step markers.
- Components: Discover → Research → Sketch → Design → Prototype → Build → Launch, each a numbered outlined circle (color cycles through the 4 accents) with a label beneath.
- Mobile: the line turns vertical — a column down the left edge with each step as a row (circle beside its label) top to bottom, instead of scrolling the horizontal strip sideways.

### 06 — Experience & Education

- Layout: horizontal timeline line with markers, alternating label position above/below the line.
- Components: ETP Xavier (Bachillerato of Science, 2017–2019) — Hospitality Professional (Multiple Hotels & Restaurants, Barcelona, 2019–2025) — IT Academy (Full-Stack Web Development, 2026–Present) — plus a 4th, lighthearted "open slot" marker ("Your company, maybe? →") styled distinctly (dashed accent-colored outline dot, italic accent-font text) so it reads as a placeholder rather than a real entry. Each real marker: small filled dot, role + company (above or below), years beneath.
- Mobile: the line turns vertical — a column down the left edge with each marker as a row (dot beside role/company/years, no more above/below alternation) top to bottom, instead of scrolling the horizontal strip sideways.

### 07 — Languages

- Layout: heading + row of 4 slightly-rotated cards.
- Components: English (Advanced — Professional), Spanish (Advanced — Professional), Catalan (Advanced — Working), Tagalog (Native — Professional) — each card has a colored circular 2-letter badge (EN/ES/CA/TL), language name, and proficiency level.

### 08 — Playground

- Layout: heading, then 3 equal-height panels side by side.
- Panel A — **Mouse physics**: 5 shapes inside a bordered box; on mouse move or touch drag, each shape is repelled away from the pointer proportionally to proximity (radius ~180px), resetting to origin on mouse leave / touch release.
- Panel B — **Theme switcher**: 4 color swatch buttons (violet/amber/green/coral). Clicking one sets the CSS custom property `--kq-accent` on `document.documentElement` (recoloring the progress bar, active nav dot, button hovers, and drawing-pen color site-wide) and shows a ring around the active swatch plus a "Live preview" pill in the active color.
- Panel C — **Draw**: an HTML canvas the user can free-draw on with mouse or touch (stroke color = current theme accent), plus a "CLEAR" button. Uses Pointer Events throughout so mouse, touch, and pen all drive it identically.

### 09 — Contact

- Layout: centered content block, vertically centered in the viewport.
- Components: heading "Let's build something _memorable_." (italic serif emphasis), a large email link (`kentquinto1@gmail.com`, "magnetic" like the hero CTA) with a small paper-airplane glyph, a link row (LINKEDIN, GITHUB, RESUME pill — opens PDF), and a footer copyright line.

## Interactions & Behavior (site-wide)

- **Horizontal scroll (desktop)**: a single scroll container holds all 9 sections in a row (`display:flex; overflow-x:auto`). A `wheel` listener remaps vertical wheel delta to `scrollLeft` so a normal mouse wheel/trackpad scrolls the story sideways.
- **Vertical fallback (mobile, ≤860px)**: same container switches to `flex-direction:column; overflow-y:auto`; the wheel remap is disabled; the nav rail relocates to a fixed bottom bar (dots only, no labels — 9 labels' worth of text doesn't fit a phone width). Sections stay pinned to one viewport height each (`100dvh`, so the scroll-progress math stays accurate as mobile browser chrome resizes the real visible viewport); content taller than that scrolls within the section instead, and the floating up/down scroll-nav buttons (see Global Chrome) give a reliable, explicit way to move to the next section regardless of how that content-vs-section scroll chaining resolves on a given swipe. No section ever requires a horizontal swipe to read fully — `SectionShell`'s `.content` explicitly sets `overflow-x: hidden` (setting only `overflow-y` implicitly makes `overflow-x` computed as `auto` too per spec, which silently made a few sections sideways-swipeable before this was added), and the two sections whose desktop layout is inherently horizontal (Process, Experience) get a real vertical redesign on mobile rather than a sideways-scrolling strip.
- **Scroll-tied reveals**: a single `scrollProgress` float (0…8, one integer per section) drives every section's entrance animation. Each section (and, for list content, each item) computes a 0–1 "reveal" value from how close `scrollProgress` is to its own index, driving `opacity` and a `translateY` (items further away are more faded/offset). List items (skills, projects, process steps, timeline, languages) stagger in via a small per-index offset subtracted from the reveal.
- **Parallax**: 3 decorative hero shapes translate opposite the cursor position (relative to viewport center), scaled by a per-shape "depth" factor. Hidden on mobile (percentage-based positions tuned for a wide viewport collide with the headline text on a narrow one).
- **Magnetic buttons**: any element flagged for the effect translates toward the cursor (capped pull, ~0.28× the offset) when the cursor is within ~140px, and springs back via CSS transition on mouse leave.
- **Hover-to-front**: overlapping/fanned cards (Projects, About's polaroids) bring themselves above their neighbors and scale up slightly on hover, so a card or caption covered by the one in front of it stays reachable.
- **Keyboard nav**: ArrowRight/ArrowDown → next section, ArrowLeft/ArrowUp → previous section (ignored while focus is in the drawing canvas).
- **Reduced motion**: parallax/magnetic mouse-follow effects are skipped, and all CSS animations/transitions are near-instant, when `prefers-reduced-motion: reduce` is set.
- **Accessibility**: nav buttons carry `aria-label`s; semantic `<nav>`/`<section>` landmarks are used throughout.

## Assets

- **Photos**: real photography throughout — About's 3 polaroids and all 3 Project card images are actual photos/screenshots (not placeholders), resized and converted to WebP for size. A project or polaroid without a photo yet falls back to the original striped-placeholder treatment automatically (`imageSrc` is optional in both `data/projects.ts` and `data/about.ts`).
- **Fonts**: Space Grotesk, Inter, Instrument Serif — all Google Fonts, no licensing concerns.
- **Résumé PDF**: `public/resume/Kent_Resume_EN.pdf`, linked from the RESUME buttons.

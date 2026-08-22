# Maria Eduarda Cagy — Portfolio

Personal portfolio built to show my work as a Full Stack Developer to
recruiters and engineering teams — architecture, accessibility and
internationalization treated as first-class requirements, not
afterthoughts.

🔗 **Live site:** https://mariacagy.com.br
📦 **Repository:** https://github.com/maria-eduarda-cagy/front-end-cv-app

---

## Tech stack

- **React 19 + TypeScript + Vite**
- **styled-components** for styling, CSS custom properties for the design
  token system (colors, fonts, radius)
- **react-i18next** for internationalization (English, Portuguese-BR,
  Spanish)
- **framer-motion** for scroll-triggered animation, gated behind
  `prefers-reduced-motion`
- **lucide-react** for icons
- Deployed on **Vercel**

---

## Architecture decisions

This project intentionally does **not** use Next.js or Tailwind CSS, even
though an earlier planning pass considered both. Short version of why:

- **Vite over Next.js**: this is a single-page, mostly client-rendered site
  (theme and language both live in `localStorage`, animation is
  client-side) — Next.js's main advantages (Server Components, file-based
  routing across many pages) don't apply here. Vite keeps the build simpler
  with no loss of capability for this use case.
- **styled-components over Tailwind**: the project already had a working
  styled-components setup with a CSS-custom-property token system before
  this rebuild. Rewriting every component's styling approach would have
  been a second high-risk migration with no direct benefit to the visitor.

Full reasoning, including two real layout bugs found and fixed during the
rebuild, is in [`docs/architecture.md`](./docs/architecture.md) — that
folder is a local-only, deeper engineering journal (see below).

---

## Accessibility

Treated as a requirement across every section, not a final pass:

- Skip-to-content link, visible on keyboard focus
- Visible focus ring on every interactive element (not just default
  browser styling)
- `<html lang>` updates automatically when the language changes
- Full keyboard operability — every interactive element is a native
  `<a>`/`<button>`, nothing depends on mouse-only handlers
- Correct heading hierarchy (one `<h1>`, `<h2>` per section, `<h3>` for
  cards within a section — no skipped levels)
- `prefers-reduced-motion` respected everywhere animation appears —
  reduced-motion users get the same content instantly, with no layout
  shift
- The hero terminal's "typing" animation is a purely visual `clip-path`
  effect: the full text is present in the DOM from first render, so a
  screen reader never has to wait for or reconstruct a letter-by-letter
  animation

---

## Theme (light/dark) and Language

- **Theme**: follows the visitor's saved choice, then their OS/browser
  preference (`prefers-color-scheme`), then falls back to light. Manually
  switchable via the header toggle; the choice persists in `localStorage`.
  An inline script in `index.html` applies the resolved theme before React
  mounts, so there's no flash of the wrong theme on load.
- **Language**: auto-detects the visitor's browser language among English,
  Portuguese-BR and Spanish (falls back to English otherwise). Manually
  switchable via the `EN | PT | ES` control in the header; the choice
  persists in `localStorage`. Recommendation testimonials are direct
  quotes from real people and are **intentionally not translated** — they
  always display exactly as each person wrote them, regardless of the
  selected site language.

---

## Project structure

```txt
src/
  App.tsx                    # assembles all sections in order
  Layout.tsx                 # header + skip-link + content + footer
  i18n/                      # react-i18next setup (detection + persistence)
  locales/                   # en.json / pt-BR.json / es.json
  context/ThemeContext.tsx   # light/dark mode provider (persisted)
  styles/theme.css           # design tokens (color, font, radius) — single source of truth
  components/
    nav/                     # sticky header, anchors, language switcher, theme toggle
    terminal/                # the hero's signature terminal card
    section-heading/         # shared eyebrow + title used by every section
    motion/ScrollEnter.tsx   # scroll-triggered entrance animation
    sections/
      hero/ about/ stack/ experience/ projects/ recommendations/ contact/
```

---

## Running locally

```bash
npm install
npm run dev
```

`npm run build` and `npm run lint` should both complete with no errors —
this is checked after every change.

---

## A note on `docs/`

There's a `docs/` folder in this repository on disk that is **not**
tracked in git (see `.gitignore`). It's a personal, deeper engineering
journal — one file per architectural decision and per component,
including trade-offs considered and real bugs found and fixed during
development. It exists so I can explain this project's decisions in a
technical interview without relying on memory alone. This `README.md` is
the public summary of the same decisions.

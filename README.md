# Front-End CV App

A modern and responsive **personal portfolio / CV web application**, built to showcase professional experience, skills, recommendations, and projects in a clean, interactive, and user-centered way.

This project was designed not only as a visual portfolio, but also as a demonstration of **frontend engineering best practices**, reusable components, and thoughtful UI/UX decisions.

🔗 **Live demo:** https://front-end-cv-portfolio.vercel.app/
📦 **Repository:** https://github.com/maria-eduarda-cagy/front-end-cv-app

---

## ✨ Features

- ⚛️ **Modern React architecture** with reusable and composable components
- 🧩 **Generic reusable Carousel** used for both Career and Recommendations sections
- 📱 **Fully responsive design** (desktop, tablet, mobile)
- ♿ **Accessibility-aware UI** (keyboard navigation, ARIA labels, reduced motion support)
- 🎨 **Consistent design system** with styled-components
- 🌗 **Light/dark theme toggle**, light by default, persisted in `localStorage` with no flash on load
- 🌍 **Multi-language support** (English, Portuguese-BR, Spanish) via `react-i18next`, with automatic browser-language detection (fallback: English)
- 🧠 **Clean separation of concerns** (UI, data, logic)
- 🖼️ **Auto-scrolling skills carousel** with smooth infinite animation
- 💬 **Recommendations section** powered by structured data objects
- 🚀 Deployed on **Vercel**

---

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Styled-components**
- **i18next / react-i18next** (internationalization)
- **CSS animations & keyframes**
- **Vercel** (deployment)

---

## 🧱 Project Structure

```txt
src/
├── components/
│   ├── carousel/          # Reusable generic carousel
│   ├── career/            # Career section & items
│   ├── recommendation/    # Recommendations & carousel
│   ├── theme-toggle/      # Light/dark mode toggle
│   ├── language-switcher/ # EN / PT-BR / ES switcher
│   ├── text/              # Typography component
│   └── layout/            # Header, footer, layout
│
├── context/
│   └── ThemeContext.tsx   # Theme mode provider (light default, persisted)
│
├── i18n/
│   └── index.ts           # i18next setup (detection + persistence)
│
├── locales/
│   ├── en.json
│   ├── pt-BR.json
│   └── es.json
│
├── utils/
│   ├── types.ts           # Shared TypeScript types
│   ├── references.ts     # Career & recommendation data
│
├── styles/                # Global styles and CSS color tokens (theme.css)
└── App.tsx
```

---

## 🌗 Theme & 🌍 Language

- **Theme**: light mode is the default. Toggle between light/dark using the sun/moon button in the header — the choice is saved to `localStorage` and re-applied instantly on the next visit (a small inline script in `index.html` prevents a flash of the wrong theme on load).
- **Language**: the site auto-detects the visitor's browser language (Portuguese-BR, Spanish, or English; any other language falls back to English). Use the `EN | PT | ES` switcher in the header to change it manually — the choice is also saved to `localStorage`. Recommendation testimonials are direct quotes from real people and are intentionally **not translated**, so they always display in the language each person originally wrote them.

To test locally: `npm run dev`, then use the header controls to toggle theme and language, and resize the window to check the mobile menu.

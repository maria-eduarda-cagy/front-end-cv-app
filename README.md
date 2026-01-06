# Front-End CV App

A modern and responsive **personal portfolio / CV web application**, built to showcase professional experience, skills, recommendations, and projects in a clean, interactive, and user-centered way.

This project was designed not only as a visual portfolio, but also as a demonstration of **frontend engineering best practices**, reusable components, and thoughtful UI/UX decisions.

🔗 **Live demo:** https://front-end-cv-portfolio.app  
📦 **Repository:** https://github.com/maria-eduarda-cagy/front-end-cv-app

---

## ✨ Features

- ⚛️ **Modern React architecture** with reusable and composable components
- 🧩 **Generic reusable Carousel** used for both Career and Recommendations sections
- 📱 **Fully responsive design** (desktop, tablet, mobile)
- ♿ **Accessibility-aware UI** (keyboard navigation, ARIA labels, reduced motion support)
- 🎨 **Consistent design system** with styled-components
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
│   ├── text/              # Typography component
│   └── layout/            # Header, footer, layout
│
├── utils/
│   ├── types.ts           # Shared TypeScript types
│   ├── references.ts     # Career & recommendation data
│
├── styles/                # Global and shared styles
└── App.tsx
```

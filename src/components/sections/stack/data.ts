// Technology names are proper nouns — kept in code, not translated.
// `level` is a fictional value used only to vary the bar-fill animation
// (never below 50, so it never reads as "I'm bad at this") — see
// docs/components/stack.md.
export const stackGroups = [
  {
    key: "frontend",
    items: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "HTML5", level: 76 },
      { name: "CSS3", level: 72 },
      { name: "Tailwind CSS", level: 68 },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 86 },
      { name: "FastAPI", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "Supabase", level: 74 },
      { name: "Strapi", level: 70 },
      { name: "REST APIs", level: 66 },
    ],
  },
  {
    key: "tooling",
    items: [
      { name: "Git / GitHub", level: 88 },
      { name: "Docker", level: 84 },
      { name: "Vite", level: 80 },
      { name: "Vercel", level: 76 },
      { name: "CI/CD", level: 72 },
      { name: "GitHub Actions", level: 68 },
    ],
  },
] as const;

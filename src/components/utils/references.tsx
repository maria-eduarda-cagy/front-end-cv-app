import jamisImage from "../../assets/recomendations/jamis-profile.jpeg";
import lethiciaImage from "../../assets/recomendations/lethicia-profile.jpeg";
import diegoImage from "../../assets/recomendations/diego-profile.jpeg";
import type { Recommendation } from "./utils";

// Recommendations are direct quotes from real people, written in first
// person. They intentionally stay untranslated and are not sourced from
// the locale files, so every visitor reads the exact words each person wrote.
export const recommendations: Recommendation[] = [
  {
    id: "jamis-andrade",
    name: "Jamis Andrade",
    role: "Full Stack Developer @ Voting Buddy",
    relationship: "Worked together on the same team",
    date: "2026-01-06",
    photo: jamisImage,
    content: `I have the pleasure of working with Maria Eduarda at VotingBuddy, and I can confidently say that she is an extremely reliable full-stack developer, deeply committed to the quality of her work.

She works with React, Next.js, Node, and Strapi, and over time has shown remarkable growth in autonomy and responsibility. Today, Maria is responsible for the entire front-end of the application, leading decisions and deliveries with organization, clarity, and a strong sense of priority.

She never avoids problems. She handles pressure and tight deadlines very well, stays focused on solutions, and doesn’t waste energy looking for blame when things don’t go as expected. This makes a huge difference in a team’s daily workflow.

Beyond her technical skills, her communication is clear and objective. She works extremely well in a team environment, receives feedback maturely—both positive and constructive—and learns quickly. She currently operates with minimal supervision, which reflects the high level of trust the team has in her work.

She is undoubtedly a professional I would recommend to any team that values responsibility, collaboration, and consistent, high-quality deliveries.`,
  },
  {
    id: "lethicia-gerard",
    name: "Lethicia Gerard",
    role: "Chemical Technician @ FIOCRUZ",
    relationship: "Worked together for 1 year and 6 months",
    date: "2025-12-16",
    photo: lethiciaImage,
    content: `Maria is a proactive, friendly, responsible, and practical person. We shared the same work environment for a year and a half and exchanged a great deal of knowledge during that time.

I am very happy to see how she has grown and reached new goals in her career. She truly deserves it.`,
  },
  {
    id: "diego-do-rosario-neves",
    name: "Diego do Rosario Neves",
    role: "Frontend Developer | Web Designer | Git | Figma @Brazilian Navy",
    relationship: "Directly supervised me",
    date: "2026-04-01",
    photo: diegoImage,
    content: `Working with Maria Eduarda means having a competent professional who knows how to carry out her responsibilities in the best possible way. Maria Eduarda was my intern, and during that period I was able to observe her excellent attitude at work, always striving to deliver her best in the tasks assigned to her.

Her drive to seek new knowledge to add value to her work shows her desire to stay up to date and deserves special recognition. I strongly recommend her, as she will add a lot of value to any company.`,
  },
];

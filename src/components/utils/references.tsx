//icons
import javascript from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import typescript from "../../assets/icons/typescript.svg";
import nextjs from "../../assets/icons/nextjs.svg";
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import github from "../../assets/icons/github-purple.svg";
import git from "../../assets/icons/git.svg";
import figma from "../../assets/icons/figma.svg";
import jamisImage from "../../assets/recomendations/jamis-profile.jpeg";
import lethiciaImage from "../../assets/recomendations/lethicia-profile.jpeg";
import diegoImage from "../../assets/recomendations/diego-profile.jpeg";
import {
  getYearsAndMonthsFrom,
  type CareerExperience,
  type Recommendation,
} from "./utils";

//references
export const experienceAsFrontendDev = getYearsAndMonthsFrom(2023, 7);

export const experienceWithReactAndTS = getYearsAndMonthsFrom(2024, 9);

export const skillsData = [
  { src: javascript, alt: "JavaScript", name: "JavaScript" },
  { src: react, alt: "React", name: "React" },
  { src: typescript, alt: "TypeScript", name: "TypeScript" },
  { src: nextjs, alt: "Next.js", name: "Next.js" },
  { src: html, alt: "HTML5", name: "HTML5" },
  { src: css, alt: "CSS3", name: "CSS3" },
  { src: github, alt: "GitHub", name: "GitHub" },
  { src: git, alt: "Git", name: "Git" },
  { src: figma, alt: "Figma", name: "Figma" },
];

export const professionalCareerData: CareerExperience[] = [
  {
    title: "Voting Buddy",
    href: "https://votingbuddy.com",
    period: "Sep/2024 · Present",
    bullets: [
      {
        highlight:
          "Actively participated in the implementation of the official website votingbuddy.com",
        text: "from structure to launch, using React (front-end) and Strapi (back-end) to ensure scalability and easy maintenance.",
      },
      {
        highlight: "Developed integration with external and internal APIs",
        text: "automating data collection and processing for AI-powered features and user behavior analysis.",
      },
      {
        highlight: "Helped build a booth at the Web Summit Rio 2025",
        text: "representing the company with machine learning and AI-based civic engagement solutions.",
      },
      {
        highlight: "Collaborated with design, data, and product teams",
        text: "to ensure visual consistency, accessibility, and responsive performance across multiple devices.",
      },
      {
        highlight:
          "Conducted continuous maintenance and iterative improvements",
        text: "optimizing website load time and fixing bugs based on user feedback and automated testing.",
      },
    ],
  },

  {
    title: "Brazilian Navy",
    period: "Jul/2023 · Sep/2024",
    bullets: [
      {
        highlight: "Developed interactive dashboards using Qlik Sense",
        text: "providing management with strategic insights and data-driven decision support.",
      },
      {
        highlight: "Maintained and updated internal web systems",
        text: "with a focus on improving user experience and interface performance.",
      },
      {
        highlight: "Supported the digitalization of internal processes",
        text: "contributing to automation and reduction of manual operational tasks.",
      },
      {
        highlight: "Developed a help website for internal users",
        text: "to assist employees in navigating systems and understanding internal procedures.",
      },
    ],
  },

  {
    title: "Oswaldo Cruz Foundation (FIOCRUZ)",
    period: "Feb/2021 · Apr/2025",
    bullets: [
      {
        highlight:
          "Worked in the production line of biopharmaceuticals and AstraZeneca's COVID-19 vaccine",
        text: "strictly following Good Manufacturing Practices (GMP) and ALCOA++ principles.",
      },
      {
        highlight: "Performed quality control in critical production stages",
        text: "ensuring traceability, regulatory compliance, and data integrity.",
      },
      {
        highlight: "Managed technical documentation and operational protocols",
        text: "supporting successful audits and compliance with national and international regulations.",
      },
    ],
  },
];

export const academicCareerData: CareerExperience[] = [
  {
    title: "Bachelor’s Degree",
    period: "2023 · Present",
    bullets: [
      {
        highlight: "Currently pursuing a Bachelor’s degree in Computer Science",
        text: "with a strong focus on software development, problem-solving and computational thinking.",
      },
      {
        highlight:
          "Built a solid foundation in programming and computer science fundamentals",
        text: "including algorithms, data structures, software architecture and web technologies.",
      },
      {
        highlight: "Applied academic knowledge to real-world projects",
        text: "connecting theoretical concepts with practical frontend and full-stack development.",
      },
      {
        highlight: "Developed strong analytical and logical reasoning skills",
        text: "supporting efficient debugging, system design and scalable solutions.",
      },
    ],
  },

  {
    title: "Technical Degree in Chemistry",
    period: "2016 · 2021",
    bullets: [
      {
        highlight: "Completed a Technical Degree in Chemistry",
        text: "with a strong emphasis on laboratory practices, data accuracy and process control.",
      },
      {
        highlight: "Developed discipline and attention to detail",
        text: "through strict adherence to procedures, documentation standards and quality requirements.",
      },
      {
        highlight: "Gained experience working with regulated environments",
        text: "which shaped a strong sense of responsibility, precision and reliability.",
      },
    ],
  },

  {
    title: "Academic & Professional Development",
    period: "Ongoing",
    bullets: [
      {
        highlight: "Participated in international technology events",
        text: "such as Web Summit, engaging with topics related to AI, software engineering and product development.",
      },
      {
        highlight: "Continuously invested in self-directed learning",
        text: "through online courses, technical documentation and hands-on experimentation.",
      },
      {
        highlight: "Strengthened communication and collaboration skills",
        text: "by working in multidisciplinary and multicultural environments.",
      },
    ],
  },
];

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

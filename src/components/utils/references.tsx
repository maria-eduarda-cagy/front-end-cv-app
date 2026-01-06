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
import { getYearsAndMonthsFrom, type CareerExperience } from "./utils";

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
        highlight: "Conducted continuous maintenance and iterative improvements",
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
    title: "Bachelor’s Degree in Computer Science",
    period: "2023 · Present",
    bullets: [
      {
        highlight: "Currently pursuing a Bachelor’s degree in Computer Science",
        text: "with a strong focus on software development, problem-solving and computational thinking.",
      },
      {
        highlight: "Built a solid foundation in programming and computer science fundamentals",
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

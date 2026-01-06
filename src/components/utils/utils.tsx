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

//types
type TimeDiff = {
  years: number;
  months: number;
};
type Skill = {
  src: string;
  alt: string;
  name: string;
};
export type CareerExperience = {
  title: string;          
  href?: string;          
  period: string;     
  bullets: Array<{
    highlight: string;    
    text: string;        
  }>;
};

//functions
function getYearsAndMonthsFrom(
  year: number,
  month: number // 1 = Jan, 12 = Dec
): TimeDiff {
  const now = new Date();

  const start = new Date(year, month - 1);
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months };
}

function experienceStr({ years, months }: TimeDiff): string {
  if (years === 0 && months === 0) return "Less than a month";

  const yearPart = years > 0 ? `${years} year${years === 1 ? "" : "s"}` : "";

  const monthPart =
    months > 0 ? `${months} month${months === 1 ? "" : "s"}` : "";

  if (yearPart && monthPart) return `${yearPart} and ${monthPart}`;
  return yearPart || monthPart;
}

function getSkillsData(): Skill[] {
  return skillsData.map((skill) => ({
    ...skill,
    name: skill.name.toUpperCase(),
  }));
}


//references
const experienceAsFrontendDev = getYearsAndMonthsFrom(2023, 7);
const experienceWithReactAndTS = getYearsAndMonthsFrom(2024, 9);
const skillsData = [
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
export const careerData: CareerExperience[] = [
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


//exports
export const skills = getSkillsData();

export const experienceAsFrontendDevStr = experienceStr(
  experienceAsFrontendDev
);

export const experienceWithReactAndTSStr = experienceStr(
  experienceWithReactAndTS
);
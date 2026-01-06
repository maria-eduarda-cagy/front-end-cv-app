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

type TimeDiff = {
  years: number;
  months: number;
};
type Skill = {
  src: string;
  alt: string;
  name: string;
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

//exports
export const skills = getSkillsData();

export const experienceAsFrontendDevStr = experienceStr(
  experienceAsFrontendDev
);

export const experienceWithReactAndTSStr = experienceStr(
  experienceWithReactAndTS
);

import {
  experienceAsFrontendDev,
  experienceWithReactAndTS,
  skillsData,
} from "./references";

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

export type MyCareerProps = {
  careerData: CareerExperience[];
};

//functions
export function getYearsAndMonthsFrom(
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

//exports
export const skills = getSkillsData();

export const experienceAsFrontendDevStr = experienceStr(
  experienceAsFrontendDev
);

export const experienceWithReactAndTSStr = experienceStr(
  experienceWithReactAndTS
);

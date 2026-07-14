import { skillsData } from "./references";
import type { TFunction } from "i18next";

//types
export type TimeDiff = {
  years: number;
  months: number;
};
type Skill = {
  src: string;
  alt: string;
  name: string;
};
export type CareerExperience = {
  translationKey: string;
  section: "professional" | "academic";
  href?: string;
  period: string;
};

export type Recommendation = {
  id: string;
  name: string;
  role: string;
  relationship: string;
  date: string;
  photo: string;
  content: string;
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

// Formats a TimeDiff using i18next pluralization, so "1 year" vs "2 years"
// (and their pt-BR/es equivalents) are handled per-locale instead of English-only string building.
export function formatExperienceDuration(
  t: TFunction,
  { years, months }: TimeDiff
): string {
  if (years === 0 && months === 0) return t("duration.lessThanMonth");

  const yearPart = years > 0 ? t("duration.year", { count: years }) : "";
  const monthPart = months > 0 ? t("duration.month", { count: months }) : "";

  if (yearPart && monthPart) {
    return `${yearPart} ${t("duration.and")} ${monthPart}`;
  }
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

import { useTranslation } from "react-i18next";
import { CardsGrid, ProjectCard } from "./styles";

type Project = {
  translationKey: string;
  label: string;
  href: string;
  tech: string;
};

const projects: Project[] = [
  {
    translationKey: "webGame",
    label: "game.mariacagy.com.br",
    href: "https://game.mariacagy.com.br",
    tech: "React • TypeScript",
  },
  {
    translationKey: "orbisFinance",
    label: "orbisfinance.mariacagy.com.br",
    href: "https://orbisfinance.mariacagy.com.br",
    tech: "React • TypeScript • Tailwind",
  },
  {
    translationKey: "districtDmv",
    label: "districdmv.mariacagy.com.br",
    href: "https://districtdmv.mariacagy.com.br",
    tech: "Vanilla JS • Leaflet • Supabase • PostGIS • Python",
  },
];

export function PersonalProjects() {
  const { t } = useTranslation();

  return (
    <CardsGrid>
      {projects.map((p) => (
        <ProjectCard
          key={p.href}
          href={p.href}
          target="_blank"
          rel="noreferrer"
        >
          <span className="title">{t(`projects.${p.translationKey}.title`)}</span>
          <span className="tech">{p.tech}</span>
          <span className="desc">{t(`projects.${p.translationKey}.desc`)}</span>
        </ProjectCard>
      ))}
    </CardsGrid>
  );
}

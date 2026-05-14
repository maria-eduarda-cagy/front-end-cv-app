import { CardsGrid, ProjectCard } from "./styles";

type Project = {
  title: string;
  label: string;
  href: string;
  desc: string;
  tech: string;
};

const projects: Project[] = [
  {
    title: "Web Game",
    label: "game.mariacagy.com.br",
    href: "https://game.mariacagy.com.br",
    desc: "Casual web game for the browser, focused on quick sessions, simple controls, and a responsive experience on desktop and mobile.",
    tech: "React • TypeScript",
  },
  {
    title: "Orbis Finance",
    label: "orbisfinance.mariacagy.com.br",
    href: "https://orbisfinance.mariacagy.com.br",
    desc: "Financial dashboard for metrics visualization with charts and tables, basic filters, and emphasis on clarity and fast reading.",
    tech: "React • TypeScript • Tailwind",
  },
  {
    title: "District DMV Lookup",
    label: "districdmv.mariacagy.com.br",
    href: "https://districtdmv.mariacagy.com.br",
    desc: "Lookup legislative districts in DC/MD/VA from an address, visualize boundaries on an interactive map, and generate an offices-only sample ballot (optional downballot).",
    tech: "Vanilla JS • Leaflet • Supabase • PostGIS • Python",
  },
];
export function PersonalProjects() {
  return (
    <CardsGrid>
      {projects.map((p) => (
        <ProjectCard
          key={p.href}
          href={p.href}
          target="_blank"
          rel="noreferrer"
        >
          <span className="title">{p.title}</span>
          <span className="tech">{p.tech}</span>
          <span className="desc">{p.desc}</span>
        </ProjectCard>
      ))}
    </CardsGrid>
  );
}

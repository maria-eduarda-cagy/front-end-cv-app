export type Project = {
  slug: string;
  translationKey: string;
  href: string;
  // "live" links to the deployed product; "code" links to the source
  // repository for projects with no public-facing UI (e.g. a backend
  // automation service).
  linkKind: "live" | "code";
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: "orbis-finance",
    translationKey: "orbisFinance",
    href: "https://orbisfinance.mariacagy.com.br",
    linkKind: "live",
    tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
  },
  {
    slug: "district-lookup-tool",
    translationKey: "districtLookup",
    href: "https://districtdmv.mariacagy.com.br",
    linkKind: "live",
    tech: ["Vanilla JS", "Leaflet", "PostGIS", "Python"],
  },
  {
    slug: "status-monitor-service",
    translationKey: "statusMonitor",
    href: "https://github.com/maria-eduarda-cagy/whv-checker",
    linkKind: "code",
    tech: ["Python", "FastAPI", "Docker", "Supabase"],
  },
];

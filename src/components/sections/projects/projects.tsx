import { useTranslation } from "react-i18next";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "../../section-heading/section-heading";
import { ScrollEnter } from "../../motion/ScrollEnter";
import { projects } from "./data";
import { Card, CardDesc, CardLink, CardTitle, Grid, ProjectsSection, Tech, TechRow } from "./styles";

export function Projects() {
  const { t } = useTranslation();

  return (
    <ProjectsSection id="projects">
      <SectionHeading eyebrow={t("projects.eyebrow")} title={t("projects.title")} />

      <Grid>
        {projects.map((project, index) => (
          <ScrollEnter key={project.slug} from={index % 2 === 0 ? "left" : "right"}>
            <Card>
              <CardTitle>{t(`projects.${project.translationKey}.title`)}</CardTitle>
              <TechRow>
                {project.tech.map((tech) => (
                  <Tech key={tech}>{tech}</Tech>
                ))}
              </TechRow>
              <CardDesc>{t(`projects.${project.translationKey}.desc`)}</CardDesc>
              <CardLink href={project.href} target="_blank" rel="noreferrer">
                {project.linkKind === "live" ? (
                  <>
                    <ExternalLink aria-hidden="true" />
                    {t("projects.viewProject")}
                  </>
                ) : (
                  <>
                    <Github aria-hidden="true" />
                    {t("projects.viewCode")}
                  </>
                )}
              </CardLink>
            </Card>
          </ScrollEnter>
        ))}
      </Grid>
    </ProjectsSection>
  );
}

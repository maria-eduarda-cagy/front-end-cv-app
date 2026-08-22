import { useTranslation } from "react-i18next";
import { SectionHeading } from "../../section-heading/section-heading";
import { ScrollEnter } from "../../motion/ScrollEnter";
import {
  Bullet,
  Bullets,
  Company,
  ExperienceSection,
  Meta,
  Role,
  Timeline,
  TimelineItem,
} from "./styles";

const itemKeys = ["votingBuddy", "marinha"] as const;

export function Experience() {
  const { t } = useTranslation();

  return (
    <ExperienceSection id="experience">
      <SectionHeading eyebrow={t("experience.eyebrow")} title={t("experience.title")} />

      <Timeline>
        {itemKeys.map((key, index) => {
          const bullets = t(`experience.items.${key}.bullets`, {
            returnObjects: true,
          }) as string[];

          return (
            <TimelineItem key={key}>
              <ScrollEnter from={index % 2 === 0 ? "left" : "right"}>
                <Company>{t(`experience.items.${key}.company`)}</Company>
                <Role>{t(`experience.items.${key}.role`)}</Role>
                <Meta>
                  {t(`experience.items.${key}.location`)} · {t(`experience.items.${key}.period`)}
                </Meta>
                <Bullets>
                  {bullets.map((bullet) => (
                    <Bullet key={bullet}>{bullet}</Bullet>
                  ))}
                </Bullets>
              </ScrollEnter>
            </TimelineItem>
          );
        })}
      </Timeline>
    </ExperienceSection>
  );
}

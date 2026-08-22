import { useTranslation } from "react-i18next";
import { SectionHeading } from "../../section-heading/section-heading";
import { ScrollEnter } from "../../motion/ScrollEnter";
import {
  AboutSection,
  Bio,
  CardsColumn,
  MiniCard,
  MiniCardBody,
  MiniCardTitle,
  Stat,
  StatsGrid,
  StatValue,
  TextColumn,
} from "./styles";

const statKeys = ["experience", "remote", "degree", "location"] as const;
const cardKeys = ["cleanCode", "dataAutomation", "shipping"] as const;

export function About() {
  const { t } = useTranslation();

  return (
    <AboutSection id="about">
      <ScrollEnter from="left">
        <TextColumn>
          <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} />
          <Bio>{t("about.body")}</Bio>
          <StatsGrid>
            {statKeys.map((key) => (
              <Stat key={key}>
                <StatValue>{t(`about.stats.${key}`)}</StatValue>
              </Stat>
            ))}
          </StatsGrid>
        </TextColumn>
      </ScrollEnter>

      <ScrollEnter from="right">
        <CardsColumn>
          {cardKeys.map((key) => (
            <MiniCard key={key}>
              <MiniCardTitle>{t(`about.cards.${key}.title`)}</MiniCardTitle>
              <MiniCardBody>{t(`about.cards.${key}.body`)}</MiniCardBody>
            </MiniCard>
          ))}
        </CardsColumn>
      </ScrollEnter>
    </AboutSection>
  );
}

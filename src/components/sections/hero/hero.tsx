import { Trans, useTranslation } from "react-i18next";
import { Terminal } from "../../terminal/terminal";
import {
  AccentCyan,
  AccentPrimary,
  Badge,
  CtaRow,
  Headline,
  HeroSection,
  HeroText,
  PrimaryCta,
  SecondaryCta,
  StatusDot,
  Subheadline,
  TerminalColumn,
} from "./styles";

export function Hero() {
  const { t } = useTranslation();

  return (
    <HeroSection id="hero">
      <HeroText>
        <Badge>
          <StatusDot aria-hidden="true" />
          {t("hero.badge")}
        </Badge>

        <Headline>
          <Trans
            i18nKey="hero.headline"
            components={{
              hl1: <AccentPrimary />,
              hl2: <AccentCyan />,
            }}
          />
        </Headline>

        <Subheadline>{t("hero.subheadline")}</Subheadline>

        <CtaRow>
          <PrimaryCta href="#projects">{t("hero.ctaProjects")}</PrimaryCta>
          <SecondaryCta href="#contact">{t("hero.ctaContact")}</SecondaryCta>
        </CtaRow>
      </HeroText>

      <TerminalColumn>
        <Terminal />
      </TerminalColumn>
    </HeroSection>
  );
}

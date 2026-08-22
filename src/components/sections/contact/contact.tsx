import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "../../section-heading/section-heading";
import { ScrollEnter } from "../../motion/ScrollEnter";
import {
  Badge,
  Columns,
  ContactSection,
  CopyButton,
  InfoLabel,
  InfoRow,
  InfoValue,
  Intro,
  LinkButton,
  Panel,
  StatusDot,
} from "./styles";

const EMAIL = "mariaeduardacs@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/maria-eduarda-cagy/";
const GITHUB_URL = "https://github.com/maria-eduarda-cagy";

export function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — the mailto
      // link below still works as a fallback, so this is a silent no-op.
    }
  };

  return (
    <ContactSection id="contact">
      <SectionHeading eyebrow={t("contact.eyebrow")} title={t("contact.title")} />
      <Intro>{t("contact.intro")}</Intro>

      <Columns>
        <ScrollEnter from="left">
          <Panel>
            <Badge>
              <StatusDot aria-hidden="true" />
              {t("contact.status")}
            </Badge>

            <InfoRow>
              <InfoLabel>{t("contact.typeLabel")}</InfoLabel>
              <InfoValue>{t("contact.type")}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>{t("contact.locationLabel")}</InfoLabel>
              <InfoValue>{t("contact.location")}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>{t("contact.responseLabel")}</InfoLabel>
              <InfoValue>{t("contact.response")}</InfoValue>
            </InfoRow>
          </Panel>
        </ScrollEnter>

        <ScrollEnter from="right">
          <Panel>
            <LinkButton href={`mailto:${EMAIL}`}>
              <Mail aria-hidden="true" />
              {EMAIL}
            </LinkButton>
            <CopyButton type="button" onClick={handleCopy} aria-live="polite">
              {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
              {copied ? t("contact.emailCopied") : t("contact.copyEmail")}
            </CopyButton>
            <LinkButton href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" />
              {t("contact.linkedin")}
            </LinkButton>
            <LinkButton href={GITHUB_URL} target="_blank" rel="noreferrer">
              <Github aria-hidden="true" />
              {t("contact.github")}
            </LinkButton>
          </Panel>
        </ScrollEnter>
      </Columns>
    </ContactSection>
  );
}

import { useTranslation } from "react-i18next";
import { LangButton, SwitcherWrapper } from "./styles";
import { supportedLanguages, type SupportedLanguage } from "../../i18n";

const labels: Record<SupportedLanguage, string> = {
  en: "EN",
  "pt-BR": "PT",
  es: "ES",
};

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage as SupportedLanguage;

  return (
    <SwitcherWrapper role="group" aria-label="Language">
      {supportedLanguages.map((lng) => (
        <LangButton
          key={lng}
          type="button"
          $active={current === lng}
          aria-pressed={current === lng}
          onClick={() => i18n.changeLanguage(lng)}
        >
          {labels[lng]}
        </LangButton>
      ))}
    </SwitcherWrapper>
  );
}

import { useTranslation } from "react-i18next";
import { FooterBackground } from "../styles";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <FooterBackground>
      <div className="mobile-header-icons">
        <a
          href="https://www.linkedin.com/in/maria-eduarda-cagy/"
          target="_blank"
        >
          <img src={linkedinIcon} alt={t("footer.linkedinAlt")} />
        </a>
        <a href="https://github.com/maria-eduarda-cagy" target="_blank">
          <img src={githubIcon} alt={t("footer.githubAlt")} />
        </a>
      </div>

      <span>{t("footer.copyright", { year: 2026 })}</span>
    </FooterBackground>
  );
}

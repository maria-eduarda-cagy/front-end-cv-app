import { FooterBackground } from "../styles";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";

export default function Footer() {
  return (
    <FooterBackground>
      <div className="mobile-header-icons">
        <a
          href="https://www.linkedin.com/in/maria-eduarda-cagy/"
          target="_blank"
        >
          <img src={linkedinIcon} alt="linkedIn Icon" />
        </a>
        <a href="https://github.com/maria-eduarda-cagy" target="_blank">
          <img src={githubIcon} alt="github Icon" />
        </a>
      </div>

      <span>Copyright © Maria Cagy · 2026</span>
    </FooterBackground>
  );
}

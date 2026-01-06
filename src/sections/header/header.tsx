import { HeaderBackground } from "../styles";

//icons
import linkedinIcon from "../../assets/icons/linkedin.svg";
import githubIcon from "../../assets/icons/github.svg";

export default function Header() {
  return (
    <HeaderBackground>
      <div className="mobile-header-icons">
        <a
          href="https://www.linkedin.com/in/maria-eduarda-cagy/"
          target="_blank"
        >
          <img src={linkedinIcon}  alt="linkedIn Icon" />
        </a>
        <a
          href="https://github.com/maria-eduarda-cagy"
          target="_blank"
        >
          <img src={githubIcon}  alt="github Icon" />
        </a>
      </div>
    </HeaderBackground>
  );
}

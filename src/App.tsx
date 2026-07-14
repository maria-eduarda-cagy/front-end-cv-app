//styles
import "./App.scss";

//i18n
import { useTranslation } from "react-i18next";

//layout
import { AppLayout } from "./Layout";

//components
import { Text } from "./components/text/text";
import { CarouselAuto } from "./components/carousel/carousel-autamate";
import { MyCareerCarousel } from "./components/my-career/my-career-carousel";
import {
  academicCareerData,
  experienceAsFrontendDev,
  experienceWithReactAndTS,
  professionalCareerData,
} from "./components/utils/references";

// import Button from "./components/button/button";
import Experience from "./components/experience/experience";

//images and icons
import avatar from "./assets/profile/avatar.png";
import codeIcon from "./assets/icons/code.svg";
import profile from "./assets/profile/profile.jpeg";
import linkedinIcon from "./assets/icons/linkedin.svg";
import githubIcon from "./assets/icons/github.svg";
import { RecommendationCarousel } from "./components/recommendations/recommendations";
import { PersonalProjects } from "./components/personal-projects/personal-projects";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <AppLayout>
        <main className="page-container">
          <div className="container-center" id="avatar">
            <a
              href="https://www.linkedin.com/in/maria-eduarda-cagy/"
              target="_blank"
            >
              <img src={avatar} className="avatar" alt="avatar" />
            </a>
          </div>
          <div className="container-center" id="profile">
            <Text preset="title">{t("header.brand")}</Text>
            <div className="column-container">
              <Text preset="text">{t("hero.role")}</Text>
              <Text preset="subtext">{t("hero.student")}</Text>
              
              <Text preset="subtext">{t("hero.stack")}</Text>
            </div>
          </div>
          <div className="container-center" id="contact">
            <div className="contact-icons">
              <a
                href="https://www.linkedin.com/in/maria-eduarda-cagy/"
                target="_blank"
              >
                <img src={linkedinIcon} alt={t("contact.linkedinAlt")} width={36} />
              </a>
              <a href="https://github.com/maria-eduarda-cagy" target="_blank">
                <img src={githubIcon} alt={t("contact.githubAlt")} width={36} />
              </a>
            </div>
            {/* <Button>Lets Talk?</Button> */}
          </div>
          <div className="container-center" id="experience">

            <Experience
              src={codeIcon}
              position={t("experience.frontendPosition")}
              using={t("experience.frontendUsing")}
              time={experienceWithReactAndTS}
            />
            <Experience
              src={codeIcon}
              position={t("experience.developerPosition")}
              time={experienceAsFrontendDev}
            />
          </div>
          <div className="row">
            <div className="container-center" id="profile-image">
              <a
                href="https://www.linkedin.com/in/maria-eduarda-cagy/"
                target="_blank"
              >
                <img
                  src={profile}
                  className="profile"
                  alt="profile image"
                />
              </a>
            </div>
            <div className="container-start" id="about-me">
              <Text preset="textWithBackground">{t("about.title")}</Text>
              <Text preset="text" style={{ textAlign: "start" }}>
                {t("about.body")}
              </Text>
            </div>
          </div>
          <div className="container-start" id="my-career">
            <Text preset="textWithBackground">{t("career.title")}</Text>

            <MyCareerCarousel careerData={professionalCareerData} />

            <Text preset="textWithBackground" style={{ marginTop: "1rem" }}>
              {t("career.academicTitle")}
            </Text>
            <MyCareerCarousel careerData={academicCareerData} />
          </div>
          <div className="container-start" id="recommendations">
            <Text preset="textWithBackground">{t("recommendations.title")}</Text>
            <RecommendationCarousel />
          </div>
          <div className="container-start" id="personal-projects">
            <Text preset="textWithBackground">{t("projects.title")}</Text>
            <PersonalProjects />
          </div>
          <div className="container-start" id="skills">
            <Text preset="textWithBackground">{t("skills.title")}</Text>
            <Text preset="subtext" style={{ marginBottom: "1rem" }}>
              {t("skills.subtitle")}
            </Text>
            <CarouselAuto />
          </div>
        </main>
      </AppLayout>
    </>
  );
}

export default App;

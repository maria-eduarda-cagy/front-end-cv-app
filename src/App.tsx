//styles
import "./App.scss";

//layout
import { AppLayout } from "./Layout";

//components
import { Text } from "./components/text/text";
import { CarouselAuto } from "./components/carousel/carousel-autamate";
import { MyCareerCarousel } from "./components/my-career/my-career-carousel";
import {
  academicCareerData,
  professionalCareerData,
} from "./components/utils/references";

// import Button from "./components/button/button";
import Experience from "./components/experience/experience";

//utils
import {
  experienceAsFrontendDevStr,
  experienceWithReactAndTSStr,
} from "./components/utils/utils";

//images and icons
import avatar from "./assets/profile/avatar.png";
import codeIcon from "./assets/icons/code.svg";
import profile from "./assets/profile/profile.jpeg";
import linkedinIcon from "./assets/icons/linkedin.svg";
import githubIcon from "./assets/icons/github.svg";
import { RecommendationCarousel } from "./components/recommendations/recommendations";
import { PersonalProjects } from "./components/personal-projects/personal-projects";

function App() {
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
            <Text preset="title">Maria Cagy</Text>
            <div className="column-container">
              <Text preset="text">Front-end Developer</Text>
              <Text preset="subtext">React • TypeScript • Next.JS </Text>
            </div>
          </div>
          <div className="container-center" id="contact">
            <div className="contact-icons">
              <a
                href="https://www.linkedin.com/in/maria-eduarda-cagy/"
                target="_blank"
              >
                <img src={linkedinIcon} alt="linkedIn Icon" width={36} />
              </a>
              <a href="https://github.com/maria-eduarda-cagy" target="_blank">
                <img src={githubIcon} alt="github Icon" width={36} />
              </a>
            </div>
            {/* <Button>Lets Talk?</Button> */}
          </div>
          <div className="container-center" id="experience">
          
            <Experience
              src={codeIcon}
              position="Front-End Developer"
              using="React and TypeScript"
              time={experienceWithReactAndTSStr}
            />
            <Experience
              src={codeIcon}
              position="Developer"
              time={experienceAsFrontendDevStr}
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
              <Text preset="textWithBackground">About me</Text>
              <Text preset="text" style={{ textAlign: "start" }}>
                I’m a frontend-focused full-stack developer who enjoys turning
                ideas into clear and reliable digital experiences. I work mainly
                with React, TypeScript and Next.js, focusing on clean,
                accessible and performant interfaces. I’m currently a Computer
                Science student, which strengthens my technical foundation and
                problem-solving skills. At Voting Buddy, I collaborate closely
                with product, design and engineering teams. I’m also comfortable
                working across the stack with Node.js, Strapi and Python. I’m
                motivated by building products that feel simple, fast and
                intuitive to use.
              </Text>
            </div>
          </div>
          <div className="container-start" id="my-career">
            <Text preset="textWithBackground">My Career</Text>

            <MyCareerCarousel careerData={professionalCareerData} />

            <Text preset="textWithBackground" style={{ marginTop: "1rem" }}>
              Academic Area
            </Text>
            <MyCareerCarousel careerData={academicCareerData} />
          </div>
          <div className="container-start" id="recommendations">
            <Text preset="textWithBackground">Recommendations</Text>
            <RecommendationCarousel />
          </div>
          <div className="container-start" id="personal-projects">
            <Text preset="textWithBackground">Personal Projects</Text>
            <PersonalProjects />
          </div>
          <div className="container-start" id="skills">
            <Text preset="textWithBackground">Skills</Text>
            <Text preset="subtext" style={{ marginBottom: "1rem" }}>
              Technologies I use to build amazing apps:
            </Text>
            <CarouselAuto />
          </div>
        </main>
      </AppLayout>
    </>
  );
}

export default App;

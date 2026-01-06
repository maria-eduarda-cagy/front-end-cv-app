//styles
import "./App.css";

//components and sections
import Header from "./sections/header/header";
import { Text } from "./components/text/text";
import Download from "./components/download/download";
import Button from "./components/button/button";
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
import { Carousel } from "./components/carousel/carousel";
import { MyCareer } from "./components/my-career/my-career";

function App() {
  return (
    <div className="page-container">
      <Header />
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
        <Text preset="text">Front-end Developer</Text>
        <Text preset="subtext">React • TypeScript • Next.JS </Text>
      </div>
      <div className="container-center" id="contact">
        <Download />
        <Button>Lets Talk?</Button>
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
      <div className="container-center" id="profile-image">
        <img src={profile} className="profile" alt="profile image" />
      </div>
      <div className="container-start" id="about-me">
        <Text preset="textWithBackground">About me</Text>
        <Text preset="text" style={{ textAlign: "start" }}>
          I’m a frontend-focused full-stack developer who enjoys turning ideas
          into clear and reliable digital experiences. I work mainly with React,
          TypeScript and Next.js, focusing on clean, accessible and performant
          interfaces. I’m currently a Computer Science student, which
          strengthens my technical foundation and problem-solving skills. At
          Voting Buddy, I collaborate closely with product, design and
          engineering teams. I’m also comfortable working across the stack with
          Node.js, Strapi and Python. I’m motivated by building products that
          feel simple, fast and intuitive to use.
        </Text>
      </div>
      <div className="container-start" id="skills">
        <Text preset="textWithBackground">Skills</Text>
        <Text preset="subtext">Technologies I use to build amazing apps:</Text>
        <Carousel />
      </div>
      <div className="container-start" id="my-career">
        <Text preset="textWithBackground">My Career</Text>
        <MyCareer />
      </div>
    </div>
  );
}

export default App;

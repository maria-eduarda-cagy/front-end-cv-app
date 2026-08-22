import "./App.scss";
import { AppLayout } from "./Layout";
import { Hero } from "./components/sections/hero/hero";
import { About } from "./components/sections/about/about";
import { Stack } from "./components/sections/stack/stack";
import { Experience } from "./components/sections/experience/experience";
import { Projects } from "./components/sections/projects/projects";
import { Recommendations } from "./components/sections/recommendations/recommendations";
import { Contact } from "./components/sections/contact/contact";

function App() {
  return (
    <AppLayout>
      <Hero />
      <About />
      <Stack />
      <Experience />
      <Projects />
      <Recommendations />
      <Contact />
    </AppLayout>
  );
}

export default App;

import { useState } from "react";

import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import Project from "./sections/Project";
import Navbar from "./components/NavBar";
import ResumeModal from "./components/ResumeModel";
import About from "./sections/About";

const App = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <Navbar openResume={() => setIsResumeOpen(true)} />
      <Hero openResume={() => setIsResumeOpen(true)} />
      <About />
      <Stats />
      <Project />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </>
  );
};

export default App;
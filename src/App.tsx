import { useState } from "react";
import { MotionConfig, useReducedMotion } from "framer-motion";
import Contact from "./components/Contact";
import CursorFollower from "./components/CursorFollower";
import MotionControl from "./components/MotionControl";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Projects from "./components/Projects";
import ResearchPapers from "./components/ResearchPapers";
import Services from "./components/Services";
import Skills from "./components/Skills";
import { useReveal } from "./hooks/useReveal";
import { MotionPreferences } from "./hooks/motionPreferences";

export default function App() {
  const reducedMotion = useReducedMotion();
  const [motionOverride, setMotionOverride] = useState<boolean | null>(null);
  const paused = motionOverride ?? !!reducedMotion;
  useReveal();
  return (
    <MotionPreferences.Provider
      value={{ paused, toggle: () => setMotionOverride(!paused) }}
    >
      <MotionConfig reducedMotion={paused ? "always" : "never"}>
        <div className="portfolio" data-motion={paused ? "paused" : "active"}>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          <CursorFollower />
          <main id="main">
            <Hero />
            <Projects />
            <Skills />
            <Process />
            <Services />
            <ResearchPapers />
            <Contact />
          </main>
          <Footer />
          <MotionControl />
        </div>
      </MotionConfig>
    </MotionPreferences.Provider>
  );
}

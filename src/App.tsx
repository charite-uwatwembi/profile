// src/App.tsx

import Contact from "./components/Contact";
import CursorFollower from "./components/CursorFollower";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Projects from "./components/Projects";
import ResearchPapers from "./components/ResearchPapers";
import Services from "./components/Services";
import Skills from "./components/Skills";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal(0.1);
  return (
    <div className="min-h-screen bg-[#f5f6f7] text-neutral-900">
      <CursorFollower />
      <main className="pt-20">
        <Hero />
        <Projects />
        <Skills />
        <Process />
        <Services />
        <ResearchPapers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

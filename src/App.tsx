// src/App.tsx

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useReveal } from "./hooks/useReveal";
import CursorFollower from "./components/CursorFollower";

export default function App() {
  useReveal(0.1);
  return (
    <div className="min-h-screen bg-[#f5f6f7] text-neutral-900">
      <CursorFollower />
      <main className="pt-0">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

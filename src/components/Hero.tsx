// src/components/Hero.tsx
import { motion } from "framer-motion";
// import BeadRibbon from "./BeadRibbon";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen">
      {/* right-side animated beads */}
      {/* <BeadRibbon /> */}

      {/* Fixed header with name and status in corners */}
      <div className="absolute top-0 left-0 right-0 z-10 px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex justify-between items-center">
          <div className="text-[18px] font-semibold text-neutral-900">
            Charite Uwatwembi
          </div>
          <div className="flex items-center gap-2 text-[18px] font-semibold text-neutral-900">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>Open</span>
          </div>
        </div>
      </div>

      {/* Centered main content */}
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          <motion.h1
            className="serif text-[36px] sm:text-[36px] md:text-[44px] leading-[1.08] text-neutral-900"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-neutral-500">Hey, I’m</span>
              {/* Inline rounded chip image */}
              <img
                src="https://placehold.co/80x64/jpg?text=ME"
                alt=""
                className="h-[64px] w-[80px] rounded-[20px] object-cover shadow-md"
              />
              <span className="ml-1">Charite</span>
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span>Software Engineer</span>
              <img
                src="https://placehold.co/96x64/jpg?text=APP"
                alt=""
                className="h-[64px] w-[96px] rounded-[22px] object-cover shadow-md"
              />
              <img
                src="https://placehold.co/96x64/jpg?text=UI"
                alt=""
                className="h-[64px] w-[96px] rounded-[22px] object-cover shadow-md"
              />
            </div>

            <div className="mt-3 flex items-center gap-3">
              <span className="text-neutral-500">Living in</span>
              <img
                src="https://placehold.co/80x64/jpg?text=RWANDA"
                alt=""
                className="h-[64px] w-[80px] rounded-[20px] object-cover shadow-md"
              />
              <span>Kigali</span>
            </div>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            className="mt-6 text-[18px] leading-relaxed text-neutral-600 max-w-2xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Hey 👋🏾, I’m Charite Uwatwembi. I love building beautiful, timeless
            applications & web products that feel great to use.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[999px] bg-neutral-900 text-white px-6 py-3 text-[15px] font-medium btn-soft"
            >
              Get In Touch
              <span aria-hidden>↗</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

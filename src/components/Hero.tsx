// src/components/Hero.tsx
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
// import BeadRibbon from "./BeadRibbon";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  // At the very top: solid page-grey; after 10% scroll: ultra-transparent glass.
  const headerBg = useTransform(scrollYProgress, [0, 0.1], [1, 0.3]);
  const headerBgColor = useMotionTemplate`rgba(239,239,241, ${headerBg})`;

  return (
    <section ref={containerRef} id="home" className="relative overflow-hidden h-[60vh] bg-[#efeff1]
    -mt-16 pt-16">
      {/* right-side animated beads */}
      {/* <BeadRibbon /> */}

      {/* Fixed header with name and status in corners */}
      <motion.header className="fixed inset-x-0 top-0 z-50 h-16">
        {/* GLASS BACKGROUND LAYER */}
        <motion.div
          className="
            absolute inset-0
            backdrop-blur-3xl backdrop-saturate-200
          "
          style={{
            backgroundColor: headerBgColor,            // 1 -> opaque (matches page), 0.08 -> very glassy
            WebkitBackdropFilter: "blur(32px) saturate(200%)",
            backdropFilter: "blur(32px) saturate(200%)",
          }}
        />

        {/* CONTENT (stays crisp) */}
        <div className="relative h-full px-6 md:px-10 flex items-center justify-between">
          <div className="text-[12px] font-semibold text-neutral-900">Charite Uwatwembi</div>
          <div className="flex items-center gap-2 text-[18px] font-semibold text-neutral-900">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[12px]">Open</span>
          </div>
        </div>

      </motion.header>

      {/* Video Background - Full Height */}
      <div className="absolute inset-0 w-full h-full z-0">
         <div className="absolute right-0 top-0 w-1/2 h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/thumbnails/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Main content */}
       <div className="relative z-10 flex items-center justify-center  px-4 sm:px-6 lg:px-8 h-full">
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 items-end h-full ">
          {/* Left side - Text content */}
          <div className="w-full flex flex-col justify-center h-full bg-[#efeff1]">
          <motion.h1
            className="serif text-[24px] sm:text-[28px] md:text-[30px] leading-[1.2] text-neutral-900"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <div className="flex items-center gap-3">
              <span className="text-neutral-500">Hey, I'm</span>
              {/* Inline rounded chip image */}
              <div className="h-[56px] w-[78px] rounded-[32px] overflow-hidden shadow-md border-2 border-black">
                <img
                  src="/thumbnails/charite.png"
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(1)' }}
                />
              </div>
              <span className="ml-1">Charite</span>
            </div>

            <div className="mt-2 flex items-center gap-3">
              <span>Software Engineer</span>
              <div className="h-[56px] w-[78px] rounded-[32px] overflow-hidden shadow-md border-2 border-black">
                <img
                  src="/thumbnails/aisfm.png"
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(1.4)' }}
                />
              </div>
              <div className="h-[56px] w-[78px] rounded-[32px] overflow-hidden shadow-md border-2 border-black">
                <img
                  src="/thumbnails/cinetie.png"
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(2.2)' }}
                />
              </div>
            </div>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-neutral-500">Living in</span>
              <div className="h-[56px] w-[78px] rounded-[32px] overflow-hidden shadow-md border-2 border-black">
                <img
                  src="/thumbnails/rwanda.png"
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ transform: 'scale(1.1)' }}
                />
              </div>
              <span>Kigali</span>
            </div>
          </motion.h1>

          {/* Subcopy - moved to bottom */}
          <motion.p
            className="mt-4 text-[16px] leading-relaxed text-neutral-600 max-w-2xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Hey 👋🏾, I'm Charite Uwatwembi. I love building beautiful, timeless<br />
            applications & web products that feel great to use.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="mt-6 mb-16"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
              <a
  href="#contact"
  className="
    inline-flex items-center gap-2
    rounded-[999px]
    bg-gradient-to-b from-neutral-500 from-6% via-neutral-800 via-10% to-neutral-900 text-white
    px-6 py-3 text-[15px] font-medium
    shadow-[0_12px_30px_rgba(0,0,0,0.6),inset_0_2px_0_rgba(255,255,255,0.3)]
    transition hover:scale-[1.02] active:scale-[0.98]
  "
>
  Get In Touch
  <span aria-hidden>↗</span>
</a>

          </motion.div>
          </div>

          {/* Right side - Empty space for video background */}
          <div className="w-full h-full">
            {/* Video is now positioned absolutely in the background */}
          </div>
        </div>
      </div>
    </section>
  );
}

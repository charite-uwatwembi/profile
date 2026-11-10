import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMotionPreferences } from "../hooks/motionPreferences";

export default function Hero() {
  const { paused } = useMotionPreferences();
  const video = useRef<HTMLVideoElement>(null);
  const inView = useInView(video, { amount: 0.1 });
  useEffect(() => {
    if (!video.current) return;
    if (paused || !inView) video.current.pause();
    else void video.current.play().catch(() => {});
  }, [paused, inView]);
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <a className="availability" href="#contact">
        <span className="status-dot" />
        Open to opportunities
      </a>
      <div className="hero-media" aria-hidden="true">
        <video
          ref={video}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          width={1956}
          height={1100}
          tabIndex={-1}
        >
          <source src="/videos/hero-beads-hq.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: paused ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 id="hero-title">
            <span className="intro-line">
              <span className="intro-muted intro-greeting">
                <span className="intro-hello">Hey,</span> I’m
              </span>
              <span className="image-pill portrait-pill">
                <img
                  src="/thumbnails/charite.png"
                  alt=""
                  width="78"
                  height="56"
                  fetchPriority="high"
                />
              </span>
              <span>Charite</span>
            </span>
            <span className="intro-line">
              <span>Software Engineer</span>
              <span className="project-pills">
                <span className="image-pill project-pill">
                  <img
                    src="/illustrations/code-chip.svg"
                    alt=""
                    width="78"
                    height="56"
                  />
                </span>
                <span className="image-pill ai-pill">
                  <img
                    src="/illustrations/ai-chip.svg"
                    alt=""
                    width="78"
                    height="56"
                  />
                </span>
              </span>
            </span>
            <span className="intro-line">
              <span>
                <span className="intro-muted">Based in</span> Kigali
              </span>
              <span className="image-pill location-pill" title="Map of Rwanda">
                <img
                  src="/thumbnails/rwanda-map.png"
                  alt=""
                  width="78"
                  height="56"
                />
                <span className="map-center-dot" aria-hidden="true" />
              </span>
            </span>
          </h1>
          <p className="hero-description">
            I build beautiful web products and practical AI systems. A software
            engineer and AI graduate student at CMU Africa.
          </p>
          <a href="#contact" className="button button-primary">
            Get In Touch <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

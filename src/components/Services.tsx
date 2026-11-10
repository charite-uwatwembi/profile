import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

const services = [
  {
    title: "Web & App Development",
    front: "/thumbnails/soilsync.png",
    back: "/thumbnails/cinetie.png",
  },
  {
    title: "AI & Machine Learning",
    front: "/thumbnails/chat.png",
    back: "/thumbnails/aisfm.png",
  },
];
export default function Services() {
  const [flipped, setFlipped] = useState<string[]>([]);
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <SectionHeading label="Expertise">What I’m good at</SectionHeading>
        <div className="service-grid">
          {services.map((service) => (
            <TiltCard
              className={`service-card ${flipped.includes(service.title) ? "is-flipped" : ""}`}
              key={service.title}
            >
              <button
                type="button"
                className="service-preview"
                onClick={() =>
                  setFlipped((current) =>
                    current.includes(service.title)
                      ? current.filter((item) => item !== service.title)
                      : [...current, service.title],
                  )
                }
                aria-label={`Shuffle ${service.title} previews`}
                aria-pressed={flipped.includes(service.title)}
              >
                <span className="preview-back">
                  <img src={service.back} alt="" loading="lazy" />
                </span>
                <span className="preview-front">
                  <img src={service.front} alt="" loading="lazy" />
                </span>
                <span className="shuffle-hint">Tap to shuffle ↗</span>
              </button>
              <h3>
                <a href="#contact">
                  {service.title}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </h3>
            </TiltCard>
          ))}
        </div>
        <ul className="service-tags">
          {[
            "Software Engineering",
            "AI/ML",
            "Data Annotation",
            "Research",
            "Communication",
            "Mobile & Web",
          ].map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

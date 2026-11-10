import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { education, experience, profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading label="Skills & Expertise">
          The knowledge that powers my code and curiosity
        </SectionHeading>
        <div className="skills-card reveal">
          <div className="skills-cover">
            <img src="/thumbnails/cover.png" alt="" loading="lazy" />
          </div>
          <div className="skills-portrait">
            <img
              src="/thumbnails/charite.png"
              alt="Charite Uwatwembi"
              loading="lazy"
            />
          </div>
          <ul className="skill-chips" aria-label="Areas of expertise">
            {["Software Engineering", "AI/ML", "Data", "Research"].map(
              (skill) => (
                <li key={skill}>{skill}</li>
              ),
            )}
          </ul>
        </div>
        <div className="experience-list">
          {experience.map((job) => (
            <details className="experience-row" key={job.company}>
              <summary>
                <h3>{job.role}</h3>
                <span className="experience-company">{job.company}</span>
                <span className="experience-date">{job.dates}</span>
                <span className="experience-expand" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{job.description}</p>
            </details>
          ))}
        </div>
        <div className="education-list">
          <p className="eyebrow">Education</p>
          {education.map((item) => (
            <article key={item.school}>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <p className="education-detail">{item.detail}</p>
              </div>
              <span>{item.date}</span>
            </article>
          ))}
        </div>
        <div className="script-cta">
          <p>Tell Me About Your Next Solution Project</p>
          <a href="#contact" className="button button-primary">
            Get In Touch Today <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="text-link resume-link" href={profile.resume} download>
            Download my résumé <ArrowDownToLine size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

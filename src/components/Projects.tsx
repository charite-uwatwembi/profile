import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

export default function Projects() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(
    null,
  );
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!selected || !dialog.current) return;
    dialog.current.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [selected]);
  return (
    <section
      id="work"
      className="section work-section"
      aria-label="My projects"
    >
      <div className="container">
        <SectionHeading label="My Projects">
          The code that turns vision into reality
        </SectionHeading>
        <div className="project-grid">
          {projects.map((project) => (
            <TiltCard key={project.title} className="project-card">
              <button
                className="project-open"
                type="button"
                onClick={() => setSelected(project)}
                aria-label={`View ${project.title} project`}
              >
                <span className="project-image">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    width="1200"
                    height="800"
                  />
                </span>
                <span className="project-row">
                  <span className="project-name">
                    {project.shortTitle ?? project.title}
                  </span>
                  <ArrowUpRight
                    size={19}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              </button>
            </TiltCard>
          ))}
        </div>
      </div>
      <dialog
        className="project-dialog"
        ref={dialog}
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
        aria-labelledby="project-dialog-title"
      >
        {selected && (
          <div className="dialog-inner">
            <button
              type="button"
              className="dialog-close"
              onClick={() => dialog.current?.close()}
              aria-label="Close project"
              autoFocus
            >
              <X size={21} />
            </button>
            <img
              className="dialog-image"
              src={selected.image}
              alt={selected.imageAlt}
            />
            <div className="dialog-copy">
              <p className="eyebrow">{selected.category}</p>
              <h2 id="project-dialog-title">{selected.title}</h2>
              <p>{selected.description}</p>
              <ul className="tags" aria-label="Technologies">
                {selected.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {selected.url ? (
                <a
                  className="button button-primary"
                  href={selected.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit live project{" "}
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              ) : (
                <p className="preview-note">
                  Project preview. A public live link is not currently
                  available.
                </p>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

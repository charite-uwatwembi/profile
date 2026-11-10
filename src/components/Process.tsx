import type { CSSProperties } from "react";
import { Brain, Database, Cpu, Zap, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Let’s Get In Touch",
    description:
      "Start with your project idea or challenge. We’ll discuss your goals, the people you’re building for, and the best approach — whether it’s a web app, an API, or a machine learning model.",
  },
  {
    title: "Define & Design the Solution",
    description:
      "Together we’ll turn your requirements into a clear technical plan, from the software stack and architecture to data preparation and model selection.",
  },
  {
    title: "Build & Train",
    description:
      "I’ll develop the solution in small steps, share progress and demos, and refine the details with you. Where needed, I’ll train and evaluate machine learning models.",
  },
  {
    title: "Deploy & Support",
    description:
      "Test, deploy, and document the solution so it’s ready for real users, with a clear path for maintenance and the next iteration.",
  },
];

function ProcessIcon({ step }: { step: number }) {
  if (step === 0)
    return (
      <div className="mini-calendar" aria-hidden="true">
        <span>31</span>
        <i>01</i>
      </div>
    );
  if (step === 1)
    return (
      <div className="mini-flow" aria-hidden="true">
        {[Brain, Database, Cpu, Zap].map((Icon, index) => (
          <span key={index} style={{ "--i": index } as CSSProperties}>
            <Icon size={13} />
          </span>
        ))}
      </div>
    );
  if (step === 2)
    return (
      <div className="mini-windows" aria-hidden="true">
        {[0, 1, 2].map((index) => (
          <span key={index} style={{ "--i": index } as CSSProperties}>
            {index === 2 ? "</>" : ""}
          </span>
        ))}
      </div>
    );
  return (
    <div className="mini-rocket" aria-hidden="true">
      <Rocket size={28} />
      <i />
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="container">
        <SectionHeading label="Process">
          The strategy behind exceptional results
        </SectionHeading>
        <ol className="process-timeline">
          {steps.map((step, index) => (
            <li
              className="process-step"
              key={step.title}
              style={{ "--step": index } as CSSProperties}
            >
              <span className="timeline-dot" aria-hidden="true" />
              <article className="process-card">
                <span className="step-label">step{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ProcessIcon step={index} />
                <span className="step-number">- 00{index + 1}</span>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

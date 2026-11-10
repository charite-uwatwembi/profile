import type { ReactNode } from "react";

export default function SectionHeading({
  label,
  children,
  description,
}: {
  number?: string;
  label: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">
        <span className="section-dot" aria-hidden="true" />
        {label}
      </p>
      <h2>{children}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

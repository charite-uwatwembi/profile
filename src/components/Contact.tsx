import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [draft, setDraft] = useState<{ url: string; body: string } | null>(
    null,
  );

  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();
    const budget = String(data.get("budget") ?? "");
    const messageField = event.currentTarget.elements.namedItem(
      "message",
    ) as HTMLTextAreaElement;
    messageField.setCustomValidity(message ? "" : "Please write a message.");
    if (!event.currentTarget.reportValidity() || !name || !email || !message)
      return;
    const subject = `Let’s work together — ${name}`;
    const details = [
      `From: ${name}`,
      `Email: ${email}`,
      website && `Website: ${website}`,
      budget && `Budget: ${budget}`,
    ]
      .filter(Boolean)
      .join("\n");
    const body = `Hi Charite,\n\n${message}\n\n${details}`;
    setDraft({
      url: `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      body,
    });
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <SectionHeading label="Contact">
          Reach out and let’s bring your vision to life
        </SectionHeading>
        <form
          className="contact-form"
          onSubmit={prepareDraft}
          onChange={(event) => {
            setDraft(null);
            if (event.target instanceof HTMLTextAreaElement)
              event.target.setCustomValidity("");
          }}
        >
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                placeholder="Your full name"
                required
                maxLength={100}
                pattern=".*\S.*"
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                maxLength={254}
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="contact-website">
              Website <span>(optional)</span>
            </label>
            <input
              id="contact-website"
              name="website"
              type="url"
              autoComplete="url"
              placeholder="https://yourwebsite.com"
              maxLength={500}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-budget">
              Select Budget <span>(optional)</span>
            </label>
            <select id="contact-budget" name="budget" defaultValue="">
              <option value="">Select…</option>
              <option>Less than $1,000</option>
              <option>$1,000 - $2,000</option>
              <option>$2,000 - $4,000</option>
              <option>$4,000+</option>
              <option>Let’s discuss</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">How may I assist you?</label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Tell me a little about your idea, goals, or opportunity…"
              required
              maxLength={2000}
            />
          </div>
          <button type="submit" className="button button-primary">
            Prepare email draft <ArrowUpRight size={17} aria-hidden="true" />
          </button>
          <p className="form-note">
            Review your draft here, then open your email app to send it.
          </p>
          {draft && (
            <div className="draft-preview" role="status">
              <h4>Your draft is ready</h4>
              <p>{draft.body}</p>
              <a className="text-link" href={draft.url}>
                Open in email app <ArrowUpRight size={16} aria-hidden="true" />
              </a>
              <p className="form-note">
                Nothing has been sent. No email app? Email me directly using the
                address in the footer.
              </p>
            </div>
          )}
        </form>
        <div className="call-booking">
          <p>Prefer a conversation?</p>
          <a href={profile.calendar} target="_blank" rel="noopener noreferrer">
            Book a call anytime <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

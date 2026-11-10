import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { sendContactMessage } from "../lib/sendContactMessage";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const inFlight = useRef(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const website = String(data.get("website") ?? "").trim();
    const budget = String(data.get("budget") ?? "");
    const messageField = form.elements.namedItem("message") as HTMLTextAreaElement;
    messageField.setCustomValidity(message ? "" : "Please write a message.");
    if (!form.reportValidity() || !name || !email || !message) return;
    inFlight.current = true;
    setSending(true);
    setStatus(null);
    try {
      await sendContactMessage({
        name,
        email,
        website,
        budget,
        message,
        honeypot: String(data.get("_honey") ?? ""),
        url: `${window.location.origin}${window.location.pathname}#contact`,
      });
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <SectionHeading label="Contact">
          Reach out and let’s bring your vision to life
        </SectionHeading>
        <form
          className="contact-form"
          action={`https://formsubmit.co/${profile.email}`}
          method="POST"
          onSubmit={sendMessage}
          aria-busy={sending}
          onChange={(event) => {
            setStatus(null);
            if (event.target instanceof HTMLTextAreaElement)
              event.target.setCustomValidity("");
          }}
        >
          <fieldset className="contact-fields" disabled={sending}>
            <div className="contact-honeypot" aria-hidden="true">
              <label htmlFor="contact-company">Leave this field empty</label>
              <input
                id="contact-company"
                name="_honey"
                autoComplete="off"
                tabIndex={-1}
              />
            </div>
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
              {sending ? "Sending…" : "Send your message"}
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </fieldset>
          <p className="form-note">
            Your message goes straight to my inbox. I’ll get back to you soon.
          </p>
          {status && (
            <p
              className={`form-status form-status-${status}`}
              role={status === "error" ? "alert" : "status"}
            >
              {status === "success"
                ? "Message sent. Thanks for reaching out!"
                : "Your message couldn’t be sent. Please try again, or use the email address in the footer."}
            </p>
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

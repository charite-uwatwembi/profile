import { profile } from "../data/portfolio.ts";

export type ContactMessage = {
  name: string;
  email: string;
  website: string;
  budget: string;
  message: string;
  honeypot: string;
  url: string;
};

export async function sendContactMessage(message: ContactMessage) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      signal: controller.signal,
      body: JSON.stringify({
        name: message.name,
        email: message.email,
        ...(message.website && { website: message.website }),
        ...(message.budget && { budget: message.budget }),
        message: message.message,
        _replyto: message.email,
        _subject: `Portfolio inquiry — ${message.name}`,
        _template: "table",
        _honey: message.honeypot,
        _url: message.url,
      }),
    });
    const result: unknown = await response.json();
    const accepted =
      typeof result === "object" &&
      result !== null &&
      "success" in result &&
      (result.success === true || result.success === "true");

    if (!response.ok || !accepted) {
      throw new Error("The email service did not accept the message.");
    }
  } finally {
    clearTimeout(timeout);
  }
}

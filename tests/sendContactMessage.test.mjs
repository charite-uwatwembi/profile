import test from "node:test";
import assert from "node:assert/strict";
import { sendContactMessage } from "../src/lib/sendContactMessage.ts";

const message = {
  name: "Portfolio visitor",
  email: "visitor@example.com",
  website: "https://example.com",
  budget: "Let’s discuss",
  message: "I’d like to discuss a project.",
  honeypot: "",
  url: "https://chariteuwatwembi.vercel.app/#contact",
};

test("sends inquiries to the portfolio owner with a visitor reply address", async (t) => {
  let request;
  t.mock.method(globalThis, "fetch", async (url, options) => {
    request = { url, options };
    return Response.json({ success: "true" });
  });
  await sendContactMessage(message);
  assert.equal(request.url, "https://formsubmit.co/ajax/chariteuwatwembi@gmail.com");
  assert.equal(request.options.method, "POST");
  const payload = JSON.parse(request.options.body);
  assert.equal(payload._replyto, message.email);
  assert.equal(payload.message, message.message);
  assert.equal(payload.website, message.website);
  assert.equal(payload.budget, message.budget);
  assert.equal(payload._honey, "");
});

test("accepts a boolean success response", async (t) => {
  t.mock.method(globalThis, "fetch", async () => Response.json({ success: true }));
  await sendContactMessage(message);
});

test("rejects an email-service failure even when HTTP status is 200", async (t) => {
  t.mock.method(globalThis, "fetch", async () => Response.json({ success: "false" }));
  await assert.rejects(sendContactMessage(message));
});

test("rejects unsuccessful HTTP responses regardless of the success field", async (t) => {
  t.mock.method(globalThis, "fetch", async () => Response.json({ success: true }, { status: 503 }));
  await assert.rejects(sendContactMessage(message));
});

test("rejects malformed or missing service acknowledgements", async (t) => {
  t.mock.method(globalThis, "fetch", async () => Response.json({ message: "Unknown response" }));
  await assert.rejects(sendContactMessage(message));
  t.mock.method(globalThis, "fetch", async () => new Response("Service unavailable"));
  await assert.rejects(sendContactMessage(message));
});

test("propagates network errors so visitors can retry", async (t) => {
  t.mock.method(globalThis, "fetch", async () => { throw new TypeError("Network unavailable"); });
  await assert.rejects(sendContactMessage(message), /Network unavailable/);
});

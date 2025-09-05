export default function Contact() {
    return (
      <section id="contact" className="py-24 bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">Let’s build something</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              Want to collaborate or have a question? Reach out and I’ll reply fast.
            </p>
          </div>
  
          <form className="reveal mt-8 grid gap-4 max-w-xl">
            <input className="bg-white rounded-lg px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Your name" />
            <input className="bg-white rounded-lg px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Email" />
            <textarea className="bg-white rounded-lg px-4 py-3 border border-neutral-300 min-h-32 focus:outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Message" />
            <div>
              <button className="rounded-full bg-neutral-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-black transition" type="button">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  
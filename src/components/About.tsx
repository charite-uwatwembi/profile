export default function About() {
    return (
      <section id="about" className="py-24 bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 reveal">
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">About</h2>
            <p className="mt-2 text-neutral-600 max-w-2xl">
              I build fast, accessible web apps with TypeScript, React, and Tailwind. I enjoy transforming ideas into clean,
              robust interfaces and experiences.
            </p>
          </div>
  
          <div className="reveal grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl bg-neutral-100 border border-neutral-200 aspect-video" />
            <div className="space-y-3 text-neutral-700">
              <p>
                Focus areas: Frontend architecture, design systems, micro-interactions/motion, and data-driven UI. Comfortable
                across the stack with Node and serverless.
              </p>
              <p className="text-neutral-600">
                Stack: TypeScript • React • Tailwind • Framer Motion • Supabase • Vite
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

const items = Array.from({ length: 6 }, (_, i) => ({
  title: `Project ${i + 1}`,
  desc: `Short description of project ${i + 1}.`,
  // image: '/path/to/your/image.jpg' // replace later
}));

export default function Projects() {
  return (
    <section id="work" className="py-24 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 reveal">
          <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900">Selected Work</h2>
          <p className="mt-2 text-neutral-600 max-w-2xl">
            Six placeholder projects you can replace later.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.article
              key={p.title}
              className="reveal rounded-xl bg-white border border-neutral-200 hover:border-neutral-300 transition overflow-hidden"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              {/* Image area (replace src when ready) */}
              <div className="aspect-video bg-neutral-100 grid place-items-center">
                {/* Placeholder icon when no image */}
                <FolderGit2 className="h-8 w-8 text-neutral-400" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900">{p.title}</h3>
                <p className="text-sm text-neutral-600 mt-1">{p.desc}</p>
                <div className="mt-3 text-xs text-neutral-500">React / TypeScript / Tailwind</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

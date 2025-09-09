import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { useState } from "react";
import ProjectCursor from "./ProjectCursor";

const items = Array.from({ length: 6 }, (_, i) => ({
  title: `Project ${i + 1}`,
  desc: `Short description of project ${i + 1}.`,
  // image: '/path/to/your/image.jpg' // replace later
}));

export default function Projects() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="work" className="py-24 bg-white border-t border-neutral-200">
      <ProjectCursor isHovering={isHovering} />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 ">
        <div className="mb-16 reveal">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
            <span className="text-sm font-medium text-neutral-900">My Projects</span>
          </div>
          <h2 className="serif text-4xl sm:text-4xl font-light text-neutral-800 ">
            The designs that turnvision into<br /> reality
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {items.map((p, i) => (
            <motion.article
              key={p.title}
              className="reveal rounded-2xl bg-white border border-neutral-200 hover:border-neutral-300 transition overflow-hidden cursor-none shadow-sm hover:shadow-lg"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Image area (replace src when ready) */}
              <div className="aspect-[4/3] bg-neutral-100 grid place-items-center">
                {/* Placeholder icon when no image */}
                <FolderGit2 className="h-12 w-12 text-neutral-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{p.title}</h3>
                <p className="text-neutral-600 mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-500">React / TypeScript / Tailwind</div>
                  <motion.button 
                    className="text-neutral-900 px-4 py-2 rounded-lg text-lg font-medium hover:bg-neutral-300 transition"
                    initial={{ y: 0, opacity: 0.6 }}
                    whileHover={{ y: -2, opacity: 1 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    ↗
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

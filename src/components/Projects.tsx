import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";
import { useState } from "react";
import ProjectCursor from "./ProjectCursor";

const items = [
  {
    title: "SoilSync",
    desc: "A comprehensive soil management platform for farmers and agricultural professionals.",
    link: "https://soil-sync-proj.vercel.app/",
    tech: "React / TypeScript / Tailwind",
    thumbnail: "/thumbnails/soilsync.png"
  },
  {
    title: "Project 3",
    desc: "Short description of project 3.",
    link: "https://example.com/project3",
    tech: "React / TypeScript / Tailwind",
    thumbnail: "/thumbnails/cinetie.png"
  },
  {
    title: "Project 4",
    desc: "Short description of project 4.",
    link: "https://example.com/project4",
    tech: "React / TypeScript / Tailwind",
    thumbnail: "/thumbnails/aisfm.png"
  },
  {
    title: "Project 5",
    desc: "Short description of project 5.",
    link: "https://example.com/project5",
    tech: "React / TypeScript / Tailwind",
    thumbnail: "/thumbnails/thinkgreen.png"
  },
  {
    title: "Project 6",
    desc: "Short description of project 6.",
    link: "https://example.com/project6",
    tech: "React / TypeScript / Tailwind",
    thumbnail: "/thumbnails/chat.png"
  }
];

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
          {items.map((p) => (
            <motion.article
              key={p.title}
              className="reveal rounded-2xl bg-neutral-100 border border-neutral-200 hover:border-neutral-300 transition overflow-hidden shadow-sm hover:shadow-lg"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="block">
              {/* Image area with thumbnail support */}
              <div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
                {p.thumbnail ? (
                  <img 
                    src={p.thumbnail} 
                    alt={`${p.title} project thumbnail`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.currentTarget.style.display = 'none';
                      const placeholder = e.currentTarget.nextElementSibling as HTMLElement;
                      if (placeholder) {
                        placeholder.style.display = 'grid';
                      }
                    }}
                  />
                ) : null}
                <div className={`absolute inset-0 grid place-items-center ${p.thumbnail ? 'hidden' : 'grid'}`}>
                  <FolderGit2 className="h-12 w-12 text-neutral-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{p.title}</h3>
                <p className="text-neutral-600 mb-4">{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-500">{p.tech}</div>
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
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

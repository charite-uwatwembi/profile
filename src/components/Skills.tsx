import { motion } from "framer-motion";

const skills = [
  "UX",
  "UI", 
  "Product",
  "Research"
];

const workExperience = [
  {
    title: "Sr. Product Designer",
    company: "Strettch",
    dates: "2024 - Current"
  },
  {
    title: "Product Designer", 
    company: "Kayko Group",
    dates: "2023 - 2025"
  },
  {
    title: "UX/UI Designer",
    company: "Freelance", 
    dates: "2022 - 2023"
  },
  {
    title: "CX & Sales",
    company: "DNK (Bralirwa)",
    dates: "2021 - 2023"
  },
  {
    title: "Tech Supp Eng.",
    company: "MVM Fox Ltd",
    dates: "2021 - 2022"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
            <span className="text-sm font-medium text-neutral-900">Skills & Expertise</span>
          </div>
          <h2 className="serif text-4xl sm:text-4xl font-light text-neutral-800">
            The knowledge that powers my designs and empathy
          </h2>
        </div>

        {/* Skills Card */}
        <motion.div 
          className="reveal rounded-2xl bg-neutral-100 border border-neutral-200 overflow-hidden shadow-sm mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Background Image Area */}
          <div className="relative h-64 bg-neutral-200">
            {/* Background Image - You can replace this with your actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-300 to-neutral-400 flex items-center justify-center">
              <div className="text-neutral-500 text-sm">Background Image Placeholder</div>
            </div>
            
            {/* Profile Picture */}
            <div className="absolute bottom-4 left-4">
              <div className="w-20 h-20 rounded-full border-2 border-neutral-900 overflow-hidden bg-neutral-300">
                {/* Profile Image - You can replace this with your actual image */}
                <div className="w-full h-full bg-neutral-400 flex items-center justify-center">
                  <div className="text-neutral-600 text-xs">Profile</div>
                </div>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="px-3 py-1.5 bg-white rounded-lg text-sm font-medium text-neutral-900 shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Work Experience Section */}
        <div className="space-y-4 mb-16">
          {workExperience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.title}`}
              className="reveal rounded-2xl bg-neutral-100 border border-neutral-200 p-6 hover:border-neutral-300 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-neutral-600">
                    {job.company}
                  </p>
                </div>
                <div className="text-sm text-neutral-500 font-medium">
                  {job.dates}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div 
          className="reveal text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
         <p
  style={{ fontFamily: '"Caveat", cursive' }}
  className="
    text-2xl md:text-3xl
    font-semibold
    text-neutral-500
    text-center
    leading-snug
  "
>
  Tell Me About Your Next Solution Project
</p>




<a
  href="#contact"
  className="
    inline-flex items-center gap-2
    rounded-[999px] mt-4
    bg-gradient-to-b from-neutral-500 from-6% via-neutral-800 via-10% to-neutral-900 text-white
    px-6 py-3 text-[15px] font-medium
    shadow-[0_12px_30px_rgba(0,0,0,0.6),inset_0_2px_0_rgba(255,255,255,0.3)]
    transition hover:scale-[1.02] active:scale-[0.98]
  "
>
  Get In Touch Today
  <span aria-hidden>↗</span>
</a>
        </motion.div>
      </div>
    </section>
  );
}

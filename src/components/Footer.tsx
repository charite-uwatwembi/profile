import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 bg-neutral-100 border-t border-neutral-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          {/* Name */}
          <motion.h1 
            className="serif text-6xl sm:text-7xl font-bold text-neutral-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            CHARITE
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-neutral-600 text-lg leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            I craft unique product experiences that reflect brand's personality and objectives. With a solid background in software engineering, I blend innovation with practicality and stay on top of design trends to ensure all projects are visually stunning and functionally flawless.
          </motion.p>
        </div>

        {/* Contact and Social Section */}
        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Email */}
          <div className="flex items-center">
            <a 
              href="mailto:chariteuwatwembi@gmail.com"
              className="text-neutral-700 text-lg hover:text-neutral-900 transition-colors"
            >
              chariteuwatwembi@gmail.com
            </a>
            <div className="ml-4 h-px bg-neutral-300 flex-1 max-w-32"></div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/chariteuwatwembi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://medium.com/@chariteuwatwembi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/chariteuwatwembi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Separator Line */}
        <div className="w-full h-px bg-neutral-300 my-8"></div>

        {/* Copyright */}
        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-neutral-600 text-sm">
            © 2025 Charite Uwatwembi
          </p>
          <p className="text-neutral-600 text-sm">
            All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
  
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
            <span className="text-sm font-medium text-neutral-900">Contact</span>
          </div>
          <h2 className="serif text-4xl sm:text-4xl font-light text-neutral-800">
            Reach out and let's bring your vision to life
          </h2>
        </div>

        {/* Contact Form Card */}
        <motion.div 
          className="reveal rounded-2xl bg-neutral-100 border border-neutral-200 p-8 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <form className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Full Name
                </label>
                <input 
                  type="text"
                  className="w-full bg-white rounded-lg px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition"
                  placeholder="John Murinzi"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email Address
                </label>
                <input 
                  type="email"
                  className="w-full bg-white rounded-lg px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition"
                  placeholder="murinzi@example.com"
                />
              </div>
            </div>

            {/* Website Field */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Website (optional)
              </label>
              <input 
                type="url"
                className="w-full bg-white rounded-lg px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition"
                placeholder="Company Website"
              />
            </div>

            {/* Budget Select */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Select Budget
              </label>
              <select className="w-full bg-white rounded-lg px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition appearance-none">
                <option value="">Select...</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-10k">$5,000 - $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="over-50k">Over $50,000</option>
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                How may I assist you?
              </label>
              <textarea 
                rows={4}
                className="w-full bg-white rounded-lg px-4 py-3 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition resize-none"
                placeholder="Give us more info.."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <motion.button
                type="submit"
                className="w-full bg-neutral-900 text-white px-6 py-4 rounded-lg font-medium text-lg shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Your Message
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div 
          className="reveal mt-8 flex items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p  style={{ fontFamily: '"Caveat", cursive' }}
  className="
    text-2xl md:text-3xl
    font-semibold
    text-neutral-500
    text-center
    leading-snug
  ">
            Preffer to Book a call ?
          </p>
          <a 
            href="https://calendly.com/chariteuwatwembi/30min" 
            className="text-neutral-900 text-lg font-medium underline hover:text-neutral-700 transition"
          >
            Book a call anytime
          </a>
        </motion.div>
      </div>
    </section>
  );
}
  
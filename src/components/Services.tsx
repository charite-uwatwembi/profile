import { motion } from "framer-motion";

const services = [
  {
    title: "Web & App Development",
    frontImage: "/thumbnails/soilsync.png",
    backImage: "/thumbnails/cinetie.png"
  },
  {
    title: "AI & Machine Learning",
    frontImage: "/thumbnails/aisfm.png", 
    backImage: "/thumbnails/thinkgreen.png"
  },
  {
    title: "API Integration & Automation",
    frontImage: "/thumbnails/chat.png",
    backImage: "/thumbnails/soilsync.png"
  },
  {
    title: "Deployment & Maintenance",
    frontImage: "/thumbnails/cinetie.png",
    backImage: "/thumbnails/aisfm.png"
  }
];

const serviceTags = [
  "Product Design",
  "UX Design", 
  "UI Design",
  "Research",
  "Communication",
  "Mobile & Web"
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
            <span className="text-sm font-medium text-neutral-900">Services</span>
          </div>
          <h2 className="serif text-4xl sm:text-4xl font-light text-neutral-800">
            Premium services designed for impact
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="reveal rounded-2xl bg-neutral-200 border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
            >
              {/* Service Images Container */}
              <div className="aspect-[4/2] bg-neutral-200 relative overflow-hidden p-2 group">
                {/* Back Image - comes to front on hover */}
                <div className="absolute top-4 left-4 bottom-4 w-3/5 rounded-lg overflow-hidden z-10 group-hover:z-20 transition-all duration-300 ease-out transform scale-95 -rotate-2 group-hover:scale-100 group-hover:rotate-0">
                  <img 
                    src={service.backImage} 
                    alt={`${service.title} back`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Front Image - goes to back on hover */}
                <div className="absolute top-4 left-4 bottom-4 w-3/5 rounded-lg overflow-hidden z-20 group-hover:z-10 transition-all duration-300 ease-out transform scale-100 rotate-2 group-hover:scale-95 group-hover:rotate-0">
                  <img 
                    src={service.frontImage} 
                    alt={`${service.title} front`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              
              {/* Service Title */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-neutral-900 text-left">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Tags */}
        <motion.div 
          className="reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {serviceTags.map((tag, index) => (
              <motion.span
                key={tag}
                className="px-4 py-2 bg-neutral-100 border border-neutral-200 rounded-full text-sm font-medium text-neutral-700 hover:bg-neutral-200 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.5 + (index * 0.05),
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

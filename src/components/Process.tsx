import { motion } from "framer-motion";
import { Brain, Cpu, Database, Rocket, Zap } from "lucide-react";
import { useEffect, useState } from "react";

// Custom Animated Calendar Component
const AnimatedCalendar = () => {
  const [isPageFalling, setIsPageFalling] = useState(false);
  const [showNewPage, setShowNewPage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPageFalling(true);
      setTimeout(() => {
        setShowNewPage(true);
        setTimeout(() => {
          setIsPageFalling(false);
          setShowNewPage(false);
        }, 1000);
      }, 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Calendar Base */}
      <div className="relative w-9 h-11 bg-white border border-neutral-300 rounded-sm shadow-sm">
        {/* Spiral Binding Rings */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
          <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
          <div className="w-1 h-1 bg-neutral-600 rounded-full"></div>
        </div>
        
        {/* Calendar Grid Lines */}
        <div className="absolute inset-1">
          {/* Horizontal lines */}
          <div className="absolute top-2 left-0 right-0 h-px bg-neutral-200"></div>
          <div className="absolute top-4 left-0 right-0 h-px bg-neutral-200"></div>
          <div className="absolute top-6 left-0 right-0 h-px bg-neutral-200"></div>
          <div className="absolute top-8 left-0 right-0 h-px bg-neutral-200"></div>
          
          {/* Vertical lines */}
          <div className="absolute left-2 top-0 bottom-0 w-px bg-neutral-200"></div>
          <div className="absolute left-4 top-0 bottom-0 w-px bg-neutral-200"></div>
          <div className="absolute left-6 top-0 bottom-0 w-px bg-neutral-200"></div>
        </div>
      </div>
      
      {/* New Page (1st) - Revealed after 31 falls */}
      {showNewPage && (
        <motion.div
          className="absolute w-7 h-8 bg-white border border-neutral-300 rounded-sm flex items-center justify-center shadow-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-xs font-bold text-neutral-800">1st</span>
        </motion.div>
      )}
      
      {/* Falling Page (31) */}
      <motion.div
        className="absolute w-7 h-8 bg-white border border-neutral-300 rounded-sm flex items-center justify-center shadow-sm"
        animate={{
          rotate: isPageFalling ? -45 : 0,
          x: isPageFalling ? -8 : 0,
          y: isPageFalling ? 8 : 0,
          opacity: isPageFalling ? 0 : 1,
        }}
        transition={{ 
          duration: 1,
          ease: "easeInOut"
        }}
      >
        <span className="text-xs font-bold text-neutral-800">31</span>
      </motion.div>
    </div>
  );
};

// Custom Animated Flowchart Component
const AnimatedFlowchart = () => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { icon: Brain, label: "Plan", color: "bg-neutral-200", iconColor: "text-neutral-600" },
    { icon: Database, label: "Data", color: "bg-neutral-100", iconColor: "text-neutral-800" },
    { icon: Cpu, label: "ML", color: "bg-neutral-300", iconColor: "text-neutral-700" },
    { icon: Zap, label: "Deploy", color: "bg-neutral-900", iconColor: "text-white" }
  ];

  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Flowchart Container */}
      <div className="relative w-10 h-10">
        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 40 40">
          {/* Horizontal lines */}
          <motion.line
            x1="8" y1="8" x2="32" y2="8"
            stroke="#d1d5db" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: activeNode >= 1 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.line
            x1="8" y1="32" x2="32" y2="32"
            stroke="#d1d5db" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: activeNode >= 3 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          {/* Vertical lines */}
          <motion.line
            x1="8" y1="8" x2="8" y2="32"
            stroke="#d1d5db" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: activeNode >= 2 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
          <motion.line
            x1="32" y1="8" x2="32" y2="32"
            stroke="#d1d5db" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: activeNode >= 2 ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </svg>

        {/* Nodes */}
        {nodes.map((node, index) => {
          const IconComponent = node.icon;
          const positions = [
            { x: 4, y: 4 },   // Top-left
            { x: 28, y: 4 },  // Top-right
            { x: 4, y: 28 },  // Bottom-left
            { x: 28, y: 28 }  // Bottom-right
          ];
          
          return (
            <motion.div
              key={index}
              className={`absolute w-6 h-6 rounded-full ${node.color} flex items-center justify-center shadow-sm`}
              style={{
                left: positions[index].x - 12,
                top: positions[index].y - 12
              }}
              animate={{
                scale: activeNode === index ? 1.2 : 1,
                boxShadow: activeNode === index 
                  ? "0 0 0 2px rgba(255,255,255,0.8), 0 0 8px rgba(0,0,0,0.3)" 
                  : "0 1px 3px rgba(0,0,0,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <IconComponent className={`w-3 h-3 ${node.iconColor}`} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Custom Animated Layered Windows Component
const AnimatedLayeredWindows = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Add initial delay before starting animation
      setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 1200);
      }, 1000); // 1 second delay before animation starts
    }, 4000); // Increased total cycle to 4 seconds

    return () => clearInterval(interval);
  }, []);

  const cards = [
    { delay: 0, z: 0, rotate: -4, bg: "bg-neutral-200" },
    { delay: 0.2, z: 1, rotate: 3, bg: "bg-neutral-300" },
    { delay: 0.4, z: 2, rotate: 0, bg: "bg-neutral-900 text-white" },
  ];

  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {cards.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ 
            opacity: isAnimating ? 1 : 0, 
            y: isAnimating ? 0 : 18, 
            scale: isAnimating ? 1 : 0.92 
          }}
          transition={{ duration: 0.4, delay: isAnimating ? c.delay : 0 }}
          className={`absolute inset-0 rounded-md shadow-md overflow-hidden ${c.bg}`}
          style={{ zIndex: c.z, transform: `rotate(${c.rotate}deg)` }}
        >
          {/* window chrome dots */}
          <div className="absolute left-1 top-1 flex gap-0.5">
            <div className="h-1 w-1 rounded-full bg-white/40" />
            <div className="h-1 w-1 rounded-full bg-white/30" />
            <div className="h-1 w-1 rounded-full bg-white/20" />
          </div>
          {i === 2 ? (
            <div className="flex h-full items-center justify-center">
              <span className="text-xs font-mono">&lt;/&gt;</span>
            </div>
          ) : (
            <>
              <div className="absolute left-2 top-4 h-1 w-6 rounded bg-black/20" />
              <div className="absolute left-2 top-6 h-1 w-4 rounded bg-black/10" />
            </>
          )}
        </motion.div>
      ))}
    </div>
  );
};

// Custom Animated Rocket Component
const AnimatedRocket = () => {
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsLaunching(true);
      setTimeout(() => {
        setIsLaunching(false);
      }, 1500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-12 h-12 flex items-center justify-center">
      {/* Rocket */}
      <motion.div
        className="relative"
        animate={{
          y: isLaunching ? -8 : 0,
          rotate: isLaunching ? -5 : 0,
        }}
        transition={{ 
          duration: 1.5,
          ease: "easeOut"
        }}
      >
        <Rocket className="w-6 h-6 text-neutral-700" />
        
        {/* Exhaust Flames */}
        {isLaunching && (
          <motion.div
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-2 h-3 bg-gradient-to-t from-orange-500 to-red-500 rounded-full"></div>
          </motion.div>
        )}
      </motion.div>
      
      {/* Launch Trail */}
      {isLaunching && (
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 0.6, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-1 h-4 bg-gradient-to-t from-neutral-400 to-transparent"></div>
        </motion.div>
      )}
    </div>
  );
};

const steps = [
  {
    id: "step1",
    title: "Let's Get In Touch",
    description: "Start by reaching out with your project idea or challenge. We'll discuss your goals, the problem you're solving, and the best approach — whether it's a web app, API, or a machine learning model.",
    icon: "animated-calendar",
    pageNumber: "001"
  },
  {
    id: "step2", 
    title: "Define & Design the Solution",
    description: "Together we'll translate your requirements into a clear technical plan. This may include system architecture, data collection/cleaning strategy, and model selection or software stack decisions.",
    icon: "animated-flowchart",
    pageNumber: "002"
  },
  {
    id: "step3",
    title: "Build & Train", 
    description: "I'll develop the solution: writing clean, scalable software, and where needed, training and evaluating machine learning models. You'll get regular updates and demos so we can refine along the way.",
    icon: "animated-windows",
    pageNumber: "003"
  },
  {
    id: "step4",
    title: "Deploy & Support",
    description: "Finally, I'll deploy your application or ML system into production — ensuring it's optimized, tested, and ready for real users. I also provide documentation and ongoing support for long-term success.",
    icon: "animated-rocket",
    pageNumber: "004"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 reveal">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
            <span className="text-sm font-medium text-neutral-900">Process</span>
          </div>
          <h2 className="serif text-4xl sm:text-4xl font-light text-neutral-800">
            The strategy behind exceptional results
          </h2>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-neutral-300"></div>
          
          <div className="space-y-8">
            {steps.map((step, index) => {
              return (
                <motion.div
                  key={step.id}
                  className="relative reveal"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: "easeOut" 
                  }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Circle */}
                  <div className="absolute left-4 top-6 w-4 h-4 bg-neutral-900 rounded-full border-4 border-white shadow-sm z-10"></div>
                  
                  {/* Step Card */}
                  <div className="ml-16 rounded-2xl bg-neutral-100 border border-neutral-200 p-8 hover:border-neutral-300 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="text-xs text-neutral-400 font-medium mb-2">
                          {step.id}
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="text-xs text-neutral-400 font-medium">
                        - {step.pageNumber}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="mt-6">
                      {step.icon === "animated-calendar" ? (
                        <AnimatedCalendar />
                      ) : step.icon === "animated-flowchart" ? (
                        <AnimatedFlowchart />
                      ) : step.icon === "animated-windows" ? (
                        <AnimatedLayeredWindows />
                      ) : step.icon === "animated-rocket" ? (
                        <AnimatedRocket />
                      ) : (
                        <div className="w-12 h-12 rounded-lg bg-neutral-200 flex items-center justify-center">
                          <div className="w-6 h-6 text-neutral-700">?</div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

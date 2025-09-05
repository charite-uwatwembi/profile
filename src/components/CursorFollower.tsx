// src/components/CursorFollower.tsx
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // smooth spring so it lags a bit like Framer sites
  const sx = useSpring(x, { stiffness: 320, damping: 28, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 320, damping: 28, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 11); // center the 22px dot
      y.set(e.clientY - 11);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="cursor-dot"
      style={{ translateX: sx, translateY: sy }}
    />
  );
}

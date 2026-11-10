import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { useMotionPreferences } from "../hooks/motionPreferences";

export default function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { paused } = useMotionPreferences();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(y, { stiffness: 180, damping: 22 });
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(0);
  const sheen = useMotionTemplate`radial-gradient(480px circle at ${lightX}% ${lightY}%, rgba(255,255,255,.55), transparent 65%)`;

  function move(event: PointerEvent<HTMLElement>) {
    if (paused || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    x.set((0.5 - py) * 8);
    y.set((px - 0.5) * 10);
    lightX.set(px * 100);
    lightY.set(py * 100);
  }

  return (
    <motion.article
      className={`tilt-card ${className}`}
      onPointerMove={move}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX: paused ? 0 : rotateX,
        rotateY: paused ? 0 : rotateY,
        transformPerspective: 1000,
      }}
      whileHover={paused ? undefined : { y: -5 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      {children}
      <motion.div
        className="card-sheen"
        style={{ background: sheen }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

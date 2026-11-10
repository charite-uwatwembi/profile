import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useMotionPreferences } from "../hooks/motionPreferences";

export default function CursorFollower() {
  const { paused } = useMotionPreferences();
  const [visible, setVisible] = useState(false);
  const [projectHover, setProjectHover] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const labelLeft = useMotionValue(18);
  const labelTop = useMotionValue(14);
  const sx = useSpring(x, { stiffness: 550, damping: 35, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 550, damping: 35, mass: 0.4 });

  useEffect(() => {
    if (
      paused ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    )
      return;

    function updateHover(target: EventTarget | null) {
      const element = target instanceof Element ? target : null;
      setProjectHover(
        !!element?.closest(".project-open") &&
          !document.querySelector("dialog[open]"),
      );
    }
    function move(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      x.set(event.clientX);
      y.set(event.clientY);
      labelLeft.set(event.clientX > window.innerWidth - 175 ? -158 : 18);
      labelTop.set(event.clientY > window.innerHeight - 65 ? -48 : 14);
      setVisible(true);
      updateHover(event.target);
    }
    function scroll() {
      updateHover(document.elementFromPoint(x.get(), y.get()));
    }
    function hide() {
      setVisible(false);
      setProjectHover(false);
    }
    function leave(event: PointerEvent) {
      if (!event.relatedTarget) hide();
    }
    function press() {
      setProjectHover(false);
    }
    window.addEventListener("pointermove", move);
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("blur", hide);
    window.addEventListener("pointerdown", press);
    document.addEventListener("pointerout", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("blur", hide);
      window.removeEventListener("pointerdown", press);
      document.removeEventListener("pointerout", leave);
    };
  }, [paused, x, y, labelLeft, labelTop]);

  if (paused) return null;
  return (
    <motion.div
      className="cursor-follower"
      data-project-hover={projectHover}
      aria-hidden="true"
      style={{ x: sx, y: sy }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <span className="cursor-dot" />
      <motion.span
        className="cursor-project-label"
        style={{ left: labelLeft, top: labelTop }}
        initial={false}
        animate={{
          opacity: projectHover ? 1 : 0,
          scale: projectHover ? 1 : 0.85,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 26 }}
      >
        View project <ArrowUpRight size={16} aria-hidden="true" />
      </motion.span>
    </motion.div>
  );
}

import { Pause, Play } from "lucide-react";
import { useMotionPreferences } from "../hooks/motionPreferences";
export default function MotionControl() {
  const { paused, toggle } = useMotionPreferences();
  return (
    <button
      type="button"
      className="motion-control"
      onClick={toggle}
      aria-label={paused ? "Enable animations" : "Pause animations"}
      aria-pressed={paused}
    >
      {paused ? (
        <Play size={14} aria-hidden="true" />
      ) : (
        <Pause size={14} aria-hidden="true" />
      )}
    </button>
  );
}

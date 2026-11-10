import { createContext, useContext } from "react";

export const MotionPreferences = createContext({
  paused: false,
  toggle: () => {},
});
export const useMotionPreferences = () => useContext(MotionPreferences);

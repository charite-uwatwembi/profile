// // src/components/BeadRibbon.tsx
// import { motion } from "framer-motion";
// import { useMemo } from "react";

// /** Tunables */
// const CFG = {
//   baseX: 700,          // push rope right (try 700–760 until perfect at your screen width)
//   height: 1200,
//   rCore: 82,
//   rShell: 118,
//   turns: 22,
//   coreCount: 380,
//   shellCount: 300,
//   innerCount: 240,
//   microCount: 200,
// };

// type Bead = { x: number; y: number; r: number; blur?: boolean };

// function genBeads() {
//   const out = { core: [] as Bead[], core2: [] as Bead[], shell: [] as Bead[], inner: [] as Bead[], micro: [] as Bead[] };

//   for (let i = 0; i < CFG.coreCount; i++) {
//     const t = i / CFG.coreCount;
//     const a = t * Math.PI * CFG.turns;
//     const y = 120 + t * (CFG.height - 240) + Math.sin(a * 0.6) * 10;
//     out.core.push({ x: CFG.baseX + Math.cos(a) * CFG.rCore, y, r: 7.4 + Math.sin(a * 1.1) * 0.8, blur: i % 6 === 0 });
//     out.core2.push({ x: CFG.baseX + Math.cos(a + Math.PI) * CFG.rCore, y: y + Math.sin(a + Math.PI) * 8, r: 7.0 + Math.cos(a * 1.05) * 0.7, blur: i % 7 === 0 });
//   }
//   for (let i = 0; i < CFG.shellCount; i++) {
//     const t = i / CFG.shellCount;
//     const a = t * Math.PI * (CFG.turns - 4);
//     const y = 100 + t * (CFG.height - 200) + Math.sin(a * 0.9) * 8;
//     out.shell.push({ x: CFG.baseX + Math.cos(a * 1.02) * (CFG.rShell + Math.sin(t * Math.PI * 4) * 10), y, r: 5.2, blur: i % 5 === 0 });
//   }
//   for (let i = 0; i < CFG.innerCount; i++) {
//     const t = i / CFG.innerCount;
//     const a = t * Math.PI * (CFG.turns + 4);
//     const y = 140 + t * (CFG.height - 280) + Math.cos(a) * 5;
//     out.inner.push({ x: CFG.baseX + Math.cos(a) * (CFG.rCore - 20 + Math.sin(t * Math.PI * 6) * 6), y, r: 3.6 });
//   }
//   for (let i = 0; i < CFG.microCount; i++) {
//     const t = i / CFG.microCount;
//     const a = t * Math.PI * (CFG.turns + 10);
//     const y = 160 + t * (CFG.height - 320) + Math.sin(a * 1.4) * 4;
//     out.micro.push({ x: CFG.baseX + Math.cos(a) * (CFG.rCore - 32 + Math.sin(t * Math.PI * 10) * 5), y, r: 2.6 });
//   }
//   return out;
// }

// export default function BeadRibbon() {
//   const beads = useMemo(genBeads, []);
//   const pivotX = CFG.baseX;
//   const pivotY = CFG.height / 2;

//   return (
//     <div className="absolute inset-y-0 right-0 w-[66vw] min-w-[760px] z-0 pointer-events-none">
//       <svg viewBox="0 0 900 1200" className="w-full h-full">
//         <defs>
//           <radialGradient id="bead" cx="50%" cy="40%" r="60%">
//             <stop offset="0%" stopColor="#ffffff" />
//             <stop offset="55%" stopColor="#f7f8fa" />
//             <stop offset="100%" stopColor="#e9ecef" />
//           </radialGradient>
//           <filter id="soft" x="-40%" y="-40%" width="180%" height="180%">
//             <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.12" />
//           </filter>
//           <filter id="blurSoft" x="-40%" y="-40%" width="180%" height="180%">
//             <feGaussianBlur stdDeviation="1.2" />
//           </filter>

//           {/* vertical fade */}
//           <linearGradient id="vfade" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="white" stopOpacity="0" />
//             <stop offset="10%" stopColor="white" stopOpacity="1" />
//             <stop offset="90%" stopColor="white" stopOpacity="1" />
//             <stop offset="100%" stopColor="white" stopOpacity="0" />
//           </linearGradient>
//           <mask id="maskV">
//             <rect x="0" y="0" width="900" height="1200" fill="url(#vfade)" />
//           </mask>

//           {/* LEFT fade so beads don't cross the headline */}
//           <linearGradient id="lfade" x1="0" y1="0" x2="1" y2="0">
//             <stop offset="0%"   stopColor="white" stopOpacity="0" />
//             <stop offset="35%"  stopColor="white" stopOpacity="0" />
//             <stop offset="48%"  stopColor="white" stopOpacity="0.5" />
//             <stop offset="60%"  stopColor="white" stopOpacity="1" />
//             <stop offset="100%" stopColor="white" stopOpacity="1" />
//           </linearGradient>
//           <mask id="maskL">
//             <rect x="0" y="0" width="900" height="1200" fill="url(#lfade)" />
//           </mask>
//         </defs>

//         {/* Apply LEFT mask, then VERTICAL mask, then rotate group */}
//         <g mask="url(#maskL)">
//           <motion.g
//             mask="url(#maskV)"
//             transformBox="view-box"
//             style={{ transformOrigin: `${pivotX}px ${pivotY}px` }}
//             animate={{ rotate: 360, y: [0, -10, 0] }}
//             transition={{
//               rotate: { repeat: Infinity, ease: "linear", duration: 46 },
//               y: { repeat: Infinity, ease: "easeInOut", duration: 6 },
//             }}
//           >
//             {/* ghost bg for volume */}
//             <g opacity={0.35} filter="url(#blurSoft)">
//               {beads.shell.map((b, i) => (
//                 <circle key={`bg-${i}`} cx={b.x + 10} cy={b.y} r={b.r + 2} fill="url(#bead)" />
//               ))}
//             </g>
//             {/* shell */}
//             <g opacity={0.9}>
//               {beads.shell.map((b, i) => (
//                 <circle key={`sh-${i}`} cx={b.x} cy={b.y} r={b.r} fill="url(#bead)" filter={b.blur ? "url(#soft)" : undefined} />
//               ))}
//             </g>
//             {/* core strands */}
//             <g>
//               {beads.core.map((b, i) => (
//                 <circle key={`c1-${i}`} cx={b.x} cy={b.y} r={b.r} fill="url(#bead)" filter={b.blur ? "url(#soft)" : undefined} />
//               ))}
//               {beads.core2.map((b, i) => (
//                 <circle key={`c2-${i}`} cx={b.x} cy={b.y} r={b.r} fill="url(#bead)" filter={b.blur ? "url(#soft)" : undefined} />
//               ))}
//             </g>
//             {/* inner sparkle */}
//             <g opacity={0.9}>
//               {beads.inner.map((b, i) => <circle key={`in-${i}`} cx={b.x} cy={b.y} r={b.r} fill="url(#bead)" />)}
//             </g>
//             <g opacity={0.85}>
//               {beads.micro.map((b, i) => <circle key={`mi-${i}`} cx={b.x} cy={b.y} r={b.r} fill="url(#bead)" />)}
//             </g>
//           </motion.g>
//         </g>
//       </svg>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiHtml5, SiCss } from "react-icons/si";

// Floating animation configuration for the icons
const floatAnimation = (delay) => ({
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

const Photo = () => {
  return (
    <div className="relative w-[300px] h-[300px] xl:w-[440px] xl:h-[440px] mx-auto flex items-center justify-center">

      {/* Central Circular Image */}
      <div className="w-[260px] h-[260px] xl:w-[380px] xl:h-[380px] rounded-full overflow-hidden bg-white/5 border border-white/10 z-10 shadow-2xl">
        <img
          src="/profile2.png"
          alt="profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Icon 1: React (Top Right) */}
      <motion.div
        {...floatAnimation(0)}
        className="absolute -top-2 right-8 xl:top-2 xl:right-12 w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-[#1c1c24]/80 border border-accent/30 text-accent flex items-center justify-center text-xl xl:text-3xl shadow-[0_0_20px_rgba(0,255,255,0.15)] backdrop-blur-sm z-20"
      >
        <FaReact className="animate-spin-slow" />
      </motion.div>

      {/* Icon 2: Next.js (Top Left) */}
      <motion.div
        {...floatAnimation(0.5)}
        className="absolute top-0 left-6 xl:top-6 xl:left-10 w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-[#1c1c24]/80 border border-white/20 text-white flex items-center justify-center text-xl xl:text-3xl shadow-lg backdrop-blur-sm z-20"
      >
        <SiNextdotjs />
      </motion.div>

      {/* Icon 3: JavaScript (Middle Left) */}
      <motion.div
        {...floatAnimation(1)}
        className="absolute top-[45%] -left-6 xl:-left-8 w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-[#1c1c24]/80 border border-yellow-500/30 text-yellow-500 flex items-center justify-center text-xl xl:text-3xl shadow-lg backdrop-blur-sm z-20"
      >
        <SiJavascript />
      </motion.div>

      {/* Icon 4: Node.js (Middle Right) */}
      <motion.div
        {...floatAnimation(1.5)}
        className="absolute top-[45%] -right-6 xl:-right-8 w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-[#1c1c24]/80 border border-green-500/30 text-green-500 flex items-center justify-center text-xl xl:text-3xl shadow-lg backdrop-blur-sm z-20"
      >
        <FaNodeJs />
      </motion.div>

      {/* Icon 5: HTML5 (Bottom Left) */}
      <motion.div
        {...floatAnimation(2)}
        className="absolute bottom-0 left-6 xl:bottom-6 xl:left-10 w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-[#1c1c24]/80 border border-orange-500/30 text-orange-500 flex items-center justify-center text-xl xl:text-3xl shadow-lg backdrop-blur-sm z-20"
      >
        <SiHtml5 />
      </motion.div>

      {/* Icon 6: CSS3 (Bottom Right) */}
      <motion.div
        {...floatAnimation(2.5)}
        className="absolute -bottom-2 right-8 xl:bottom-2 xl:right-12 w-12 h-12 xl:w-16 xl:h-16 rounded-full bg-[#1c1c24]/80 border border-blue-500/30 text-blue-500 flex items-center justify-center text-xl xl:text-3xl shadow-lg backdrop-blur-sm z-20"
      >
        <SiCss />
      </motion.div>

    </div>
  );
};

export default Photo;
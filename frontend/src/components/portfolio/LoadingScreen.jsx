import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE } from "@/lib/portfolio-data";

const DURATION = 2700; // ms
const WORD_INTERVAL = 900; // ms

export const LoadingScreen = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      setCount(Math.round(t * 100));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => onComplete?.(), 400);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  useEffect(() => {
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % PROFILE.loadingWords.length),
      WORD_INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] } }}
    >
      {/* Top-left label */}
      <motion.div
        className="absolute top-6 left-6 md:top-10 md:left-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <span className="text-xs text-muted uppercase tracking-[0.3em]">
          {PROFILE.eyebrow}
        </span>
      </motion.div>

      {/* Top-right miny labs link */}
      <motion.div
        className="absolute top-6 right-6 md:top-10 md:right-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <span className="text-xs text-muted uppercase tracking-[0.3em]">
          {PROFILE.company} — {PROFILE.shortLocation}
        </span>
      </motion.div>

      {/* Center rotating word */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/85 leading-none"
          >
            {PROFILE.loadingWords[wordIndex]}.
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom-right counter */}
      <div className="absolute bottom-10 right-6 md:bottom-14 md:right-10">
        <span className="block text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none">
          {String(count).padStart(3, "0")}
        </span>
      </div>

      {/* Bottom-left name */}
      <div className="absolute bottom-10 left-6 md:bottom-14 md:left-10 max-w-xs">
        <p className="text-xs text-muted uppercase tracking-[0.3em] mb-2">Loading</p>
        <p className="text-sm md:text-base text-text-primary/80 font-display italic">
          {PROFILE.name}
        </p>
      </div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-stroke/50">
        <div
          className="h-full origin-left accent-gradient"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
            transition: "transform 90ms linear",
          }}
        />
      </div>
    </motion.div>
  );
};

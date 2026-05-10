import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { STATS, ACHIEVEMENTS } from "@/lib/portfolio-data";

export const Stats = () => {
  return (
    <section
      id="stats"
      className="bg-bg py-16 md:py-24 border-t border-stroke"
      data-testid="stats-section"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">
            By the numbers
          </span>
        </motion.div>

        {/* Big stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-20">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              data-testid={`stat-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative group rounded-3xl border border-stroke bg-surface/40 p-7 md:p-9 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div
                  className="absolute -inset-1 blur-2xl"
                  style={{
                    background:
                      "radial-gradient(60% 60% at 30% 30%, rgba(137,170,204,0.18), transparent 70%)",
                  }}
                />
              </div>
              <div className="relative">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                  {String(i + 1).padStart(2, "0")} —
                </span>
                <p className="mt-4 text-6xl md:text-7xl font-display italic text-text-primary leading-none">
                  {s.value}
                </p>
                <p className="mt-5 text-base md:text-lg text-text-primary/90">
                  {s.label}
                </p>
                <p className="mt-1.5 text-xs md:text-sm text-muted leading-relaxed">
                  {s.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mb-8 flex items-center gap-4"
        >
          <Trophy className="w-4 h-4 text-text-primary/85" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">
            Hackathon &amp; research wins
          </span>
        </motion.div>

        <div className="divide-y divide-stroke border-y border-stroke">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.name + a.year}
              data-testid={`achievement-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="grid grid-cols-12 gap-3 md:gap-6 py-4 md:py-5 hover:bg-surface/30 -mx-3 md:-mx-5 px-3 md:px-5 rounded-2xl transition-colors"
            >
              <div className="col-span-3 md:col-span-2 text-xs md:text-sm text-muted font-mono tabular-nums">
                {a.year}
              </div>
              <div className="col-span-6 md:col-span-5">
                <p className="text-sm md:text-base text-text-primary truncate">
                  {a.name}
                </p>
                <p className="text-xs text-muted truncate mt-0.5">{a.note}</p>
              </div>
              <div className="col-span-3 md:col-span-3 text-xs md:text-sm text-text-primary/85 font-display italic text-right md:text-left">
                {a.placement}
              </div>
              <div className="hidden md:block md:col-span-2 text-xs md:text-sm text-text-primary/70 font-mono tabular-nums text-right">
                {a.prize}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

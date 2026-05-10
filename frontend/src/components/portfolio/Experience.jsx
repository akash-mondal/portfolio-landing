import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/portfolio-data";

export const Experience = () => {
  return (
    <section id="resume" className="bg-bg py-16 md:py-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.05] text-text-primary">
            A short <span className="italic">history</span> of shipping.
          </h2>
        </motion.div>

        <div className="divide-y divide-stroke border-t border-stroke">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.role + e.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.06,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 py-6 md:py-8 hover:bg-surface/30 -mx-4 md:-mx-6 px-4 md:px-6 rounded-2xl transition-colors"
            >
              <div className="md:col-span-2 text-xs text-muted uppercase tracking-[0.2em] pt-1">
                {e.period}
              </div>
              <div className="md:col-span-4">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg md:text-xl text-text-primary">
                    {e.role}
                  </h3>
                  {e.accent && (
                    <span className="text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-full accent-gradient">
                      <span className="text-bg">Now</span>
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted mt-1">
                  <span className="font-display italic text-text-primary/90">
                    {e.company}
                  </span>{" "}
                  — {e.place}
                </p>
              </div>
              <p className="md:col-span-6 text-sm md:text-base text-text-primary/80 leading-relaxed text-pretty">
                {e.summary}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

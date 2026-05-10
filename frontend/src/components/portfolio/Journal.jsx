import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { JOURNAL } from "@/lib/portfolio-data";

export const Journal = () => {
  return (
    <section
      id="journal"
      className="bg-bg py-16 md:py-24 border-t border-stroke"
      data-testid="journal-section"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-14"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Journal
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.05] text-text-primary mb-3">
              Notes &amp; <span className="italic">publications</span>
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Long-form essays, research notes, and a couple of papers along
              the way.
            </p>
          </div>
        </motion.div>

        {/* Pill cards */}
        <div className="flex flex-col gap-4 md:gap-5">
          {JOURNAL.map((j, idx) => (
            <motion.a
              key={j.title}
              href="#"
              data-testid={`journal-card-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.07,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative flex items-center gap-4 md:gap-6 rounded-2xl md:rounded-full border border-stroke bg-surface/40 hover:bg-surface/70 transition-colors duration-500 p-3 md:p-3 pr-5 md:pr-6"
            >
              {/* Thumbnail */}
              <div className="relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-full overflow-hidden border border-stroke">
                <img
                  src={j.image}
                  alt={j.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bg/30 mix-blend-multiply" />
              </div>

              {/* Meta */}
              <div className="flex flex-col md:flex-row md:items-center md:gap-5 flex-1 min-w-0">
                <span className="hidden md:inline-flex shrink-0 text-[10px] uppercase tracking-[0.25em] text-muted bg-stroke/40 border border-stroke rounded-full px-2.5 py-1">
                  {j.type}
                </span>
                <h3 className="text-base md:text-lg lg:text-xl text-text-primary truncate font-medium">
                  {j.title}
                </h3>
              </div>

              {/* Right meta */}
              <div className="hidden sm:flex shrink-0 items-center gap-4 md:gap-6 text-xs text-muted">
                <span className="font-mono tabular-nums">{j.year}</span>
                <span className="hidden md:inline w-px h-3 bg-stroke" />
                <span className="hidden md:inline">{j.readTime}</span>
              </div>

              {/* Arrow */}
              <span className="shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full border border-stroke flex items-center justify-center text-text-primary/80 transition-all duration-300 group-hover:bg-text-primary group-hover:text-bg group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

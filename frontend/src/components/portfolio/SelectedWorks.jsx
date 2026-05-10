import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const aspectMap = {
  "md:col-span-7": "aspect-[16/10]",
  "md:col-span-5": "aspect-[5/6] md:aspect-[4/5]",
};

export const SelectedWorks = () => {
  return (
    <section id="work" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 md:mb-14"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.05] text-text-primary mb-4">
              Featured <span className="italic">protocols</span>
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              Six production protocols across twelve chains. A selection of the
              ones that ship.
            </p>
          </div>

          <a
            href="https://github.com/akash-mondal"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 group relative rounded-full text-sm text-text-primary px-5 py-2.5 border border-stroke transition-all duration-300"
          >
            <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-border-animated" />
            <span className="relative inline-flex items-center gap-2">
              View all work
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </a>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((p, idx) => (
            <motion.a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: idx * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={cn(
                "group relative overflow-hidden rounded-3xl border border-stroke bg-surface block",
                p.span,
                aspectMap[p.span] || "aspect-[4/3]"
              )}
            >
              {/* Background image */}
              <div className="absolute inset-0">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                {/* Halftone */}
                <div className="absolute inset-0 halftone opacity-25 mix-blend-multiply" />
                {/* Soft vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
              </div>

              {/* Default label (year + tags) */}
              <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-full glass border border-white/10 text-text-primary/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-text-primary/70">
                  {p.year}
                </span>
              </div>

              {/* Always-visible title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-display italic text-text-primary leading-tight mb-1.5">
                  {p.title}
                </h3>
                <p className="text-xs md:text-sm text-text-primary/75 max-w-md">
                  {p.subtitle}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bg/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                <div className="max-w-md text-center">
                  <p className="text-sm md:text-base text-text-primary/90 leading-relaxed mb-6 text-pretty">
                    {p.description}
                  </p>
                  <span className="inline-flex items-center gap-2 relative rounded-full px-5 py-2 bg-text-primary text-bg text-sm font-medium">
                    <span className="absolute -inset-[2px] rounded-full gradient-border-animated" />
                    <span className="relative inline-flex items-center gap-2">
                      View — <span className="font-display italic">{p.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

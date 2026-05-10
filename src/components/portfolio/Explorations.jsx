import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPLORATIONS } from "@/lib/portfolio-data";

gsap.registerPlugin(ScrollTrigger);

export const Explorations = () => {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".exploration-card");
      // Per-card subtle parallax + lift on scroll
      items.forEach((card, i) => {
        const direction = i % 2 === 0 ? -1 : 1;
        gsap.fromTo(
          card,
          {
            yPercent: 12 * direction,
            opacity: 0.6,
          },
          {
            yPercent: -12 * direction,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="explorations"
      className="relative bg-bg py-16 md:py-24 border-t border-stroke overflow-hidden"
      data-testid="explorations-section"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16"
        >
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-5">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                Explorations
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.05] text-text-primary mb-3">
              Visual <span className="italic">field notes</span>.
            </h2>
            <p className="text-sm md:text-base text-muted leading-relaxed">
              A drift through references, builder mode, and ambient research —
              shaped by what we ship.
            </p>
          </div>
          <span className="hidden md:inline-flex text-[10px] uppercase tracking-[0.25em] text-muted">
            scroll · drift · scroll
          </span>
        </motion.div>

        <div
          ref={trackRef}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {EXPLORATIONS.map((e, i) => (
            <motion.figure
              key={e.src + i}
              data-testid={`exploration-${i}`}
              className="exploration-card relative rounded-2xl overflow-hidden border border-stroke bg-surface aspect-[4/5]"
              style={{ transform: `rotate(${e.rotate}deg)` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.9,
                delay: (i % 3) * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <img
                src={e.src}
                alt={e.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/85 via-bg/10 to-transparent" />
              <div
                className="absolute inset-0 mix-blend-multiply opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />
              <figcaption className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-text-primary/85">
                <span className="truncate font-display italic text-sm md:text-base text-text-primary">
                  {e.title}
                </span>
                <span className="font-mono tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

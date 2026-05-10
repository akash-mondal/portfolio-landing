import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Mail } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";

export const About = () => {
  return (
    <section className="relative bg-bg py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">
            About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="relative rounded-3xl overflow-hidden border border-stroke bg-surface aspect-[4/5]">
              <img
                src={PROFILE.profileImage}
                alt={PROFILE.name}
                className="w-full h-full object-cover grayscale contrast-[1.2] brightness-[0.95]"
              />
              {/* Halftone dot pattern (the "101010" look) */}
              <div
                className="absolute inset-0 mix-blend-multiply opacity-70 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1.4px)",
                  backgroundSize: "5px 5px",
                }}
              />
              <div
                className="absolute inset-0 mix-blend-screen opacity-50 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.9) 0.6px, transparent 1px)",
                  backgroundSize: "5px 5px",
                  backgroundPosition: "2.5px 2.5px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating tags */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-full glass border border-white/10 px-3 py-1.5">
                  <MapPin className="w-3 h-3 text-text-primary/80" />
                  <span className="text-xs text-text-primary/90">
                    {PROFILE.shortLocation}
                  </span>
                </div>
                <a
                  href={PROFILE.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full glass border border-white/10 px-3 py-1.5 hover:bg-stroke/40 transition-colors"
                >
                  <img
                    src={PROFILE.minyLabsLogo}
                    alt="Miny Labs"
                    className="w-3.5 h-3.5"
                  />
                  <span className="text-xs text-text-primary/90">{PROFILE.company}</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic leading-[1.05] text-text-primary mb-8 text-balance">
              I build things at the{" "}
              <span className="accent-gradient-text">edge of crypto and AI.</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg text-text-primary/85 leading-relaxed text-pretty">
              <p>
                Currently {PROFILE.title.toLowerCase()} at{" "}
                <a
                  href={PROFILE.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-text-primary border-b border-stroke hover:border-text-primary transition-colors"
                >
                  Miny Labs
                </a>
                — a research-driven lab shipping primitives where cryptography meets autonomy. We architect on-chain agent systems with real cryptographic guarantees: x402 micropayments, ERC-8004 trust registries, BITE v2 encrypted execution, ZK identity on Midnight.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 text-sm text-text-primary border-b border-stroke hover:border-text-primary pb-0.5 transition-colors"
              >
                <Mail className="w-4 h-4" />
                {PROFILE.email}
              </a>
              <span className="text-muted">·</span>
              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm text-text-primary border-b border-stroke hover:border-text-primary pb-0.5 transition-colors"
              >
                Read full resume
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

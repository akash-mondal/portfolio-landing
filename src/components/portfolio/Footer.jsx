import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";

const MARQUEE_TEXT = [
  "Available for select work",
  "Crypto × AI primitives",
  "Encrypted agent runtimes",
  "On-chain identity",
  "Shipping fast",
  "Bengaluru / Remote",
];

export const Footer = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    const el = marqueeRef.current;
    const tween = gsap.to(el, {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1,
    });
    return () => tween.kill();
  }, []);

  return (
    <footer
      id="contact"
      className="relative bg-bg border-t border-stroke overflow-hidden"
      data-testid="footer-section"
    >
      {/* Marquee */}
      <div className="relative py-10 md:py-14 border-b border-stroke overflow-hidden">
        <div
          ref={marqueeRef}
          className="marquee-track gap-12 md:gap-20 will-change-transform"
        >
          {/* Render the strip twice for seamless looping */}
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20"
            >
              {MARQUEE_TEXT.map((t, i) => (
                <span
                  key={`${dup}-${i}`}
                  className="inline-flex items-center gap-12 md:gap-20 text-5xl md:text-7xl lg:text-8xl font-display italic text-text-primary/90 whitespace-nowrap"
                >
                  {t}
                  <span
                    aria-hidden
                    className="inline-block w-3 h-3 rounded-full accent-gradient"
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Big CTA */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-8"
          >
            <span className="text-xs text-muted uppercase tracking-[0.3em]">
              Let’s build something
            </span>
            <h2 className="mt-5 text-5xl md:text-7xl lg:text-[7.5rem] font-display italic leading-[0.95] text-text-primary text-balance">
              Got a hard <br className="hidden md:block" />
              problem? <span className="accent-gradient-text">Talk to me.</span>
            </h2>

            <a
              href={`mailto:${PROFILE.email}`}
              data-testid="footer-email-cta"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-text-primary text-bg px-7 py-4 text-sm md:text-base font-medium transition-transform duration-300 hover:scale-[1.03]"
            >
              <span className="inline-flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse-soft" />
              {PROFILE.email}
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="lg:col-span-4 flex flex-col gap-6 md:gap-8 lg:items-end"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted">
                Currently
              </span>
              <span className="text-sm text-text-primary/90">
                {PROFILE.title} ·{" "}
                <span className="font-display italic">{PROFILE.company}</span>
              </span>
              <span className="text-xs text-muted">
                Based in {PROFILE.location}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {[
                { Icon: Github, href: PROFILE.github, label: "GitHub" },
                { Icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
                { Icon: Twitter, href: PROFILE.twitter, label: "Twitter" },
                { Icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className="group w-10 h-10 rounded-full border border-stroke flex items-center justify-center text-text-primary/85 transition-colors hover:bg-text-primary hover:text-bg hover:border-text-primary"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stroke">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-muted">
          <span className="font-mono">
            © {new Date().getFullYear()} {PROFILE.name} — Built in Bengaluru.
          </span>
          <span className="font-mono uppercase tracking-[0.25em]">
            v 2026.01 · Always shipping
          </span>
        </div>
      </div>
    </footer>
  );
};

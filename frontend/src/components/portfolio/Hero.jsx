import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { PROFILE, HLS_VIDEO } from "@/lib/portfolio-data";

export const Hero = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // HLS background video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    let hls;
    if (Hls.isSupported()) {
      hls = new Hls({ lowLatencyMode: true, capLevelToPlayerSize: true });
      hls.loadSource(HLS_VIDEO);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HLS_VIDEO;
    }
    const tryPlay = () => video.play().catch(() => {});
    video.addEventListener("loadeddata", tryPlay);
    return () => {
      video.removeEventListener("loadeddata", tryPlay);
      if (hls) hls.destroy();
    };
  }, []);

  // Role rotation
  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % PROFILE.roles.length),
      2000
    );
    return () => clearInterval(id);
  }, []);

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".name-reveal", {
        opacity: 0,
        y: 50,
        duration: 1.2,
        delay: 0.1,
      }).from(
        ".blur-in",
        {
          opacity: 0,
          filter: "blur(10px)",
          y: 20,
          duration: 1,
          stagger: 0.1,
        },
        "-=0.9"
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-bg"
    >
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-90"
        />
        {/* Subtle dot grid for tech feel */}
        <div
          className="absolute inset-0 opacity-[0.18] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24 pb-32">
        <span className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          {PROFILE.eyebrow}
        </span>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-[9rem] font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          {PROFILE.name}
        </h1>

        <p className="blur-in text-lg md:text-2xl text-text-primary/90 mb-3 font-light">
          {/^[aeiou]/i.test(PROFILE.roles[roleIndex]) ? "An" : "A"}{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary inline-block animate-role-fade-in"
          >
            {PROFILE.roles[roleIndex]}
          </span>
          .
        </p>

        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-10 leading-relaxed text-pretty">
          {PROFILE.description}
        </p>

        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2 rounded-full bg-text-primary text-bg px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-[1.03]"
          >
            <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-border-animated" />
            <span className="relative inline-flex items-center gap-2 rounded-full bg-text-primary px-7 py-3.5 -mx-7 -my-3.5 group-hover:bg-bg group-hover:text-text-primary transition-colors duration-300">
              See works
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </span>
          </a>

          <a
            href={`mailto:${PROFILE.email}`}
            className="group relative inline-flex items-center gap-2 rounded-full border-2 border-stroke bg-bg text-text-primary px-7 py-3.5 text-sm font-medium transition-all duration-300 hover:scale-[1.03]"
          >
            <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-border-animated" />
            <span className="relative inline-flex items-center gap-2">
              Reach out
              <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
            </span>
          </a>
        </div>
      </div>

      {/* Currently building badge */}
      <a
        href={PROFILE.companyUrl}
        target="_blank"
        rel="noreferrer"
        className="blur-in absolute z-10 left-1/2 -translate-x-1/2 bottom-32 md:bottom-36 inline-flex items-center gap-3 rounded-full glass border border-white/10 px-4 py-2 text-xs text-text-primary/85 hover:text-text-primary transition"
      >
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
        </span>
        <span className="uppercase tracking-[0.2em] text-[10px] text-muted">Currently building</span>
        <span className="font-display italic">{PROFILE.company}</span>
        <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
      </a>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="text-[10px] text-muted uppercase tracking-[0.3em]">Scroll</span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <span className="absolute inset-x-0 top-0 h-1/3 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};

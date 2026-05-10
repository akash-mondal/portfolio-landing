import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE, NAV_LINKS } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

export const Navbar = ({ activeId = "home", onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, link) => {
    // External / file links open in new tab — let browser handle it
    if (link.external) return;
    e.preventDefault();
    onNavigate?.(link.id);
    const el = document.getElementById(link.id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <nav
        className={cn(
          "pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 px-2 py-2 transition-shadow duration-300",
          scrolled && "shadow-md shadow-black/30"
        )}
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, { id: "home" })}
          aria-label="Home"
          className="group relative w-9 h-9 rounded-full flex items-center justify-center"
        >
          <span className="absolute inset-0 rounded-full accent-gradient transition-transform duration-500 group-hover:rotate-180" />
          <span className="absolute inset-[2px] rounded-full bg-bg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <span className="font-display italic text-[13px] text-text-primary leading-none">
              {PROFILE.initials}
            </span>
          </span>
        </a>

        <span className="hidden md:block w-px h-5 bg-stroke mx-1.5" />

        {/* Nav links */}
        <ul className="flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = !link.external && activeId === link.id;
            return (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link)}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  data-testid={`nav-${link.id}`}
                  className={cn(
                    "inline-flex items-center gap-1 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200",
                    isActive
                      ? "text-text-primary bg-stroke/60"
                      : "text-muted hover:text-text-primary hover:bg-stroke/50"
                  )}
                >
                  {link.label}
                  {link.external && (
                    <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <span className="hidden md:block w-px h-5 bg-stroke mx-1.5" />

        {/* Say hi CTA */}
        <a
          href={`mailto:${PROFILE.email}`}
          className="relative group rounded-full"
        >
          <span className="absolute -inset-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-border-animated" />
          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-surface backdrop-blur-md text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 text-text-primary">
            Say hi
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
          </span>
        </a>
      </nav>
    </header>
  );
};

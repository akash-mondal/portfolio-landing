import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "@/App.css";

import { LoadingScreen } from "@/components/portfolio/LoadingScreen";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { SelectedWorks } from "@/components/portfolio/SelectedWorks";
import { Explorations } from "@/components/portfolio/Explorations";
import { Experience } from "@/components/portfolio/Experience";
import { Stats } from "@/components/portfolio/Stats";
import { Footer } from "@/components/portfolio/Footer";

const SECTION_IDS = ["home", "work", "resume"];
const SESSION_KEY = "portfolio_loaded_v1";

function App() {
  // First-visit-only loading screen (sessionStorage)
  const [loading, setLoading] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      return sessionStorage.getItem(SESSION_KEY) !== "1";
    } catch {
      return true;
    }
  });
  const [activeId, setActiveId] = useState("home");

  // Lock scroll while the loader is up
  useEffect(() => {
    if (loading) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [loading]);

  // Section-aware nav: track which section is in view
  useEffect(() => {
    if (loading) return;
    const observers = [];
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { threshold: 0.35, rootMargin: "-10% 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [loading]);

  const handleLoaderDone = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }
    setLoading(false);
  };

  return (
    <div className="App bg-bg text-text-primary min-h-screen" data-testid="app-root">
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen key="loader" onComplete={handleLoaderDone} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar activeId={activeId} onNavigate={setActiveId} />
          <main>
            <Hero />
            <About />
            <SelectedWorks />
            <Explorations />
            <Experience />
            <Stats />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

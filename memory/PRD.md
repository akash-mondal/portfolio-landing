# Akash Mondal — Portfolio 2026

## Original Problem Statement
Build a single-page dark portfolio landing page for Akash Mondal (Co-Founder & CTO at Miny Labs) using React, Tailwind CSS, GSAP, Framer Motion, and hls.js. Strict dark theme (no light mode), specific HSL color tokens, custom animations.

## User Personas
- Recruiters / hiring managers scanning credibility (work, experience, achievements)
- Hackathon / VC contacts wanting to reach out
- Fellow builders interested in the protocols and writing

## Core Requirements
- Strict dark theme — `--bg`, `--surface`, `--text`, `--stroke` HSL tokens; no toggle
- Sections: LoadingScreen → Hero (HLS video bg) → About → Selected Works (Bento Grid) → Journal → Explorations (Parallax Gallery) → Experience → Stats / Achievements → Footer (GSAP marquee)
- Typography: Instrument Serif (display, italic), Inter (body), JetBrains Mono (mono)
- Accent gradient (#89AACC → #4E85BF) for hover/CTA emphasis only
- Single source of truth for all content: `/app/frontend/src/lib/portfolio-data.js`

## Architecture
```
/app/frontend/
├── src/
│   ├── App.js                 # Loader gate + section wiring + IntersectionObserver active-nav
│   ├── index.css              # CSS variables, fonts, custom utilities (marquee, glass, halftone)
│   ├── lib/
│   │   └── portfolio-data.js  # All content (PROFILE, PROJECTS, EXPERIENCE, JOURNAL, etc.)
│   └── components/portfolio/
│       ├── LoadingScreen.jsx  # 0→100 counter + rotating words + accent bar
│       ├── Navbar.jsx         # Pill nav, smooth scroll, active-id state
│       ├── Hero.jsx           # HLS video bg + name reveal + role rotator + CTAs
│       ├── About.jsx          # Profile + bio + skill groups
│       ├── SelectedWorks.jsx  # Bento grid (4 projects, hover overlay)
│       ├── Journal.jsx        # 4 horizontal pill cards
│       ├── Explorations.jsx   # 6 image cards w/ GSAP parallax
│       ├── Experience.jsx     # Timeline (4 entries)
│       ├── Stats.jsx          # 3 big stat cards + 6 achievements
│       └── Footer.jsx         # GSAP marquee + big CTA + socials + copyright
└── tailwind.config.js         # Dark editorial palette + custom keyframes
```

## What's Implemented (Feb 2026)
- ✅ Design system tokens (HSL), Tailwind config, fonts, custom utilities
- ✅ Single-source-of-truth data layer (`portfolio-data.js`)
- ✅ LoadingScreen with 0→100 counter, rotating words (Build/Ship/Encrypt), exits ~3s
- ✅ First-visit-only loader (sessionStorage `portfolio_loaded_v1`)
- ✅ Pill Navbar with smooth scroll + IntersectionObserver active state
- ✅ Hero w/ HLS video background (hls.js), graceful fallback if video fails, name reveal (GSAP), 4-role rotator with smart article ("An Engineer" for vowels)
- ✅ About section (profile image, bio, 4 skill groups, email + resume links)
- ✅ Selected Works bento grid (4 projects: pixie, twinkle, Bunty, hestia) + hover overlay
- ✅ Journal — 4 horizontal pill cards
- ✅ Explorations — 6 image cards with GSAP ScrollTrigger parallax + slight rotations
- ✅ Experience timeline — 4 entries with 'Now' accent badge
- ✅ Stats (3 big cards) + Achievements (6 hackathon wins)
- ✅ Footer — GSAP infinite marquee, big CTA, 4 social icons, copyright bar
- ✅ 29 unique data-testids; tested e2e by `testing_agent_v3_fork` (100% pass, 0 issues)

## Tech Stack
- React 19, react-router-dom (routing not used — single page)
- Tailwind CSS + CSS vars in HSL (Shadcn-compatible)
- Framer Motion (entrance + staggered reveals)
- GSAP + ScrollTrigger (Hero name reveal, Explorations parallax, Footer marquee)
- hls.js (Mux HLS background video)
- lucide-react (icons)

## Backlog
### P1 — High value / quick wins
- [ ] Cursor follower / custom cursor blob with section-aware color
- [ ] Section transitions (e.g., Section labels that animate when entering view)
- [ ] Resume download button styled like a CTA in Hero or Footer
- [ ] OG image + meta tags for social previews

### P2 — Nice to have
- [ ] "Now" widget — reading / listening / building this week
- [ ] Lightbox for Explorations gallery
- [ ] Detailed project case-study pages (route per project)
- [ ] Contact form (currently mailto only)
- [ ] Lighthouse audit + perf pass (image optimization, lazy-load HLS only when in view)

### P3 — Polish
- [ ] Sound design (subtle UI click on CTA hover)
- [ ] Confetti / easter egg on AM logo triple-click
- [ ] Section-level keyboard navigation (j/k jump)

## Known Notes
- HLS stream `https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8` returns 200 from server but may not decode in some headless/preview contexts — Hero falls back to the dot-grid + dark overlay gracefully and looks fully on-brand without it.

## Testing
- ✅ `testing_agent_v3_fork` iteration 1 — 100% frontend pass, 0 critical, 0 ui bugs, 0 design issues. Report: `/app/test_reports/iteration_1.json`

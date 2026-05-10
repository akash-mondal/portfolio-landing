// Single source of truth for the portfolio. Update here, ripple everywhere.

export const PROFILE = {
  name: "Akash Mondal",
  initials: "AM",
  title: "Co-Founder & CTO",
  company: "Miny Labs",
  companyUrl: "https://miny-labs.com",
  location: "Bengaluru, India",
  shortLocation: "Bengaluru",
  email: "akash@miny-labs.com",
  github: "https://github.com/akash-mondal",
  linkedin: "https://linkedin.com/in/akshmnd",
  twitter: "https://twitter.com/akshmnd",
  resumeUrl: "/resume.pdf",
  profileImage: "https://customer-assets.emergentagent.com/job_miny-portfolio-dev/artifacts/nq6ndtws_profile.png",
  minyLabsLogo: "https://customer-assets.emergentagent.com/job_adc8eb87-cfa1-4051-8080-24959918290a/artifacts/ubep0xhy_logo_for_an_ai_and_crypto_lab_called_miny_labs_bra_019e03ff-96cc-75cd-8d4f-1681d476312b.svg",
  description:
    "Building primitives where cryptography meets autonomy — encrypted agent runtimes, on-chain identity, and protocols that ship across every chain that matters.",
  roles: ["Founder", "Engineer", "Builder", "Hacker"],
  loadingWords: ["Build", "Ship", "Encrypt"],
  eyebrow: "PORTFOLIO 2026",
};

export const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "work", label: "Work", href: "#work" },
  {
    id: "resume",
    label: "Resume",
    href: "/resume.pdf",
    external: true,
  },
];

export const PROJECTS = [
  {
    id: "pixie",
    title: "pixie",
    subtitle: "Encrypted on-chain trading arena",
    description:
      "BITE v2 + x402 + Algebra DEX + ERC-8004. An encrypted execution arena where AI agents trade with cryptographic guarantees on SKALE.",
    image: "https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?auto=format&fit=crop&w=1600&q=80",
    href: "https://github.com/akash-mondal/pixie",
    tags: ["SKALE", "BITE v2", "x402", "AI Agents"],
    year: "2026",
    span: "md:col-span-7",
  },
  {
    id: "twinkle",
    title: "twinkle",
    subtitle: "Institutional SDK · x402 agentic payments",
    description:
      "TypeScript SDK for the x402 agentic-payments ecosystem (MNEE token). Battle-tested primitives, ergonomic APIs, production-grade.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=80",
    href: "https://github.com/akash-mondal/twinkle",
    tags: ["TypeScript", "x402", "SDK"],
    year: "2026",
    span: "md:col-span-5",
  },
  {
    id: "bunty",
    title: "Bunty",
    subtitle: "Privacy-first financial identity · Midnight",
    description:
      "Zero-knowledge proofs of income, KYC, and creditworthiness on Midnight. Identity that proves without revealing.",
    image: "https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?auto=format&fit=crop&w=1600&q=80",
    href: "https://github.com/Miny-Labs/Bunty",
    tags: ["Midnight", "ZK", "Identity"],
    year: "2026",
    span: "md:col-span-5",
  },
  {
    id: "hestia",
    title: "hestia",
    subtitle: "A fire ledger for wildfire resilience",
    description:
      "Tokenises prescribed burns into verifiable, tradable assets on Hedera. Climate primitives, on-chain.",
    image: "https://images.unsplash.com/photo-1584291527908-033f4d6542c8?auto=format&fit=crop&w=1600&q=80",
    href: "https://github.com/akash-mondal/hestia",
    tags: ["Hedera", "RWA", "Climate"],
    year: "2025",
    span: "md:col-span-7",
  },
];

export const EXPERIENCE = [
  {
    period: "2026 — Now",
    role: "Co-Founder & CTO",
    company: "Miny Labs",
    place: "Bengaluru / Remote",
    summary:
      "Leading engineering for a research-driven crypto + AI lab. 6 production protocols across 12+ chains in 6 months. Three back-to-back hackathon wins under the Miny banner.",
    accent: true,
  },
  {
    period: "2025",
    role: "Independent AI Engineer & Indie Hacker",
    company: "Freelance / Contract",
    place: "Remote",
    summary:
      "Shipped agent products and on-chain integrations for clients and personal projects. 4th place — Sensay EdTech Breakthrough Hackathon with Deshi.",
  },
  {
    period: "2024 — 2025",
    role: "Generative AI Intern",
    company: "Samsung R&D Institute",
    place: "Bangalore",
    summary:
      "Multi-modal Generative AI for smart-home intelligence. Designed an MCP-based agent-orchestration framework — basis of the HARMONY publication.",
  },
  {
    period: "2024",
    role: "Data Science Intern",
    company: "Yash Technologies",
    place: "Indore",
    summary:
      "SOTA Virtual Try-On pipeline (SegFormer + Stable Diffusion + ControlNet + IDM-VTON) deployed on AWS GPU clusters. Winner — Yash Technothrive23.",
  },
];

export const JOURNAL = [
  {
    title: "HARMONY: Multimodal LLM agents for smart homes via MCP",
    type: "Publication",
    year: "2026",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Why every protocol now needs an agent",
    type: "Essay",
    year: "Mar 2026",
    readTime: "6 min",
    image: "https://images.pexels.com/photos/14314636/pexels-photo-14314636.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Shipping six chains in six months",
    type: "Notes",
    year: "Feb 2026",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Mobile App for Early Diagnosis of Rice Diseases",
    type: "Publication",
    year: "2025",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?auto=format&fit=crop&w=600&q=80",
  },
];

export const ACHIEVEMENTS = [
  { name: "D3 DomainFi Hack", year: "2026", prize: "$10,000", placement: "Winner", note: "On-chain domain intelligence & trading" },
  { name: "Agent.ai Challenge", year: "2026", prize: "$6,000", placement: "Best HubSpot Agent", note: "Autonomous agent for HubSpot workflows" },
  { name: "SKALE x402 Agentic Commerce", year: "2026", prize: "$1,000", placement: "Runner-Up", note: "Encrypted Agent track" },
  { name: "Sensay EdTech Breakthrough", year: "2025", prize: "$1,000", placement: "4th Place", note: "Deshi — tribal knowledge to AI replicas" },
  { name: "Samsung PRISM GenAI", year: "2024", prize: "—", placement: "Winner", note: "Multi-modal smart home GenAI" },
  { name: "Yash Technothrive23", year: "2024", prize: "—", placement: "Winner", note: "National-level GenAI hackathon" },
];

export const EXPLORATIONS = [
  { src: "https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&fit=crop&w=900&q=80", title: "Chain primitives", rotate: -1.5 },
  { src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80", title: "Encrypted runtime", rotate: 2 },
  { src: "https://images.unsplash.com/photo-1627637819846-e27e275dcb53?auto=format&fit=crop&w=900&q=80", title: "Agent topologies", rotate: -1 },
  { src: "https://images.unsplash.com/photo-1567641091594-71640a68f847?auto=format&fit=crop&w=900&q=80", title: "Builder mode", rotate: 1.5 },
  { src: "https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?auto=format&fit=crop&w=900&q=80", title: "ZK identity", rotate: -2 },
  { src: "https://images.unsplash.com/photo-1720962158937-7ea890052166?auto=format&fit=crop&w=900&q=80", title: "On-chain ops", rotate: 1 },
];

export const STATS = [
  { value: "12+", label: "Chains shipped", note: "EVM • Solana • Bitcoin L2 • Midnight" },
  { value: "6", label: "Production protocols", note: "in the last 6 months" },
  { value: "$18K+", label: "Hackathon winnings", note: "across 8+ wins" },
];

export const HLS_VIDEO = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

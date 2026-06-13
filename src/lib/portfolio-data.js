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
  profileImage: "/profile.png",
  minyLabsLogo: "https://customer-assets.emergentagent.com/job_adc8eb87-cfa1-4051-8080-24959918290a/artifacts/ubep0xhy_logo_for_an_ai_and_crypto_lab_called_miny_labs_bra_019e03ff-96cc-75cd-8d4f-1681d476312b.svg",
  description:
    "Building AI agents for the messy parts of business. Real-time voice that reasons, agentic ops that close cases, and systems that ship end-to-end. Most things break in production; mine pay rent.",
  roles: ["Founder", "Engineer", "Builder", "Hacker"],
  loadingWords: ["Build", "Ship", "Reason"],
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
    id: "manthan",
    title: "manthan",
    subtitle: "Agentic ops for revenue disputes",
    description:
      "Closes chargebacks, failed payments, and refund requests in minutes instead of days. Reads Stripe, the CRM, support tickets, and policy in a single investigation; drafts the refund, the customer email, and the CSM ticket; cites every claim back to the record it came from. Human-in-the-loop gates control what auto-runs versus what waits for one-click approval.",
    image: "/manthan.png",
    href: "https://www.manthan.quest",
    tags: ["AI Agents", "Stripe", "HITL", "B2B SaaS"],
    year: "2026",
    span: "md:col-span-12",
  },
  {
    id: "pixie",
    title: "pixie",
    subtitle: "Encrypted arena for autonomous trading agents",
    description:
      "Autonomous agents trade against each other with strategy kept private until settlement lands on-chain. ERC-8004 trust registry for agent identity, x402 micropayments for tool calls, SKALE encrypted compute for the execution layer. Won the Encrypted Agent track at the SKALE x402 Agentic Commerce hackathon.",
    image: "/pixie.png",
    href: "https://github.com/akash-mondal/pixie",
    tags: ["AI Agents", "SKALE", "ERC-8004", "x402"],
    year: "2026",
    span: "md:col-span-7",
  },
  {
    id: "hestia",
    title: "hestia",
    subtitle: "Wildfire resilience credits insurers actually accept",
    description:
      "Tokenises prescribed burns and forest treatment into a credit that insurers price into premium discounts. Verifiable Credentials on Hedera, six-component risk score computed on-chain, satellite verification per acre. Took 3rd in the Sustainability track at Hedera Hello Future: Apex.",
    image: "/hestia.png",
    href: "https://www.hestia.bond",
    tags: ["Hedera", "Guardian", "Climate", "RWA"],
    year: "2025 / 26",
    span: "md:col-span-5",
  },
  {
    id: "bunty",
    title: "Bunty",
    subtitle: "Compliance without showing the books",
    description:
      "A borrower proves income, KYC standing, and creditworthiness to a lender without revealing the underlying documents. ZK proofs on Midnight satisfy the regulator and the underwriter without leaking what the regulator and the underwriter don't actually need.",
    image: "https://images.unsplash.com/photo-1709626011485-6fe000ea2dbc?auto=format&fit=crop&w=1600&q=80",
    href: "https://github.com/Miny-Labs/Bunty",
    tags: ["ZK", "Midnight", "Identity"],
    year: "2026",
    span: "md:col-span-5",
  },
  {
    id: "twinkle",
    title: "twinkle",
    subtitle: "x402 agentic payments in one import",
    description:
      "TypeScript SDK that compresses x402 integration from a sprint into a morning. Powers institutional desks plugging into the MNEE token ecosystem; battle-tested across six protocols and the agents that talk to them.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1600&q=80",
    href: "https://github.com/akash-mondal/twinkle",
    tags: ["TypeScript", "x402", "SDK"],
    year: "2026",
    span: "md:col-span-7",
  },
];

export const EXPERIENCE = [
  {
    period: "2026 to Now",
    role: "Co-Founder & CTO",
    company: "Miny Labs",
    place: "Bengaluru / Remote",
    summary:
      "Ten hackathon wins, $30K+ in prizes, six production protocols in twelve months. Run engineering and ship most of it solo: Manthan (revenue-dispute ops, just took Track 1 at Pirates of the Coral-Bean), Pixie (encrypted agent arena), Hestia (3rd at Hedera Apex), and the rest of the lab's catalogue.",
    accent: true,
  },
  {
    period: "2025",
    role: "Independent AI Engineer & Indie Hacker",
    company: "Freelance / Contract",
    place: "Remote",
    summary:
      "Shipped agent products end-to-end for paying clients while ramping the indie path. Deshi, tribal-knowledge replicas as conversational AI personas, took 4th at the Sensay EdTech Breakthrough.",
  },
  {
    period: "2024 to 2025",
    role: "Generative AI Intern",
    company: "Samsung R&D Institute",
    place: "Bangalore",
    summary:
      "Designed an MCP-based orchestration framework for multi-modal home agents. Became HARMONY; first author, IEEE Access (2026). Also picked up the Samsung PRISM GenAI win on the way.",
  },
  {
    period: "2024",
    role: "Data Science Intern",
    company: "Yash Technologies",
    place: "Indore",
    summary:
      "Built and shipped a virtual try-on pipeline on AWS GPU clusters: SegFormer + IDM-VTON + ControlNet, served behind a real-time API. Won Yash Technothrive 2023.",
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
  { name: "Pirates of the Coral-Bean", year: "2026", prize: "$3,000", placement: "Winner · Track 1", note: "Manthan · agentic B2B chargeback resolution on Coral (4 MacBook Neos)" },
  { name: "Hedera Hello Future: Apex", year: "2026", prize: "$8,000", placement: "3rd · Sustainability", note: "Hestia · wildfire resilience credits on Hedera" },
  { name: "D3 DomainFi Hack", year: "2026", prize: "$10,000", placement: "Winner", note: "On-chain domain intelligence & trading" },
  { name: "Agent.ai Challenge", year: "2026", prize: "$6,000", placement: "Best HubSpot Agent", note: "Autonomous agent for HubSpot workflows" },
  { name: "SKALE x402 Agentic Commerce", year: "2026", prize: "$1,000", placement: "Runner-Up", note: "Encrypted Agent track" },
  { name: "Sensay EdTech Breakthrough", year: "2025", prize: "$1,000", placement: "4th Place", note: "Deshi · tribal knowledge to AI replicas" },
  { name: "Samsung PRISM GenAI", year: "2024", prize: "·", placement: "Winner", note: "Multi-modal smart home GenAI" },
  { name: "Yash Technothrive23", year: "2024", prize: "·", placement: "Winner", note: "National-level GenAI hackathon" },
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
  { value: "20+", label: "Agent systems shipped", note: "Hackathons, clients, indie. Most still running." },
  { value: "$30K+", label: "Hackathon winnings", note: "Ten wins in the last twelve months" },
  { value: "2", label: "Peer-reviewed publications", note: "HARMONY (2026) on MCP agents. Plus a 2025 paper on visual-language disease diagnosis." },
];

export const HLS_VIDEO = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

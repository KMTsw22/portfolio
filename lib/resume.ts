export type LinkItem = { label: string; url: string };

export type Logo = {
  src?: string;
  alt?: string;
  w?: number;
  h?: number;
  emoji?: string;
};

export type TimelineEvent = {
  id: string;
  level: number;
  kind: "education" | "experience" | "project";
  year: string;
  date: string;
  accent: string;
  title: string;
  role: string;
  logos: Logo[];
  summary: string[];
  detail: string;
  bullets: string[];
  links: LinkItem[];
  featured?: boolean;
  art?: string;
  gallery?: string[];
  tech?: string[];
  demo?: LinkItem;
};

export const PROFILE = {
  name: "Mintae Kim",
  location: "Irvine, CA",
  email: "mintae3827@gmail.com",
  phone: "949-735-4720",
  tagline:
    "Software engineer who ships products end to end — from backend and infrastructure to web frontend — with LLM agent pipelines and Claude Code/MCP as a core part of how I build.",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mintae-kim-377041386" },
    { label: "Linktree", url: "https://beacons.ai/mintae818" },
  ] as LinkItem[],
};

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Backend & Servers",
    items: [
      "C#",
      "C++",
      "Python",
      "Java",
      "ProudNet",
      "FastAPI",
      "Flask",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "MongoDB",
    ],
  },
  {
    group: "Infra & DevOps",
    items: [
      "Docker",
      "Kubernetes (k3s)",
      "AWS",
      "Hetzner Cloud",
      "GitHub Actions",
      "Linux",
    ],
  },
  {
    group: "AI & LLM",
    items: [
      "Claude Code",
      "MCP",
      "Custom skills / agents",
      "OpenAI API",
      "PyTorch",
      "Hugging Face Transformers",
      "Unsloth",
      "QLoRA / LoRA",
    ],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML / CSS", "Tailwind CSS"],
  },
  {
    group: "Additional",
    items: ["Unity (C#)", "PyQt", "Selenium"],
  },
];

export const EVENTS: TimelineEvent[] = [
  {
    id: "1",
    level: 1,
    kind: "education",
    year: "2022",
    date: "2022 ~ 2028 (expected)",
    accent: "#3b5bd9",
    title: "Kookmin University",
    role: "B.S. in Software Engineering",
    logos: [{ src: "/icons/kmu.png", alt: "Kookmin University", w: 64, h: 64 }],
    summary: ["B.S. Software Engineering", "AWS SAA-C03 certified"],
    tech: ["C/C++", "Java", "Algorithms", "Cloud"],
    detail:
      "Pursuing a B.S. in Software Engineering at Kookmin University (GPA 4.04 / 4.5), and an AWS Certified Solutions Architect – Associate.",
    bullets: [
      "B.S. in Software Engineering — GPA 4.04 / 4.5",
      "Expected graduation — Feb 2028",
      "AWS Certified Solutions Architect – Associate (SAA-C03) · valid to Jul 2029",
    ],
    links: [
      {
        label: "AWS · Credly",
        url: "https://www.credly.com/badges/dfa15b60-762a-4117-9dd5-cbe339361c37/public_url",
      },
    ],
  },
  {
    id: "2",
    level: 2,
    kind: "project",
    year: "2023",
    date: "2023",
    accent: "#e0991f",
    title: "MarketWatch",
    role: "Marketplace Monitoring App",
    logos: [],
    summary: ["Marketplace monitor app", "PyQt5 · Selenium"],
    tech: ["Python", "PyQt5", "Selenium", "QThread"],
    detail:
      "A PyQt5 desktop app that polls marketplace listings and emails real-time alerts when new items match a saved keyword and price range. Sold to 10+ customers.",
    bullets: [
      "Built, shipped, and sold to 10+ customers",
      "Background scraping thread (QThread) with listing-ID dedup and configurable polling",
      "Decoupled the crawl loop from the UI for a responsive interface",
    ],
    links: [{ label: "GitHub", url: "https://github.com/KMTsw22/MarketWatch" }],
  },
  {
    id: "3",
    level: 3,
    kind: "experience",
    year: "2024",
    date: "Jan 2024 – Feb 2026",
    accent: "#e23b2e",
    title: "Funigloo",
    role: "Game Server Developer",
    logos: [
      { src: "/icons/funigloo.jpg", alt: "Funigloo", w: 64, h: 64 },
      { src: "/icons/ragnarok.png", alt: "Ragnarok Online Project 1.5", w: 108, h: 64 },
      { src: "/icons/gravity.png", alt: "Gravity", w: 500, h: 436 },
    ],
    summary: ["Game Server Developer", "MMORPG · Ragnarok 1.5"],
    tech: ["C#", "ProudNet", "MySQL", "Redis", "C++"],
    detail:
      "Architected a new MMORPG backend from the ground up in C# with ProudNet for Ragnarok Online Project 1.5 — run with real players during a 4-day public showcase at G-STAR Busan.",
    bullets: [
      "Architected a new MMORPG backend from scratch in C# / ProudNet — ran it with real players during a 4-day showcase at G-STAR Busan",
      "6-server architecture (Auth, Game, Guild, Log, Control, GM) for fault isolation, independent scaling, and structured event logging",
      "Fault recovery that migrates players to a healthy server on failure, and fails work over to another thread when a worker dies",
      "Zone-partitioned threading across 10 worker threads to remove resource contention; cross-server sync via master-server routing & P2P UDP hole punching",
      "Broadcast cache architecture → single-map capacity 250 → 600 players, load-tested 50,000 concurrent connections via parallel bot clients",
      "Partitioned & indexed the game DB and tuned Redis caching to keep real-time query latency low",
    ],
    links: [
      {
        label: "Notion · Write-up",
        url: "https://app.notion.com/p/Ragnarok-1-5-Server-2fdac6598ee681a39154f3e305a2bb6c",
      },
    ],
    featured: true,
    gallery: [
      "/art/ragnarok/title.png",
      "/art/ragnarok/character.png",
      "/art/ragnarok/boss.png",
      "/art/ragnarok/ingame.png",
    ],
  },
  {
    id: "4",
    level: 4,
    kind: "project",
    year: "2026",
    date: "Jan 2026 – Jun 2026",
    accent: "#8b7cf6",
    title: "Fastlane",
    role: "AI Evaluation Platform",
    logos: [{ src: "/icons/fastlane.png", alt: "Fastlane", w: 64, h: 64 }],
    summary: ["AI evaluation platform", "Next.js · Supabase · OpenAI"],
    tech: ["Next.js", "TypeScript", "Supabase", "OpenAI", "LLM"],
    detail:
      "Built and deployed an AI evaluation platform end-to-end — relational schema, REST API, scoring pipeline, and UI from spec to production (Next.js, Supabase, OpenAI).",
    bullets: [
      "3-pass LLM scoring pipeline (Draft → Skeptic → Judge) with σ-based dispute routing → auto-clears ~70% of proposals",
      "Treats LLM output as untrusted until cross-validated",
      "Rule-based quality gate (zero LLM cost) before scoring; async background jobs so long LLM batches never block the user flow",
    ],
    links: [{ label: "Website", url: "https://fastlane-tem.vercel.app/" }],
    featured: true,
    gallery: ["/art/fastlane/1.png"],
  },
  {
    id: "5",
    level: 5,
    kind: "project",
    year: "2026",
    date: "Apr 2026 – Jun 2026",
    accent: "#f97316",
    title: "Last Ember",
    role: "AI-Built Card Game",
    logos: [
      { src: "/icons/lastember.png", alt: "Last Ember", w: 64, h: 64 },
      { src: "/icons/steam.png", alt: "Steam", w: 198, h: 201 },
    ],
    summary: ["AI-built roguelike card game", "Unity · Steam"],
    tech: ["Unity", "C#", "Claude Code", "MCP", "AI Agents"],
    detail:
      "Shipped a roguelike card game in Unity to Steam — card system, turn-based combat, deck-building, and reward loops.",
    bullets: [
      "Shipped to Steam — 44 copies sold, 250+ wishlists to date",
      "Reusable AI content pipeline (custom Claude Code skills + MCP) generating 2,000+ shipped assets (art, UI, animations) from card definitions via GPT Image 2 & Nano Banana under human review",
      "Automated cinematic trailer generation via a Higgsfield + Claude MCP integration",
    ],
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/4729480/Last_Ember/" },
    ],
    demo: { label: "▸ Mr. Minty — AI asset showcase & animation", url: "/mr-minty" },
    featured: true,
    gallery: [
      "/art/lastember/title.png",
      "/art/lastember/combat.png",
      "/art/lastember/event.png",
      "/art/lastember/shop.png",
    ],
  },
];

export function getEvent(id: string): TimelineEvent | undefined {
  return EVENTS.find((e) => e.id === id);
}

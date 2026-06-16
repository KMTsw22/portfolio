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
};

export const PROFILE = {
  name: "Mintae Kim",
  location: "Irvine, CA",
  email: "mintae3827@gmail.com",
  phone: "949-735-4720",
  tagline:
    "Software engineer with 5+ years coding, building LLM-powered agent systems and high-concurrency production servers.",
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
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "HTML / CSS", "Tailwind CSS"],
  },
  {
    group: "AI & LLM",
    items: [
      "Claude Code",
      "MCP",
      "OpenAI API",
      "PyTorch",
      "Hugging Face Transformers",
      "Unsloth",
      "QLoRA / LoRA",
    ],
  },
  {
    group: "Infra & DevOps",
    items: [
      "Docker",
      "k3s / Kubernetes",
      "Hetzner Cloud",
      "AWS (EC2, Lambda)",
      "GitHub Actions",
      "Linux",
    ],
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
    summary: ["B.S. Software Engineering", "GPA 4.04 / 4.5"],
    tech: ["C/C++", "Java", "Algorithms", "Data Structures"],
    detail:
      "Pursuing a B.S. in Software Engineering at Kookmin University, maintaining a GPA of 4.04 / 4.5.",
    bullets: [
      "B.S. in Software Engineering",
      "GPA 4.04 / 4.5",
      "Expected graduation — Feb 2028",
    ],
    links: [],
  },
  {
    id: "2",
    level: 2,
    kind: "experience",
    year: "2022",
    date: "Jan 2022 – Dec 2023",
    accent: "#e0991f",
    title: "Freelance",
    role: "Automation Software Engineer",
    logos: [{ src: "/icons/kmong.png", alt: "Freelance", w: 96, h: 64 }],
    summary: ["Automation Software Engineer", "20+ paying clients"],
    tech: ["Python", "Selenium", "PyQt"],
    detail:
      "Delivered Python/Selenium automation tools and PyQt desktop apps to 20+ paying clients — covering data collection, web scraping, and transaction workflows.",
    bullets: [
      "Python / Selenium automation tools & PyQt desktop apps",
      "Served 20+ paying clients",
      "Data collection, web scraping, transaction workflows",
    ],
    links: [
      { label: "GitHub · Naver", url: "https://github.com/KMTsw22/NaverCommentManage" },
      { label: "GitHub · Shop", url: "https://github.com/KMTsw22/ShoppingMall-Manage" },
    ],
    gallery: ["/art/freelance/1.png"],
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
      "Built and operated high-concurrency MMORPG game servers for Ragnarok Online Project 1.5.",
    bullets: [
      "Redesigned the broadcast cache architecture → single-map capacity 250 → 600 players, load-tested 50,000 concurrent connections via parallel bot clients",
      "Zone-partitioned threading across 10 worker threads to remove resource contention; cross-server sync via master-server routing & P2P UDP hole punching",
      "Split the monolith into 6 microservices (Auth, Game, Guild, Log, Control, GM) for fault isolation and independent scaling",
    ],
    links: [
      {
        label: "Notion · Write-up",
        url: "https://www.notion.so/Ragnarok-1-5-Server-2fdac6598ee681a39154f3e305a2bb6c",
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
    summary: ["AI proposal review", "Next.js · Supabase · OpenAI"],
    tech: ["Next.js", "TypeScript", "Supabase", "OpenAI", "LLM"],
    detail:
      "Built and shipped an end-to-end AI proposal review platform (Next.js, Supabase, OpenAI), covering architecture, schema, and LLM orchestration.",
    bullets: [
      "3-pass LLM scoring pipeline (Draft → Skeptic → Judge) with σ-based dispute routing",
      "Auto-clears ~70% of proposals at the first pass, escalating only disagreed items to human review",
      "Rule-based quality gate (zero LLM cost) before scoring to filter low-quality submissions and cut OpenAI calls",
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
    role: "Unity Card Game",
    logos: [
      { src: "/icons/lastember.png", alt: "Last Ember", w: 64, h: 64 },
      { src: "/icons/steam.png", alt: "Steam", w: 198, h: 201 },
    ],
    summary: ["Roguelike card game", "Unity · AI pipeline"],
    tech: ["Unity", "C#", "Claude Code", "AI Agents"],
    detail:
      "Shipped a roguelike card game in Unity to Steam, built from scratch with AI-assisted development (Claude Code).",
    bullets: [
      "Card system, turn-based combat, deck-building, and reward loops",
      "AI Agent asset pipeline orchestrating GPT Image 2 & Nano Banana across agents (prompt authoring, generation, QA, post-processing) → 2,000+ game assets",
      "Automated cinematic trailer generation via a Higgsfield + Claude MCP integration",
    ],
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/4729480/Last_Ember/" },
    ],
    featured: true,
    gallery: [
      "/art/lastember/title.png",
      "/art/lastember/combat.png",
      "/art/lastember/event.png",
      "/art/lastember/shop.png",
    ],
  },
  {
    id: "6",
    level: 6,
    kind: "project",
    year: "2026",
    date: "May 2026",
    accent: "#0d9488",
    title: "Ruming",
    role: "On-Device Persona LLM",
    logos: [{ emoji: "🤖", alt: "Ruming" }],
    summary: ["On-device persona LLM", "Qwen2.5 · QLoRA"],
    tech: ["Qwen2.5-3B", "QLoRA", "Unsloth", "GGUF", "Android"],
    detail:
      "Fine-tuned Qwen2.5-3B into a persona LLM and shipped it on-device for offline Android.",
    bullets: [
      "Fine-tuned Qwen2.5-3B with QLoRA (Unsloth) on 1,000 hand-curated dialogue pairs (15-year-friend persona)",
      "Diagnosed distribution collapse on raw chat data → switched to synthetic data",
      "Shipped as GGUF Q4_K_M (~2 GB) for offline on-device Android",
    ],
    links: [
      { label: "GitHub", url: "https://github.com/KMTsw22/RumingLLM" },
      { label: "Hugging Face", url: "https://huggingface.co/mintae818/ruming-qwen2.5-3b-q4km" },
    ],
  },
];

export function getEvent(id: string): TimelineEvent | undefined {
  return EVENTS.find((e) => e.id === id);
}

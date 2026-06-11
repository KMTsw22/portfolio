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
};

export const PROFILE = {
  name: "Mintae Kim",
  location: "Irvine, CA",
  email: "mintae3827@gmail.com",
  phone: "949-735-4720",
  tagline:
    "Software engineer with 2+ years building high-concurrency, distributed server systems in production.",
  links: [
    { label: "GitHub", url: "https://github.com/KMTsw22" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mintae-kim-377041386" },
    { label: "Website", url: "https://beacons.ai/mintae818" },
    { label: "Email", url: "mailto:mintae3827@gmail.com" },
  ] as LinkItem[],
};

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: "Backend & Servers",
    items: ["C#", "C++", "Python", "Java", "ProudNet", "FastAPI", "Flask"],
  },
  { group: "Database", items: ["MySQL", "PostgreSQL", "Redis", "MongoDB"] },
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
  { group: "Frontend", items: ["React", "Next.js", "TypeScript"] },
  { group: "Additional", items: ["Unity (C#)", "PyQt", "Selenium"] },
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
    date: "Jan 2022 – Jan 2024",
    accent: "#e0991f",
    title: "Freelance",
    role: "Automation Software Engineer",
    logos: [{ src: "/icons/kmong.png", alt: "Freelance", w: 96, h: 64 }],
    summary: ["Automation Software Engineer", "20+ paying clients"],
    detail:
      "Delivered Python/Selenium automation tools and PyQt desktop apps for 20+ paying clients — scheduled data collection, web scraping, and transaction workflows.",
    bullets: [
      "Python / Selenium automation tools & PyQt desktop apps",
      "Served 20+ paying clients",
      "Scheduled data collection, web scraping, transaction workflows",
    ],
    links: [
      { label: "GitHub · Naver", url: "https://github.com/KMTsw22/NaverCommentManage" },
      { label: "GitHub · Shop", url: "https://github.com/KMTsw22/ShoppingMall-Manage" },
    ],
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
    ],
    summary: ["Game Server Developer", "MMORPG · Ragnarok 1.5"],
    detail:
      "Built and operated high-concurrency MMORPG game servers for Ragnarok Online Project 1.5.",
    bullets: [
      "Redesigned broadcast cache architecture → raised single-map capacity to 600 players and validated 3,000 concurrent connections on a single machine",
      "Zone-partitioned threading across 10 worker threads to eliminate shared-resource contention; cross-server state sync via master-server routing & P2P UDP hole punching",
      "Decomposed the monolith into 6 microservices (Auth, Game, Guild, Log, Control, GM) for per-service scaling, fault isolation, and independent deployment",
      "Architected 5 MySQL schemas and integrated Redis for low-latency session management and hot-data caching",
      "Built automated fault detection, failover, and backup recovery for live-production continuity during node failures",
    ],
    links: [
      {
        label: "Notion · Write-up",
        url: "https://www.notion.so/Ragnarok-1-5-Server-2fdac6598ee681a39154f3e305a2bb6c",
      },
    ],
    featured: true,
  },
  {
    id: "4",
    level: 4,
    kind: "project",
    year: "2025",
    date: "Oct 2025 – Dec 2025",
    accent: "#8b7cf6",
    title: "Blockchain Wallet",
    role: "Decentralized Web Application",
    logos: [{ src: "/icons/blockchain.png", alt: "Blockchain Wallet", w: 64, h: 64 }],
    summary: ["Decentralized web app", "PoW / PoS network"],
    detail:
      "Built a decentralized web application on a multi-node PoW/PoS network.",
    bullets: [
      "Wrote and deployed the smart contracts",
      "Integrated wallet transaction signing and on-chain state into the client",
      "Ran on a multi-node PoW / PoS network",
    ],
    links: [{ label: "GitHub", url: "https://github.com/KMTsw22/BlockChainProject" }],
  },
  {
    id: "5",
    level: 5,
    kind: "project",
    year: "2026",
    date: "Jan 2026 – Mar 2026",
    accent: "#12b886",
    title: "DashDeploy",
    role: "Self-Hosted Deployment Platform",
    logos: [{ src: "/icons/dashdeploy.png", alt: "DashDeploy", w: 64, h: 64 }],
    summary: ["Self-hosted deploy platform", "Docker · k3s"],
    detail:
      "Built a self-hosted, Vercel-like deployment platform using Docker and k3s.",
    bullets: [
      "Automated build, containerization, and zero-downtime deployment pipelines",
      "Provisioned Hetzner Cloud VMs with cloud firewall and DNS configuration",
      "Managed infrastructure and service orchestration across multiple nodes",
    ],
    links: [{ label: "GitHub", url: "https://github.com/KMTsw22/DashDeploy" }],
  },
  {
    id: "6",
    level: 6,
    kind: "project",
    year: "2026",
    date: "Mar 2026 – Jun 2026",
    accent: "#f97316",
    title: "Last Ember",
    role: "Unity Card Game",
    logos: [{ src: "/icons/lastember.png", alt: "Last Ember", w: 64, h: 64 }],
    summary: ["Roguelike card game", "Unity (C#)"],
    detail:
      "Designing and building a roguelike card game in Unity from the ground up, extending a server-side background into full game-client architecture.",
    bullets: [
      "Card system and turn-based combat engine",
      "Deck composition with reward / upgrade mechanics",
      "Full game-client architecture built in Unity",
    ],
    links: [
      { label: "Steam", url: "https://store.steampowered.com/app/4729480/Last_Ember/" },
    ],
    featured: true,
    art: "/art/lastember-bg.png",
  },
];

export function getEvent(id: string): TimelineEvent | undefined {
  return EVENTS.find((e) => e.id === id);
}

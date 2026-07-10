import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./Showcase.module.css";

export const metadata: Metadata = {
  title: "AI Asset Showcase — Mintae Kim",
};

const ASSETS = [
  { src: "/art/compare/man-gpt.png", label: "GPT Image 2", subject: "Mascot" },
  { src: "/art/compare/man-gemini.png", label: "Nano Banana", subject: "Mascot" },
  { src: "/art/compare/leaves-gpt.png", label: "GPT Image 2", subject: "Leaves" },
  { src: "/art/compare/leaves-gemini.png", label: "Nano Banana", subject: "Leaves" },
];

export default function ShowcasePage() {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <Link href="/" className={styles.back}>
          <span className={styles.backArrow}>←</span> Back
        </Link>

        <header className={styles.head}>
          <p className={styles.eyebrow}>AI Content Pipeline</p>
          <h1 className={styles.title}>AI Asset Showcase</h1>
          <p className={styles.sub}>
            A quick concept set — mascot &amp; foliage art plus an animated clip
            — built with the same AI content pipeline behind Last Ember (Claude
            Code skills + MCP, GPT Image 2 &amp; Nano Banana).
          </p>
        </header>

        <section className={styles.videoWrap}>
          <div className={styles.videoFrame}>
            <video
              className={styles.video}
              src="/art/compare/showcase.mp4"
              poster="/art/compare/man-gpt.png"
              controls
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <p className={styles.videoCap}>Animated mascot — generated clip</p>
        </section>

        <section className={styles.gallery}>
          {ASSETS.map((a, i) => (
            <figure key={i} className={styles.cell}>
              <Image
                src={a.src}
                alt={`${a.subject} — ${a.label}`}
                fill
                sizes="(max-width: 720px) 45vw, 380px"
                style={{ objectFit: "contain" }}
              />
              <figcaption className={styles.tag}>{a.label}</figcaption>
            </figure>
          ))}
        </section>
      </div>
    </main>
  );
}

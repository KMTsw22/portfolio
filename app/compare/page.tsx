import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./Compare.module.css";

export const metadata: Metadata = {
  title: "AI Asset Comparison — Mintae Kim",
};

const ROWS = [
  {
    subject: "Character — “Mr. Minty”",
    gpt: "/art/compare/man-gpt.png",
    gemini: "/art/compare/man-gemini.png",
  },
  {
    subject: "Creature — Octopus",
    gpt: "/art/compare/octopus-gpt.png",
    gemini: "/art/compare/octopus-gemini.png",
  },
];

export default function ComparePage() {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <Link href="/" className={styles.back}>
          <span className={styles.backArrow}>←</span> Back
        </Link>

        <header className={styles.head}>
          <p className={styles.eyebrow}>Last Ember · AI Asset Pipeline</p>
          <h1 className={styles.title}>Model Comparison</h1>
          <p className={styles.sub}>
            Same prompt, two image models — evaluated side by side to pick the
            right generator for each asset type.
          </p>
        </header>

        <div className={styles.compare}>
          <div className={styles.modelRow}>
            <div className={`${styles.model} ${styles.gpt}`}>GPT Image 2</div>
            <div className={`${styles.model} ${styles.gem}`}>
              Nano Banana · Gemini
            </div>
          </div>

          {ROWS.map((r) => (
            <div key={r.subject} className={styles.rowGroup}>
              <div className={styles.subject}>{r.subject}</div>
              <div className={styles.pair}>
                <figure className={styles.cell}>
                  <Image
                    src={r.gpt}
                    alt={`${r.subject} — GPT Image 2`}
                    fill
                    sizes="(max-width: 720px) 45vw, 380px"
                    style={{ objectFit: "contain" }}
                  />
                </figure>
                <figure className={styles.cell}>
                  <Image
                    src={r.gemini}
                    alt={`${r.subject} — Nano Banana / Gemini`}
                    fill
                    sizes="(max-width: 720px) 45vw, 380px"
                    style={{ objectFit: "contain" }}
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

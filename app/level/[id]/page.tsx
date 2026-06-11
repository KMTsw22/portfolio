import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EVENTS, getEvent } from "@/lib/resume";
import MacPanel from "./MacPanel";
import styles from "./Level.module.css";

export function generateStaticParams() {
  return EVENTS.map((e) => ({ id: e.id }));
}

export default async function LevelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ev = getEvent(id);
  if (!ev) notFound();

  const index = EVENTS.findIndex((e) => e.id === ev.id);
  const prev = EVENTS[index - 1];
  const next = EVENTS[index + 1];
  const fileName = `${ev.title.toLowerCase().replace(/\s+/g, "-")}.md`;

  return (
    <main className={styles.page}>
      <MacPanel accent={ev.accent} fileName={fileName}>
        <div className={styles.topbar}>
          <Link href="/" className={styles.back}>
            ◂ MAP
          </Link>
          <span className={styles.levelBadge}>
            LV.{ev.level} · {ev.kind.toUpperCase()}
          </span>
          <span className={styles.year}>{ev.year}</span>
        </div>

        {ev.art && (
          <div className={styles.banner}>
            <Image
              src={ev.art}
              alt={`${ev.title} key art`}
              fill
              sizes="(max-width: 640px) 100vw, 580px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        )}

        <header className={styles.header}>
          <div className={styles.logos}>
            {ev.logos.map((logo, j) =>
              logo.src ? (
                <Image
                  key={j}
                  className={styles.logo}
                  src={logo.src}
                  alt={logo.alt ?? ""}
                  width={logo.w ?? 80}
                  height={logo.h ?? 80}
                />
              ) : (
                <span key={j} className={styles.logoEmoji} role="img" aria-label={logo.alt}>
                  {logo.emoji}
                </span>
              )
            )}
          </div>
          <h1 className={styles.title}>{ev.title}</h1>
          <p className={styles.role}>{ev.role}</p>
          <p className={styles.date}>{ev.date}</p>
        </header>

        <p className={styles.detail}>{ev.detail}</p>

        <ul className={styles.bullets}>
          {ev.bullets.map((b, j) => (
            <li key={j}>
              <span className={styles.bdot}>▸</span>
              {b}
            </li>
          ))}
        </ul>

        {ev.links.length > 0 && (
          <div className={styles.linkRow}>
            {ev.links.map((l) => (
              <a
                key={l.url}
                href={l.url}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}

        <nav className={styles.nav}>
          {prev ? (
            <Link href={`/level/${prev.id}`} className={styles.navBtn}>
              ◂ LV.{prev.level}
            </Link>
          ) : (
            <span className={`${styles.navBtn} ${styles.navOff}`}>◂ LV.0</span>
          )}
          {next ? (
            <Link href={`/level/${next.id}`} className={styles.navBtn}>
              LV.{next.level} ▸
            </Link>
          ) : (
            <Link href="/" className={styles.navBtn}>
              MAP ▸
            </Link>
          )}
        </nav>
      </MacPanel>
    </main>
  );
}

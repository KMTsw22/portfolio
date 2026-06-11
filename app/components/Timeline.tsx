import Image from "next/image";
import Link from "next/link";
import { EVENTS, PROFILE, SKILLS, type Logo } from "@/lib/resume";
import styles from "./Timeline.module.css";

function LogoMark({ logo, className }: { logo: Logo; className: string }) {
  if (logo.src) {
    return (
      <Image
        className={className}
        src={logo.src}
        alt={logo.alt ?? ""}
        width={logo.w ?? 56}
        height={logo.h ?? 56}
      />
    );
  }
  return (
    <span className={`${className} ${styles.emoji}`} role="img" aria-label={logo.alt}>
      {logo.emoji}
    </span>
  );
}

export default function Timeline() {
  return (
    <main className={styles.page}>
      <div className={styles.board}>
        <header className={styles.head}>
          <div className={styles.profile}>
            <span className={styles.avatar}>
              <Image
                src="/icons/star-gold.png"
                alt=""
                width={44}
                height={44}
                aria-hidden="true"
              />
            </span>
            <div className={styles.who}>
              <h1>{PROFILE.name}</h1>
              <p className={styles.contact}>
                {PROFILE.location} · {PROFILE.email} · {PROFILE.phone}
              </p>
            </div>
          </div>
          <p className={styles.tagline}>{PROFILE.tagline}</p>
          <nav className={styles.links}>
            {PROFILE.links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                className={styles.linkBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </header>

        <div className={styles.track}>
          <span className={styles.start}>START</span>

          {EVENTS.map((ev, i) => {
            const side = i % 2 === 0 ? styles.left : styles.right;
            return (
              <div
                key={ev.id}
                className={`${styles.row} ${side}`}
                style={{ ["--accent" as string]: ev.accent }}
              >
                <span className={styles.ghost} aria-hidden="true">
                  {ev.year}
                </span>
                <Image
                  className={styles.star}
                  src="/icons/star-gold.png"
                  alt=""
                  width={56}
                  height={56}
                  aria-hidden="true"
                />
                <Link
                  href={`/level/${ev.id}`}
                  className={`${styles.event} ${ev.featured ? styles.featured : ""}`}
                >
                  <span className={styles.cardBar}>
                    <span className={styles.dots}>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className={styles.cardTitle}>
                      LV.{ev.level} · {ev.kind}
                    </span>
                    {ev.featured && <span className={styles.fstar}>★</span>}
                  </span>
                  <div className={styles.cardBody}>
                    <div className={styles.logo}>
                      {ev.logos.map((logo, j) => (
                        <LogoMark key={j} logo={logo} className={styles.logoImg} />
                      ))}
                    </div>
                    <div className={styles.date}>{ev.date}</div>
                    <div className={styles.title}>{ev.title}</div>
                    <div className={styles.role}>{ev.role}</div>
                    <span className={styles.more}>VIEW DETAILS ▸</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <section className={styles.skills}>
          <p className={styles.skillsTitle}>▸ SKILLS</p>
          <div className={styles.skillGrid}>
            {SKILLS.map((s) => (
              <div key={s.group} className={styles.skillGroup}>
                <h3>{s.group}</h3>
                <div className={styles.chips}>
                  {s.items.map((it) => (
                    <span key={it} className={styles.chip}>
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { EVENTS, PROFILE, SKILLS, type Logo } from "@/lib/resume";
import styles from "./Timeline.module.css";

const LINK_ICONS: Record<string, React.ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.52 11.52 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  ),
  Linktree: (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
      <path d="M13.736 5.853l4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.937l4.229 4.108-2.325 2.334-5.74-5.769-5.741 5.769-2.325-2.334 4.229-4.108H2.226V8.121h5.909l-4.2-4.005 2.324-2.38 4.005 4.117V0h3.472zM10.264 18.692h3.472V24h-3.472z" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 6.5l9 6 9-6" />
    </svg>
  ),
};

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
                <span className={styles.linkIcon}>{LINK_ICONS[l.label]}</span>
                {l.label}
              </a>
            ))}
          </nav>
        </header>

        <div className={styles.track}>
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
                <span className={styles.node} aria-hidden="true" />
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

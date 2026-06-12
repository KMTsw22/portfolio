"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Logo, TimelineEvent } from "@/lib/resume";
import styles from "./Timeline.module.css";

function LogoMark({ logo }: { logo: Logo }) {
  if (logo.src) {
    return (
      <Image
        className={styles.logoImg}
        src={logo.src}
        alt={logo.alt ?? ""}
        width={logo.w ?? 56}
        height={logo.h ?? 56}
      />
    );
  }
  return (
    <span className={`${styles.logoImg} ${styles.emoji}`} role="img" aria-label={logo.alt}>
      {logo.emoji}
    </span>
  );
}

export default function EventCard({ ev }: { ev: TimelineEvent }) {
  const [open, setOpen] = useState(false);
  const hasGallery = !!ev.gallery && ev.gallery.length > 0;

  return (
    <div
      className={`${styles.event} ${ev.featured ? styles.featured : ""} ${
        open ? styles.expanded : ""
      }`}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={() => setOpen((o) => !o)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((o) => !o);
        }
      }}
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
            <LogoMark key={j} logo={logo} />
          ))}
        </div>
        <div className={styles.date}>{ev.date}</div>
        <div className={styles.title}>{ev.title}</div>
        <div className={styles.role}>{ev.role}</div>
      </div>

      {open &&
        (hasGallery ? (
          <div
            className={`${styles.gallery} ${
              ev.gallery!.length === 1 ? styles.gallerySingle : ""
            }`}
          >
            {ev.gallery!.map((src, i) => (
              <span key={i} className={styles.galleryItem}>
                <Image
                  src={src}
                  alt={`${ev.title} screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 88vw, 180px"
                  style={{ objectFit: "cover" }}
                />
              </span>
            ))}
          </div>
        ) : (
          <div className={styles.preview}>
            <p className={styles.previewText}>{ev.detail}</p>
            <ul className={styles.previewList}>
              {ev.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

      {open && ev.tech && ev.tech.length > 0 && (
        <div className={styles.techRow}>
          {ev.tech.map((t) => (
            <span key={t} className={styles.tech}>
              {t}
            </span>
          ))}
        </div>
      )}

      <div className={styles.cardFoot}>
        {open ? (
          <Link
            href={`/level/${ev.id}`}
            className={styles.detailBtn}
            onClick={(e) => e.stopPropagation()}
          >
            Detail →
          </Link>
        ) : (
          <span className={styles.more}>PREVIEW ▸</span>
        )}
      </div>
    </div>
  );
}

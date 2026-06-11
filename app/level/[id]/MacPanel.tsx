"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Level.module.css";

export default function MacPanel({
  accent,
  fileName,
  children,
}: {
  accent: string;
  fileName: string;
  children: React.ReactNode;
}) {
  const [maximized, setMaximized] = useState(false);

  return (
    <div
      className={`${styles.panel} ${maximized ? styles.panelMax : ""}`}
      style={{ ["--accent" as string]: accent }}
    >
      <div className={styles.macBar}>
        <span className={styles.dots}>
          <Link href="/" className={styles.dRed} title="Close" aria-label="Close" />
          <span className={styles.dYellow} aria-hidden="true" />
          <button
            type="button"
            className={styles.dGreen}
            title={maximized ? "Restore" : "Zoom"}
            aria-label="Toggle maximize"
            onClick={() => setMaximized((m) => !m)}
          />
        </span>
        <span className={styles.macTitle}>{fileName}</span>
        <span className={styles.macSpacer} />
      </div>
      {children}
    </div>
  );
}

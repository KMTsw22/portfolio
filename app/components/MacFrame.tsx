"use client";

import { useState } from "react";
import styles from "./MacFrame.module.css";

export default function MacFrame({ children }: { children: React.ReactNode }) {
  const [maximized, setMaximized] = useState(false);
  const [closed, setClosed] = useState(false);

  if (closed) {
    return (
      <div className={styles.desktop}>
        <button
          className={styles.relaunch}
          onClick={() => setClosed(false)}
          aria-label="Reopen portfolio"
        >
          <span className={styles.relaunchIcon}>★</span>
          <span className={styles.relaunchLabel}>Mintae Kim — Portfolio</span>
          <span className={styles.relaunchHint}>click to reopen</span>
        </button>
      </div>
    );
  }

  return (
    <div className={`${styles.desktop} ${maximized ? styles.maxDesktop : ""}`}>
      <div className={`${styles.window} ${maximized ? styles.maxWindow : ""}`}>
        <div className={styles.bar}>
          <span className={styles.lights}>
            <button
              type="button"
              className={styles.red}
              title="Close"
              aria-label="Close window"
              onClick={() => setClosed(true)}
            />
            <span className={styles.yellow} aria-hidden="true" />
            <button
              type="button"
              className={styles.green}
              title={maximized ? "Restore" : "Zoom"}
              aria-label="Toggle maximize"
              onClick={() => setMaximized((m) => !m)}
            />
          </span>
          <span className={styles.title}>Mintae Kim — Portfolio</span>
          <span className={styles.spacer} />
        </div>
        <div className={styles.viewport}>{children}</div>
      </div>
    </div>
  );
}

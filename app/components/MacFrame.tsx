"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import styles from "./MacFrame.module.css";

export default function MacFrame({ children }: { children: React.ReactNode }) {
  const [maximized, setMaximized] = useState(false);
  const [closed, setClosed] = useState(false);

  if (closed) {
    return (
      <div className={styles.login}>
        <div className={styles.loginInner}>
          <span className={styles.loginAvatar}>
            <Image src="/icons/node.png" alt="" width={110} height={110} />
          </span>
          <span className={styles.loginName}>Mintae Kim</span>
          <button
            type="button"
            className={styles.loginBtn}
            onClick={() => setClosed(false)}
            aria-label="Log in"
          >
            ›
          </button>
          <span className={styles.loginHint}>click to log in</span>
        </div>
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
          <span className={styles.title}>
            <span className={styles.monogram}>Max</span>
          </span>
          <span className={styles.barRight}>
            <ThemeToggle />
          </span>
        </div>
        <div className={styles.viewport}>{children}</div>
      </div>
    </div>
  );
}

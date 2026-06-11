"use client";

import { useEffect, useState } from "react";
import styles from "./MacFrame.module.css";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      className={styles.themeBtn}
      onClick={toggle}
      aria-label="Toggle dark mode"
      title={dark ? "Light mode" : "Dark mode"}
    >
      {dark ? "☀︎" : "☾"}
    </button>
  );
}

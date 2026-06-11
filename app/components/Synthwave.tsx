import styles from "./Synthwave.module.css";

export default function Synthwave() {
  return (
    <div className={styles.wrap} aria-hidden="true">
      <div className={styles.sun} />
      <div className={styles.horizon} />
      <div className={styles.grid} />
    </div>
  );
}

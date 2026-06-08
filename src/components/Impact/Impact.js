import { profile } from "@/data/profile";
import styles from "./Impact.module.css";

export default function Impact() {
  return (
    <section className={styles.impact} aria-label="Professional impact">
      {profile.metrics.map((metric) => (
        <div className={styles.metric} key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </section>
  );
}

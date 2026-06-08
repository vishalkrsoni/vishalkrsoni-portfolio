import { skills } from "@/data/resume";
import styles from "./TechMarquee.module.css";

const marqueeSkills = skills.slice(0, 18);

export default function TechMarquee() {
  return (
    <section className={styles.marquee} aria-label="Technology stack">
      <div className={styles.track}>
        {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
          <span key={`${skill}-${index}`}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

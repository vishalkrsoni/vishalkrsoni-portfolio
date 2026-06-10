import { Briefcase, GraduationCap } from "lucide-react";
import { education, experiences } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <section className={styles.section} id="experience">
      <SectionHeading
        align="center"
        eyebrow="Resume"
        title="Formal Bio Details"
      />
      <div className={styles.grid}>
        <div>
          <h3>
            <Briefcase size={22} />
            Work History
          </h3>
          <div className={styles.timeline}>
            {experiences.map((item) => (
              <article
                className={styles.item}
                key={`${item.company}-${item.date}`}
              >
                <div className={styles.itemHeader}>
                  <div>
                    <h4>{item.company}</h4>
                    <p>{item.role}</p>
                  </div>
                  <span>{item.date}</span>
                </div>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className={styles.mobileDots} aria-hidden="true">
            {experiences.map((item) => (
              <span key={item.company} />
            ))}
          </div>
        </div>
        <aside className={styles.education}>
          <h3>
            <GraduationCap size={22} />
            Education
          </h3>
          <div className={styles.educationTrack}>
            {education.map((item) => (
              <article key={item.title}>
                <span>{item.date}</span>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </article>
            ))}
          </div>
          <div className={styles.educationDots} aria-hidden="true">
            {education.map((item) => (
              <span key={item.title} />
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

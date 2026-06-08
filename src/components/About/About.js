import { CheckCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { strengths } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.imagePanel} aria-hidden="true" />
      <div className={styles.copy}>
        <SectionHeading eyebrow="About Me" title="Why Choose Me?" />
        <p>
          Senior Software Engineer with 7+ years of experience building
          scalable backend systems, MERN applications, real-time communication
          workflows, and microservices.
        </p>
        <div className={styles.strengths}>
          {strengths.map((strength) => (
            <div key={strength} className={styles.strength}>
              <CheckCircle size={20} />
              <span>{strength}</span>
            </div>
          ))}
        </div>
        <div className={styles.actions}>
          <a href="#contact">Hire Me</a>
          <a href={profile.resume} download>
            Get Resume
          </a>
        </div>
      </div>
    </section>
  );
}

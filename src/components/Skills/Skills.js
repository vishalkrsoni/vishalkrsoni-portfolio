import Image from "next/image";
import { skills } from "@/data/resume";
import { getSkillIcon } from "@/lib/skillIcon";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <SectionHeading align="center" eyebrow="Toolkit" title="Skills" />
      <div className={styles.grid}>
        {skills.map((skill) => {
          const icon = getSkillIcon(skill);

          return (
            <div className={styles.skill} key={skill}>
              {icon ? (
                <Image src={icon} alt="" width={34} height={34} />
              ) : (
                <span className={styles.fallback}>{skill.charAt(0)}</span>
              )}
              <span>{skill}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

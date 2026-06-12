import Image from "next/image";
import { skills } from "@/data/resume";
import { getSkillIcon } from "@/lib/skillIcon";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Skills.module.css";

function SkillTile({ skill }) {
  const icon = getSkillIcon(skill);

  return (
    <div className={styles.skill}>
      <Image src={icon} alt="" width={42} height={42} />
      <span>{skill}</span>
    </div>
  );
}

function SkillRow({ skills: rowSkills, reverse = false }) {
  return (
    <div className={styles.marquee}>
      <div className={`${styles.track} ${reverse ? styles.reverse : ""}`}>
        {[0, 1].map((copy) => (
          <div className={styles.skillSet} aria-hidden={copy === 1} key={copy}>
            {rowSkills.map((skill) => (
              <SkillTile key={`${copy}-${skill}`} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const skillsWithIcons = skills.filter(getSkillIcon);
  const firstRow = skillsWithIcons.filter((_, index) => index % 2 === 0);
  const secondRow = skillsWithIcons.filter((_, index) => index % 2 === 1);

  return (
    <section className={styles.section} id="skills">
      <SectionHeading align="center" eyebrow="Toolkit" title="Skills" />
      <div className={styles.rows} aria-label="Technical skills">
        <SkillRow skills={firstRow} />
        <SkillRow skills={secondRow} reverse />
      </div>
    </section>
  );
}

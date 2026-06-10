import Image from "next/image";
import { skills } from "@/data/resume";
import { getSkillIcon } from "@/lib/skillIcon";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Skills.module.css";

const skillGroups = [
  {
    title: "Backend Core",
    description: "APIs, data stores, messaging, and service architecture.",
    items: [
      "Node Js",
      "TypeScript",
      "Java",
      "Python",
      "GraphQL",
      "Redis",
      "Kafka",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Frontend Craft",
    description: "Responsive product surfaces with modern React tooling.",
    items: [
      "React Js",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind",
      "MaterialUI",
      "Bootstrap",
      "Angular",
      "StoryBook",
    ],
  },
  {
    title: "Cloud & Delivery",
    description: "Deployment, documentation, and production support tooling.",
    items: [
      "Docker",
      "AWS",
      "GCP",
      "CI-CD",
      "Firebase",
      "Vite Js",
      "FastAPI",
      "Swagger",
      "Git",
    ],
  },
];

function SkillTile({ skill }) {
  const icon = getSkillIcon(skill);

  return (
    <div className={styles.skill}>
      {icon ? (
        <Image src={icon} alt="" width={34} height={34} />
      ) : (
        <span className={styles.fallback}>{skill.charAt(0)}</span>
      )}
      <span>{skill}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <SectionHeading align="center" eyebrow="Toolkit" title="Skills" />
      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <article className={styles.group} key={group.title}>
            <div className={styles.groupHeader}>
              <span>{group.title}</span>
              <p>{group.description}</p>
            </div>
            <div className={styles.groupSkills}>
              {group.items.map((skill) => (
                <SkillTile key={skill} skill={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className={styles.grid} aria-label="Additional skills">
        {skills
          .filter(
            (skill) =>
              !skillGroups.some((group) => group.items.includes(skill)),
          )
          .map((skill) => (
            <SkillTile key={skill} skill={skill} />
          ))}
      </div>
    </section>
  );
}

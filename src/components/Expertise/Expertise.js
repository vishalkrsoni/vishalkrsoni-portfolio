import { ArrowRight, Layers, RadioTower, Rocket, ServerCog } from "lucide-react";
import { deliveryPrinciples, expertise } from "@/data/resume";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import styles from "./Expertise.module.css";

const icons = [ServerCog, Rocket, RadioTower, Layers];

export default function Expertise() {
  return (
    <section className={styles.section} id="expertise">
      <div className={styles.headingRow}>
        <SectionHeading eyebrow="What I Do" title="Engineering That Ships" />
        <p>
          I work best where product thinking and backend depth meet: turning
          fuzzy requirements into systems people can trust, maintain, and scale.
        </p>
      </div>
      <div className={styles.grid}>
        {expertise.map((item, index) => {
          const Icon = icons[index];

          return (
            <article className={styles.card} key={item.title}>
              <Icon size={28} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div>
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
      <div className={styles.principles}>
        {deliveryPrinciples.map((principle) => (
          <div key={principle}>
            <ArrowRight size={18} />
            <span>{principle}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

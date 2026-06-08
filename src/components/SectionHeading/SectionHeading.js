import styles from "./SectionHeading.module.css";

export default function SectionHeading({ eyebrow, title, align = "left" }) {
  const className = [styles.heading, styles[align]].filter(Boolean).join(" ");

  return (
    <div className={className}>
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2>{title}</h2>
    </div>
  );
}

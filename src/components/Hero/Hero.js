import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  Terminal,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiBitbucket, SiGithub, SiGitlab } from "react-icons/si";
import { profile } from "@/data/profile";
import styles from "./Hero.module.css";

const iconMap = {
  GitHub: SiGithub,
  LinkedIn: FaLinkedinIn,
  GitLab: SiGitlab,
  Bitbucket: SiBitbucket,
};

const stack = ["Node.js", "React", "TypeScript", "Redis", "PostgreSQL"];

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.aurora} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <Sparkles size={17} />
          <span>Senior Software Engineer for scalable product teams</span>
        </div>

        <h1>
          Scalable software.
          <span>Clean architecture.</span>
        </h1>

        <p className={styles.tagline}>
          I build MERN products, microservices, and real-time workflows with a
          focus on performance, ownership, and maintainable delivery.
        </p>

        <div className={styles.actions}>
          <a className={styles.primary} href="#contact">
            <Mail size={18} />
            Start a Conversation
          </a>
          <a className={styles.secondary} href={profile.resume} download>
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className={styles.commandCard}>
          <div className={styles.commandHeader}>
            <Terminal size={16} />
            <span>system.profile</span>
          </div>
          <div className={styles.commandBody}>
            <p>
              <strong>focus:</strong> microservices, real-time workflows,
              full-stack delivery
            </p>
            <p>
              <strong>impact:</strong> API latency reduction, service ownership,
              client-facing delivery
            </p>
          </div>
        </div>
      </div>

      <aside className={styles.showcase} aria-label="Profile summary">
        <div className={styles.cardTop}>
          <div>
            <span>Available for</span>
            <strong>Senior Full-Stack / Backend Roles</strong>
          </div>
          <div className={styles.pulse} />
        </div>

        <div className={styles.portraitStage}>
          <div className={styles.ring} />
          <div className={styles.portrait} />
        </div>

        <div className={styles.stack}>
          {stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className={styles.metrics}>
          {profile.metrics.slice(0, 3).map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </aside>

      <div className={styles.socialRail} aria-label="Social links">
        {profile.socials.map((social) => {
          const Icon = iconMap[social.label];

          return (
            <a
              aria-label={social.label}
              data-social={social.label.toLowerCase()}
              href={social.href}
              key={social.label}
              rel="noreferrer"
              target="_blank"
              title={social.label}
            >
              <Icon aria-hidden="true" size={19} />
            </a>
          );
        })}
      </div>

      <a
        className={styles.scrollCue}
        href="#about"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

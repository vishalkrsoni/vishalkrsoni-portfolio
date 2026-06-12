import { FaLinkedinIn } from "react-icons/fa";
import { SiBitbucket, SiGithub, SiGitlab } from "react-icons/si";
import { profile } from "@/data/profile";
import styles from "./Footer.module.css";

const iconMap = {
  GitHub: SiGithub,
  LinkedIn: FaLinkedinIn,
  GitLab: SiGitlab,
  Bitbucket: SiBitbucket,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <div className={styles.socials}>
        {profile.socials.map((social) => {
          const Icon = iconMap[social.label];

          return (
            <a
              aria-label={social.label}
              href={social.href}
              key={social.label}
              rel="noreferrer"
              data-social={social.label.toLowerCase()}
              target="_blank"
              title={social.label}
            >
              <Icon aria-hidden="true" size={19} />
            </a>
          );
        })}
      </div>
    </footer>
  );
}

import { profile } from "@/data/profile";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
      <div>
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
          >
            {social.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

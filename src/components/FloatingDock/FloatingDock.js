import { Download, Mail, UserRound } from "lucide-react";
import { profile } from "@/data/profile";
import styles from "./FloatingDock.module.css";

export default function FloatingDock() {
  return (
    <nav className={styles.dock} aria-label="Quick actions">
      <a href="#about" aria-label="About">
        <UserRound size={18} />
      </a>
      <a href="#contact" aria-label="Contact">
        <Mail size={18} />
      </a>
      <a href={profile.resume} download aria-label="Download resume">
        <Download size={18} />
      </a>
    </nav>
  );
}

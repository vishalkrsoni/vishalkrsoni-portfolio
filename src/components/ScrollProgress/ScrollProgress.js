"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollProgress.module.css";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(nextProgress);
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className={styles.track} aria-hidden="true">
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
}

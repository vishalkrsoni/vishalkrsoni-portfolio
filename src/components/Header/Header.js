"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";
import styles from "./Header.module.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#home" onClick={() => setIsOpen(false)}>
        <Image
          src="/images/app-logo.svg"
          alt="Vishal"
          width={300}
          height={300}
          priority
          className={styles.logo}
        />
      </a>
      <button
        className={styles.menuButton}
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

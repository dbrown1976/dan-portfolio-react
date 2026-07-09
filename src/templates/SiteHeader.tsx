"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./PlaceholderTemplates.module.css";

const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "CV", href: "/cv" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteHeaderInner}>
        <span className={styles.siteName}>Daniel Brown</span>
        <nav aria-label="Primary navigation">
          <ul className={styles.navList}>
            {primaryNavigation.map((item) => {
              const isActive =
                pathname === item.href || (item.href === "/work" && pathname.startsWith("/work/"));

              return (
                <li key={item.href}>
                  <Link
                    aria-current={isActive ? "page" : undefined}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

import Link from "next/link";
import styles from "./PlaceholderTemplates.module.css";

const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" }
] as const;

export function SiteHeader() {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.siteTitle}>
        <span className={styles.siteName}>Daniel Brown</span>
        <span className={styles.siteSubtitle}>Portfolio foundation</span>
      </div>
      <nav aria-label="Primary navigation">
        <ul className={styles.navList}>
          {primaryNavigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

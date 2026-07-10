import type { ReactNode } from "react";
import styles from "./PlaceholderTemplates.module.css";

type PagePlaceholderTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  navigation?: ReactNode;
  children?: ReactNode;
};

export function PagePlaceholderTemplate({
  eyebrow,
  title,
  description,
  navigation,
  children
}: PagePlaceholderTemplateProps) {
  return (
    <main className={styles.page}>
      {navigation}
      <section>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
      </section>
      <p className={styles.description}>{description}</p>
      {children ? <section className={styles.panel}>{children}</section> : null}
    </main>
  );
}

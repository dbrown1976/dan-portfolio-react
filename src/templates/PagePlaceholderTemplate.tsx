import type { ReactNode } from "react";
import styles from "./PlaceholderTemplates.module.css";

type PagePlaceholderTemplateProps = {
  title: string;
  description: string;
  navigation?: ReactNode;
  children?: ReactNode;
};

export function PagePlaceholderTemplate({
  title,
  description,
  navigation,
  children
}: PagePlaceholderTemplateProps) {
  return (
    <main className={styles.page}>
      {navigation}
      <section className={styles.pageHeader}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </section>
      {children ? <section className={styles.panel}>{children}</section> : null}
    </main>
  );
}

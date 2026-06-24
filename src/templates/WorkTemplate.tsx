import Link from "next/link";
import { projects, getProjectDefaultPath } from "@/content/portfolio";
import { PagePlaceholderTemplate } from "./PagePlaceholderTemplate";
import styles from "./PlaceholderTemplates.module.css";

export function WorkTemplate() {
  return (
    <PagePlaceholderTemplate
      eyebrow="Work Template"
      title="Work"
      description="Placeholder work template using the canonical project data. Final project cards and imagery will be built from Figma later."
    >
      <ul className={styles.grid} aria-label="Project placeholders">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={getProjectDefaultPath(project)}>{project.title}</Link>
          </li>
        ))}
      </ul>
    </PagePlaceholderTemplate>
  );
}

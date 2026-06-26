import { ProjectCard } from "@/components/ProjectCard";
import { projects, getProjectDefaultPath, workInProgressThumbnail } from "@/content/portfolio";
import styles from "./WorkTemplate.module.css";

export function WorkTemplate() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Selected work</p>
        <h1 className={styles.title}>Work</h1>
        <p className={styles.description}>
          Product design case studies spanning authoring, design systems, cloud operations, alerts
          and mapping tools.
        </p>
      </header>

      <section aria-labelledby="work-projects-heading" className={styles.section}>
        <h2 className={styles.sectionHeading} id="work-projects-heading">
          Case studies
        </h2>
        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard
                fallbackThumbnailSrc={workInProgressThumbnail.src}
                href={getProjectDefaultPath(project)}
                project={project}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

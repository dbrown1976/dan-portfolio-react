import { hasProjectSectionNavigation, type ProjectRouteResolution } from "@/content/portfolio";
import { ProjectSectionNavigation } from "@/components/ProjectSectionNavigation";
import styles from "./PlaceholderTemplates.module.css";

type ProjectRouteTemplateProps = {
  route: Extract<ProjectRouteResolution, { status: "ok" }>;
};

export function ProjectRouteTemplate({ route }: ProjectRouteTemplateProps) {
  return (
    <main className={`${styles.page} ${styles.projectPage}`}>
      <section className={styles.projectHero} aria-labelledby="project-title">
        <h1 className={styles.title} id="project-title">
          {route.project.title}
        </h1>
      </section>

      {hasProjectSectionNavigation(route.project) ? (
        <ProjectSectionNavigation route={route} />
      ) : null}

      <section className={styles.panel} aria-labelledby="route-state-heading">
        <div className={styles.stack}>
          <h2 className={styles.panelTitle} id="route-state-heading">
            Route state
          </h2>
          <dl className={styles.metadata}>
            <div>
              <dt>Project slug</dt>
              <dd>{route.project.slug}</dd>
            </div>
            <div>
              <dt>Presentation</dt>
              <dd>{route.project.presentation}</dd>
            </div>
            <div>
              <dt>Selected segment</dt>
              <dd>{route.segment.label}</dd>
            </div>
            {route.subsection ? (
              <div>
                <dt>Selected route state</dt>
                <dd>{route.subsection.label}</dd>
              </div>
            ) : null}
            <div>
              <dt>Route kind</dt>
              <dd>{route.routeKind}</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import { hasProjectSectionNavigation, type ProjectRouteResolution } from "@/content/portfolio";
import { ProjectSectionNavigation } from "@/components/ProjectSectionNavigation";
import styles from "./PlaceholderTemplates.module.css";

type ProjectRouteTemplateProps = {
  route: Extract<ProjectRouteResolution, { status: "ok" }>;
};

export function ProjectRouteTemplate({ route }: ProjectRouteTemplateProps) {
  const hasSectionNavigation = hasProjectSectionNavigation(route.project);
  const overviewContent = route.subsection ? undefined : route.segment.overviewContent;

  return (
    <main className={`${styles.page} ${styles.projectPage}`}>
      <section className={styles.projectHero} aria-labelledby="project-title">
        <h1 className={styles.title} id="project-title">
          {route.project.title}
        </h1>
      </section>

      {hasSectionNavigation ? (
        <div className={styles.projectNavigation}>
          <ProjectSectionNavigation route={route} />
        </div>
      ) : null}

      {overviewContent ? (
        <article className={styles.projectContent} aria-label={`${route.project.title} overview`}>
          <div className={styles.standfirst}>
            {overviewContent.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.mediaBlock}>
            <figure className={styles.projectImageFigure}>
              <Image
                alt={overviewContent.heroImage.alt}
                className={styles.projectImage}
                height={overviewContent.heroImage.height}
                priority
                sizes="(max-width: 639px) calc(100vw - 4rem), (max-width: 1199px) calc(100vw - 4rem), 72rem"
                src={overviewContent.heroImage.src}
                width={overviewContent.heroImage.width}
              />
            </figure>

            <p className={styles.metaLine}>{overviewContent.metaLine}</p>
          </div>

          <div className={styles.contentSections}>
            {overviewContent.sections.map((section) => (
              <section className={styles.contentSection} key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      ) : (
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
      )}
    </main>
  );
}

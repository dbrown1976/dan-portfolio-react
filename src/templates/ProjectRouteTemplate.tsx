import type { ProjectRouteResolution } from "@/content/portfolio";
import { PagePlaceholderTemplate } from "./PagePlaceholderTemplate";
import styles from "./PlaceholderTemplates.module.css";

type ProjectRouteTemplateProps = {
  route: Extract<ProjectRouteResolution, { status: "ok" }>;
};

export function ProjectRouteTemplate({ route }: ProjectRouteTemplateProps) {
  const templateName =
    route.segment.template === "projectHome" ? "Project Home Template" : "Project Work Template";

  return (
    <PagePlaceholderTemplate
      eyebrow={templateName}
      title={route.project.title}
      description="Placeholder project route template. Route state is driven by the typed canonical content map; final section content and visual components remain out of scope."
    >
      <div className={styles.stack}>
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
    </PagePlaceholderTemplate>
  );
}

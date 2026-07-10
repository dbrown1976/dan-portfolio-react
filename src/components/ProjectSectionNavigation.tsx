import Link from "next/link";
import type {
  ProjectRouteResolution,
  ProjectSegment,
  ProjectSubsection
} from "@/content/portfolio";
import styles from "./ProjectSectionNavigation.module.css";

type ResolvedProjectRoute = Extract<ProjectRouteResolution, { status: "ok" }>;

type ProjectSectionNavigationProps = {
  route: ResolvedProjectRoute;
};

function getSegmentPath(route: ResolvedProjectRoute, segment: ProjectSegment): string {
  const projectPath = `/work/${route.project.slug}`;
  const firstSubsection = segment.subsections?.[0];

  if (segment.slug === route.project.defaultSegmentSlug) {
    return projectPath;
  }

  return firstSubsection
    ? `${projectPath}/${segment.slug}/${firstSubsection.slug}`
    : `${projectPath}/${segment.slug}`;
}

function getSubsectionPath(route: ResolvedProjectRoute, subsection: ProjectSubsection): string {
  return `/work/${route.project.slug}/${route.segment.slug}/${subsection.slug}`;
}

function hasSubsections(segment: ProjectSegment): boolean {
  return Boolean(segment.subsections?.length);
}

export function ProjectSectionNavigation({ route }: ProjectSectionNavigationProps) {
  const subsections = route.segment.subsections ?? [];

  return (
    <div className={styles.navigation}>
      <nav aria-label={`${route.project.title} sections`}>
        <div className={styles.scrollArea}>
          <ul className={styles.segmentList}>
            {route.project.segments.map((segment) => {
              const isSelected = segment.slug === route.segment.slug;
              const isCurrentPage = isSelected && !route.subsection && !hasSubsections(segment);

              return (
                <li key={segment.slug}>
                  <Link
                    aria-current={isCurrentPage ? "page" : undefined}
                    className={styles.segmentLink}
                    data-selected={isSelected ? "true" : undefined}
                    href={getSegmentPath(route, segment)}
                  >
                    {segment.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {subsections.length > 0 ? (
        <nav aria-label={`${route.segment.label} pages`}>
          <div className={styles.scrollArea}>
            <ul className={styles.subsectionList}>
              {subsections.map((subsection) => {
                const isCurrentPage = route.subsection?.slug === subsection.slug;

                return (
                  <li key={subsection.slug}>
                    <Link
                      aria-current={isCurrentPage ? "page" : undefined}
                      className={styles.subsectionLink}
                      href={getSubsectionPath(route, subsection)}
                    >
                      {subsection.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      ) : null}
    </div>
  );
}

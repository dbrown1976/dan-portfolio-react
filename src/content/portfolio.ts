export type ProjectPresentation = "flagship" | "standard";
export type ProjectTemplate = "projectHome" | "projectWork";

export type ProjectSubsection = {
  readonly label: string;
  readonly slug: string;
};

export type ProjectSegment = {
  readonly label: string;
  readonly slug: string;
  readonly template: ProjectTemplate;
  readonly subsections?: readonly ProjectSubsection[];
};

export type Project = {
  readonly title: string;
  readonly slug: string;
  readonly presentation: ProjectPresentation;
  readonly defaultSegmentSlug: string;
  readonly segments: readonly ProjectSegment[];
};

export const projects = [
  {
    title: "Next Generation Authoring",
    slug: "next-generation-authoring",
    presentation: "flagship",
    defaultSegmentSlug: "overview",
    segments: [
      {
        label: "Overview",
        slug: "overview",
        template: "projectHome"
      },
      {
        label: "Understanding the problem",
        slug: "understanding-the-problem",
        template: "projectWork",
        subsections: [
          { label: "Understanding", slug: "understanding" },
          { label: "Discovery", slug: "discovery" },
          { label: "Direction", slug: "direction" }
        ]
      },
      {
        label: "Building the system",
        slug: "building-the-system",
        template: "projectWork",
        subsections: [
          { label: "Building the system", slug: "building-the-system" },
          { label: "Patterns", slug: "patterns" },
          { label: "Beta", slug: "beta" }
        ]
      },
      {
        label: "Improvements & rollout",
        slug: "improvements-rollout",
        template: "projectWork",
        subsections: [
          { label: "Improvements", slug: "improvements" },
          { label: "Rollout", slug: "rollout" },
          { label: "Reflections", slug: "reflections" }
        ]
      }
    ]
  },
  {
    title: "Design System",
    slug: "design-system",
    presentation: "standard",
    defaultSegmentSlug: "project-summary",
    segments: [
      { label: "Project Summary", slug: "project-summary", template: "projectHome" },
      { label: "Discovery", slug: "discovery", template: "projectWork" },
      {
        label: "Design Language & System",
        slug: "design-language-system",
        template: "projectWork"
      },
      { label: "Execution", slug: "execution", template: "projectWork" }
    ]
  },
  {
    title: "Cloud Event Management",
    slug: "cloud-event-management",
    presentation: "standard",
    defaultSegmentSlug: "project-summary",
    segments: [
      { label: "Project Summary", slug: "project-summary", template: "projectHome" },
      { label: "Research", slug: "research", template: "projectWork" },
      { label: "Creative Process", slug: "creative-process", template: "projectWork" },
      { label: "Execution", slug: "execution", template: "projectWork" }
    ]
  },
  {
    title: "Alert Notification",
    slug: "alert-notification",
    presentation: "standard",
    defaultSegmentSlug: "project-summary",
    segments: [
      { label: "Project Summary", slug: "project-summary", template: "projectHome" },
      { label: "Research", slug: "research", template: "projectWork" },
      { label: "Creative Process", slug: "creative-process", template: "projectWork" },
      { label: "Execution", slug: "execution", template: "projectWork" }
    ]
  },
  {
    title: "Maps",
    slug: "maps",
    presentation: "standard",
    defaultSegmentSlug: "project-summary",
    segments: [
      { label: "Project Summary", slug: "project-summary", template: "projectHome" },
      { label: "Research", slug: "research", template: "projectWork" },
      { label: "Creative Process", slug: "creative-process", template: "projectWork" },
      { label: "Execution", slug: "execution", template: "projectWork" }
    ]
  }
] as const satisfies readonly Project[];

export type PortfolioProject = (typeof projects)[number];
export type ProjectSlug = PortfolioProject["slug"];

export type ProjectRouteResolution =
  | {
      readonly status: "notFound";
    }
  | {
      readonly status: "ok";
      readonly project: PortfolioProject;
      readonly segment: ProjectSegment;
      readonly subsection?: ProjectSubsection;
      readonly slug: readonly string[];
      readonly routeKind: "projectDefault" | "segment" | "subsection";
    };

export function getProjectBySlug(projectSlug: string): PortfolioProject | undefined {
  return projects.find((project) => project.slug === projectSlug);
}

export function getProjectDefaultSegment(project: PortfolioProject): ProjectSegment {
  const segment = project.segments.find(
    (candidate) => candidate.slug === project.defaultSegmentSlug
  );

  if (!segment) {
    throw new Error(`Missing default segment "${project.defaultSegmentSlug}" for ${project.slug}`);
  }

  return segment;
}

export function getProjectDefaultPath(project: PortfolioProject): string {
  return `/work/${project.slug}/${project.defaultSegmentSlug}`;
}

export function resolveProjectRoute(
  projectSlug: string,
  slug: readonly string[] = []
): ProjectRouteResolution {
  const project = getProjectBySlug(projectSlug);

  if (!project || slug.length > 2) {
    return { status: "notFound" };
  }

  if (slug.length === 0) {
    return {
      status: "ok",
      project,
      segment: getProjectDefaultSegment(project),
      slug,
      routeKind: "projectDefault"
    };
  }

  const [segmentSlug, subsectionSlug] = slug;
  const segment = project.segments.find((candidate) => candidate.slug === segmentSlug);

  if (!segment) {
    return { status: "notFound" };
  }

  if (!subsectionSlug) {
    return {
      status: "ok",
      project,
      segment,
      slug,
      routeKind: "segment"
    };
  }

  const subsection = segment.subsections?.find((candidate) => candidate.slug === subsectionSlug);

  if (!subsection) {
    return { status: "notFound" };
  }

  return {
    status: "ok",
    project,
    segment,
    subsection,
    slug,
    routeKind: "subsection"
  };
}

export function getProjectStaticParams(): Array<{ projectSlug: string; slug: string[] }> {
  return projects.flatMap((project) => {
    const params: Array<{ projectSlug: string; slug: string[] }> = [
      { projectSlug: project.slug, slug: [] }
    ];

    for (const segment of project.segments) {
      params.push({ projectSlug: project.slug, slug: [segment.slug] });

      for (const subsection of segment.subsections ?? []) {
        params.push({
          projectSlug: project.slug,
          slug: [segment.slug, subsection.slug]
        });
      }
    }

    return params;
  });
}

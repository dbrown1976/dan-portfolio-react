export type ProjectPresentation = "flagship" | "standard";
export type ProjectTemplate = "projectHome" | "projectWork";

export type ProjectSubsection = {
  readonly label: string;
  readonly slug: string;
};

export type ProjectOverviewSection = {
  readonly heading: string;
  readonly body: string;
};

export type ProjectOverviewContent = {
  readonly intro: readonly string[];
  readonly metaLine: string;
  readonly heroImage: {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
  };
  readonly sections: readonly ProjectOverviewSection[];
};

export type ProjectSegment = {
  readonly label: string;
  readonly slug: string;
  readonly template: ProjectTemplate;
  readonly overviewContent?: ProjectOverviewContent;
  readonly subsections?: readonly ProjectSubsection[];
};

export type Project = {
  readonly title: string;
  readonly slug: string;
  readonly presentation: ProjectPresentation;
  readonly defaultSegmentSlug: string;
  readonly sectionNavigation?: boolean;
  readonly workThumbnail: {
    readonly src: string;
  };
  readonly segments: readonly ProjectSegment[];
};

export const workInProgressThumbnail = {
  src: "/assets/shared/work-wip-card-thumbnail.png"
} as const;

export const projects = [
  {
    title: "Next Generation Authoring",
    slug: "next-generation-authoring",
    presentation: "flagship",
    defaultSegmentSlug: "overview",
    sectionNavigation: true,
    workThumbnail: {
      src: "/assets/projects/next-generation-authoring/work-next-gen-authoring-card-thumbnail.png"
    },
    segments: [
      {
        label: "Overview",
        slug: "overview",
        template: "projectHome",
        overviewContent: {
          intro: [
            "For any content management system, the content form is where much of the product’s value is realised: users create, structure, edit and validate the content that powers digital experiences.",
            "Next Gen Authoring was a multi-year redesign of this core workflow, replacing an ageing form architecture with a scalable, modern authoring experience capable of supporting complex content structures, customer-specific schemas and evolving author expectations.",
            "Because the interface was generated from each customer’s content model, the design challenge was not a single fixed form, but a scalable system of patterns that could make unknown structures usable.",
            "The work resulted in higher comparative usability scores, unanimous preference in testing and full customer migration ahead of GA."
          ],
          metaLine: "Principal UX Designer • Amplience • 2023–26",
          heroImage: {
            src: "/assets/projects/next-generation-authoring/next-generation-authoring-overview-hero.png",
            alt: "Next Generation Authoring interface showing the redesigned content editing experience",
            width: 2112,
            height: 1396
          },
          sections: [
            {
              heading: "Overview",
              body: "This project redesigned the authoring experience in Amplience Dynamic Content so content teams could create, edit and manage complex structured content more easily."
            },
            {
              heading: "The problem",
              body: "The existing experience struggled with deeply nested content models, repeatable fields, validation states and long forms, leaving users unsure where they were in a form and what needed attention."
            },
            {
              heading: "My role",
              body: "I led the product design work, partnered with product and engineering, shaped reusable authoring patterns and connected the work back into the design system."
            },
            {
              heading: "Outcome",
              body: "NGA became the default authoring experience. Customers preferred it in validation, and the work created reusable patterns for complex authoring across the platform."
            }
          ]
        }
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
    workThumbnail: {
      src: "/assets/projects/design-system/work-design-system-card-thumbnail.png"
    },
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
    workThumbnail: {
      src: "/assets/projects/cloud-event-management/work-cloud-event-management-card-thumbnail.png"
    },
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
    workThumbnail: {
      src: "/assets/projects/alert-notification/work-alert-notification-card-thumbnail.png"
    },
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
    workThumbnail: {
      src: "/assets/projects/maps/work-maps-card-thumbnail.png"
    },
    segments: [
      { label: "Project Summary", slug: "project-summary", template: "projectHome" },
      { label: "Research", slug: "research", template: "projectWork" },
      { label: "Creative Process", slug: "creative-process", template: "projectWork" }
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
  return `/work/${project.slug}`;
}

export function hasProjectSectionNavigation(project: Project): boolean {
  return project.sectionNavigation === true;
}

function getSegmentSubsections(segment: ProjectSegment): readonly ProjectSubsection[] {
  return segment.subsections ?? [];
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

  const subsection = getSegmentSubsections(segment).find(
    (candidate) => candidate.slug === subsectionSlug
  );

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

      for (const subsection of getSegmentSubsections(segment)) {
        params.push({
          projectSlug: project.slug,
          slug: [segment.slug, subsection.slug]
        });
      }
    }

    return params;
  });
}

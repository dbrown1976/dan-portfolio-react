import { notFound } from "next/navigation";
import { getProjectStaticParams, resolveProjectRoute } from "@/content/portfolio";
import { ProjectRouteTemplate } from "@/templates/ProjectRouteTemplate";

type ProjectPageProps = {
  params: Promise<{
    projectSlug: string;
    slug?: string[];
  }>;
};

export function generateStaticParams() {
  return getProjectStaticParams();
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectSlug, slug = [] } = await params;
  const route = resolveProjectRoute(projectSlug, slug);

  if (route.status === "notFound") {
    notFound();
  }

  return <ProjectRouteTemplate route={route} />;
}

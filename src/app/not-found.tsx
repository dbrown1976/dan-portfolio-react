import { PagePlaceholderTemplate } from "@/templates/PagePlaceholderTemplate";

export default function NotFoundPage() {
  return (
    <PagePlaceholderTemplate
      title="Route not found"
      description="The requested route is not present in the canonical portfolio route map."
    />
  );
}

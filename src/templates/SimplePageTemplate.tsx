import { PagePlaceholderTemplate } from "./PagePlaceholderTemplate";

type SimplePageTemplateProps = {
  title: string;
};

export function SimplePageTemplate({ title }: SimplePageTemplateProps) {
  return (
    <PagePlaceholderTemplate
      title={title}
      description="Placeholder template only. Final copy, assets, and visual treatment are intentionally out of scope for this scaffold."
    />
  );
}

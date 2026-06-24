import { PagePlaceholderTemplate } from "./PagePlaceholderTemplate";

type SimplePageTemplateProps = {
  title: string;
  templateName: string;
};

export function SimplePageTemplate({ title, templateName }: SimplePageTemplateProps) {
  return (
    <PagePlaceholderTemplate
      eyebrow={templateName}
      title={title}
      description="Placeholder template only. Final copy, assets, and visual treatment are intentionally out of scope for this scaffold."
    />
  );
}

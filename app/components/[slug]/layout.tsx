import { COMPONENT_MAP } from "@/lib/components-registry";
import { notFound } from "next/navigation";

interface ComponentsLayoutProps {
  children: React.ReactNode;
  params: { slug: string } | Promise<{ slug: string }>;
}

export async function generateMetadata(props: ComponentsLayoutProps) {
  const { params } = props;
  const { slug } = await params;
  const componentData = COMPONENT_MAP[slug];

  if (!componentData) {
    return {
      title: "Component Not Found",
      description: "The requested component could not be found",
    };
  }

  return {
    title: componentData.name || componentData.title,
    description:
      componentData.description ||
      `Details for the ${componentData.name || componentData.title} component`,
  };
}

export default async function ComponentPageLayout(
  props: ComponentsLayoutProps
) {
  const { children, params } = props;
  const { slug } = await params;
  const componentData = COMPONENT_MAP[slug];

  if (!componentData) {
    notFound();
  }

  return (
    <div>
      <main className="relative w-full">{children}</main>
    </div>
  );
}

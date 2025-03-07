import React from "react";
import CodeBlock from "@/components/ui/codeblock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentExample, ComponentProp } from "@/types/components";
import { COMPONENT_MAP } from "@/lib/components-registry";

export function generateStaticParams() {
  return Object.keys(COMPONENT_MAP).map((slug: string) => ({
    slug,
  }));
}

interface Props {
  params: {
    slug: string;
  };
}

export default async function SingleComponentPage({ params }: Props) {
  const component = COMPONENT_MAP[params.slug];

  return (
    <div className="space-y-8 pb-12">
      <div className="space-y-2">
        <h1 className="font-heading text-4xl">{component.title}</h1>
        <p className="text-lg text-muted-foreground">{component.description}</p>
      </div>

      {/* Examples Section with Tabs */}
      {component.examples && (
        <div className="space-y-4">
          <h2 className="font-heading text-2xl">Examples</h2>
          <Tabs
            defaultValue={component.examples[0].name.toLowerCase()}
            className="w-full"
          >
            <TabsList className="mb-4">
              {component.examples.map((example: ComponentExample) => (
                <TabsTrigger
                  key={example.name.toLowerCase()}
                  value={example.name.toLowerCase()}
                >
                  {example.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {component.examples.map((example: ComponentExample) => (
              <TabsContent
                key={example.name.toLowerCase()}
                value={example.name.toLowerCase()}
                className="space-y-4"
              >
                <p className="text-muted-foreground">{example.description}</p>
                <div className="rounded-lg border py-5 px-4 flex items-center justify-center mb-4">
                  {React.isValidElement(example.component)
                    ? example.component
                    : typeof example.component === "function"
                    ? React.createElement(example.component, example.props)
                    : example.component}
                </div>
                <div className="w-full">
                  <h2 className="font-heading text-2xl">Usage</h2>

                  <div className="space-y-4">
                    <h3 className="font-heading text-xl">
                      Import and Basic Usage
                    </h3>
                  </div>
                  <CodeBlock code={example.code} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      )}

      {/* Props Section */}
      {component.props && (
        <div className="space-y-4">
          <h2 className="font-heading text-2xl">Props</h2>
          <div className="rounded-lg border">
            <table className="min-w-full">
              <thead>
                <tr className="border-b bg-muted/50">
                  <th className="py-3 px-4 text-left font-medium">Name</th>
                  <th className="py-3 px-4 text-left font-medium">Type</th>
                  <th className="py-3 px-4 text-left font-medium">Default</th>
                  <th className="py-3 px-4 text-left font-medium">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {component.props.map((prop: ComponentProp) => (
                  <tr key={prop.name} className="border-b">
                    <td className="py-3 px-4 font-mono text-sm">{prop.name}</td>
                    <td className="py-3 px-4 font-mono text-sm text-muted-foreground">
                      {prop.type}
                    </td>
                    <td className="py-3 px-4 font-mono text-sm text-muted-foreground">
                      {prop.default}
                    </td>
                    <td className="py-3 px-4 text-sm">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

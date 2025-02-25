import React from "react";
import { notFound } from "next/navigation";
import InfiniteMarquee from "@/components/infinite-marquee";
import CodeBlock from "@/components/ui/codeblock";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ComponentDoc,
  ComponentExample,
  ComponentProp,
} from "@/types/components";

const components: Record<string, ComponentDoc> = {
  "infinite-marquee": {
    title: "Infinite Marquee",
    description: "A component for displaying a continuous scrolling content.",
    usage: `import { InfiniteMarquee } from "@/components/infinite-marquee"

<InfiniteMarquee 
  speed="normal"
  imageWidth={100}
  imageHeight={100}
  pauseOnHover={true}
  scaleOnHover={true}
/>`,
    props: [
      {
        name: "logos",
        type: "Logo[]",
        default: "defaultLogos",
        description: "Array of logo objects to display in the marquee",
      },
      {
        name: "pauseOnHover",
        type: "boolean",
        default: "true",
        description: "Whether to pause the animation on hover",
      },
      {
        name: "speed",
        type: "'slow' | 'normal' | 'fast'",
        default: "'normal'",
        description: "Animation speed of the marquee",
      },
      {
        name: "scaleOnHover",
        type: "boolean",
        default: "true",
        description: "Whether to scale logos on hover",
      },
      {
        name: "imageWidth",
        type: "number",
        default: "100",
        description: "Width of the logo images in pixels",
      },
      {
        name: "imageHeight",
        type: "number",
        default: "100",
        description: "Height of the logo images in pixels",
      },
    ],
    examples: [
      {
        name: "Default",
        description: "Default marquee with normal speed",
        code: `<InfiniteMarquee images={defaultLogos} />`,
        component: (
          <InfiniteMarquee speed="normal" imageWidth={80} imageHeight={80} />
        ),
      },
      {
        name: "Fast Speed",
        description: "Marquee with fast animation speed",
        code: `<InfiniteMarquee speed="fast" />`,
        component: (
          <InfiniteMarquee speed="fast" imageWidth={80} imageHeight={80} />
        ),
      },
      {
        name: "Slow Speed",
        description: "Marquee with slow animation speed",
        code: `<InfiniteMarquee speed="slow" />`,
        component: (
          <InfiniteMarquee speed="slow" imageWidth={80} imageHeight={80} />
        ),
      },
      {
        name: "No Hover Effects",
        description: "Marquee without pause or scale on hover",
        code: `<InfiniteMarquee 
  pauseOnHover={false}
  scaleOnHover={false}
/>`,
        component: (
          <InfiniteMarquee
            speed="normal"
            pauseOnHover={false}
            scaleOnHover={false}
            imageWidth={80}
            imageHeight={80}
          />
        ),
      },
      {
        name: "Small Images",
        description: "Marquee with smaller images",
        code: `<InfiniteMarquee 
  imageWidth={50}
  imageHeight={50}
/>`,
        component: (
          <InfiniteMarquee speed="normal" imageWidth={50} imageHeight={50} />
        ),
      },
    ],
  },
  "slow-marquee": {
    title: "Slow Marquee",
    description: "A component for displaying a slow scrolling content.",
    usage: `import { SlowMarquee } from "@/components/slow-marquee"

<SlowMarquee />`,
    examples: [
      {
        name: "Default",
        description: "Default slow marquee",
        code: `<InfiniteMarquee speed="slow" />`,
        component: (
          <InfiniteMarquee speed="slow" imageWidth={80} imageHeight={80} />
        ),
      },
      {
        name: "With Hover Effects",
        description: "Slow marquee with pause and scale on hover",
        code: `<InfiniteMarquee 
  speed="slow" 
  pauseOnHover={true}
  scaleOnHover={true}
/>`,
        component: (
          <InfiniteMarquee
            speed="slow"
            pauseOnHover={true}
            scaleOnHover={true}
            imageWidth={80}
            imageHeight={80}
          />
        ),
      },
      {
        name: "Smaller Images",
        description: "Slow marquee with smaller images",
        code: `<InfiniteMarquee 
  speed="slow"
  imageWidth={50}
  imageHeight={50}
/>`,
        component: (
          <InfiniteMarquee speed="slow" imageWidth={50} imageHeight={50} />
        ),
      },
    ],
  },
};

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SingleComponentPage({ params }: Props) {
  const resolvedParams = await params;
  const component = components[resolvedParams.slug as keyof typeof components];

  if (!component) {
    notFound();
  }

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
                  {example.component}
                </div>
                <div className="w-full">
                  <h2 className="font-heading text-2xl">Usage</h2>

                  <div className="space-y-4">
                    <h3 className="font-heading text-xl">
                      Import and Basic Usage
                    </h3>
                  </div>
                  <CodeBlock
                    code={`${example.code}

// Define your logos
const defaultLogos = [
  { id: 1, url: "/logos/logo1.png", alt: "Logo 1" },
  { id: 2, url: "/logos/logo2.png", alt: "Logo 2" },
  { id: 3, url: "/logos/logo3.png", alt: "Logo 3" },
  { id: 4, url: "/logos/logo4.png", alt: "Logo 4" },
  { id: 5, url: "/logos/logo5.png", alt: "Logo 5" },
];`}
                  />
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

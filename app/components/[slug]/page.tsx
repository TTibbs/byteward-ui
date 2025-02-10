import React from "react";
import { notFound } from "next/navigation";
import InfiniteMarquee from "@/components/infinite-marquee";
import CodeBlock from "@/components/ui/codeblock";

// Define the available components and their documentation
const components = {
  button: {
    title: "Button",
    description: "A clickable button component with multiple variants.",
    // You can add more documentation details here
    usage: `import { Button } from "@/components/ui/button"

<Button variant="default">
  Click me
</Button>`,
  },
  card: {
    title: "Card",
    description:
      "A container component for displaying content in a card format.",
    usage: `import { Card } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
</Card>`,
  },
  dialog: {
    title: "Dialog",
    description:
      "A modal dialog component for displaying content in an overlay.",
    usage: `import { Dialog } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>`,
  },
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

  const renderPreview = () => {
    switch (resolvedParams.slug) {
      case "infinite-marquee":
        return (
          <div className="w-full flex items-center justify-center">
            <InfiniteMarquee speed="fast" imageWidth={80} imageHeight={80} />
          </div>
        );
      // Add other component cases here as needed
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-heading text-4xl">{component.title}</h1>
        <p className="text-lg text-muted-foreground">{component.description}</p>
      </div>

      {/* Preview Section */}
      <div className="space-y-4">
        <h2 className="font-heading text-2xl">Preview</h2>
        <div className="rounded-lg border py-5 px-4">{renderPreview()}</div>
      </div>

      <div className="space-y-4 w-3/5">
        <h2 className="font-heading text-2xl">Usage</h2>
        <CodeBlock code={component.usage} />
      </div>
      {/* Add more sections like Props, Examples, etc. */}
    </div>
  );
}

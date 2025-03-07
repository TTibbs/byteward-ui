import { ComponentDoc } from "@/types/components";
import InfiniteMarquee from "@/components/infinite-marquee";
import GridBeams from "@/components/grid-beams";
import MacBookKeyboard from "@/components/macbook-keyboard";

export type ComponentRegistry = {
  [key: string]: {
    component: React.ReactNode | React.ComponentType<any>;
    documentation: ComponentDoc;
  };
};

export const COMPONENT_MAP: Record<string, ComponentDoc> = {
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
  "grid-beams": {
    title: "Grid Beams",
    description: "A component for displaying a grid of beams.",
    usage: `import { GridBeams } from "@/components/grid-beams"

<GridHero 
  title="Modern Solutions"
  subtitle="Innovative technology for tomorrow's challenges"
/>`,
    props: [
      {
        name: "title",
        type: "string",
        default: "Modern Solutions",
        description: "Title of the grid beams",
      },
      {
        name: "subtitle",
        type: "string",
        default: "Innovative technology for tomorrow's challenges",
        description: "Subtitle of the grid beams",
      },
      {
        name: "baseSpeed",
        type: "number",
        default: "1.0",
        description: "Base speed of the grid beams",
      },
      {
        name: "maxBeams",
        type: "number",
        default: "14",
        description: "Maximum number of beams",
      },
      {
        name: "initialBeams",
        type: "number",
        default: "10",
        description: "Initial number of beams",
      },
      {
        name: "beamDelay",
        type: "object",
        default: "{ min: 0, max: 200 }",
        description: "Delay configuration for beams",
      },
      {
        name: "defaultPattern",
        type: "string",
        default: "steady",
        description:
          'Default pattern for beams. Use "Steady", "Pulse", or "Accelerate-Decelerate"',
      },
      {
        name: "patternDistribution",
        type: "object",
        default: "{ steady: 0.3, pulse: 0.4, 'accelerate-decelerate': 0.3 }",
        description: "Distribution of patterns. Must sum up to 1.",
      },
      {
        name: "colors",
        type: "string[]",
        default: "['#3B82F6', '#8B5CF6', '#EC4899', '#10B981']",
        description: "Custom colors for beams",
      },
      {
        name: "gridSize",
        type: "number",
        default: "40",
        description: "Size of grid cells in pixels",
      },
    ],
    examples: [
      {
        name: "Default",
        description: "Default grid beams",
        code: `import { GridBeams } from "@/components/grid-beams"
        
<GridBeams
  title="Modern Solutions"
  subtitle="Innovative technology for tomorrow's challenges"
/>`,
        component: (
          <GridBeams
            title="Modern Solutions"
            subtitle="Innovative technology for tomorrow's challenges"
          />
        ),
      },
      {
        name: "E2E Beams",
        description: "No random starting positions",
        code: `import { GridBeams } from "@/components/grid-beams"
        
<GridBeams 
  title="Edge-to-Edge Beams"
  subtitle="Classic grid beam effect starting from edges"
  randomStarts={false} // Start only from edges
  beamLength={{ min: 0.5, max: 0.9 }} // Longer beams
  baseSpeed={0.7} // Slightly slower
/>`,
        component: (
          <GridBeams
            title="Edge-to-Edge Beams"
            subtitle="Classic grid beam effect starting from edges"
            randomStarts={false} // Start only from edges
            beamLength={{ min: 0.5, max: 0.9 }} // Longer beams
            baseSpeed={0.7} // Slightly slower
          />
        ),
      },
      {
        name: "Quick Pulses",
        description: "Short, quick pulses across the grid",
        code: `import { GridBeams } from "@/components/grid-beams"
        
<GridBeams 
  title="Quick Pulses"
  subtitle="Short, quick pulses across the grid"
  randomStarts={true}
  beamLength={{ min: 0.1, max: 0.3 }} // Short beams
  baseSpeed={1.5} // Faster
  defaultPattern="pulse"
  colors={['#60A5FA', '#818CF8', '#A78BFA']} // Blue-purple palette
/>`,
        component: (
          <GridBeams
            title="Quick Pulses"
            subtitle="Short, quick pulses across the grid"
            randomStarts={true}
            beamLength={{ min: 0.1, max: 0.3 }} // Short beams
            baseSpeed={1.5} // Faster
            defaultPattern="pulse"
            colors={["#60A5FA", "#818CF8", "#A78BFA"]} // Blue-purple palette
          />
        ),
      },
      {
        name: "Slow Motion Grid",
        description: "Slow moving beams.",
        code: `import { GridBeams } from "@/components/grid-beams"
    
<GridBeams 
  title="Slow Motion Grid"
  subtitle="Custom animation with slow-moving beams"
  baseSpeed={0.5}
  beamDelay={{ min: 100, max: 500 }}
  defaultPattern="pulse"
  colors={['#60A5FA', '#818CF8', '#A78BFA', '#C084FC']}
  gridSize={50}
/>`,
        component: (
          <GridBeams
            title="Slow Motion Grid"
            subtitle="Custom animation with slow-moving beams"
            baseSpeed={0.5}
            beamDelay={{ min: 100, max: 500 }}
            defaultPattern="pulse"
            colors={["#60A5FA", "#818CF8", "#A78BFA", "#C084FC"]}
            gridSize={50}
          />
        ),
      },
      {
        name: "Mostly Accelerating Beams",
        description: "Beams that accelerate and decelerate.",
        code: `import { GridBeams } from "@/components/grid-beams"

<GridBeams 
  title="Mostly Accelerating Beams"
  subtitle="More accelerate-decelerate pattern beams"
  patternDistribution={{
    steady: 0.2,
    pulse: 0.2,
    'accelerate-decelerate': 0.6
  }}
  initialBeams={15}
  maxBeams={20}
/>`,
        component: (
          <GridBeams
            title="Mostly Accelerating Beams"
            subtitle="More accelerate-decelerate pattern beams"
            patternDistribution={{
              steady: 0.2,
              pulse: 0.2,
              "accelerate-decelerate": 0.6,
            }}
            initialBeams={15}
            maxBeams={20}
          />
        ),
      },
    ],
  },
  "macbook-keyboard": {
    title: "Macbook Keyboard",
    description: "A MacBook Keyboard built using Tailwind CSS",
    usage: `import { MacBookKeyboard } from "@/components/macbook-keyboard"

<MacBookKeyboard />`,
    props: [
      {
        name: "keyColor",
        type: "string",
        default: "bg-gray-900",
        description: "Tailwind class or CSS color value for the keys",
      },
      {
        name: "textColor",
        type: "string",
        default: "text-gray-200",
        description: "Tailwind class or CSS color value for the text",
      },
      {
        name: "glowColor",
        type: "string",
        default: "rgba(102, 187, 255, 0.7)",
        description: "Tailwind class or CSS color value for the glow",
      },
      {
        name: "buttonBgColor",
        type: "string",
        default: "None",
        description: "Tailwind class or CSS color value for the buttons",
      },
      {
        name: "className",
        type: "string",
        default: "None",
        description: "Tailwind class for additional styling",
      },
    ],
    examples: [
      {
        name: "Default",
        description: "MacBook Keyboard",
        code: `import { MacBookKeyboard } from "@/components/macbook-keyboard"
    
<MacBookKeyboard />`,
        component: <MacBookKeyboard />,
      },
      {
        name: "Tailwind Classes",
        description: "Styling the keyboard with Tailwind classes",
        code: `import { MacBookKeyboard } from "@/components/macbook-keyboard"
    
<MacBookKeyboard 
  keyColor="bg-red-500" 
  buttonBgColor="bg-red-600"
  textColor="text-indigo-100" 
  glowColor="rgba(129, 140, 248, 0.7)" />`,
        component: (
          <MacBookKeyboard
            keyColor="bg-red-500"
            buttonBgColor="bg-red-600"
            textColor="text-indigo-100"
            glowColor="rgba(129, 140, 248, 0.7)"
          />
        ),
      },
      {
        name: "CSS Color Values",
        description: "Using direct CSS color values for more flexibility",
        code: `import { MacBookKeyboard } from "@/components/macbook-keyboard"
    
<MacBookKeyboard 
  keyColor="#4a6274" 
  buttonBgColor="#f9ddd2"
  textColor="#000000" 
  glowColor="rgba(226, 232, 240, 0.7)" />`,
        component: (
          <MacBookKeyboard
            keyColor="#4a6274"
            buttonBgColor="#f9ddd2"
            textColor="#000000"
            glowColor="rgba(226, 232, 240, 0.7)"
          />
        ),
      },
      {
        name: "Custom Button Colors",
        description: "Using different colors for keyboard and buttons",
        code: `import { MacBookKeyboard } from "@/components/macbook-keyboard"
    
<MacBookKeyboard 
  keyColor="#F5D042"
  buttonBgColor="#0A174E" 
  textColor="white" 
  glowColor="rgba(124, 58, 237, 0.7)" />`,
        component: (
          <MacBookKeyboard
            keyColor="#F5D042"
            buttonBgColor="#0A174E"
            textColor="white"
            glowColor="rgba(124, 58, 237, 0.7)"
          />
        ),
      },
      {
        name: "Colorful Buttons",
        description: "Vibrant customization with different button color",
        code: `import { MacBookKeyboard } from "@/components/macbook-keyboard"
    
<MacBookKeyboard 
  keyColor="#2d1b4e" 
  buttonBgColor="#6d28d9" 
  textColor="white" 
  glowColor="rgba(124, 58, 237, 0.7)" />`,
        component: (
          <MacBookKeyboard
            keyColor="#2d1b4e"
            buttonBgColor="#00B606"
            textColor="white"
            glowColor="rgba(124, 58, 237, 0.7)"
          />
        ),
      },
    ],
  },
  // Note to self, it's here to add more components
};

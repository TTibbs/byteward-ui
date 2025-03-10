import { ComponentDoc } from "@/types/components";
import InfiniteMarquee from "@/components/infinite-marquee";
import GridBeams from "@/components/grid-beams";
import MacBookKeyboard from "@/components/macbook-keyboard";
import InfiniteCardMarquee, {
  CardItem,
} from "@/components/infinite-card-marquee";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PerspectiveCard } from "@/components/perspective-card";

export type ComponentRegistry = {
  [key: string]: {
    component: React.ReactNode | React.ComponentType<any>;
    documentation: ComponentDoc;
  };
};

// Default cards for the infinite card marquee examples
const defaultCards: CardItem[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern frontend solutions",
    content: (
      <div className="p-2">
        <p className="text-sm">
          Our team specializes in building responsive and accessible web
          applications using the latest technologies.
        </p>
      </div>
    ),
    footer: (
      <div className="flex justify-between w-full">
        <Badge variant="outline">React</Badge>
        <Badge variant="outline">Next.js</Badge>
      </div>
    ),
  },
  {
    id: 2,
    title: "Mobile Apps",
    description: "Cross-platform development",
    content: (
      <div className="p-2">
        <p className="text-sm">
          We create native-like mobile experiences that work seamlessly across
          both iOS and Android platforms.
        </p>
      </div>
    ),
    footer: (
      <div className="flex justify-between w-full">
        <Badge variant="outline">React Native</Badge>
        <Badge variant="outline">Flutter</Badge>
      </div>
    ),
  },
  {
    id: 3,
    title: "Backend Services",
    description: "Scalable API solutions",
    content: (
      <div className="p-2">
        <p className="text-sm">
          Our backend services are built to scale, with robust APIs and
          efficient database designs.
        </p>
      </div>
    ),
    footer: (
      <div className="flex justify-between w-full">
        <Badge variant="outline">Node.js</Badge>
        <Badge variant="outline">Python</Badge>
      </div>
    ),
  },
  {
    id: 4,
    title: "DevOps",
    description: "CI/CD and deployment",
    content: (
      <div className="p-2">
        <p className="text-sm">
          We implement automated testing and deployment pipelines to ensure
          consistent and reliable software delivery.
        </p>
      </div>
    ),
    footer: (
      <div className="flex justify-between w-full">
        <Badge variant="outline">Docker</Badge>
        <Badge variant="outline">Kubernetes</Badge>
      </div>
    ),
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "User-centered interfaces",
    content: (
      <div className="p-2">
        <p className="text-sm">
          Our design team creates intuitive and visually appealing interfaces
          with a focus on user experience.
        </p>
      </div>
    ),
    footer: (
      <div className="flex justify-between w-full">
        <Badge variant="outline">Figma</Badge>
        <Badge variant="outline">Adobe XD</Badge>
      </div>
    ),
  },
];

// Testimonial cards for examples
const testimonialCards: CardItem[] = [
  {
    id: 1,
    title: "Exceptional Quality",
    description: "ByteWard Solutions transformed our business operations.",
    content: (
      <div className="space-y-2 p-2">
        <p className="text-sm">
          "The team at ByteWard Solutions delivered beyond our expectations.
          Their attention to detail and commitment to quality is unmatched in
          the industry."
        </p>
        <div className="flex items-center gap-2 pt-2">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
            JD
          </div>
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">CTO, TechCorp</p>
          </div>
        </div>
      </div>
    ),
    footer: (
      <div className="flex justify-between w-full">
        <Badge variant="outline">Software Development</Badge>
        <span className="text-xs text-muted-foreground">⭐⭐⭐⭐⭐</span>
      </div>
    ),
  },
  {
    id: 2,
    title: "Innovative Solutions",
    description: "Cutting-edge technology implementation",
    content: (
      <div className="space-y-2 p-2">
        <p className="text-sm">
          "ByteWard provided innovative solutions that helped us stay ahead of
          our competition. Their strategic approach to problem-solving is
          refreshing."
        </p>
        <div className="flex items-center gap-2 pt-2">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
            JS
          </div>
          <div>
            <p className="text-sm font-medium">Jane Smith</p>
            <p className="text-xs text-muted-foreground">CEO, InnovateTech</p>
          </div>
        </div>
      </div>
    ),
    footer: (
      <div className="flex justify-between w-full">
        <Badge variant="outline">AI Integration</Badge>
        <span className="text-xs text-muted-foreground">⭐⭐⭐⭐⭐</span>
      </div>
    ),
  },
  {
    id: 3,
    title: "Reliable Support",
    description: "24/7 customer assistance",
    content: (
      <div className="space-y-2 p-2">
        <p className="text-sm">
          "The support team at ByteWard is always available and quick to
          respond. They've saved us from critical situations multiple times."
        </p>
        <div className="flex items-center gap-2 pt-2">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
            RJ
          </div>
          <div>
            <p className="text-sm font-medium">Robert Johnson</p>
            <p className="text-xs text-muted-foreground">
              IT Director, Enterprise Co.
            </p>
          </div>
        </div>
      </div>
    ),
    footer: (
      <div className="flex justify-between w-full">
        <Badge variant="outline">Technical Support</Badge>
        <span className="text-xs text-muted-foreground">⭐⭐⭐⭐⭐</span>
      </div>
    ),
  },
];

// Product cards for examples
const productCards: CardItem[] = [
  {
    id: 1,
    title: "Analytics Dashboard",
    description: "$1999",
    content: (
      <div className="p-4 flex flex-col items-center">
        <div className="w-20 h-20 bg-primary/10 rounded-md flex items-center justify-center mb-2">
          <svg
            className="w-12 h-12 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
            />
          </svg>
        </div>
        <p className="text-sm text-muted-foreground">
          Gain insights with interactive reports and custom metrics.
        </p>
      </div>
    ),
    footer: <Button className="w-full">Purchase Now</Button>,
    className: "border-primary/10",
  },
  {
    id: 2,
    title: "CRM Solution",
    description: "$2499",
    content: (
      <div className="p-4 flex flex-col items-center">
        <div className="w-20 h-20 bg-primary/10 rounded-md flex items-center justify-center mb-2">
          <svg
            className="w-12 h-12 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <p className="text-sm text-muted-foreground">
          Manage customer relationships with our comprehensive CRM tool.
        </p>
      </div>
    ),
    footer: <Button className="w-full">Purchase Now</Button>,
    className: "border-primary/10",
  },
  {
    id: 3,
    title: "Project Management",
    description: "$1799",
    content: (
      <div className="p-4 flex flex-col items-center">
        <div className="w-20 h-20 bg-primary/10 rounded-md flex items-center justify-center mb-2">
          <svg
            className="w-12 h-12 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
        </div>
        <p className="text-sm text-muted-foreground">
          Track projects, assign tasks, and monitor progress efficiently.
        </p>
      </div>
    ),
    footer: <Button className="w-full">Purchase Now</Button>,
    className: "border-primary/10",
  },
];

// Social media post cards for examples
const socialPosts: CardItem[] = [
  {
    id: 1,
    content: (
      <div className="space-y-3 p-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
            JD
          </div>
          <div>
            <p className="text-sm font-medium">Jessica Davis</p>
            <p className="text-xs text-muted-foreground">@jdavis • 2h ago</p>
          </div>
        </div>
        <p className="text-sm">
          Just launched our new dashboard interface! After months of user
          research and testing, I'm thrilled with how it turned out. Check out
          the case study on our website. #UXDesign #ProductLaunch
        </p>
        <div className="rounded-md overflow-hidden bg-muted/30 aspect-video flex items-center justify-center">
          <svg
            className="w-12 h-12 text-muted-foreground/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
    ),
    footer: (
      <div className="flex justify-between items-center w-full px-2 py-1 text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs">128</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-xs">24</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="text-xs">8</span>
          </div>
        </div>
        <div>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="space-y-3 p-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
            MK
          </div>
          <div>
            <p className="text-sm font-medium">Michael Kim</p>
            <p className="text-xs text-muted-foreground">@mikekim • 5h ago</p>
          </div>
        </div>
        <p className="text-sm">
          Excited to share that I'll be speaking at the ByteWard Tech Conference
          next month about the future of AI in design tools. Looking forward to
          connecting with everyone there! #ByteWardConf #AIDesign
        </p>
      </div>
    ),
    footer: (
      <div className="flex justify-between items-center w-full px-2 py-1 text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-red-500 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs">256</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-xs">42</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="text-xs">16</span>
          </div>
        </div>
        <div>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="space-y-3 p-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-semibold">
            SL
          </div>
          <div>
            <p className="text-sm font-medium">Sarah Lee</p>
            <p className="text-xs text-muted-foreground">@sarahlee • 8h ago</p>
          </div>
        </div>
        <p className="text-sm">
          Just completed a 30-day coding challenge! Built 30 micro-apps using
          different frameworks. Learned so much about React, Vue, and Svelte.
          Check out my GitHub for the code. #CodingChallenge #WebDev
        </p>
        <div className="rounded-md overflow-hidden bg-muted/30 aspect-video flex items-center justify-center">
          <svg
            className="w-12 h-12 text-muted-foreground/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
      </div>
    ),
    footer: (
      <div className="flex justify-between items-center w-full px-2 py-1 text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs">312</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-xs">58</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="text-xs">24</span>
          </div>
        </div>
        <div>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    content: (
      <div className="space-y-3 p-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-semibold">
            RT
          </div>
          <div>
            <p className="text-sm font-medium">Ryan Thompson</p>
            <p className="text-xs text-muted-foreground">
              @ryanthompson • 12h ago
            </p>
          </div>
        </div>
        <p className="text-sm">
          Spent the weekend refactoring our authentication system. Reduced
          bundle size by 30% and cut login time in half! Sometimes it's worth
          taking a step back to improve what you already have. #Optimization
          #WebPerformance
        </p>
      </div>
    ),
    footer: (
      <div className="flex justify-between items-center w-full px-2 py-1 text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs">189</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-xs">32</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="text-xs">14</span>
          </div>
        </div>
        <div>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    content: (
      <div className="space-y-3 p-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-semibold">
            AP
          </div>
          <div>
            <p className="text-sm font-medium">Alex Parker</p>
            <p className="text-xs text-muted-foreground">
              @alexparker • 1d ago
            </p>
          </div>
        </div>
        <p className="text-sm">
          Just published my new course on advanced React patterns! Covers
          compound components, render props, controlled components, and more.
          Use code BYTEWARD for 20% off! #ReactJS #WebDevelopment
        </p>
        <div className="rounded-md overflow-hidden bg-muted/30 aspect-video flex items-center justify-center">
          <svg
            className="w-12 h-12 text-muted-foreground/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    ),
    footer: (
      <div className="flex justify-between items-center w-full px-2 py-1 text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span className="text-xs">274</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-xs">51</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="text-xs">38</span>
          </div>
        </div>
        <div>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
      </div>
    ),
  },
];

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
        default: "",
        description: "Additional classes for the card.",
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
        name: "CSS Colours",
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
            glowColor="rgba(129, 140, 248, 0.7)"
          />
        ),
      },
      {
        name: "Raw HTML Colours",
        description: "Using raw HTML color values",
        code: `import { MacBookKeyboard } from "@/components/macbook-keyboard"
    
<MacBookKeyboard 
  keyColor="white"
  buttonBgColor="green" 
  textColor="white" 
  glowColor="rgba(124, 58, 237, 0.7)" />`,
        component: (
          <MacBookKeyboard
            keyColor="white"
            buttonBgColor="green"
            textColor="white"
            glowColor="rgba(124, 58, 237, 0.7)"
          />
        ),
      },
    ],
  },
  "infinite-card-marquee": {
    title: "Infinite Card Marquee",
    description:
      "A component for displaying cards in a continuous scrolling carousel.",
    usage: `import InfiniteCardMarquee, { CardItem } from "@/components/infinite-card-marquee"

const cards: CardItem[] = [
  {
    id: 1,
    title: "Card Title",
    description: "Card description",
    content: <p>Card content goes here</p>,
    footer: <p>Card footer content</p>,
  },
  // More cards...
]

<InfiniteCardMarquee 
  cards={cards}
  pauseOnHover={true}
  scaleOnHover={true}
  speed="normal"
  direction="left"
  cardWidth={300}
  gap={16}
/>`,
    props: [
      {
        name: "cards",
        type: "CardItem[]",
        default: "Required",
        description: "Array of card items to display",
      },
      {
        name: "pauseOnHover",
        type: "boolean",
        default: "true",
        description: "Whether to pause the animation on hover",
      },
      {
        name: "scaleOnHover",
        type: "boolean",
        default: "true",
        description: "Whether to scale cards on hover",
      },
      {
        name: "speed",
        type: '"slow" | "normal" | "fast"',
        default: '"normal"',
        description: "Speed of the animation",
      },
      {
        name: "direction",
        type: '"left" | "right"',
        default: '"left"',
        description: "Direction of the animation",
      },
      {
        name: "cardWidth",
        type: "number | string",
        default: "300",
        description: "Width of the cards",
      },
      {
        name: "cardHeight",
        type: "number | string",
        default: '"auto"',
        description: "Height of the cards",
      },
      {
        name: "gap",
        type: "number",
        default: "16",
        description: "Gap between cards in pixels",
      },
      {
        name: "className",
        type: "string",
        default: "None",
        description: "Tailwind class for additional styling",
      },
      {
        name: "cardClassName",
        type: "string",
        default: "None",
        description: "Tailwind class for additional card styling",
      },
      {
        name: "duplicates",
        type: "number",
        default: "2",
        description: "Number of duplicates to display",
      },
      {
        name: "autoFill",
        type: "boolean",
        default: "false",
        description: "Automatically add enough duplicates to fill the screen",
      },
    ],
    examples: [
      {
        name: "Default",
        description: "Default infinite card marquee",
        code: `import InfiniteCardMarquee, { CardItem } from "@/components/infinite-card-marquee"

<InfiniteCardMarquee cards={defaultCards} />`,
        component: <InfiniteCardMarquee cards={defaultCards} />,
      },
      {
        name: "Testimonials",
        description: "Using the component to display customer testimonials",
        code: `import InfiniteCardMarquee, { CardItem } from "@/components/infinite-card-marquee"

<InfiniteCardMarquee 
  cards={testimonialCards} 
  cardWidth={350}
  speed="slow"
  direction="right"
  pauseOnHover={true}
  scaleOnHover={true}
  gap={24}
/>`,
        component: (
          <InfiniteCardMarquee
            cards={testimonialCards}
            cardWidth={350}
            speed="slow"
            direction="right"
            pauseOnHover={true}
            scaleOnHover={true}
            gap={24}
          />
        ),
      },
      {
        name: "Product Showcase",
        description: "Right-to-left animation for product display",
        code: `import InfiniteCardMarquee, { CardItem } from "@/components/infinite-card-marquee"

<InfiniteCardMarquee 
  cards={productCards} 
  cardWidth={280}
  cardHeight={400}
  speed="normal"
  direction="left"
  pauseOnHover={true}
  scaleOnHover={true}
  gap={20}
/>`,
        component: (
          <InfiniteCardMarquee
            cards={productCards}
            cardWidth={280}
            cardHeight={400}
            speed="normal"
            direction="left"
            pauseOnHover={true}
            scaleOnHover={true}
            gap={20}
          />
        ),
      },
      {
        name: "Fast AutoFill",
        description: "Fast-moving cards with automatic filling",
        code: `import InfiniteCardMarquee, { CardItem } from "@/components/infinite-card-marquee"

<InfiniteCardMarquee 
  cards={defaultCards} 
  cardWidth={250}
  speed="fast"
  direction="right"
  pauseOnHover={true}
  scaleOnHover={false}
  gap={16}
  autoFill={true}
  cardClassName="bg-zinc-100/5 border-zinc-100/20"
/>`,
        component: (
          <InfiniteCardMarquee
            cards={defaultCards}
            cardWidth={250}
            speed="fast"
            direction="right"
            pauseOnHover={true}
            scaleOnHover={false}
            gap={16}
            autoFill={true}
            cardClassName="bg-zinc-100 border-zinc-100"
          />
        ),
      },
    ],
  },
  "perspective-card": {
    title: "Perspective Card",
    description: "A component for displaying cards in a perspective view.",
    usage: `import { PerspectiveCard } from "@/components/perspective-card"

<PerspectiveCard
  title="Card Title"
  description="Card description"
  image="/your-image.jpg"
/>`,
    props: [
      {
        name: "title",
        type: "string",
        default: "Required",
        description: "Title of the card",
      },
      {
        name: "description",
        type: "string",
        default: "Required",
        description: "Description of the card",
      },
      {
        name: "image",
        type: "string",
        default: "Required",
        description: "URL of the card image (local or remote)",
      },
      {
        name: "className",
        type: "string",
        default: "",
        description:
          "Tailwind classes for styling the card. These will properly override base styles using tailwind-merge.",
      },
      {
        name: "cardStyle",
        type: "React.CSSProperties",
        default: "{}",
        description:
          "Inline styles to apply directly to the card. Useful for custom shadows, animations, or complex styling.",
      },
      {
        name: "bgColor",
        type: "string",
        default: "",
        description:
          "Direct background color value (hex, rgb, etc.) for the card. Alternative to Tailwind bg-* classes.",
      },
      {
        name: "borderColor",
        type: "string",
        default: "",
        description:
          "Direct border color value (hex, rgb, etc.) for the card. Alternative to Tailwind border-* classes.",
      },
      {
        name: "titleColor",
        type: "string",
        default: "",
        description:
          "Direct text color value (hex, rgb, etc.) for the title. Alternative to Tailwind text-* classes.",
      },
      {
        name: "descriptionColor",
        type: "string",
        default: "",
        description:
          "Direct text color value (hex, rgb, etc.) for the description. Alternative to Tailwind text-* classes.",
      },
      {
        name: "cardHeaderClassName",
        type: "string",
        default: "",
        description:
          "Tailwind classes for styling the card header. These will properly override base styles using tailwind-merge.",
      },
      {
        name: "cardTitleClassName",
        type: "string",
        default: "",
        description:
          "Tailwind classes for styling the card title. These will properly override base styles using tailwind-merge.",
      },
      {
        name: "cardContentClassName",
        type: "string",
        default: "",
        description:
          "Tailwind classes for styling the card content. These will properly override base styles using tailwind-merge.",
      },
      {
        name: "imageContainerClassName",
        type: "string",
        default: "",
        description:
          "Tailwind classes for styling the image container. These will properly override base styles using tailwind-merge.",
      },
      {
        name: "overlayClassName",
        type: "string",
        default: "",
        description:
          "Tailwind classes for styling the gradient overlay. These will properly override base styles using tailwind-merge.",
      },
      {
        name: "descriptionClassName",
        type: "string",
        default: "",
        description:
          "Tailwind classes for styling the description. These will properly override base styles using tailwind-merge.",
      },
      {
        name: "rotationIntensity",
        type: "number",
        default: "10",
        description:
          "How much the card rotates on hover (higher = more rotation)",
      },
      {
        name: "disablePerspective",
        type: "boolean",
        default: "false",
        description: "Disables the 3D perspective effect",
      },
    ],
    examples: [
      {
        name: "Default",
        description: "Default perspective card",
        code: `import { PerspectiveCard } from "@/components/perspective-card"

<PerspectiveCard
  title="Card Title"
  description="Card description"
  image="/images/example.jpg"
/>`,
        component: (
          <PerspectiveCard
            title="Card Title"
            description="Card description"
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
          />
        ),
      },
      {
        name: "Custom Styling",
        description: "Custom styling for the card",
        code: `import { PerspectiveCard } from "@/components/perspective-card"

<PerspectiveCard
  title="Custom Styled Card"
  description="This has custom styles for various parts"
  image="/images/example.jpg"
  className="rounded-xl border-none"
  cardHeaderClassName="pb-2"
  cardTitleClassName="text-2xl font-bold text-red-500"
  descriptionClassName="italic text-blue-400"
/>`,
        component: (
          <PerspectiveCard
            title="Custom Styled Card"
            description="This has custom styles for various parts"
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
            className="rounded-xl border-none"
            cardHeaderClassName="pb-2"
            cardTitleClassName="text-2xl font-bold text-red-500"
            descriptionClassName="italic text-blue-400"
          />
        ),
      },
      {
        name: "Custom Colours",
        description: "Custom colours for the card using direct color props",
        code: `import { PerspectiveCard } from "@/components/perspective-card"

<PerspectiveCard
  title="Custom Colours"
  description="Using direct color props"
  image="/images/example.jpg"
  bgColor="#10b981" // Using direct color prop for background
  titleColor="#ef4444" // Direct color prop for title
  descriptionColor="#3b82f6" // Direct color prop for description
/>`,
        component: (
          <PerspectiveCard
            title="Custom Colours"
            description="Using direct color props"
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
            bgColor="#10b981" // Emerald-500 as direct color
            titleColor="#ef4444" // Red-500 as direct color
            descriptionColor="#3b82f6" // Blue-500 as direct color
          />
        ),
      },
      {
        name: "Tailwind Color Classes",
        description: "Using Tailwind color classes with tailwind-merge",
        code: `import { PerspectiveCard } from "@/components/perspective-card"

<PerspectiveCard
  title="Tailwind Colors"
  description="Using Tailwind color utilities"
  image="/images/example.jpg"
  className="bg-blue-500 border-yellow-500 border-2"
  cardTitleClassName="text-yellow-300 font-bold"
  descriptionClassName="text-white"
/>`,
        component: (
          <PerspectiveCard
            title="Tailwind Colors"
            description="Using Tailwind color utilities"
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
            className="bg-blue-500 border-yellow-500 border-2"
            cardTitleClassName="text-yellow-300 font-bold"
            descriptionClassName="text-white"
          />
        ),
      },
      {
        name: "Multiple Styling Options",
        description: "Different ways to style the PerspectiveCard",
        code: `import { PerspectiveCard } from "@/components/perspective-card"

<PerspectiveCard
  title="Combined Styling"
  description="Mix of Tailwind and custom styles"
  image="/images/example.jpg"
  className="rounded-none border-4 border-indigo-500 bg-indigo-50"
  cardStyle={{ boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.5)' }}
  imageContainerClassName="h-32" // Custom height
  cardHeaderClassName="pb-1"
  cardTitleClassName="text-indigo-700 font-bold"
  overlayClassName="from-indigo-900/70"
/>`,
        component: (
          <PerspectiveCard
            title="Combined Styling"
            description="Mix of Tailwind and custom styles"
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
            className="rounded-none border-4 border-indigo-500 bg-indigo-50"
            cardStyle={{
              boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.5)",
            }}
            imageContainerClassName="h-32"
            cardHeaderClassName="pb-1"
            cardTitleClassName="text-indigo-700 font-bold"
            overlayClassName="from-indigo-900/70"
          />
        ),
      },
      {
        name: "Disable Perspective",
        description: "Disable the perspective effect",
        code: `import { PerspectiveCard } from "@/components/perspective-card"

<PerspectiveCard
  title="No Perspective"
  description="This has the perspective effect disabled"
  image="/images/example.jpg"
  disablePerspective={true}
/>`,
        component: (
          <PerspectiveCard
            title="No Perspective"
            description="This has the perspective effect disabled"
            image="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop"
            disablePerspective={true}
          />
        ),
      },
    ],
  },
  // Note to self, it's here to add more components
};

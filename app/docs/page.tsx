import CodeBlock from "@/components/ui/codeblock";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DocsPage() {
  return (
    <main className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            ByteWard Component Library
          </h1>
          <p className="text-xl text-muted-foreground">
            Copy and paste beautiful UI components for your next project.
          </p>
        </div>
      </div>

      <div className="mt-4">
        <Link href="https://github.com/byteward-ui" target="_blank">
          <Button variant="outline">
            GitHub <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <hr className="my-8" />

      <div className="prose max-w-none space-y-8">
        <section>
          <h2 className="font-heading text-3xl">How It Works</h2>
          <p>
            ByteWard is a copy-paste component library built with React,
            Next.js, and Tailwind CSS. No installation required - just browse
            our component catalog, copy the code, and paste it into your
            project.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>1. Browse</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Explore our collection of pre-built components in the
                  components section.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Copy</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Copy the component code directly or use the copy button on
                  code examples.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Paste</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Paste the code into your React/Next.js project and make any
                  needed adjustments.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Customize</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Easily modify components using Tailwind CSS classes to match
                  your design system.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-3xl">Featured Components</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Link href="/components/infinite-marquee" className="no-underline">
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    Infinite Marquee
                    <Badge className="ml-2" variant="outline">
                      Popular
                    </Badge>
                  </CardTitle>
                  <CardDescription>
                    A smooth scrolling content display
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[120px] rounded-md border bg-muted flex items-center justify-center">
                    {/* Component preview would go here */}
                    <p className="text-center text-sm text-muted-foreground">
                      Marquee Preview
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    View component →
                  </p>
                </CardFooter>
              </Card>
            </Link>

            <Link href="/components/grid-beams" className="no-underline">
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <CardTitle>Grid Beams</CardTitle>
                  <CardDescription>
                    Animated grid of beams with multiple patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[120px] rounded-md border bg-muted flex items-center justify-center">
                    {/* Component preview would go here */}
                    <p className="text-center text-sm text-muted-foreground">
                      Grid Beams Preview
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground">
                    View component →
                  </p>
                </CardFooter>
              </Card>
            </Link>
          </div>

          <div className="mt-6 flex justify-center">
            <Link href="/components">
              <Button variant="outline">
                View All Components <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-3xl">Example Usage</h2>
          <p>Here's how easy it is to use our components in your project:</p>

          <Tabs defaultValue="example1" className="mt-6">
            <TabsList>
              <TabsTrigger value="example1">Infinite Marquee</TabsTrigger>
              <TabsTrigger value="example2">Grid Beams</TabsTrigger>
            </TabsList>
            <TabsContent value="example1" className="mt-4 space-y-4">
              <div className="rounded-lg border bg-card p-4">
                <CodeBlock
                  code={`import { InfiniteMarquee } from "@/components/infinite-marquee"

function MyPage() {
  return (
    <section className="py-12">
      <h2 className="text-center text-3xl font-bold mb-8">Our Partners</h2>
      <InfiniteMarquee 
        speed="normal"
        imageWidth={100}
        imageHeight={100}
        pauseOnHover={true}
        scaleOnHover={true}
      />
    </section>
  )
}`}
                />
              </div>
            </TabsContent>
            <TabsContent value="example2" className="mt-4 space-y-4">
              <div className="rounded-lg border bg-card p-4">
                <CodeBlock
                  code={`import { GridBeams } from "@/components/grid-beams"

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <GridBeams
        title="Modern Solutions"
        subtitle="Innovative technology for tomorrow's challenges"
        baseSpeed={1.2}
        maxBeams={16}
        colors={['#3B82F6', '#8B5CF6', '#EC4899', '#10B981']}
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Your Brand</h1>
          <p className="text-xl mb-8">Building the future, one pixel at a time</p>
          <button className="px-6 py-3 bg-primary text-white rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}`}
                />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section>
          <h2 className="font-heading text-3xl">Technology Stack</h2>
          <p>
            Our component library is built with modern technologies to ensure
            compatibility, performance, and developer experience.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-2">React & Next.js</h3>
              <p className="text-sm text-muted-foreground">
                Built for modern React applications with full Next.js
                compatibility.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-2">Tailwind CSS</h3>
              <p className="text-sm text-muted-foreground">
                Styled with Tailwind for easy customization and consistency.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-2">shadcn/ui</h3>
              <p className="text-sm text-muted-foreground">
                Leverages shadcn/ui components for beautiful, accessible UI
                elements.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-heading text-3xl">Contributing</h2>
          <p>
            We welcome contributions from the community! Whether it's adding new
            components, improving existing ones, or fixing bugs:
          </p>
          <ul>
            <li>Fork our GitHub repository</li>
            <li>Create a new branch for your feature</li>
            <li>Submit a pull request with your changes</li>
            <li>Share feedback and suggestions</li>
          </ul>
        </section>

        <section>
          <h2 className="font-heading text-3xl">Support</h2>
          <p>Need help? Here are some ways to get support:</p>
          <ul>
            <li>Browse our component documentation</li>
            <li>Open an issue on GitHub</li>
            <li>Join our Discord community</li>
            <li>Follow us on Twitter for updates</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

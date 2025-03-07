import CodeBlock from "@/components/ui/codeblock";

export default function DocsPage() {
  return (
    <main className="container max-w-3xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Documentation
          </h1>
          <p className="text-xl text-muted-foreground">
            Build your next project faster with our component library.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="prose max-w-none space-y-8">
        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to our component library documentation. This library
            provides a comprehensive set of reusable components built with
            React, Next.js, and Tailwind CSS. Our components are designed to be
            flexible, accessible, and easy to integrate into your projects.
          </p>
        </section>

        <section>
          <h3>Key Features</h3>
          <ul>
            <li>Built with React and Next.js</li>
            <li>Styled with Tailwind CSS</li>
            <li>Accessible components</li>
            <li>Dark mode support</li>
            <li>TypeScript ready</li>
            <li>Responsive design</li>
            <li>Customizable themes</li>
            <li>Regular updates and maintenance</li>
          </ul>
        </section>

        <section>
          <h2>Getting Started</h2>
          <h3>Installation</h3>
          <p>Install the library using your preferred package manager:</p>
          <CodeBlock
            code={`npm install @your-library/components # or yarn add @your-library/components`}
          />

          <h3>Basic Usage</h3>
          <p>Import and use components in your React application:</p>
          <CodeBlock
            code={`import { InfiniteMarquee } from "@your-library/components"

function MyComponent() {
  return (
    <InfiniteMarquee />
  )
}
`}
          />
        </section>

        <section>
          <h2>Core Concepts</h2>
          <p>
            Our component library is built on several core principles that
            ensure consistency, accessibility, and ease of use:
          </p>
          <ul>
            <li>
              <strong>Composition First:</strong> Components are designed to be
              combined and nested to create complex interfaces
            </li>
            <li>
              <strong>Accessibility:</strong> Built following WCAG guidelines
              and tested with screen readers
            </li>
            <li>
              <strong>Customization:</strong> Extensive theming support through
              Tailwind CSS and CSS variables
            </li>
          </ul>
        </section>

        <section>
          <h2>Component Categories</h2>
          <div className="grid gap-4">
            <div>
              <h3>Layout Components</h3>
              <p>
                Container, Grid, Box, Stack, and other structural components.
              </p>
            </div>
            <div>
              <h3>Form Elements</h3>
              <p>Input, Select, Checkbox, Radio, and other form controls.</p>
            </div>
            <div>
              <h3>Navigation</h3>
              <p>Navbar, Sidebar, Breadcrumbs, and navigation utilities.</p>
            </div>
            <div>
              <h3>Feedback</h3>
              <p>Alert, Toast, Progress, Loading indicators.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Contributing</h2>
          <p>
            We welcome contributions from the community! Whether it's bug fixes,
            feature requests, or documentation improvements, please feel free
            to:
          </p>
          <ul>
            <li>Submit issues on our GitHub repository</li>
            <li>Create pull requests with improvements</li>
            <li>Share feedback and suggestions</li>
          </ul>
        </section>

        <section>
          <h2>Support</h2>
          <p>Need help? Here are some ways to get support:</p>
          <ul>
            <li>Check our detailed documentation</li>
            <li>Join our Discord community</li>
            <li>Open an issue on GitHub</li>
            <li>Follow us on Twitter for updates</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

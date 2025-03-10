"use client";

import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import CodeBlock from "@/components/ui/codeblock";

export default function HowToUsePage() {
  return (
    <main className="flex-1">
      <section className="container mx-auto px-4 py-16 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">How to use</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
          Get started with our component library in Next.js. Follow the steps
          below to set up the necessary dependencies and configurations.
        </p>

        <Card className="p-6">
          <NextJsGuide />
        </Card>
      </section>
    </main>
  );
}

function InstallSection() {
  const tailwindCommand =
    "npm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p";
  const utilityPackages = "npm install clsx tailwind-merge motion";

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">1. Install Tailwind CSS</h3>
          <p className="text-gray-700 dark:text-gray-300">
            First, install Tailwind CSS and its dependencies:
          </p>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code={tailwindCommand}
            language="bash"
            showLineNumbers={false}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">2. Install Utility Packages</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Next, install the required utility packages:
          </p>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code={utilityPackages}
            language="bash"
            showLineNumbers={false}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function ConfigSection() {
  const tailwindConfig = `const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using \`src\` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [addVariablesForColors],
};
 
// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [\`--\${key}\`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}`;

  const globalCss = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

  const utilsTs = `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

  return (
    <div className="space-y-6 mt-8">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">3. Add CSS Variables</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Create or update your globals.css file:
          </p>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code={globalCss}
            language="css"
            filename="globals.css"
            showLineNumbers={true}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">4. Configure Tailwind CSS</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Create or update your <code>tailwind.config.js</code> file:
          </p>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code={tailwindConfig}
            language="javascript"
            filename="tailwind.config.js"
            showLineNumbers={true}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">5. Create Utils File</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Create a <code>utils.ts</code> file to enable tailwind-merge:
          </p>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code={utilsTs}
            language="typescript"
            filename="lib/utils.ts"
            showLineNumbers={true}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function React19Guide() {
  const motionPackage = `"motion": "^12.4.10",`;
  return (
    <div className="space-y-6 mt-8">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">
            Next 15 and React 19 Tip for Framer Motion
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            If you are using Next 15 and React 19, you will need to update your
            package.json file to include the following as Framer Motion is now
            Motion:
          </p>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code={motionPackage}
            language="bash"
            showLineNumbers={false}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function NextJsGuide() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <i className="devicon-nextjs-plain"></i>
        <h2 className="text-2xl font-bold">Next.js</h2>
      </div>

      <p className="mb-6">
        Next.js works seamlessly with our component library. Follow these steps
        to set up your project:
      </p>

      <InstallSection />
      <ConfigSection />
      <React19Guide />
    </div>
  );
}

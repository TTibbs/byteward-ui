import Link from "next/link";

export default function ComponentsPage() {
  return (
    <main className="container max-w-3xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Components
          </h1>
          <p className="text-xl text-muted-foreground">
            Build your next project faster with our component library.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="prose max-w-none space-y-4">
        <h2>Introduction</h2>
        <p>
          Welcome to our component library documentation. This library provides
          a comprehensive set of reusable components built with React, Next.js,
          and Tailwind CSS.
        </p>
        <h3>Key Features</h3>
        <ul>
          <li className="bg-muted rounded-md py-2 px-3 w-fit">
            <Link href="/components/button">Button</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}

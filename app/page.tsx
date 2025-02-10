import { Button } from "@/components/ui/button";
import { Library } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center py-10">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Library className="h-16 w-16" />
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Component Library
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Beautiful, reusable components built with Radix UI and Tailwind CSS.
          Free and open-source.
        </p>
        <div className="flex gap-4">
          <Link href="/docs">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link href="/components">
            <Button size="lg" variant="outline">
              Components
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

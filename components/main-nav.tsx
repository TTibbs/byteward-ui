"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Library } from "lucide-react";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Library className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          Component Library
        </span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Documentation
        </Link>
        <Link
          href="/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/components")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
      </nav>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState } from "react";

interface SidebarNavProps {
  items: {
    title: string;
    href: string;
    items?: {
      title: string;
      href: string;
    }[];
  }[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      {/* Mobile Navigation */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="pr-0">
          <MobileNav items={items} setOpen={setOpen} />
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] md:block">
        <div className="relative h-full">
          {/* Sidebar Content with Toggle Button */}
          <div
            className={cn(
              "flex h-full transition-transform duration-300 ease-in-out",
              isExpanded ? "translate-x-0" : "-translate-x-[calc(100%-3.6rem)]"
            )}
          >
            <div className="h-full w-[220px] border-r bg-background">
              <ScrollArea className="h-full w-full">
                <div className="space-y-4 py-4">
                  <div className="px-3 py-2">
                    <DocsSidebarNav items={items} />
                  </div>
                </div>
              </ScrollArea>
            </div>

            {/* Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-3 top-4 h-8 w-8"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <PanelLeftClose className="h-5 w-5" />
              ) : (
                <PanelLeftOpen className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </aside>

      {/* Content Margin Adjustment */}
      <div
        className={cn(
          "hidden md:block transition-all duration-300 ease-in-out",
          isExpanded ? "w-[220px]" : "w-8"
        )}
      />
    </>
  );
}

interface DocsSidebarNavProps {
  items: SidebarNavProps["items"];
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) => (
        <div key={index} className="relative overflow-hidden px-2 py-1">
          <h4 className="text-md font-medium">{item.title}</h4>
          {item.items?.length && (
            <div className="grid grid-flow-row auto-rows-max pl-2 text-sm">
              {item.items.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.href}
                  className={cn(
                    "flex w-full items-center rounded-md p-2 hover:underline",
                    pathname === subItem.href
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  ) : null;
}

interface MobileNavProps {
  items: SidebarNavProps["items"];
  setOpen: (open: boolean) => void;
}

export function MobileNav({ items, setOpen }: MobileNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm">
      {items.map((item, index) => (
        <div key={index} className="relative overflow-hidden px-2 py-1">
          <h4 className="text-md font-medium pb-2">{item.title}</h4>
          {item.items?.length && (
            <div className="grid grid-flow-row auto-rows-max pl-2 text-sm">
              {item.items.map((subItem, index) => (
                <Link
                  key={index}
                  href={subItem.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex w-full items-center rounded-md pt-2 hover:underline",
                    pathname === subItem.href
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  ) : null;
}

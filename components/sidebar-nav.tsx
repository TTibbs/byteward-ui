"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { SidebarNavProps } from "@/types/common";

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
      <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] md:block">
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
              className="absolute right-3 top-6 h-8 w-8"
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
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(() => {
    // Initialize all sections as expanded by default
    const initialState: Record<string, boolean> = {};
    items.forEach((item, itemIndex) => {
      item.sections?.forEach((section, sectionIndex) => {
        const sectionKey = `${item.title}-${section.subtitle}-${sectionIndex}`;
        initialState[sectionKey] = true;
      });
    });
    return initialState;
  });

  // Toggle section expansion
  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  // Check if section is expanded
  const isSectionExpanded = (sectionKey: string) => {
    return expandedSections[sectionKey] === true;
  };

  return items.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm gap-4">
      {items.map((item, index) => (
        <div key={index} className="relative overflow-hidden">
          <h4 className="text-md font-semibold mb-3">{item.title}</h4>

          {item.items?.length && (
            <div className="grid grid-flow-row auto-rows-max pl-2 text-sm gap-1.5">
              {item.items.map((subItem, i) => (
                <Link
                  key={i}
                  href={subItem.href}
                  className={cn(
                    "flex w-full items-center rounded-md py-1.5 px-2 hover:bg-accent/50 transition-colors",
                    pathname === subItem.href
                      ? "font-medium text-foreground bg-accent/30"
                      : "text-muted-foreground"
                  )}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}

          {item.sections?.length && (
            <div className="grid grid-flow-row auto-rows-max pl-2 text-sm gap-6 mt-2">
              {item.sections.map((section, sectionIndex) => {
                const sectionKey = `${item.title}-${section.subtitle}-${sectionIndex}`;
                const isExpanded = isSectionExpanded(sectionKey);

                return (
                  <div key={sectionIndex} className="mb-1">
                    <button
                      onClick={() => toggleSection(sectionKey)}
                      className="w-full text-left mb-3 text-sm font-semibold text-primary/70 bg-muted/50 py-1.5 px-3 rounded-md border-l-[3px] border-primary/40 flex justify-between items-center group cursor-pointer"
                    >
                      <span>{section.subtitle}</span>
                      <span
                        className={cn(
                          "transition-transform duration-200",
                          isExpanded ? "rotate-0" : "-rotate-90"
                        )}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-70 group-hover:opacity-100"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="grid grid-flow-row auto-rows-max gap-1.5 pl-3 mt-2 animate-in slide-in-from-top-2 duration-200">
                        {section.items.map((sectionItem, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={sectionItem.href}
                            className={cn(
                              "flex w-full items-center rounded-md py-1.5 px-2 hover:bg-accent/50 transition-colors",
                              pathname === sectionItem.href
                                ? "font-medium text-foreground bg-accent/30"
                                : "text-muted-foreground"
                            )}
                          >
                            {sectionItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
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
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(() => {
    // Initialize all sections as expanded by default
    const initialState: Record<string, boolean> = {};
    items.forEach((item, itemIndex) => {
      item.sections?.forEach((section, sectionIndex) => {
        const sectionKey = `mobile-${item.title}-${section.subtitle}-${sectionIndex}`;
        initialState[sectionKey] = true;
      });
    });
    return initialState;
  });

  // Toggle section expansion
  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  // Check if section is expanded
  const isSectionExpanded = (sectionKey: string) => {
    return expandedSections[sectionKey] === true;
  };

  return items.length ? (
    <div className="grid grid-flow-row auto-rows-max text-sm gap-4">
      {items.map((item, index) => (
        <div key={index} className="relative overflow-hidden">
          <h4 className="text-md font-semibold mb-3">{item.title}</h4>

          {item.items?.length && (
            <div className="grid grid-flow-row auto-rows-max pl-2 text-sm gap-1.5">
              {item.items.map((subItem, i) => (
                <Link
                  key={i}
                  href={subItem.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex w-full items-center rounded-md py-1.5 px-2 hover:bg-accent/50 transition-colors",
                    pathname === subItem.href
                      ? "font-medium text-foreground bg-accent/30"
                      : "text-muted-foreground"
                  )}
                >
                  {subItem.title}
                </Link>
              ))}
            </div>
          )}

          {item.sections?.length && (
            <div className="grid grid-flow-row auto-rows-max pl-2 text-sm gap-6 mt-2">
              {item.sections.map((section, sectionIndex) => {
                const sectionKey = `mobile-${item.title}-${section.subtitle}-${sectionIndex}`;
                const isExpanded = isSectionExpanded(sectionKey);

                return (
                  <div key={sectionIndex} className="mb-1">
                    <button
                      onClick={() => toggleSection(sectionKey)}
                      className="w-full text-left mb-3 text-sm font-semibold text-primary/70 bg-muted/50 py-1.5 px-3 rounded-md border-l-[3px] border-primary/40 flex justify-between items-center group cursor-pointer"
                    >
                      <span>{section.subtitle}</span>
                      <span
                        className={cn(
                          "transition-transform duration-200",
                          isExpanded ? "rotate-0" : "-rotate-90"
                        )}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="opacity-70 group-hover:opacity-100"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="grid grid-flow-row auto-rows-max gap-1.5 pl-3 mt-2 animate-in slide-in-from-top-2 duration-200">
                        {section.items.map((sectionItem, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={sectionItem.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex w-full items-center rounded-md py-1.5 px-2 hover:bg-accent/50 transition-colors",
                              pathname === sectionItem.href
                                ? "font-medium text-foreground bg-accent/30"
                                : "text-muted-foreground"
                            )}
                          >
                            {sectionItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  ) : null;
}

import { SidebarNav } from "@/components/sidebar-nav";
import { sidebarNavItems } from "@/lib/data";
import type { Metadata } from "next";

interface ComponentsLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Components",
    template: "%s | ByteWard UI",
  },
  description: "Explore our component library",
};

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 pt-10">
      <SidebarNav items={sidebarNavItems} />
      <main className="relative w-full">{children}</main>
    </div>
  );
}

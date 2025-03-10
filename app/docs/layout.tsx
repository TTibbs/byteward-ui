import { SidebarNav } from "@/components/sidebar-nav";
import { sidebarNavItems } from "@/lib/data";
import type { Metadata } from "next";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Docs",
    template: "%s | ByteWard UI",
  },
  description: "Documentation for ByteWard UI components and usage",
};

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 pt-10">
      <SidebarNav items={sidebarNavItems} />
      <main className="relative w-full">{children}</main>
    </div>
  );
}

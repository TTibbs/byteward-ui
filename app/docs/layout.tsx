interface DocsLayoutProps {
  children: React.ReactNode;
}

import { SidebarNav } from "@/components/sidebar-nav";
import { sidebarNavItems } from "@/lib/data";

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <SidebarNav items={sidebarNavItems} />
      <main className="relative w-full">{children}</main>
    </div>
  );
}

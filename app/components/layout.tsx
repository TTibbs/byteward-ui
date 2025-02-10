import { SidebarNav } from "@/components/sidebar-nav";

interface ComponentsLayoutProps {
  children: React.ReactNode;
}

const sidebarNavItems = [
  {
    title: "Getting Started",
    href: "/docs",
    items: [
      {
        title: "Introduction",
        href: "/docs",
      },
      {
        title: "Installation",
        href: "/docs/installation",
      },
    ],
  },
  {
    title: "Components",
    href: "/docs/components",
    items: [
      {
        title: "Infinite Marquee",
        href: "/components/infinite-marquee",
      },
    ],
  },
];

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 pt-10">
      <SidebarNav items={sidebarNavItems} />
      <main className="relative w-full">{children}</main>
    </div>
  );
}

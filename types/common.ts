export interface SidebarNavProps {
  items: {
    title: string;
    href?: string;
    items?: {
      title: string;
      href: string;
      subtitle?: string;
    }[];
    sections?: {
      subtitle: string;
      items: {
        title: string;
        href: string;
      }[];
    }[];
  }[];
}

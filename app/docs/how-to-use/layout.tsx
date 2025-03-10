import type { Metadata } from "next";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "How To Use",
  description: "Learn how to use the ByteWard UI components in your projects",
};

export default function DocsLayout({ children }: DocsLayoutProps) {
  return <main className="relative w-full">{children}</main>;
}

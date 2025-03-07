export const servicesGrid = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks and best practices. We create scalable solutions that grow with your business.",
    image: "/linear.png",
  },
  {
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive and engaging digital experiences. We focus on both aesthetics and functionality.",
    image:
      "https://xzk52n11vc.ufs.sh/f/aSu1qOlYpgs5KO0Palse3MIv5mxky1RHFrgp7wEGoN2Y6K4f",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that provide seamless experiences across all devices.",
    image:
      "https://xzk52n11vc.ufs.sh/f/aSu1qOlYpgs5ZsTXKSEqmePU4KF9OysDoabYISQgdVJpGrvx",
  },
  {
    title: "E-commerce Solutions",
    description:
      "End-to-end e-commerce development to help you sell online. From product catalogs to secure payments, we've got you covered.",
    image:
      "https://xzk52n11vc.ufs.sh/f/aSu1qOlYpgs5hdXlwYgrtEjTZyXeB729hQRGg3VvHkaqKfWA",
  },
  {
    title: "CMS Development",
    description:
      "Content management systems that make it easy to update and maintain your website content.",
    image:
      "https://xzk52n11vc.ufs.sh/f/aSu1qOlYpgs5icqgIXUZGTIVP2srJkoFdH6Nxqf5X4zDySUu",
  },
  {
    title: "SEO Optimization",
    description:
      "Search engine optimization to improve your visibility and drive organic traffic to your website.",
    image:
      "https://xzk52n11vc.ufs.sh/f/aSu1qOlYpgs5ZsTXKSEqmePU4KF9OysDoabYISQgdVJpGrvx",
  },
  {
    title: "Digital Analytics",
    description:
      "Data-driven insights to help you understand your users and improve your digital presence.",
    image:
      "https://xzk52n11vc.ufs.sh/f/aSu1qOlYpgs55esdk1KkdatSBq9DXb6gJR8ZiHL75hCpxAQI",
  },
  {
    title: "Security Services",
    description:
      "Comprehensive security solutions to protect your web applications and user data.",
    image:
      "https://xzk52n11vc.ufs.sh/f/aSu1qOlYpgs5ZsTXKSEqmePU4KF9OysDoabYISQgdVJpGrvx",
  },
];

// Unified sidebar navigation configuration
export const sidebarNavItems = [
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
      {
        title: "Grid Beams",
        href: "/components/grid-beams",
      },
    ],
  },
];

// Utility function to filter sidebar items by section if needed
export const getSidebarItemsBySection = (section: "docs" | "components") => {
  // For now, we return all items since the sidebar is unified
  // This can be extended later if you want to filter items by section
  return sidebarNavItems;
};

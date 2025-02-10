import React from "react";
import Image from "next/image";
import { Logo } from "@/types/components";

interface InfiniteMarqueeProps {
  logos?: Logo[];
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}

const defaultLogos: Logo[] = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    alt: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    alt: "Node.js",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    alt: "HTML5",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    alt: "CSS3",
  },
];

export default function InfiniteMarquee({
  logos = defaultLogos,
  pauseOnHover = true,
  scaleOnHover = true,
  speed = "normal",
  imageWidth = 100,
  imageHeight = 100,
  className = "",
}: InfiniteMarqueeProps) {
  const speedClasses = {
    slow: "animate-marquee-slow",
    normal: "animate-marquee",
    fast: "animate-marquee-fast",
  };

  const containerClasses = `relative flex overflow-x-hidden w-full ${
    pauseOnHover ? "group" : ""
  } ${className}`;

  const marqueeClasses = `flex min-w-full shrink-0 items-center justify-around gap-4 py-5 ${
    speedClasses[speed]
  } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`;

  const imageClasses = `w-auto h-auto ${
    scaleOnHover ? "hover:scale-110 transition-all duration-300" : ""
  }`;

  const marqueeContent = (
    <>
      {logos.map((logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center"
          style={{ width: `${imageWidth}px` }}
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={imageWidth}
            height={imageHeight}
            className={imageClasses}
          />
        </div>
      ))}
    </>
  );

  return (
    <div className={containerClasses}>
      <div className={marqueeClasses}>
        {marqueeContent}
        {marqueeContent}
      </div>
      <div className={marqueeClasses}>
        {marqueeContent}
        {marqueeContent}
      </div>
    </div>
  );
}

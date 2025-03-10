"use client";

import { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface PerspectiveCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  cardHeaderClassName?: string;
  cardTitleClassName?: string;
  cardContentClassName?: string;
  imageContainerClassName?: string;
  descriptionClassName?: string;
  overlayClassName?: string;
  rotationIntensity?: number;
  disablePerspective?: boolean;
  cardStyle?: React.CSSProperties;
  titleColor?: string;
  descriptionColor?: string;
  bgColor?: string;
  borderColor?: string;
}

export function PerspectiveCard({
  title,
  description,
  image,
  className,
  cardHeaderClassName,
  cardTitleClassName,
  cardContentClassName,
  imageContainerClassName,
  descriptionClassName,
  overlayClassName,
  rotationIntensity = 10,
  disablePerspective = false,
  cardStyle,
  titleColor,
  descriptionColor,
  bgColor,
  borderColor,
}: PerspectiveCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || disablePerspective) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -rotationIntensity;
    const rotateY = ((x - centerX) / centerX) * rotationIntensity;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Combine inline styles
  const computedCardStyle = {
    ...cardStyle,
    backgroundColor: bgColor,
    borderColor: borderColor,
    transform: disablePerspective
      ? "none"
      : `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        // Base styles
        "rounded-lg border shadow-sm",
        "group relative overflow-hidden transition-all duration-300 ease-out hover:shadow-xl",
        // Custom classes should come last to override base styles
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={computedCardStyle}
    >
      <div className={cn("h-48 overflow-hidden", imageContainerClassName)}>
        {!imageError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
            onError={handleImageError}
            crossOrigin="anonymous"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
            Image not available
          </div>
        )}
      </div>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-black/50 to-black/0 opacity-0 transition-opacity group-hover:opacity-100",
          overlayClassName
        )}
      />
      <div
        className={cn(
          "flex flex-col space-y-1.5 p-6 relative z-10",
          cardHeaderClassName
        )}
      >
        <h3
          className={cn(
            "font-semibold leading-none tracking-tight transition-colors group-hover:text-white text-lg",
            cardTitleClassName
          )}
          style={{ color: titleColor }}
        >
          {title}
        </h3>
      </div>
      <div className={cn("p-6 pt-0 relative z-10", cardContentClassName)}>
        <p
          className={cn(
            "text-sm transition-colors group-hover:text-white/80",
            descriptionClassName
          )}
          style={{ color: descriptionColor }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

// Define the type for the card items
export type CardItem = {
  id: string | number;
  title?: string;
  description?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
};

interface InfiniteCardMarqueeProps {
  cards: CardItem[];
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
  direction?: "left" | "right" | "up" | "down";
  orientation?: "horizontal" | "vertical";
  cardWidth?: number | string;
  cardHeight?: number | string;
  gap?: number;
  className?: string;
  cardClassName?: string;
  containerClassName?: string;
  marqueeClassName?: string;
  cardContentWrapperClassName?: string;
  cardHeaderClassName?: string;
  cardContentClassName?: string;
  cardFooterClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  duplicates?: number; // How many times to duplicate the cards
  autoFill?: boolean; // Automatically add enough duplicates to fill the screen
}

export default function InfiniteCardMarquee({
  cards,
  pauseOnHover = true,
  scaleOnHover = true,
  speed = "normal",
  direction = "left",
  orientation = "horizontal",
  cardWidth = 300,
  cardHeight = "auto",
  gap = 16,
  className = "",
  cardClassName = "",
  containerClassName = "",
  marqueeClassName = "",
  cardContentWrapperClassName = "",
  cardHeaderClassName = "",
  cardContentClassName = "",
  cardFooterClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  duplicates = 2,
  autoFill = false,
}: InfiniteCardMarqueeProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [containerHeight, setContainerHeight] = React.useState(0);
  const [numDuplicates, setNumDuplicates] = React.useState(duplicates);

  // Normalize direction based on orientation
  const normalizedDirection = React.useMemo(() => {
    if (orientation === "horizontal") {
      return direction === "right" ? "right" : "left";
    } else {
      return direction === "up" ? "up" : "down";
    }
  }, [direction, orientation]);

  // Is vertical orientation
  const isVertical = orientation === "vertical";

  // Calculate number of duplicates needed to fill the container
  React.useEffect(() => {
    if (autoFill && containerRef.current) {
      const calculateDuplicates = () => {
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const containerHeight = containerRef.current?.offsetHeight || 0;

        // Use width for horizontal, height for vertical
        const containerSize = isVertical ? containerHeight : containerWidth;
        const itemSize = isVertical
          ? typeof cardHeight === "number"
            ? cardHeight
            : 300
          : typeof cardWidth === "number"
          ? cardWidth
          : 300;

        const totalItemSize = cards.length * (itemSize + gap);

        // Calculate how many duplicates we need to fill the screen twice (for seamless looping)
        const duplicatesNeeded = Math.max(
          2,
          Math.ceil((containerSize * 2) / totalItemSize)
        );

        setContainerWidth(containerWidth);
        setContainerHeight(containerHeight);
        setNumDuplicates(duplicatesNeeded);
      };

      calculateDuplicates();
      window.addEventListener("resize", calculateDuplicates);
      return () => window.removeEventListener("resize", calculateDuplicates);
    }
  }, [autoFill, cardWidth, cardHeight, gap, cards.length, isVertical]);

  // Determine animation classes based on orientation and direction
  const speedClasses = React.useMemo(() => {
    if (orientation === "horizontal") {
      return {
        slow:
          direction === "left"
            ? "animate-marquee-slow"
            : "animate-marquee-slow-reverse",
        normal:
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse",
        fast:
          direction === "left"
            ? "animate-marquee-fast"
            : "animate-marquee-fast-reverse",
      };
    } else {
      return {
        slow:
          direction === "down"
            ? "animate-marquee-vertical-slow"
            : "animate-marquee-vertical-slow-reverse",
        normal:
          direction === "down"
            ? "animate-marquee-vertical"
            : "animate-marquee-vertical-reverse",
        fast:
          direction === "down"
            ? "animate-marquee-vertical-fast"
            : "animate-marquee-vertical-fast-reverse",
      };
    }
  }, [orientation, direction]);

  // Apply the gap as a CSS variable to the container
  const containerStyle = React.useMemo(
    () =>
      ({
        "--gap": `${gap}px`,
      } as React.CSSProperties),
    [gap]
  );

  // Calculate a fixed height if cardHeight is auto but we want consistency
  const actualCardHeight = React.useMemo(() => {
    if (cardHeight !== "auto") {
      return cardHeight;
    }
    // Default fixed height for auto to maintain consistency
    return isVertical ? 200 : 300; // Slightly shorter for vertical orientation
  }, [cardHeight, isVertical]);

  // Determine correct card size CSS properties
  const cardSizeStyle = React.useMemo(
    () =>
      ({
        width: typeof cardWidth === "number" ? `${cardWidth}px` : cardWidth,
        height:
          typeof actualCardHeight === "number"
            ? `${actualCardHeight}px`
            : actualCardHeight,
        flexShrink: 0,
        flexGrow: 0,
      } as React.CSSProperties),
    [cardWidth, actualCardHeight]
  );

  // Compose Tailwind classes using cn utility
  const rootClasses = cn("w-full overflow-hidden", className);

  const containerClasses = cn(
    "relative overflow-hidden w-full",
    isVertical ? "flex flex-col h-[400px]" : "flex", // Default height for vertical orientation
    pauseOnHover ? "group" : "",
    containerClassName
  );

  const marqueeClasses = cn(
    isVertical
      ? "flex flex-col min-h-full shrink-0 items-center gap-[var(--gap)] px-4"
      : "flex min-w-full shrink-0 items-center gap-[var(--gap)] py-4",
    speedClasses[speed],
    pauseOnHover ? "group-hover:[animation-play-state:paused]" : "",
    marqueeClassName
  );

  const baseCardClasses = cn(
    "transition-all duration-300 overflow-hidden",
    scaleOnHover ? "hover:scale-105" : "",
    cardClassName
  );

  const contentWrapperClasses = cn(
    "flex flex-col h-full",
    cardContentWrapperClassName
  );

  // Create a template for consistent card rendering
  const renderCard = React.useCallback(
    (card: CardItem, keyPrefix: string, index: number) => (
      <Card
        key={`${keyPrefix}-${card.id}-${index}`}
        className={cn(baseCardClasses, card.className)}
        style={cardSizeStyle}
      >
        <div className={contentWrapperClasses}>
          {(card.title || card.description) && (
            <CardHeader
              className={cn(
                "flex-shrink-0",
                cardHeaderClassName,
                card.headerClassName
              )}
            >
              {card.title && (
                <CardTitle className={cn(titleClassName)}>
                  {card.title}
                </CardTitle>
              )}
              {card.description && (
                <CardDescription className={cn(descriptionClassName)}>
                  {card.description}
                </CardDescription>
              )}
            </CardHeader>
          )}
          {card.content && (
            <CardContent
              className={cn(
                "flex-grow overflow-auto",
                cardContentClassName,
                card.contentClassName
              )}
            >
              <div className="h-full">{card.content}</div>
            </CardContent>
          )}
          {card.footer && (
            <CardFooter
              className={cn(
                "flex-shrink-0 mt-auto",
                cardFooterClassName,
                card.footerClassName
              )}
            >
              {card.footer}
            </CardFooter>
          )}
        </div>
      </Card>
    ),
    [
      baseCardClasses,
      cardSizeStyle,
      contentWrapperClasses,
      cardHeaderClassName,
      cardContentClassName,
      cardFooterClassName,
      titleClassName,
      descriptionClassName,
    ]
  );

  // Create duplicates of the cards for the infinite scroll effect
  const duplicatedCards = React.useMemo(() => {
    const duplicates = [];

    // Generate the duplicated cards
    for (let i = 0; i < numDuplicates; i++) {
      const duplicateSet = cards.map((card, index) =>
        renderCard(card, `dup-${i}`, index)
      );
      duplicates.push(...duplicateSet);
    }

    return duplicates;
  }, [cards, numDuplicates, renderCard]);

  return (
    <div className={rootClasses}>
      <div
        className={containerClasses}
        ref={containerRef}
        style={containerStyle}
      >
        <div className={marqueeClasses} key="marquee-1">
          {duplicatedCards}
        </div>
        <div className={marqueeClasses} key="marquee-2">
          {cards.map((card, index) => renderCard(card, "clone", index))}
        </div>
      </div>
    </div>
  );
}

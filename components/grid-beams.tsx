"use client";

import React, { useEffect, useRef } from "react";

interface Beam {
  color: string; // Color of the beam
  position: number; // Position of the beam
  progress: number; // Progress of the beam
  speed: number; // Speed of the beam
  width: number; // Width of the beam
  isHorizontal: boolean; // Whether the beam is horizontal
  opacity: number; // Opacity of the beam
  delay: number; // Time before beam starts moving
  pattern: number; // Pattern type (0: straight, 1: pulse, 2: accelerate-decelerate)
  length: number; // Length of the beam (0-1)
}

// Pattern types as a type for better TypeScript support
type BeamPattern = "steady" | "pulse" | "accelerate-decelerate";

interface GridBeamsProps {
  title?: string; // Title of the grid beams
  subtitle?: string; // Subtitle of the grid beams
  // Animation customization props
  baseSpeed?: number; // Base speed multiplier
  maxBeams?: number; // Maximum number of beams
  initialBeams?: number; // Initial number of beams
  beamDelay?: {
    // Delay configuration
    min: number; // Minimum delay frames
    max: number; // Maximum delay frames
  };
  defaultPattern?: BeamPattern; // Default pattern for random beams
  patternDistribution?: {
    // Distribution of patterns (must sum to 1)
    steady: number; // Proportion of steady beams
    pulse: number; // Proportion of pulsing beams
    "accelerate-decelerate": number; // Proportion of accelerate-decelerate beams
  };
  colors?: string[]; // Custom colors for beams
  gridSize?: number; // Size of grid cells in pixels
  randomStarts?: boolean; // Whether to randomize starting positions
  beamLength?: { min: number; max: number }; // Length of beams
}

const GridBeams: React.FC<GridBeamsProps> = ({
  title,
  subtitle,
  baseSpeed = 1.0,
  maxBeams = 14,
  initialBeams = 10,
  beamDelay = { min: 0, max: 200 },
  defaultPattern,
  patternDistribution = {
    steady: 0.3,
    pulse: 0.4,
    "accelerate-decelerate": 0.3,
  },
  colors = ["#3B82F6", "#8B5CF6", "#EC4899", "#10B981"],
  gridSize = 40,
  randomStarts = true,
  beamLength = { min: 0.5, max: 0.9 },
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Convert pattern name to number
  const getPatternNumber = (pattern: BeamPattern): number => {
    switch (pattern) {
      case "steady":
        return 0;
      case "pulse":
        return 1;
      case "accelerate-decelerate":
        return 2;
      default:
        return 0;
    }
  };

  // Get a random pattern based on distribution
  const getRandomPattern = (): number => {
    if (defaultPattern) {
      return getPatternNumber(defaultPattern);
    }

    const rand = Math.random();
    let cumulativeProbability = 0;

    if (rand < (cumulativeProbability += patternDistribution.steady)) {
      return 0; // Steady
    } else if (rand < (cumulativeProbability += patternDistribution.pulse)) {
      return 1; // Pulse
    } else {
      return 2; // Accelerate-decelerate
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let frame = 0;

    // Set canvas dimensions to match parent container
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const beams: Beam[] = [];

    // Create initial beams with patterns
    const createBeam = (patternOverride?: number): Beam => {
      const isHorizontal = Math.random() > 0.5;
      const pattern =
        patternOverride !== undefined ? patternOverride : getRandomPattern();

      // Calculate beam length based on the beamLength prop
      const length =
        beamLength.min + Math.random() * (beamLength.max - beamLength.min);

      // Determine starting progress based on randomStarts
      const startProgress = randomStarts ? Math.random() * (1 - length) : 0;

      return {
        color: colors[Math.floor(Math.random() * colors.length)],
        position:
          Math.floor(
            (Math.random() * (isHorizontal ? canvas.height : canvas.width)) /
              gridSize
          ) * gridSize,
        progress: startProgress,
        speed: (0.2 + Math.random() * 0.6) * baseSpeed, // Apply base speed multiplier
        width: 2 + Math.random() * 2,
        isHorizontal,
        opacity: 0.5 + Math.random() * 0.5,
        delay:
          beamDelay.min +
          Math.floor(Math.random() * (beamDelay.max - beamDelay.min)),
        pattern,
        length: length, // Store the beam length
      };
    };

    // Create beams with specific patterns - one of each type for each direction
    const initializePatternedBeams = () => {
      // Horizontal beams with different patterns
      for (let i = 0; i < 3; i++) {
        const beam = createBeam(i);
        beam.isHorizontal = true;
        beam.position = gridSize * (1 + i * 2);
        beam.delay = i * 40; // Staggered delays
        beams.push(beam);
      }

      // Vertical beams with different patterns
      for (let i = 0; i < 3; i++) {
        const beam = createBeam(i);
        beam.isHorizontal = false;
        beam.position = gridSize * (2 + i * 3);
        beam.delay = 30 + i * 40; // Different staggered delays
        beams.push(beam);
      }

      // Add additional random beams up to initialBeams count
      const additionalBeams = Math.max(0, initialBeams - 6); // We already added 6 beams
      for (let i = 0; i < additionalBeams; i++) {
        beams.push(createBeam());
      }
    };

    initializePatternedBeams();

    // Update beam based on its pattern
    const updateBeamProgress = (beam: Beam) => {
      // Don't move if still in delay period
      if (beam.delay > 0) {
        beam.delay--;
        return;
      }

      let speedFactor = 1;

      switch (beam.pattern) {
        case 0: // Steady movement
          speedFactor = 1;
          break;
        case 1: // Pulsing - speed varies with sine wave
          speedFactor = 0.5 + Math.sin(frame / 50) * 0.5;
          break;
        case 2: // Accelerate-decelerate
          // Slower at beginning and end, faster in the middle
          speedFactor =
            beam.progress < 0.5 ? beam.progress * 2 : (1 - beam.progress) * 2;
          speedFactor = 0.3 + speedFactor * 0.7; // Keep minimum speed
          break;
      }

      beam.progress += (beam.speed / 400) * speedFactor; // Base speed div by 400 (slower)
    };

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;
      frame++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = "rgba(229, 231, 235, 0.1)"; // Light gray with transparency
      ctx.lineWidth = 1;

      // Draw vertical grid lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal grid lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw and update beams
      beams.forEach((beam, index) => {
        ctx.beginPath();
        ctx.globalAlpha = beam.opacity;

        // For pulsing beams, also pulse opacity
        if (beam.pattern === 1 && beam.delay === 0) {
          ctx.globalAlpha = beam.opacity * (0.7 + Math.sin(frame / 50) * 0.3);
        }

        ctx.strokeStyle = beam.color;
        ctx.lineWidth = beam.width;

        if (beam.isHorizontal) {
          const startX = canvas.width * beam.progress;
          const endX = startX + canvas.width * beam.length;
          ctx.moveTo(startX, beam.position);
          ctx.lineTo(Math.min(endX, canvas.width), beam.position);
        } else {
          const startY = canvas.height * beam.progress;
          const endY = startY + canvas.height * beam.length;
          ctx.moveTo(beam.position, startY);
          ctx.lineTo(beam.position, Math.min(endY, canvas.height));
        }

        ctx.stroke();
        ctx.globalAlpha = 1;

        // Update beam progress based on pattern
        updateBeamProgress(beam);

        // Reset beam when it reaches the end (fully off screen)
        if (beam.progress > 1) {
          // For patterned beams, maintain their pattern
          if (index < 6) {
            // The first 6 are our patterned beams
            beam.progress = randomStarts
              ? Math.random() * (1 - beam.length)
              : 0;
            beam.delay =
              beamDelay.min +
              Math.floor(Math.random() * (beamDelay.max - beamDelay.min));

            // Maybe change color
            if (Math.random() > 0.7) {
              beam.color = colors[Math.floor(Math.random() * colors.length)];
            }
          } else {
            // Random beams can change completely
            if (Math.random() > 0.3) {
              beam.progress = randomStarts
                ? Math.random() * (1 - beam.length)
                : 0;
              beam.delay =
                beamDelay.min +
                Math.floor(Math.random() * (beamDelay.max - beamDelay.min));
            } else {
              beams[index] = createBeam();
            }
          }
        }
      });

      // Add a new random beam occasionally but keep total reasonable
      if (beams.length < maxBeams && frame % 300 === 0) {
        beams.push(createBeam());
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    baseSpeed,
    maxBeams,
    initialBeams,
    beamDelay,
    defaultPattern,
    patternDistribution,
    colors,
    gridSize,
    randomStarts,
    beamLength,
  ]);

  return (
    <div className="relative w-full h-[40vh] bg-gray-900 overflow-hidden">
      {/* Canvas for grid and beams */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-[40vh]" />

      {/* Overlay gradient for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {title || "Building The Future"}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
          {subtitle ||
            "Create something amazing with our next-generation technology platform"}
        </p>
        <div className="mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mr-4 transition-colors">
            Get Started
          </button>
          <button className="bg-transparent border border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white/10 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridBeams;

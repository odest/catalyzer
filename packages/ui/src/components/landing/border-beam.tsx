"use client";

import { cn } from "@workspace/ui/lib/utils";
import { type MotionStyle, motion, type Transition } from "motion/react";

interface BorderBeamProps {
  /**
   * The border width of the beam.
   */
  borderWidth?: number;
  /**
   * The class name of the border beam.
   */
  className?: string;
  /**
   * The color of the border beam from.
   */
  colorFrom?: string;
  /**
   * The color of the border beam to.
   */
  colorTo?: string;
  /**
   * The delay of the border beam.
   */
  delay?: number;
  /**
   * The duration of the border beam.
   */
  duration?: number;
  /**
   * The initial offset position (0-100).
   */
  initialOffset?: number;
  /**
   * Whether to reverse the animation direction.
   */
  reverse?: boolean;
  /**
   * The size of the border beam.
   */
  size?: number;
  /**
   * The style of the border beam.
   */
  style?: React.CSSProperties;
  /**
   * The motion transition of the border beam.
   */
  transition?: Transition;
}

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: BorderBeamProps) => (
  <div
    className="border-(length:--border-beam-width) mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect pointer-events-none absolute inset-0 rounded-[inherit] border-transparent [mask-clip:padding-box,border-box]"
    style={
      {
        "--border-beam-width": `${borderWidth}px`,
      } as React.CSSProperties
    }
  >
    <motion.div
      animate={{
        offsetDistance: reverse
          ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
          : [`${initialOffset}%`, `${100 + initialOffset}%`],
      }}
      className={cn(
        "absolute aspect-square",
        "bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
        className
      )}
      initial={{ offsetDistance: `${initialOffset}%` }}
      style={
        {
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          ...style,
        } as MotionStyle
      }
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
        duration,
        delay: -delay,
        ...transition,
      }}
    />
  </div>
);

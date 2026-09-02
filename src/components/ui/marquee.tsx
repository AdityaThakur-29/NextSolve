import { type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Explicit direction: "left" | "right" | "up" | "down"
   */
  direction?: "left" | "right" | "up" | "down";
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  direction,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  const isVertical = vertical || direction === "up" || direction === "down";
  const isReverse =
    direction === "right" || direction === "down"
      ? true
      : direction === "left" || direction === "up"
        ? false
        : reverse;

  return (
    <div
      {...props}
      className={cn(
        "group flex gap-[var(--gap,1rem)] overflow-hidden p-2 [--duration:40s] [--gap:1.25rem]",
        {
          "flex-row": !isVertical,
          "flex-col": isVertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around gap-[var(--gap,1rem)]", {
              "animate-marquee flex-row": !isVertical && !isReverse,
              "animate-marquee-reverse flex-row": !isVertical && isReverse,
              "animate-marquee-vertical flex-col": isVertical && !isReverse,
              "animate-marquee-vertical-reverse flex-col": isVertical && isReverse,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

export default Marquee;

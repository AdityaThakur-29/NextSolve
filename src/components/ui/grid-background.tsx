import React from "react";
import { cn } from "@/lib/utils";

interface GridBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  gridColor?: string;
  gridSize?: number;
  mask?: "radial" | "top" | "bottom" | "none";
  showGlow?: boolean;
  glowColor?: string;
}

export function GridBackground({
  className,
  gridColor = "rgba(148, 163, 184, 0.22)", // slate-400 / 22%
  gridSize = 36,
  mask = "radial",
  showGlow = true,
  glowColor = "rgba(59, 130, 246, 0.08)", // blue-500 subtle glow
  children,
  style,
  ...props
}: GridBackgroundProps) {
  const getMaskStyle = () => {
    switch (mask) {
      case "radial":
        return {
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
        };
      case "top":
        return {
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        };
      case "bottom":
        return {
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 100%, #000 40%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 100%, #000 40%, transparent 100%)",
        };
      case "none":
      default:
        return {};
    }
  };

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={style}
      {...props}
    >
      {/* Grid Pattern Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize}px ${gridSize}px`,
          ...getMaskStyle(),
        }}
      />

      {/* Optional ambient center radial glow */}
      {showGlow && (
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${glowColor}, transparent 80%)`,
          }}
        />
      )}

      {children}
    </div>
  );
}

export default GridBackground;

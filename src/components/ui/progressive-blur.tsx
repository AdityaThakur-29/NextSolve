"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressiveBlurProps {
  className?: string;
  height?: string;
  position?: "top" | "bottom" | "both";
  blurLevels?: number[];
  children?: React.ReactNode;
}

interface ProgressiveBlurSingleProps {
  className?: string;
  height?: string;
  position: "top" | "bottom";
  blurLevels: number[];
}

function ProgressiveBlurSingle({
  className,
  height = "30%",
  position = "bottom",
  blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64],
}: ProgressiveBlurSingleProps) {
  const divElements = Array(Math.max(0, blurLevels.length - 2)).fill(null);

  return (
    <div
      className={cn(
        "gradient-blur pointer-events-none absolute inset-x-0 z-10 overflow-hidden",
        position === "top" ? "top-0" : "bottom-0",
        className
      )}
      style={{
        height,
      }}
      aria-hidden="true"
    >
      {/* First blur layer */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          backdropFilter: `blur(${blurLevels[0]}px)`,
          WebkitBackdropFilter: `blur(${blurLevels[0]}px)`,
          willChange: "backdrop-filter",
          transform: "translateZ(0)",
          maskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
              : `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`,
          WebkitMaskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`
              : `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)`,
        }}
      />

      {/* Middle blur layers */}
      {divElements.map((_, index) => {
        const blurIndex = index + 1;
        const startPercent = blurIndex * 12.5;
        const midPercent = (blurIndex + 1) * 12.5;
        const endPercent = (blurIndex + 2) * 12.5;

        const maskGradient =
          position === "bottom"
            ? `linear-gradient(to bottom, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)`
            : `linear-gradient(to top, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)`;

        return (
          <div
            key={`blur-${index}`}
            className="absolute inset-0"
            style={{
              zIndex: index + 2,
              backdropFilter: `blur(${blurLevels[blurIndex]}px)`,
              WebkitBackdropFilter: `blur(${blurLevels[blurIndex]}px)`,
              willChange: "backdrop-filter",
              transform: "translateZ(0)",
              maskImage: maskGradient,
              WebkitMaskImage: maskGradient,
            }}
          />
        );
      })}

      {/* Last blur layer */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: blurLevels.length,
          backdropFilter: `blur(${blurLevels[blurLevels.length - 1]}px)`,
          WebkitBackdropFilter: `blur(${blurLevels[blurLevels.length - 1]}px)`,
          willChange: "backdrop-filter",
          transform: "translateZ(0)",
          maskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
              : `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`,
          WebkitMaskImage:
            position === "bottom"
              ? `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`
              : `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)`,
        }}
      />
    </div>
  );
}

export function ProgressiveBlur({
  className,
  height = "30%",
  position = "bottom",
  blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64],
  children,
}: ProgressiveBlurProps) {
  const content = (
    <>
      {position === "both" ? (
        <>
          <ProgressiveBlurSingle
            className={className}
            height={height === "30%" ? "20%" : height}
            position="top"
            blurLevels={blurLevels}
          />
          <ProgressiveBlurSingle
            className={className}
            height={height === "30%" ? "20%" : height}
            position="bottom"
            blurLevels={blurLevels}
          />
        </>
      ) : (
        <ProgressiveBlurSingle
          className={className}
          height={height}
          position={position}
          blurLevels={blurLevels}
        />
      )}
    </>
  );

  if (children) {
    return (
      <div className="relative overflow-hidden">
        {children}
        {content}
      </div>
    );
  }

  return content;
}

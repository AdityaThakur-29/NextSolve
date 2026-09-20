import React, { type ComponentPropsWithoutRef, type CSSProperties } from "react"

import { cn } from "@/lib/utils"

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
  circleSpacing?: number
  centerTop?: string
  centerLeft?: string
  borderColor?: string
  fillColor?: string
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 340,
  mainCircleOpacity = 0.32,
  numCircles = 11,
  circleSpacing = 120,
  centerTop = "50%",
  centerLeft = "50%",
  borderColor = "rgba(58, 131, 249, 0.65)",
  fillColor = "rgba(219, 234, 254, 0.18)",
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,white_65%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,white_65%,transparent)] select-none",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * circleSpacing
        const opacity = Math.max(
          0.03,
          mainCircleOpacity - (i / Math.max(1, numCircles)) * (mainCircleOpacity - 0.03)
        )
        const animationDelay = `${i * 0.010}s`
        const borderStyle = "solid"

        return (
          <div
            key={i}
            className="animate-ripple absolute rounded-full border shadow-lg"
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                borderColor,
                backgroundColor: fillColor,
                boxShadow: "0 0 30px rgba(59, 131, 246, 0.37)",
                top: centerTop,
                left: centerLeft,
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        )
      })}
    </div>
  )
})

Ripple.displayName = "Ripple"
export default Ripple;

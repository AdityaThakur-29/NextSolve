"use client"
import { cva, VariantProps } from "class-variance-authority"
import {
  ButtonHTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState,
} from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ArrowRight } from "lucide-react"

const buttonVariants = cva(
  `flex justify-center items-center relative z-10 hover:text-black
   px-4 py-2 sm:px-6 sm:py-3 bg-black text-white font-bold border-2 rounded-2xl sm:rounded-3xl overflow-hidden`,
  {
    variants: {
      variant: {
        pink: "border-pink-400",
        yellow: "border-yellow-400",
        blue: "border-blue-600",
        red: "border-red-400",
        purple: "border-purple-400",
        green: "border-green-400",
        teal: "border-teal-400",
        orange: "border-orange-400",
        indigo: "border-indigo-400",
        emerald: "border-emerald-400",
        amber: "border-amber-400",
        cyan: "border-cyan-400",
        lime: "border-lime-400",
        fuchsia: "border-fuchsia-400",
        rose: "border-rose-400",
        sky: "border-sky-400",
        sunset:
          "border-orange-400 border-t-yellow-300 border-r-red-400 border-b-purple-500 border-l-pink-400",
        ocean:
          "border-blue-500 border-t-cyan-400 border-r-teal-500 border-b-blue-600 border-l-indigo-500",
        forest:
          "border-green-500 border-t-emerald-400 border-r-lime-500 border-b-green-600 border-l-teal-500",
        galaxy:
          "border-purple-500 border-t-indigo-400 border-r-violet-500 border-b-purple-600 border-l-fuchsia-500",
        neon: "border-lime-400 border-opacity-90 shadow-sm shadow-lime-400",
        ember:
          "border-red-500 border-t-orange-400 border-r-amber-500 border-b-red-600 border-l-rose-500",
        arctic:
          "border-cyan-400 border-t-sky-300 border-r-blue-400 border-b-cyan-500 border-l-teal-400",
        candy:
          "border-pink-400 border-t-fuchsia-300 border-r-purple-400 border-b-pink-500 border-l-rose-400",
      },
      intent: {
        small: "text-sm sm:text-base",
        medium: "text-base sm:text-lg",
        large: "text-lg sm:text-xl",
      },
    },
    defaultVariants: {
      intent: "small",
      variant: "blue",
    },
  }
)
const variantToColorClass = {
  pink: "bg-pink-400",
  yellow: "bg-yellow-400",
  blue: "bg-blue-600",
  red: "bg-red-400",
  purple: "bg-purple-400",
  green: "bg-green-400",
  teal: "bg-teal-400",
  orange: "bg-orange-400",
  indigo: "bg-indigo-400",
  emerald: "bg-emerald-400",
  amber: "bg-amber-400",
  cyan: "bg-cyan-400",
  lime: "bg-lime-400",
  fuchsia: "bg-fuchsia-400",
  rose: "bg-rose-400",
  sky: "bg-sky-400",
  sunset: "bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500",
  ocean: "bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600",
  forest: "bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600",
  galaxy: "bg-gradient-to-br from-indigo-400 via-purple-500 to-fuchsia-600",
  neon: "bg-lime-400 bg-opacity-90 shadow-md shadow-lime-400",
  ember: "bg-gradient-to-br from-orange-400 via-red-500 to-rose-600",
  arctic: "bg-gradient-to-br from-sky-300 via-cyan-400 to-blue-500",
  candy: "bg-gradient-to-br from-fuchsia-400 via-pink-500 to-rose-500",
} as const

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "teal", intent, children, className, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const circleAnim = useRef<gsap.core.Tween | null>(null)
    const circleRef = useRef<HTMLDivElement>(null)
    const [circleSize, setCircleSize] = useState<number>(0)

    const updateCircleSize = () => {
      if (buttonRef.current) {
        const buttonWidth = buttonRef.current.offsetWidth
        const buttonHeight = buttonRef.current.offsetHeight
        const maxDimension = Math.max(buttonWidth, buttonHeight)
        setCircleSize(maxDimension * 0.8)
      }
    }

    useEffect(() => {
      updateCircleSize()
      const handleResize = () => {
        updateCircleSize()
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [children])

    useGSAP(() => {
      const circle = circleRef.current
      const button = buttonRef.current

      if (!circle || !button) return
      const animateIn = () => {
        circleAnim.current?.kill()
        circleAnim.current = gsap.to(circleRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const animateOut = (x: number, y: number) => {
        circleAnim.current?.kill()
        circleAnim.current = gsap.to(circleRef.current, {
          scale: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            circle.classList.add("hidden")
            circle.style.top = `${y}px`
            circle.style.left = `${x}px`
          },
        })
      }

      const updateCirclePosition = (e: MouseEvent) => {
        if (!circle) return
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        circle.style.top = `${y}px`
        circle.style.left = `${x}px`
      }

      const handleMouseEnter = (e: MouseEvent) => {
        if (!circle) return
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        circle.style.top = `${y}px`
        circle.style.left = `${x}px`
        circle.classList.remove("hidden")
        animateIn()
      }

      const handleMouseLeave = (e: MouseEvent) => {
        if (!circle) return
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        animateOut(x, y)
      }

      button.addEventListener("mousemove", updateCirclePosition)
      button.addEventListener("mouseenter", handleMouseEnter)
      button.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        button.removeEventListener("mousemove", updateCirclePosition)
        button.removeEventListener("mouseenter", handleMouseEnter)
        button.removeEventListener("mouseleave", handleMouseLeave)
      }
    }, [circleSize])

    return (
      <button
        ref={(node) => {
          if (buttonRef && node) {
            ;(buttonRef as React.MutableRefObject<HTMLButtonElement>).current =
              node
          }
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn(buttonVariants({ className, variant, intent }), "cursor-pointer")}
        {...props}
      >
        <div
          ref={circleRef}
          className={cn(
            "z-0 circle absolute hidden top-0 left-0 pointer-events-none rounded-full ",
            variantToColorClass[variant || "teal"]
          )}
          style={{
            width: `${2 * circleSize}px`,
            height: `${2 * circleSize}px`,
            transform: "translate(-50%, -50%) scale(0)",
          }}
        />
        <div className="z-20 whitespace-nowrap w-full h-full flex justify-center items-center gap-2 font-bold">
          {children}
        </div>
      </button>
    )
  }
)

Button.displayName = "Button"

interface Button2Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  hoverColor?: string
}
function Button2({ children, className, hoverColor, ...props }: Button2Props) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    if (!buttonRef.current) return

    const handleEnter = () => {
      const tl = gsap.timeline()
      tl.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.15,
      })
        .to(buttonRef.current, {
          scale: 1,
          ease: "bounce.out",
          duration: 0.25,
        })
        .to(
          bgRef.current,
          {
            top: 0,
            duration: 0.3,
            ease: "power2.out",
          },
          "0"
        )
    }
    const handleLeave = () => {
      gsap.to(bgRef.current, {
        top: "100%",
        ease: "power2.out",
        duration: 0.3,
      })
    }
    buttonRef.current.parentElement?.addEventListener("mouseenter", handleEnter)
    buttonRef.current.parentElement?.addEventListener("mouseleave", handleLeave)
    return () => {
      buttonRef.current?.parentElement?.removeEventListener(
        "mouseenter",
        handleEnter
      )
      buttonRef.current?.parentElement?.removeEventListener(
        "mouseleave",
        handleLeave
      )
    }
  }, [])
  return (
    <div className="w-fit h-fit inline-block">
      <button
        ref={buttonRef}
        className={cn(
          className,
          "px-6 py-2.5 rounded-2xl cursor-pointer relative overflow-hidden font-bold"
        )}
        {...props}
      >
        <div className="absolute w-full h-full z-10 flex items-center justify-center top-0 left-0">
          {children}
        </div>
        <div
          ref={bgRef}
          className={cn(
            "z-0 w-full h-full absolute bg-white left-0 top-[100%] pointer-events-none",
            hoverColor
          )}
        ></div>
        <div className="opacity-0">{children}</div>
      </button>
    </div>
  )
}

interface Button3Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  initialDotTranslate?: number
  finalDotTranslate?: number
  initialArrowTranslate?: number
  finalArrowTranslate?: number
  initialTextTranslate?: number
  finalTextTranslate?: number
}

const Button3 = ({
  children,
  className,
  initialDotTranslate = -100,
  finalDotTranslate = 0,
  initialArrowTranslate = -100,
  finalArrowTranslate = -50,
  initialTextTranslate = -30,
  finalTextTranslate = 0,
  ...props
}: Button3Props) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const arrowRef = useRef<SVGSVGElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      const buttonElement = buttonRef.current
      const arrowElement = arrowRef.current
      const dotElement = dotRef.current
      const textElement = textRef.current

      const hoverInTimeline = gsap.timeline({
        paused: true,
        defaults: { duration: 0.3 },
      })

      const hoverOutTimeline = gsap.timeline({
        paused: true,
        defaults: { duration: 0.3 },
      })

      hoverInTimeline
        .to(
          buttonElement,
          {
            color: "#ffffff",
            duration: 0.2,
            backgroundColor: "#0F172A",
          },
          0
        )
        .to(dotElement, { opacity: 0, xPercent: initialDotTranslate }, 0)
        .to(arrowElement, { opacity: 1, xPercent: initialArrowTranslate }, 0)
        .to(textElement, { xPercent: initialTextTranslate }, "-=0.275")

      hoverOutTimeline
        .to(
          buttonElement,
          {
            backgroundColor: "rgba(255, 255, 255)",
            color: "#0F172A",
            duration: 0.2,
          },
          0
        )
        .to(arrowElement, { opacity: 0, xPercent: finalDotTranslate }, 0)
        .to(dotElement, { opacity: 1, xPercent: finalArrowTranslate }, 0)
        .to(textElement, { xPercent: finalTextTranslate }, "-=0.275")

      if (buttonElement) {
        buttonElement.addEventListener("mouseenter", () =>
          hoverInTimeline.restart().play()
        )
        buttonElement.addEventListener("mouseleave", () =>
          hoverOutTimeline.restart().play()
        )
      }

      return () => {
        if (buttonElement) {
          buttonElement.removeEventListener("mouseenter", () =>
            hoverInTimeline.restart().play()
          )
          buttonElement.removeEventListener("mouseleave", () =>
            hoverOutTimeline.restart().play()
          )
        }
      }
    },
    { scope: buttonRef }
  )
  return (
    <button
      ref={buttonRef}
      {...props}
      className={cn(
        "relative bg-white text-navy-900 border border-navy-200 rounded-2xl px-6 py-3 flex items-center gap-3 text-sm sm:text-base font-bold cursor-pointer transition-all shadow-md overflow-hidden pointer-events-auto",
        className
      )}
    >
      <span
        ref={dotRef}
        className="inline-block size-2 bg-teal-500 rounded-full relative"
      />
      <p ref={textRef} className="font-semibold whitespace-nowrap">
        {children}
      </p>
      <ArrowRight
        ref={arrowRef}
        className="size-4 absolute right-3 opacity-0 overflow-hidden text-teal-400"
      />
    </button>
  )
}

export { Button, Button2, Button3 }

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white shadow-sm hover:bg-primary-hover hover:shadow-md",
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200/80 border border-slate-200/60",
        outline:
          "border border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50 hover:border-slate-300",
        ghost:
          "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
        link:
          "text-primary underline-offset-4 hover:underline p-0 h-auto font-medium",
        pill:
          "bg-primary text-white rounded-full shadow-sm hover:bg-primary-hover hover:shadow-md px-6",
        teal:
          "bg-primary text-white shadow-sm hover:bg-primary-hover hover:shadow-md",
        verified:
          "bg-emerald-600 text-white shadow-sm hover:bg-emerald-700",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-lg px-3 text-xs",
        lg: "h-12 rounded-2xl px-6 text-base",
        icon: "h-10 w-10 p-0 rounded-xl",
      },
      intent: {
        small: "text-xs sm:text-sm",
        medium: "text-sm sm:text-base",
        large: "text-base sm:text-lg",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, intent, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, intent, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export const Button2 = Button
export const Button3 = Button

export { Button, buttonVariants }

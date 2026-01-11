import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full border border-border/10",
  {
    variants: {
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-10 w-10 text-sm",
        lg: "h-14 w-14 text-base",
        xl: "h-20 w-20 text-xl",
      },
      variant: {
        default: "",
        premium: "ring-2 ring-primary/20 ring-offset-2 ring-offset-background",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
)

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
  VariantProps<typeof avatarVariants> {
  src?: string
  alt?: string
  fallback?: React.ReactNode
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, variant, src, alt, fallback, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(avatarVariants({ size, variant }), className)}
    {...props}
  >
    <AvatarPrimitive.Image
      src={src}
      alt={alt}
      className="aspect-square h-full w-full object-cover"
    />
    <AvatarPrimitive.Fallback
      className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground font-medium uppercase"
    >
      {fallback}
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const avatarGroupVariants = cva(
  "flex items-center -space-x-4",
  {
    variants: {
      size: {
        sm: "-space-x-3",
        md: "-space-x-4",
        lg: "-space-x-5",
        xl: "-space-x-6",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarGroupVariants> {
  limit?: number
  children: React.ReactNode
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, size, limit, children, ...props }, ref) => {
    const childrenArray = React.Children.toArray(children)
    const showingChildren = limit ? childrenArray.slice(0, limit) : childrenArray
    const remaining = childrenArray.length - showingChildren.length

    return (
      <div
        ref={ref}
        className={cn(avatarGroupVariants({ size }), className)}
        {...props}
      >
        {showingChildren.map((child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { size } as any)
          }
          return child
        })}
        {remaining > 0 && (
          <div className={cn(
            "relative flex shrink-0 overflow-hidden rounded-full border-2 border-background bg-muted items-center justify-center font-medium text-muted-foreground",
            // We map the size to dimensions manually here to match Avatar sizes since this is just a div
            size === "sm" && "h-8 w-8 text-xs",
            size === "md" && "h-10 w-10 text-sm",
            size === "lg" && "h-14 w-14 text-base",
            size === "xl" && "h-20 w-20 text-xl",
          )}>
            +{remaining}
          </div>
        )}
      </div>
    )
  }
)
AvatarGroup.displayName = "AvatarGroup"


const avatarBadgeVariants = cva(
  "absolute bottom-0 right-0 flex items-center justify-center rounded-full border-2 border-background",
  {
    variants: {
      size: {
        sm: "h-2.5 w-2.5",
        md: "h-3.5 w-3.5",
        lg: "h-4 w-4",
      },
      status: {
        online: "bg-green-500",
        offline: "bg-gray-400",
        busy: "bg-red-500",
      },
    },
    defaultVariants: {
      size: "md",
      status: "online",
    },
  }
)

interface AvatarBadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarBadgeVariants> { }

const AvatarBadge = React.forwardRef<HTMLDivElement, AvatarBadgeProps>(
  ({ className, size, status, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(avatarBadgeVariants({ size, status }), className)}
      {...props}
    />
  )
)
AvatarBadge.displayName = "AvatarBadge"

export { Avatar, AvatarGroup, AvatarBadge }

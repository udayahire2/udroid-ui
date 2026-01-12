"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";
import { avatarVariants, avatarImageVariants, avatarFallbackVariants, avatarBadgeVariants, avatarGroupVariants } from "./avatar.styles";
import type { AvatarProps, AvatarBadgeProps, AvatarGroupProps } from "./avatar.types";

/**
 * Avatar Component
 * "The Personal Token"
 * 
 * Features:
 * - Radix Primitives for robust loading states
 * - "Machined Groove" container style
 * - Automatic fallback management
 */
const Avatar = React.forwardRef<
    React.ElementRef<typeof AvatarPrimitive.Root>,
    AvatarProps
>(({ className, variant, size, src, alt, fallback, delayMs = 600, children, ...props }, ref) => (
    <AvatarPrimitive.Root
        ref={ref}
        className={cn(avatarVariants({ variant, size, className }))}
        {...props}
    >
        <AvatarPrimitive.Image
            src={src}
            alt={alt}
            className={cn(avatarImageVariants())}
        />
        <AvatarPrimitive.Fallback
            className={cn(avatarFallbackVariants({ variant }))}
            delayMs={delayMs}
        >
            {fallback}
        </AvatarPrimitive.Fallback>
        {children}
    </AvatarPrimitive.Root>
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarBadge = React.forwardRef<HTMLDivElement, AvatarBadgeProps>(
    ({ className, size, status, children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(avatarBadgeVariants({ size, status }), className)}
                {...props}
            >
                {children}
            </div>
        );
    }
);
AvatarBadge.displayName = "AvatarBadge";

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
    ({ className, size, limit, children, ...props }, ref) => {
        const childrenArray = React.Children.toArray(children);
        const count = childrenArray.length;
        const shownChildren = limit ? childrenArray.slice(0, limit) : childrenArray;
        const excess = limit ? count - limit : 0;

        return (
            <div
                ref={ref}
                className={cn(avatarGroupVariants({ size }), className)}
                {...props}
            >
                {shownChildren.map((child, _) => {
                    if (React.isValidElement(child)) {
                        const childElement = child as React.ReactElement<any>;
                        return React.cloneElement(childElement, {
                            size: size || childElement.props.size,
                            className: cn(
                                "transition-transform hover:scale-110 hover:z-10 relative", // Machined Cutout Effect
                                childElement.props.className
                            ),
                        });
                    }
                    return child;
                })}
                {excess > 0 && (
                    <div
                        className={cn(
                            "relative flex items-center justify-center rounded-full bg-muted font-medium text-muted-foreground hover:z-10",
                            size === "sm" && "h-8 w-8 text-[10px]",
                            size === "md" && "h-10 w-10 text-xs",
                            size === "lg" && "h-12 w-12 text-sm",
                            size === "xl" && "h-14 w-14 text-base",
                        )}
                    >
                        +{excess}
                    </div>
                )}
            </div>
        );
    }
);
AvatarGroup.displayName = "AvatarGroup";

const AvatarImage = AvatarPrimitive.Image;
const AvatarFallback = AvatarPrimitive.Fallback;

export { Avatar, AvatarBadge, AvatarGroup, AvatarImage, AvatarFallback };

"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
import { tooltipContentVariants } from "./tooltip.styles";
import type { TooltipContentProps } from "./tooltip.types";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
    React.ElementRef<typeof TooltipPrimitive.Content>,
    TooltipContentProps
>(({ className, sideOffset = 6, variant, ...props }, ref) => (
    <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(tooltipContentVariants({ variant, className }))}
        {...props}
    >
        {props.children}
        {/* Subtle Arrow included for premium feel, can be hidden via css if needed but good for 'premium' grounding */}
        <TooltipPrimitive.Arrow className="fill-current text-white/10" width={12} height={6} />
    </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };

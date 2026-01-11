import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { tooltipContentVariants } from "./tooltip.styles";

export interface TooltipProps extends TooltipPrimitive.TooltipProps { }
export interface TooltipTriggerProps extends TooltipPrimitive.TooltipTriggerProps { }
export interface TooltipContentProps
    extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipContentVariants> { }
export interface TooltipProviderProps extends TooltipPrimitive.TooltipProviderProps { }

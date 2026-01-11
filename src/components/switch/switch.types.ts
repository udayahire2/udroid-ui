import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { switchRootVariants } from "./switch.styles";

export interface SwitchProps
    extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchRootVariants> {
    size?: "sm" | "md" | "lg";
}

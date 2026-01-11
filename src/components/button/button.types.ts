import { type ComponentProps } from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button.styles";

export interface ButtonProps
    extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

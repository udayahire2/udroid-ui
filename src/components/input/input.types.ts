
import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { inputVariants } from "./input.styles";

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
    /**
     * Content to display at the start of the input (e.g. icon).
     */
    startContent?: React.ReactNode;
    /**
     * Content to display at the end of the input (e.g. icon button).
     */
    endContent?: React.ReactNode;
    /**
     * Whether to replace the underlying input element with a child element.
     * Useful for integration with masking libraries or other input components.
     */
    asChild?: boolean;
}

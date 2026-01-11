import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { textareaVariants } from "./Textarea.styles";

export type TextareaVariant = "default" | "filled" | "error";
export type TextareaResize = "none" | "vertical";

export interface TextareaProps
    extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size" | "resize">,
    VariantProps<typeof textareaVariants> {
    /**
     * Visual variant of the textarea
     * @default "default"
     */
    variant?: TextareaVariant;

    /**
     * Resize behavior constraints using CSS
     * @default "vertical"
     */
    resize?: TextareaResize;

    /**
     * Whether the textarea should auto-grow with content.
     * NOTE: When true, resizing is automatically disabled to prevent conflicts.
     * @default false
     */
    autoGrow?: boolean;

    /**
     * Content to display at the start of the textarea (e.g. icon).
     */
    startContent?: React.ReactNode;

    /**
     * Content to display at the end of the textarea (e.g. icon).
     */
    endContent?: React.ReactNode;

    /**
     * Whether to replace the underlying textarea element with a child element.
     */
    asChild?: boolean;
}

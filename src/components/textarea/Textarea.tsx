"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { textareaVariants } from "./Textarea.styles";
import type { TextareaProps } from "./Textarea.types";

/**
 * Textarea Core Component
 * "The Machined Groove"
 * 
 * Features:
 * - Ref forwarding with internal merging
 * - Isolated Auto-grow logic
 * - Slot support (Icons only)
 * - Strict resize constraints
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            className,
            variant,
            resize = "vertical",
            autoGrow = false,
            value,
            onChange,
            disabled,
            readOnly,
            startContent,
            endContent,
            asChild = false,
            ...props
        },
        ref
    ) => {
        const internalRef = React.useRef<HTMLTextAreaElement>(null);

        // Merge internal and external refs
        const handleRef = (node: HTMLTextAreaElement) => {
            internalRef.current = node;
            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
            }
        };

        // Isolated Auto-grow Logic
        const adjustHeight = React.useCallback(() => {
            if (!autoGrow || !internalRef.current) return;

            const el = internalRef.current;
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight}px`;
        }, [autoGrow]);

        // Handle initial size and value changes
        React.useLayoutEffect(() => {
            adjustHeight();
        }, [value, adjustHeight]);

        // Handle manual input
        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            adjustHeight();
            onChange?.(e);
        };

        const handleContainerClick = () => {
            internalRef.current?.focus();
        };

        const Comp = asChild ? Slot : "textarea";

        return (
            <div
                className={cn(
                    textareaVariants({ variant, resize: autoGrow ? "none" : resize, className })
                )}
                data-disabled={disabled}
                data-readonly={readOnly}
                onClick={handleContainerClick}
            >
                {startContent && (
                    <div className="flex items-center justify-center text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0 mr-2 self-start mt-2">
                        {startContent}
                    </div>
                )}
                <Comp
                    ref={handleRef}
                    className={cn(
                        "flex w-full bg-transparent px-3 py-2 text-sm outline-none transition-colors hidden-scrollbar",
                        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        // Min height
                        "min-h-[40px]",
                        autoGrow && "overflow-hidden"
                    )}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={handleChange}
                    value={value}
                    aria-invalid={variant === "error"}
                    {...props}
                />
                {endContent && (
                    <div className="flex items-center justify-center text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0 ml-2 self-end mb-2">
                        {endContent}
                    </div>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export { Textarea };

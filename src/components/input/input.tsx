"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import type { InputProps } from "./input.types";
import { inputVariants } from "./input.styles";

import { Slot } from "@radix-ui/react-slot";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, size, startContent, endContent, asChild = false, ...props }, ref) => {
        const internalRef = React.useRef<HTMLInputElement>(null);

        // Merge internal ref with forwarded ref
        const handleRef = (node: HTMLInputElement) => {
            internalRef.current = node;
            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
            }
        };

        const handleContainerClick = () => {
            internalRef.current?.focus();
        };

        const Comp = asChild ? Slot : "input";

        return (
            <div
                className={cn(
                    inputVariants({ variant, size, className })
                )}
                onClick={handleContainerClick}
            >
                {startContent && (
                    <div className="flex items-center justify-center text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0">
                        {startContent}
                    </div>
                )}

                <Comp
                    ref={handleRef}
                    {...props}
                />

                {endContent && (
                    <div className="flex items-center justify-center text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0">
                        {endContent}
                    </div>
                )}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };

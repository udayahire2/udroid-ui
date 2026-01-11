"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";
import type { SeparatorProps } from "./separator.types";
import { separatorVariants } from "./separator.styles";

const Separator = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    SeparatorProps
>(
    (
        { className, orientation = "horizontal", variant, decorative = true, ...props },
        ref
    ) => (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation || undefined}
            className={cn(separatorVariants({ orientation, variant, className }))}
            {...props}
        />
    )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };


import { cva } from "class-variance-authority";

export const inputVariants = cva(
    // Base: "The Machined Groove" (Container)
    // - Flex layout for internal structure
    // - Transition on all interactive properties (not just color)
    // - Focus ring applied to container when input is focused (focus-within)
    "group flex w-full items-center gap-2 rounded-md border border-input bg-transparent shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-[border-color,box-shadow,opacity] duration-200 ease-mechanical focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&>input]:w-full [&>input]:bg-transparent [&>input]:outline-none [&>input]:placeholder:text-muted-foreground [&>input]:file:border-0 [&>input]:file:bg-transparent [&>input]:file:text-sm [&>input]:file:font-medium",
    {
        variants: {
            variant: {
                default:
                    "bg-background",
                // The default is a clean surface cut. 
                filled:
                    "bg-muted/50 border-transparent hover:bg-muted/70 focus-within:bg-background focus-within:border-input",
                // Filled starts borderless/darker, becomes standard on focus.
                error:
                    "border-destructive text-destructive focus-within:ring-destructive/30 shadow-none [&>input]:placeholder:text-destructive/60",
                // Error removes depth, alerts.
            },
            size: {
                sm: "h-8 px-3",      // 32px (Dense)
                md: "h-9 px-3",      // 36px (Standard - Matches Button)
                lg: "h-10 px-4",     // 40px (Touch/Comfy)
            },
        },
        defaultVariants: {
            variant: "default",
            size: "md",
        },
    }
);

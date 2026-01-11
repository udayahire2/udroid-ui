import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    // Base: Strictly controlled transitions, mechanical easing, no bounce.
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[transform,box-shadow,background-color,color] duration-200 ease-mechanical focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:active:transform-none select-none",
    {
        variants: {
            variant: {
                default:
                    "bg-primary text-primary-foreground shadow-[var(--shadow-button-rest),var(--shadow-button-lip)] hover:bg-primary/90 hover:shadow-md active:shadow-[0_0_0_0_transparent,var(--shadow-button-lip)] active:translate-y-[0.75px]",
                destructive:
                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md active:shadow-none active:translate-y-[0.75px]",
                outline:
                    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:shadow-md active:shadow-none active:translate-y-[0.75px]",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md active:shadow-none active:translate-y-[0.75px]",
                ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs active:translate-y-[0.5px]", // Less travel for small
                lg: "h-10 rounded-md px-8 active:translate-y-[1px]",      // More travel for large

                // System-Level Icon Sizes (Square Geometry Tuning)
                // Physics Override: Less scale (0.985 vs 0.98) and less travel (0.5px max) to prevent "wobbly" feel
                "icon-sm": "h-8 w-8 p-0 [&_svg]:size-4 active:scale-[0.985] active:translate-y-[0.5px]",
                "icon-md": "h-9 w-9 p-0 [&_svg]:size-4 active:scale-[0.985] active:translate-y-[0.5px]",
                "icon-lg": "h-10 w-10 p-0 [&_svg]:size-5 active:scale-[0.985] active:translate-y-[0.5px]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

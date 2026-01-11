import { cva } from "class-variance-authority";

export const radioGroupVariants = cva("grid gap-2", {
    variants: {
        orientation: {
            horizontal: "grid-flow-col auto-cols-max",
            vertical: "grid-flow-row",
        },
    },
    defaultVariants: {
        orientation: "vertical",
    },
});

export const radioGroupItemVariants = cva(
    "group aspect-square h-5 w-5 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 ease-in-out data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground hover:scale-105 active:scale-95",
    {
        variants: {
            variant: {
                default: "",
                premium:
                    "h-6 w-6 border-2 border-muted-foreground/30 bg-secondary/50 data-[state=checked]:border-primary data-[state=checked]:bg-primary shadow-sm hover:border-primary/50",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

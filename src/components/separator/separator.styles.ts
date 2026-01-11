import { cva } from "class-variance-authority";

export const separatorVariants = cva(
    "shrink-0 bg-border",
    {
        variants: {
            orientation: {
                horizontal: "h-[1px] w-full",
                vertical: "h-full w-[1px]",
            },
            variant: {
                default: "bg-border",
                muted: "bg-border/50",
                dashed: "bg-transparent border-border/50 border-dashed",
            },
        },
        compoundVariants: [
            {
                orientation: "horizontal",
                variant: "dashed",
                class: "border-b-[1px]",
            },
            {
                orientation: "vertical",
                variant: "dashed",
                class: "border-r-[1px]",
            },
        ],
        defaultVariants: {
            orientation: "horizontal",
            variant: "default",
        },
    }
);

import { cva } from "class-variance-authority";

export const avatarVariants = cva(
    "relative flex shrink-0 overflow-hidden rounded-full transition-all duration-200 ease-mechanical",
    {
        variants: {
            size: {
                sm: "h-8 w-8", // 32px
                md: "h-10 w-10", // 40px
                lg: "h-12 w-12", // 48px
                xl: "h-14 w-14", // 56px
            },
            variant: {
                default: "bg-muted/50 shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)]", // Machined well without rim (no border)
                flat: "bg-muted shadow-none",
                outline: "border-2 border-border bg-transparent shadow-none",
                premium: "bg-background border border-border shadow-md",
            },
        },
        defaultVariants: {
            size: "md",
            variant: "default",
        },
    }
);

export const avatarImageVariants = cva(
    "aspect-square h-full w-full rounded-full object-cover transition-opacity duration-200" // Added rounded-full to match inner radius
);

export const avatarFallbackVariants = cva(
    "flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground",
    {
        variants: {
            variant: {
                default: "animate-in fade-in zoom-in-50 duration-200",
                flat: "",
                outline: "",
                premium: "animate-in fade-in zoom-in-50 duration-200",
            }
        },
        defaultVariants: {
            variant: "default",
        }
    }
);

export const avatarBadgeVariants = cva(
    "absolute bottom-0 right-0 z-10 flex items-center justify-center rounded-full border-2 border-background ring-background transition-all",
    {
        variants: {
            size: {
                sm: "h-2.5 w-2.5",
                md: "h-3.5 w-3.5",
                lg: "h-4 w-4",
                xl: "h-5 w-5",
            },
            status: {
                online: "bg-green-500",
                busy: "bg-red-500",
                away: "bg-yellow-500",
                offline: "bg-slate-500",
                count: "border-none bg-red-600 text-[10px] font-bold text-white shadow-sm", // Notification badge
            }
        },
        defaultVariants: {
            size: "md",
            status: "online",
        }
    }
);

export const avatarGroupVariants = cva(
    "flex items-center justify-center -space-x-2",
    {
        variants: {
            size: {
                sm: "-space-x-1.5",
                md: "-space-x-2",
                lg: "-space-x-3",
                xl: "-space-x-4",
            }
        },
        defaultVariants: {
            size: "md"
        }
    }
);

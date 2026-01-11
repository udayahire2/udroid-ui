import { cva } from "class-variance-authority";

export const tooltipContentVariants = cva(
    "z-50 overflow-hidden rounded-md border px-3 py-1.5 text-xs font-medium shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 antialiased select-none",
    {
        variants: {
            variant: {
                default: "bg-popover text-popover-foreground border-border",
                premium: "border-white/10 bg-zinc-950 text-zinc-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] ring-1 ring-white/10 tracking-wide",
                glass: "border-white/20 bg-black/40 backdrop-blur-xl text-white shadow-lg ring-1 ring-white/5",
                minimal: "bg-foreground text-background border-none px-2 py-1 rounded-sm",
            },
        },
        defaultVariants: {
            variant: "premium",
        },
    }
);

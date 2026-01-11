import { cva } from "class-variance-authority";

export const textareaVariants = cva(
    // Base: "The Machined Groove"
    // - Wrapper acts as the physical "well" / "recess"
    // - Inset shadow for true visual depth
    // - Sharp border for the machined edge cut
    // - Removing generic glows for confident state changes
    "group flex w-full rounded-lg border text-sm transition-all duration-200 ease-out focus-within:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: [
                    // Light Mode: Machined Aluminum / Paper
                    "border-slate-300/80 bg-slate-50/50",
                    "shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)]", // The Recess
                    "placeholder:text-muted-foreground/60",

                    // Hover: Slight reveal of the edge
                    "hover:border-slate-400 hover:bg-slate-50",

                    // Focus: "Active Groove" - Sharp, confident, illuminated
                    "focus-within:border-slate-600 focus-within:bg-white",
                    "focus-within:shadow-[inset_0_1px_2px_rgba(0,0,0,0.03),0_0_0_1px_rgba(71,85,105,1)]", // Fake ring via shadow for cleaner cut

                    // Dark Mode: Machined Graphite
                    "dark:border-slate-800 dark:bg-slate-900/40",
                    "dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]",
                    "dark:hover:border-slate-700",
                    "dark:focus-within:border-slate-400 dark:focus-within:bg-slate-950",
                    "dark:focus-within:shadow-[inset_0_1px_2px_rgba(0,0,0,0.5),0_0_0_1px_rgba(148,163,184,1)]",
                ],
                filled: [
                    // A softer, deeper channel - less "cut", more "molded"
                    "border-transparent bg-slate-100",
                    "shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)]",
                    "placeholder:text-slate-400",

                    // Hover
                    "hover:bg-slate-200/70",

                    // Focus
                    "focus-within:bg-white focus-within:border-slate-300 focus-within:shadow-sm",

                    // Dark Mode
                    "dark:bg-slate-800/60",
                    "dark:hover:bg-slate-800",
                    "dark:focus-within:bg-slate-950 dark:focus-within:border-slate-700",
                ],
                error: [
                    // Surface Tension: The material feels "stressed"
                    "border-red-200 bg-red-50/20 text-red-900",
                    "shadow-[inset_0_2px_4px_rgba(220,38,38,0.04)]", // Subtle red shadow
                    "placeholder:text-red-300/80",

                    // Focus: High alert
                    "focus-within:border-red-500 focus-within:bg-red-50/40",
                    "focus-within:shadow-[inset_0_1px_1px_rgba(220,38,38,0.05),0_0_0_1px_rgba(239,68,68,1)]",

                    // Dark Mode
                    "dark:border-red-900/60 dark:bg-red-950/20 dark:text-red-200",
                    "dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]",
                    "dark:focus-within:border-red-500 dark:focus-within:bg-red-950/40",
                    "dark:focus-within:shadow-[0_0_0_1px_rgba(239,68,68,0.8)]",
                ],
            },
            resize: {
                none: "[&>textarea]:resize-none",
                vertical: "[&>textarea]:resize-y",
            },
        },
        defaultVariants: {
            variant: "default",
            resize: "vertical",
        },
    }
);

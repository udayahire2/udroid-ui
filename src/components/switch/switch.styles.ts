import { cva } from "class-variance-authority";

export const switchRootVariants = cva(
    "peer inline-flex shrink-0 cursor-pointer items-center border-2 border-transparent transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "h-6 w-11 rounded-full data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
                premium: "h-8 w-14 rounded-2xl border-0 bg-zinc-800/50 shadow-[inset_0px_2px_4px_rgba(0,0,0,0.5),0px_1px_0px_rgba(255,255,255,0.05)_inset] data-[state=checked]:bg-zinc-900 data-[state=unchecked]:bg-zinc-900 dark:bg-zinc-950", // Recessed track, constant dark background for the 'slot' feel
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export const switchThumbVariants = cva(
    "pointer-events-none block shadow-lg ring-0 transition-all duration-300 cubic-bezier(0.4, 0.0, 0.2, 1)",
    {
        variants: {
            variant: {
                default: "h-5 w-5 rounded-full bg-background data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
                premium: "h-6 w-6 rounded-lg bg-zinc-400 data-[state=checked]:bg-white data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-1 shadow-[0px_2px_4px_rgba(0,0,0,0.25),0px_1px_0px_rgba(255,255,255,0.2)_inset] data-[state=checked]:shadow-[0px_0px_10px_rgba(255,255,255,0.3),0px_2px_4px_rgba(0,0,0,0.2)]", // Tactile thumb, changes color and has slight glow/reflection when active
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

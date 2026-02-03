import { useRef } from "react";
import { cn } from "@/lib/utils";

const TECHNOLOGIES = [
    { name: "Next.js 15", weight: "font-bold" },
    { name: "React 19", weight: "font-semibold" },
    { name: "TypeScript", weight: "font-medium" },
    { name: "TailwindCSS", weight: "font-bold" },
    { name: "Framer Motion", weight: "font-medium" },
    { name: "Radix UI", weight: "font-semibold" },
    { name: "Vite", weight: "font-bold" },
];

export function TrustedBySection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty("--mouse-x", `${x}px`);
        containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    // Triple the array to ensure smooth looping without gaps
    const MARQUEE_ITEMS = [...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES];

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="w-full py-24 sm:py-32 overflow-hidden relative bg-background border-y border-border/20 backdrop-blur-sm group/section"
        >

            <div className="container px-4 mx-auto mb-12 text-center relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-muted/20 px-4 py-1.5 text-xs font-medium text-muted-foreground tracking-wider uppercase backdrop-blur-md">
                    Built With The Best
                </span>
            </div>

            <div className="relative w-full max-w-[90rem] mx-auto h-20">
                {/* Clean Fading Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

                {/* Layer 1: Dim Base Text (Always Visible, Low Opacity) */}
                <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none">
                    <MarqueeContent items={MARQUEE_ITEMS} className="text-muted-foreground/20 blur-[0.5px]" />
                </div>

                {/* Layer 2: Bright Highlight Text (Revealed by Mask) */}
                <div
                    className="absolute inset-0 flex items-center overflow-hidden pointer-events-none select-none"
                    style={{
                        maskImage: `radial-gradient(300px circle at var(--mouse-x, 0) var(--mouse-y, 0), black 20%, transparent 100%)`,
                        WebkitMaskImage: `radial-gradient(300px circle at var(--mouse-x, 0) var(--mouse-y, 0), black 20%, transparent 100%)`,
                    }}
                >
                    <MarqueeContent items={MARQUEE_ITEMS} className="text-foreground" />
                </div>
            </div>
        </section>
    );
}

// Simplified marquee using CSS animation instead of GSAP
function MarqueeContent({ items, className }: { items: typeof TECHNOLOGIES, className?: string }) {
    return (
        <div
            className={cn("flex gap-16 sm:gap-24 items-center whitespace-nowrap pl-4 w-fit animate-marquee", className)}
        >
            {items.map((tech, i) => (
                <div key={i} className="flex items-center justify-center">
                    <span className={cn("text-3xl sm:text-4xl font-sans tracking-tight font-bold", tech.weight)}>
                        {tech.name}
                    </span>
                </div>
            ))}
        </div>
    );
}

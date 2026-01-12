import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TECHNOLOGIES = [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion",
    "GSAP",
    "Radix UI",
    "Next.js 15",
    "React 19",
    "TypeScript", // Loop
];

export function TrustedBySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!marqueeRef.current) return;

        const totalWidth = marqueeRef.current.scrollWidth;

        gsap.to(marqueeRef.current, {
            x: -totalWidth / 2,
            duration: 30, // Slower, more elegant
            ease: "linear",
            repeat: -1,
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full py-16 border-y border-border/40 bg-zinc-950/50 overflow-hidden relative">

            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/10 via-zinc-950/0 to-zinc-950/0 pointer-events-none" />

            <div className="container px-4 mx-auto mb-10 text-center relative z-10">
                <p className="text-sm font-semibold text-muted-foreground/80 uppercase tracking-[0.2em]">
                    Powered by the Modern Web
                </p>
            </div>

            <div className="relative flex overflow-hidden mask-gradient-x w-full max-w-5xl mx-auto">
                {/* Enhanced Fading Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                <div ref={marqueeRef} className="flex gap-12 sm:gap-20 items-center whitespace-nowrap pl-4">
                    {TECHNOLOGIES.map((tech, i) => (
                        <span
                            key={i}
                            className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-zinc-200 to-zinc-500 hover:to-white transition-colors cursor-default select-none font-sans tracking-tight"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

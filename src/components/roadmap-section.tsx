import { useRef } from "react";
import { CheckCircle2, Circle, Clock, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface RoadmapItem {
    id: string;
    title: string;
    description: string;
    date: string;
    status: "completed" | "in-progress" | "upcoming";
}

const roadmapData: RoadmapItem[] = [
    {
        id: "1",
        title: "Project Inception",
        description: "Initial concept, research, and design system setup.",
        date: "Q4 2025",
        status: "completed",
    },
    {
        id: "2",
        title: "Core Components",
        description: "Building the foundational UI elements (Buttons, Inputs, Cards).",
        date: "Jan 2026",
        status: "in-progress",
    },
    {
        id: "3",
        title: "Advanced Animations",
        description: "Integrating GSAP for complex interactions and micro-animations.",
        date: "Feb 2026",
        status: "upcoming",
    },
    {
        id: "4",
        title: "Documentation v1",
        description: "Comprehensive docs with interactive examples and code snippets.",
        date: "Mar 2026",
        status: "upcoming",
    },
    {
        id: "5",
        title: "Community Launch",
        description: "Public release and community engagement initiatives.",
        date: "Q2 2026",
        status: "upcoming",
    },
];

export function RoadmapSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useGSAP(
        () => {
            if (!sectionRef.current) return;

            const items = itemsRef.current.filter(Boolean);

            items.forEach((item) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        }
                    }
                )
            });
        },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-24 bg-background overflow-hidden"
            id="roadmap"
        >
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                        Product Roadmap
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                        Our journey to build the ultimate UI library. Here's what we've done and what's coming next.
                    </p>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Central Line for Desktop / Left Line for Mobile */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 md:translate-x-0 h-full z-0">
                        <svg
                            className="w-full h-full overflow-visible"
                            preserveAspectRatio="none"
                            viewBox="0 0 2 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="roadmap-gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                                    <stop offset="50%" stopColor="#a855f7" />
                                    <stop offset="100%" stopColor="#3b82f6" />
                                </linearGradient>
                            </defs>
                            {/* Base Track */}
                            <line
                                x1="50%" y1="0" x2="50%" y2="100%"
                                vectorEffect="non-scaling-stroke"
                                className="stroke-border"
                                strokeWidth="2"
                            />
                            {/* Animated Fill */}
                            <motion.line
                                x1="50%" y1="0" x2="50%" y2="100%"
                                vectorEffect="non-scaling-stroke"
                                stroke="url(#roadmap-gradient)"
                                strokeWidth="2"
                                className="roadmap-line"
                                style={{ pathLength: scaleY }}
                            />
                        </svg>
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        {roadmapData.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={item.id}
                                    ref={(el) => { itemsRef.current[index] = el; }}
                                    className={cn(
                                        "relative flex items-center md:justify-between group",
                                        isEven ? "md:flex-row-reverse" : ""
                                    )}
                                >
                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block w-5/12" />

                                    {/* Icon / Node */}
                                    <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full border-4 border-background bg-card z-10 shadow-lg shadow-primary/5 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-primary/20">
                                        {item.status === "completed" && (
                                            <div className="rounded-full bg-green-500/10 p-2">
                                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                                            </div>
                                        )}
                                        {item.status === "in-progress" && (
                                            <div className="relative flex items-center justify-center w-full h-full">
                                                <span className="absolute inline-flex h-full w-full rounded-full bg-primary/20 animate-ping opacity-75"></span>
                                                <div className="rounded-full bg-primary/10 p-2 relative">
                                                    <Clock className="w-6 h-6 text-primary" />
                                                </div>
                                            </div>
                                        )}
                                        {item.status === "upcoming" && (
                                            <div className="rounded-full bg-muted p-2">
                                                <Circle className="w-6 h-6 text-muted-foreground" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Content Card */}
                                    <div className="w-full md:w-5/12 pl-20 md:pl-0">
                                        <div
                                            className={cn(
                                                "relative p-8 rounded-3xl border transition-all duration-300 group-hover:-translate-y-1",
                                                // Default card styles (Glassmorphism + clean borders)
                                                "bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5",
                                                // Specific styles for In-Progress items
                                                item.status === "in-progress" && "border-primary/50 bg-primary/5 shadow-[0_0_30px_-10px_rgba(var(--primary),0.15)] ring-1 ring-primary/20"
                                            )}
                                        >
                                            {item.status === "in-progress" && (
                                                <div className="absolute -top-4 right-6">
                                                    <span className="relative flex items-center px-4 py-1.5 rounded-full bg-background border border-primary/30 text-xs font-semibold text-primary shadow-sm">
                                                        <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                                                        Working On
                                                    </span>
                                                </div>
                                            )}

                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">{item.date}</span>
                                                <ArrowRight className="w-5 h-5 text-primary opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                            </div>

                                            <h3 className={cn(
                                                "text-2xl font-bold mb-3 transition-colors",
                                                item.status === "in-progress" ? "text-primary" : "group-hover:text-primary"
                                            )}>
                                                {item.title}
                                            </h3>

                                            <p className="text-muted-foreground leading-relaxed text-[15px]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

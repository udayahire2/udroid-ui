import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    MousePointer2,
    Type,
    Bell,
    Maximize2,
    MessageSquare,
    Check,
    X,
    AlertCircle
} from "lucide-react";
import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";

export function VisualComponentPreview() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Zig-Zag Background Animation
        if (pathRef.current) {
            const length = pathRef.current.getTotalLength();
            gsap.set(pathRef.current, {
                strokeDasharray: length,
                strokeDashoffset: length,
            });

            gsap.to(pathRef.current, {
                strokeDashoffset: 0,
                duration: 3,
                ease: "none",
                repeat: -1,
                yoyo: true, // Optional: for back and forth
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    toggleActions: "play pause resume pause"
                }
            });

            // Secondary "Current" Flow Line (Overlay)
            // We can simulate this with a duplicate path or just styling
        }

        // Entrance Animation for Grid Items
        gsap.from(".bento-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full py-24 px-4 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1440 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid slice"
                >
                    <path
                        ref={pathRef}
                        d="M-100 400 L 200 400 L 300 200 L 500 600 L 700 400 L 900 400 L 1000 100 L 1200 700 L 1500 400"
                        stroke="url(#gradient-line)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <defs>
                        <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="10%" stopColor="#38bdf8" /> {/* Sky Blue */}
                            <stop offset="90%" stopColor="#a855f7" /> {/* Purple */}
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-white/60">
                        Aesthetics in Every Pixel.
                    </h2>
                    <p className="text-zinc-500 dark:text-muted-foreground text-lg max-w-2xl mx-auto">
                        Transcend the ordinary. Components that don't just function, but delight. Interactions that feel natural. Animations that feel smooth.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[280px]">

                    {/* 1. Buttons Playground */}
                    <BentoCard className="md:col-span-1" title="Interactive Buttons" icon={<MousePointer2 className="w-4 h-4 text-sky-500 dark:text-sky-400" />}>
                        <CursorInteractiveContainer
                            cursor={
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M9.391 2.32C8.42 1.56 7 2.253 7 3.486V28.41c0 1.538 1.966 2.18 2.874.938l6.225-8.523a2 2 0 0 1 1.615-.82h9.69c1.512 0 2.17-1.912.978-2.844z" /></svg>
                            }
                            cursorClassName="text-sky-500 dark:text-sky-400 drop-shadow-[0_0_15px_rgba(14,165,233,0.4)] dark:drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]"
                        >
                            <div className="flex flex-col gap-4">
                                <Button size="default" className="rounded-full shadow-xl shadow-zinc-900/10 dark:shadow-white/5 cursor-none pointer-events-none">
                                    Primary Action
                                </Button>
                                <Button variant="outline" className="rounded-full bg-transparent border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/5 cursor-none pointer-events-none">
                                    Secondary
                                </Button>
                            </div>
                        </CursorInteractiveContainer>
                    </BentoCard>

                    {/* 2. Modal / Dialog Preview */}
                    <BentoCard className="md:col-span-2" title="Focus Modal" icon={<Maximize2 className="w-4 h-4 text-purple-500 dark:text-purple-400" />}>
                        <CursorInteractiveContainer
                            cursor={<MousePointer2 className="w-6 h-6 fill-current" />}
                            cursorClassName="text-purple-500 dark:text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] dark:drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                        >
                            <div className="relative w-full h-full flex items-center justify-center p-8 overflow-hidden rounded-3xl">
                                {/* Modal Window */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="relative w-full max-w-sm bg-white dark:bg-[#0E0E10] border border-zinc-200 dark:border-white/10 rounded-2xl shadow-2xl shadow-zinc-900/10 dark:shadow-black/50 p-6 space-y-4 cursor-none"
                                >
                                    <div className="flex justify-between items-center pb-2">
                                        <h4 className="font-semibold text-zinc-900 dark:text-white tracking-tight">Delete Project?</h4>
                                        <div className="p-1 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors cursor-none">
                                            <X className="w-4 h-4 text-zinc-400 dark:text-zinc-500" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                        This action cannot be undone. This will permanently delete your project and remove data.
                                    </p>
                                    <div className="flex justify-end gap-3 pt-2">
                                        <button className="px-4 py-2 text-xs font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-none">Cancel</button>
                                        <button
                                            onClick={() => alert("Project deleted successfully!")}
                                            className="px-4 py-2 text-xs font-medium bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-500/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors cursor-none"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </motion.div>
                            </div>
                        </CursorInteractiveContainer>
                    </BentoCard>

                    {/* 3. Inputs & Forms */}
                    <BentoCard className="md:col-span-1" title="Smart Inputs" icon={<Type className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />}>
                        <CursorInteractiveContainer
                            cursor={<Type className="w-6 h-6" />}
                            cursorClassName="text-emerald-500 dark:text-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)] dark:drop-shadow-[0_0_15px_rgba(52,211,153,0.6)]"
                        >
                            <div className="flex flex-col gap-5 justify-center h-full px-8 cursor-none w-full max-w-xs mx-auto">
                                <div className="space-y-2 pointer-events-none">
                                    <Label className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 ml-1">Email</Label>
                                    <Input
                                        placeholder="hello@udroid.com"
                                        className="cursor-none"
                                    />
                                </div>
                                <div className="space-y-2 pointer-events-none opacity-60">
                                    <Label className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 ml-1">Password</Label>
                                    <Input
                                        type="password"
                                        value="password123"
                                        readOnly
                                        className="cursor-none"
                                    />
                                </div>
                            </div>
                        </CursorInteractiveContainer>
                    </BentoCard>

                    {/* 4. Toasts / Notifications */}
                    <BentoCard className="md:col-span-1" title="Stacked Toasts" icon={<Bell className="w-4 h-4 text-amber-500 dark:text-amber-400" />}>
                        <CursorInteractiveContainer
                            cursor={<Bell className="w-6 h-6 fill-current" />}
                            cursorClassName="text-amber-500 dark:text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)] dark:drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]"
                        >
                            <div className="relative w-full h-full flex flex-col items-center justify-center perspective-[1000px] cursor-none">
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0 }}
                                    className="absolute bottom-10 w-64 bg-white dark:bg-[#121214] border border-zinc-200 dark:border-white/10 rounded-xl p-4 shadow-xl shadow-zinc-900/5 dark:shadow-2xl z-20 flex gap-4 items-center"
                                >
                                    <div className="w-3 h-3 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.4)]" />
                                    <div className="space-y-0.5">
                                        <p className="text-xs font-semibold text-zinc-900 dark:text-white">Project Deployed</p>
                                        <p className="text-[10px] text-zinc-500">Ready for production</p>
                                    </div>
                                </motion.div>

                                {/* Stacked Effect */}
                                <motion.div
                                    animate={{ y: [0, -8, 0], scale: [0.95, 0.95, 0.95] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.1 }}
                                    className="absolute bottom-6 w-60 bg-white/60 dark:bg-[#121214]/60 border border-zinc-200/50 dark:border-white/5 rounded-xl h-14 z-10 backdrop-blur-sm"
                                />
                                <motion.div
                                    animate={{ y: [0, -8, 0], scale: [0.9, 0.9, 0.9] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.2 }}
                                    className="absolute bottom-2 w-56 bg-white/30 dark:bg-[#121214]/30 border border-zinc-200/30 dark:border-white/5 rounded-xl h-14 z-0 backdrop-blur-sm"
                                />
                            </div>
                        </CursorInteractiveContainer>
                    </BentoCard>

                    {/* 5. Tooltips */}
                    <BentoCard className="md:col-span-1" title="Micro-Interactions" icon={<MessageSquare className="w-4 h-4 text-pink-500 dark:text-pink-400" />}>
                        <CursorInteractiveContainer
                            cursor={<MessageSquare className="w-6 h-6 fill-current" />}
                            cursorClassName="text-pink-500 dark:text-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.4)] dark:drop-shadow-[0_0_15px_rgba(244,114,182,0.6)]"
                        >
                            <div className="flex gap-6 items-center justify-center h-full cursor-none">
                                <TooltipPreview
                                    icon={<Check className="w-5 h-5" />}
                                    text="Approved"
                                    color="text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-400/10 border-emerald-200 dark:border-emerald-400/20"
                                />
                                <TooltipPreview
                                    icon={<X className="w-5 h-5" />}
                                    text="Rejected"
                                    color="text-rose-600 dark:text-rose-400 bg-rose-100 dark:bg-rose-400/10 border-rose-200 dark:border-rose-400/20"
                                />
                                <TooltipPreview
                                    icon={<AlertCircle className="w-5 h-5" />}
                                    text="Warning"
                                    color="text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-400/10 border-amber-200 dark:border-amber-400/20"
                                />
                            </div>
                        </CursorInteractiveContainer>
                    </BentoCard>

                </div>
            </div>
        </div>
    );
}

function BentoCard({ children, className, title, icon }: { children: React.ReactNode, className?: string, title: string, icon: React.ReactNode }) {
    return (
        <div className={cn(
            "relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-[#0A0A0B] shadow-sm dark:shadow-none hover:border-zinc-300 dark:hover:border-white/10 transition-colors duration-500 group",
            className
        )}>
            {/* Ambient Glow - Dark Mode Only */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 dark:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none hidden dark:block" />

            {/* Header */}
            <div className="absolute top-5 left-6 flex items-center gap-3 z-20 pointer-events-none">
                <div className="p-1.5 rounded-md bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/5">
                    {icon}
                </div>
                <span className="text-xs font-semibold tracking-wide text-zinc-500 dark:text-zinc-400 uppercase">{title}</span>
            </div>

            {/* Content Area - Seamless */}
            <div className="relative w-full h-full pt-16 group-hover:scale-[1.02] transition-transform duration-700 ease-out">
                {children}
            </div>
        </div>
    )
}

function TooltipPreview({ icon, text, color }: { icon: React.ReactNode, text: string, color: string }) {
    const [hover, setHover] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className={cn("p-2 rounded-lg cursor-help transition-all duration-300", color, hover ? "scale-110" : "scale-100")}>
                {icon}
            </div>

            <AnimatePresence>
                {hover && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white text-black text-[10px] font-bold rounded shadow-xl whitespace-nowrap"
                    >
                        {text}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

interface CursorInteractiveContainerProps {
    children: React.ReactNode;
    cursor?: React.ReactNode;
    cursorClassName?: string;
}

function CursorInteractiveContainer({ children, cursor, cursorClassName }: CursorInteractiveContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const xTo = useRef<gsap.QuickToFunc | null>(null);
    const yTo = useRef<gsap.QuickToFunc | null>(null);

    useGSAP(() => {
        xTo.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.5, ease: "power2.out" });
        yTo.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.5, ease: "power2.out" });
    }, { scope: containerRef });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current || !xTo.current || !yTo.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        xTo.current(e.clientX - rect.left);
        yTo.current(e.clientY - rect.top);
    };

    const handleMouseEnter = () => {
        gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
        gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex flex-col gap-4 items-center justify-center h-full w-full cursor-none [&_*]:cursor-none overflow-hidden"
        >
            <div className="relative z-10 flex flex-col gap-4 items-center w-full h-full justify-center">
                {children}
            </div>

            <div
                ref={cursorRef}
                className={cn(
                    "absolute top-0 left-0 w-7 h-7 pointer-events-none -translate-x-1/4 -translate-y-1/4 opacity-0 z-50",
                    cursorClassName
                )}
            >
                {cursor || (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M9.391 2.32C8.42 1.56 7 2.253 7 3.486V28.41c0 1.538 1.966 2.18 2.874.938l6.225-8.523a2 2 0 0 1 1.615-.82h9.69c1.512 0 2.17-1.912.978-2.844z" /></svg>
                )}
            </div>
        </div>
    );
}

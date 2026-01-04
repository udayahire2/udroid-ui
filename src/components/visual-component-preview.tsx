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
                // yoyo: true, // Optional: for back and forth
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
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        Visual Excellence.
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Meticulously crafted components designed for modern applications.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">

                    {/* 1. Buttons Playground */}
                    <BentoCard className="md:col-span-1" title="Interactive Buttons" icon={<MousePointer2 className="w-5 h-5 text-sky-400" />}>
                        <CursorInteractiveContainer>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 bg-white text-black rounded-lg font-medium text-sm shadow-lg shadow-white/10 cursor-none"
                            >
                                Primary Action
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 bg-transparent border border-white/20 text-white rounded-lg font-medium text-sm cursor-none"
                            >
                                Secondary
                            </motion.button>
                        </CursorInteractiveContainer>
                    </BentoCard>
                    {/* 2. Modal / Dialog Preview */}
                    <BentoCard className="md:col-span-2" title="Focus Modal" icon={<Maximize2 className="w-5 h-5 text-purple-400" />}>
                        <div className="relative w-full h-full flex items-center justify-center p-8 bg-black/20 rounded-xl border border-white/5 overflow-hidden">
                            {/* Fake Background Blur */}
                            <div className="absolute inset-0 backdrop-blur-[2px]" />

                            {/* Modal Window */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative w-full max-w-md bg-[#0F0F11] border border-white/10 rounded-xl shadow-2xl p-6 space-y-4"
                            >
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <h4 className="font-semibold text-white">Delete Project?</h4>
                                    <X className="w-4 h-4 text-zinc-500 cursor-pointer hover:text-white transition-colors" />
                                </div>
                                <p className="text-sm text-zinc-400">
                                    This action cannot be undone. This will permanently delete your project and remove data from our servers.
                                </p>
                                <div className="flex justify-end gap-3 pt-2">
                                    <button className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors">Cancel</button>
                                    <button className="px-3 py-1.5 text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20 rounded hover:bg-red-500/20 transition-colors">Delete</button>
                                </div>
                            </motion.div>
                        </div>
                    </BentoCard>

                    {/* 3. Inputs & Forms */}
                    <BentoCard className="md:col-span-1" title="Smart Inputs" icon={<Type className="w-5 h-5 text-emerald-400" />}>
                        <div className="flex flex-col gap-4 justify-center h-full px-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-muted-foreground ml-1">Email Address</label>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder="name@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all group-hover:border-white/20"
                                    />
                                    <div className="absolute inset-0 rounded-lg bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                </div>
                            </div>
                            <div className="space-y-1.5 opacity-50 pointer-events-none">
                                <label className="text-xs font-medium text-muted-foreground ml-1">Password</label>
                                <input
                                    type="password"
                                    value="password123"
                                    readOnly
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
                                />
                            </div>
                        </div>
                    </BentoCard>

                    {/* 4. Toasts / Notifications */}
                    <BentoCard className="md:col-span-1" title="Stacked Toasts" icon={<Bell className="w-5 h-5 text-amber-400" />}>
                        <div className="relative w-full h-full flex flex-col items-center justify-center perspective-[1000px]">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-8 w-64 bg-[#18181B] border border-white/10 rounded-lg p-3 shadow-xl z-10 flex gap-3 items-start"
                            >
                                <div className="mt-0.5 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                                <div className="space-y-0.5">
                                    <p className="text-xs font-medium text-white">Project Created</p>
                                    <p className="text-[10px] text-zinc-500">Just now</p>
                                </div>
                            </motion.div>

                            {/* Stacked Effect */}
                            <motion.div
                                animate={{ y: [0, -10, 0], scale: [0.95, 0.95, 0.95] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.1 }}
                                className="absolute bottom-4 w-60 bg-[#18181B]/80 border border-white/5 rounded-lg h-12 z-0"
                            />
                            <motion.div
                                animate={{ y: [0, -10, 0], scale: [0.9, 0.9, 0.9] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.2 }}
                                className="absolute bottom-0 w-56 bg-[#18181B]/60 border border-white/5 rounded-lg h-12 -z-10"
                            />
                        </div>
                    </BentoCard>

                    {/* 5. Tooltips */}
                    <BentoCard className="md:col-span-1" title="Micro-Interaction" icon={<MessageSquare className="w-5 h-5 text-pink-400" />}>
                        <div className="flex gap-4 items-center justify-center h-full">
                            <TooltipPreview icon={<Check className="w-4 h-4" />} text="Approved" color="text-green-400 bg-green-400/10" />
                            <TooltipPreview icon={<X className="w-4 h-4" />} text="Rejected" color="text-red-400 bg-red-400/10" />
                            <TooltipPreview icon={<AlertCircle className="w-4 h-4" />} text="Warning" color="text-amber-400 bg-amber-400/10" />
                        </div>
                    </BentoCard>

                </div>
            </div>
        </div>
    );
}

function BentoCard({ children, className, title, icon }: { children: React.ReactNode, className?: string, title: string, icon: React.ReactNode }) {
    return (
        <div className={cn(
            "bento-item group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-4 hover:bg-white/[0.04] transition-colors duration-500",
            className
        )}>
            {/* Header */}
            <div className="flex items-center gap-2 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                {icon}
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{title}</span>
            </div>

            {/* Content Area */}
            <div className="relative h-[calc(100%-2rem)] w-full rounded-xl border border-white/5 bg-black/20 overflow-hidden">
                {children}
            </div>

            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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

function CursorInteractiveContainer({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const xTo = useRef<gsap.QuickToFunc | null>(null);
    const yTo = useRef<gsap.QuickToFunc | null>(null);

    useGSAP(() => {
        xTo.current = gsap.quickTo(cursorRef.current, "x", { duration: 0.3, ease: "power3" });
        yTo.current = gsap.quickTo(cursorRef.current, "y", { duration: 0.3, ease: "power3" });
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
            className="relative flex flex-col gap-4 items-center justify-center h-full w-full cursor-none overflow-hidden"
        >
            <div className="relative z-10 flex flex-col gap-4 items-center">
                {children}
            </div>

            <div
                ref={cursorRef}
                className="absolute top-0 left-0 w-7 h-7 pointer-events-none -translate-x-1/4 -translate-y-1/4 opacity-0 z-50 text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M9.391 2.32C8.42 1.56 7 2.253 7 3.486V28.41c0 1.538 1.966 2.18 2.874.938l6.225-8.523a2 2 0 0 1 1.615-.82h9.69c1.512 0 2.17-1.912.978-2.844z" /></svg>
            </div>
        </div>
    );
}

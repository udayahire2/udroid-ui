"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown, Play, Code2 } from "lucide-react"

interface ComponentShowcaseProps extends React.HTMLAttributes<HTMLDivElement> {
    name?: string
    description?: string
}

export function ComponentShowcase({
    name = "Multi-level Accordion",
    description = "Vertical stacked set of interactive headings",
    className,
    ...props
}: ComponentShowcaseProps) {
    return (
        <div className={cn("w-full max-w-5xl mx-auto flex flex-col gap-6", className)} {...props}>

            {/* Main Showcase Surface - The "Fake Command Bar" */}
            <div className="group relative w-full h-20 bg-[#0B0D10]/80 backdrop-blur-md border border-white/[0.08] rounded-2xl md:rounded-3xl shadow-2xl flex items-center justify-between px-2 md:px-3 overflow-hidden transition-all duration-300 hover:border-white/[0.12]">

                {/* Left: Component Info */}
                <div className="flex flex-col justify-center px-4 md:px-6 h-full border-r border-white/[0.03] min-w-[30%]">
                    <span className="text-sm md:text-[15px] font-medium text-white tracking-tight group-hover:text-white/90 transition-colors">
                        {name}
                    </span>
                    <span className="text-xs text-muted-foreground/50 font-normal tracking-wide mt-0.5 truncate max-w-[200px]">
                        {description}
                    </span>
                </div>

                {/* Center: Primary Actions */}
                <div className="flex-1 flex items-center justify-center gap-3 px-4">
                    <button className="h-10 px-5 flex items-center gap-2 rounded-full bg-white text-black text-[13px] font-medium tracking-wide shadow-lg hover:shadow-xl hover:bg-white/90 transform active:scale-95 transition-all duration-200">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Live Preview
                    </button>
                    <button className="h-10 px-5 flex items-center gap-2 rounded-full border border-white/10 text-muted-foreground/70 text-[13px] font-medium hover:text-white hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200">
                        <Code2 className="w-4 h-4" />
                        View Code
                    </button>
                </div>

                {/* Right: Variant Selector */}
                <div className="hidden md:flex items-center justify-end px-4 md:px-6 min-w-[20%] border-l border-white/[0.03] h-full">
                    <button className="flex items-center gap-3 text-xs md:text-[13px] font-medium text-muted-foreground/60 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/[0.03]">
                        Default
                        <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                    </button>
                </div>

                {/* Decorative Glow */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
            </div>

            {/* Secondary: Category Chips */}
            <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3 px-4">
                {["Accordion", "Modal", "Tabs", "Forms", "Navigation", "Cards"].map((chip) => (
                    <button
                        key={chip}
                        className="h-8 px-4 rounded-full border border-white/[0.06] bg-white/[0.01] text-xs font-medium text-muted-foreground/50 hover:text-white hover:bg-white/[0.03] hover:border-white/10 transition-all duration-200"
                    >
                        {chip}
                    </button>
                ))}
            </div>
        </div>
    )
}

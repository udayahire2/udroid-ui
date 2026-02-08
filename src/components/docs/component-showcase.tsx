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

            {/* Main Showcase Surface - Theme Aware Command Bar */}
            <div className="group relative w-full h-20 bg-card/80 backdrop-blur-md border border-border rounded-2xl md:rounded-3xl shadow-lg flex items-center justify-between px-2 md:px-3 overflow-hidden transition-all duration-300 hover:border-ring/50">

                {/* Left: Component Info */}
                <div className="flex flex-col justify-center px-4 md:px-6 h-full border-r border-border/30 min-w-[30%]">
                    <span className="text-sm md:text-[15px] font-medium text-foreground tracking-tight group-hover:text-foreground/90 transition-colors">
                        {name}
                    </span>
                    <span className="text-xs text-muted-foreground font-normal tracking-wide mt-0.5 truncate max-w-[200px]">
                        {description}
                    </span>
                </div>

                {/* Center: Primary Actions */}
                <div className="flex-1 flex items-center justify-center gap-3 px-4">
                    <button className="h-10 px-5 flex items-center gap-2 rounded-full bg-primary text-primary-foreground text-[13px] font-medium tracking-wide shadow-md hover:shadow-lg hover:bg-primary/90 transform active:scale-95 transition-all duration-200">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Live Preview
                    </button>
                    <button className="h-10 px-5 flex items-center gap-2 rounded-full border border-border text-muted-foreground text-[13px] font-medium hover:text-foreground hover:border-ring/50 hover:bg-accent transition-all duration-200">
                        <Code2 className="w-4 h-4" />
                        View Code
                    </button>
                </div>

                {/* Right: Variant Selector */}
                <div className="hidden md:flex items-center justify-end px-4 md:px-6 min-w-[20%] border-l border-border/30 h-full">
                    <button className="flex items-center gap-3 text-xs md:text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-lg hover:bg-accent">
                        Default
                        <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                    </button>
                </div>

                {/* Decorative Glow - Theme Aware */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
            </div>

            {/* Secondary: Category Chips */}
            <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3 px-4">
                {["Accordion", "Modal", "Tabs", "Forms", "Navigation", "Cards"].map((chip) => (
                    <button
                        key={chip}
                        className="h-8 px-4 rounded-full border border-border bg-muted/50 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent hover:border-ring/30 transition-all duration-200"
                    >
                        {chip}
                    </button>
                ))}
            </div>
        </div>
    )
}

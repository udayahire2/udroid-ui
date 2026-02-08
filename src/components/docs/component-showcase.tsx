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

            {/* Main Showcase Surface - Clean Card */}
            <div className="group relative w-full h-20 bg-muted/40 border border-border rounded-xl flex items-center justify-between px-2 md:px-3 overflow-hidden transition-all duration-300 hover:border-foreground/20">

                {/* Left: Component Info */}
                <div className="flex flex-col justify-center px-4 md:px-6 h-full border-r border-border min-w-[30%]">
                    <span className="text-sm md:text-[15px] font-medium text-foreground tracking-tight">
                        {name}
                    </span>
                    <span className="text-xs text-muted-foreground font-normal tracking-wide mt-0.5 truncate max-w-[200px]">
                        {description}
                    </span>
                </div>

                {/* Center: Primary Actions */}
                <div className="flex-1 flex items-center justify-center gap-3 px-4">
                    <button className="h-9 px-4 flex items-center gap-2 rounded-md bg-primary text-primary-foreground text-[13px] font-medium transition-colors hover:bg-primary/90 active:scale-[0.98]">
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Live Preview
                    </button>
                    <button className="h-9 px-4 flex items-center gap-2 rounded-md border border-border bg-background text-foreground text-[13px] font-medium hover:bg-accent transition-colors">
                        <Code2 className="w-4 h-4" />
                        View Code
                    </button>
                </div>

                {/* Right: Variant Selector */}
                <div className="hidden md:flex items-center justify-end px-4 md:px-6 min-w-[20%] border-l border-border h-full">
                    <button className="flex items-center gap-2 text-xs md:text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-accent">
                        Default
                        <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                    </button>
                </div>
            </div>

            {/* Secondary: Category Chips */}
            <div className="flex items-center justify-start flex-wrap gap-2">
                {["Accordion", "Modal", "Tabs", "Forms", "Navigation", "Cards"].map((chip) => (
                    <button
                        key={chip}
                        className="h-7 px-3 rounded-md border border-border bg-background text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
                    >
                        {chip}
                    </button>
                ))}
            </div>
        </div>
    )
}

import * as React from "react"
import { cn } from "@/lib/utils"
// import { Index } from "@/registry" // Assuming registry index exists, if not we will mock or use dynamic import
// Mock Index for demonstration if registry not fully set up, or import if available. 
// For now, I'll rely on the existing Index import pattern from previous files.
import { Index } from "@/registry"

import { CodeBlock } from "@/components/ui/code-block"


interface SplitComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    align?: "center" | "start" | "end"
    description?: string
}

export function SplitComponentPreview({
    name,
    children,
    className,
    align = "center",
    ...props
}: SplitComponentPreviewProps) {
    const config = Index[name]

    if (!config) {
        return (
            <div className="text-sm text-red-500 bg-red-500/10 p-4 border border-red-500/20 rounded-lg">
                Component <code className="text-xs">{name}</code> not found.
            </div>
        )
    }

    const Preview = config.component

    return (
        <div className={cn("grid grid-cols-1 xl:grid-cols-2 gap-8 my-12", className)} {...props}>
            {/* LEFT: Interactive Canvas */}
            <div className="relative min-h-[400px] rounded-xl border border-border bg-background/50 overflow-hidden flex flex-col">
                <div className="h-10 border-b bg-muted/40 flex items-center px-4 justify-between">
                    <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Preview</span>
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                        <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                    </div>
                </div>

                {/* Canvas Background */}
                <div className="flex-1 relative flex items-center justify-center p-8">
                    <div className="absolute inset-0 z-0 opacity-[0.3] bg-[image:radial-gradient(#a1a1aa_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[image:radial-gradient(#27272a_1px,transparent_1px)]" />

                    <div className={cn(
                        "relative z-10 w-full flex",
                        {
                            "items-center justify-center": align === "center",
                            "items-start justify-start": align === "start",
                            "items-end justify-end": align === "end",
                        }
                    )}>
                        <React.Suspense fallback={<div className="animate-pulse">Loading...</div>}>
                            <Preview />
                        </React.Suspense>
                    </div>
                </div>
            </div>

            {/* RIGHT: Code Panel (Sticky) */}
            <div className="relative">
                <div className="sticky top-24 rounded-xl border border-border bg-zinc-950 overflow-hidden shadow-2xl">
                    <div className="h-10 bg-zinc-900 border-b border-white/5 flex items-center px-4 justify-between">
                        <span className="text-xs font-mono text-zinc-400">Usage</span>
                        <span className="text-[10px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded-full">TSX</span>
                    </div>
                    <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
                        <CodeBlock
                            code={config.code}
                            className="p-6 text-sm font-mono leading-relaxed bg-transparent"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

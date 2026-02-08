"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { RefreshCcw } from "lucide-react"
import { cn } from "@/lib/utils"

interface ComponentCardProps {
    title: string
    subtitle: string
    author: {
        name: string
        avatar: string
        initial: string
    }
    preview: React.ReactNode
}

export function ComponentCard({
    title,
    subtitle,
    author,
    preview,
}: ComponentCardProps) {
    return (
        <div className="group flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-center gap-3 px-1">
                <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-white",
                    author.avatar || "bg-teal-600"
                )}>
                    {author.initial}
                </div>
                <div className="flex flex-col">
                    <span className="text-[13px] font-medium text-foreground leading-none">
                        {author.name}
                    </span>
                    <span className="text-[11px] text-muted-foreground mt-1">
                        {title} · {subtitle}
                    </span>
                </div>
            </div>

            {/* Preview Area */}
            <div className="relative aspect-16/10 bg-[#0A0A0A] rounded-2xl border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center">
                    {preview}
                </div>

                {/* Action Button - Centered */}
                <div className="absolute inset-x-0 bottom-12 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="h-8 px-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[11px] font-medium text-white hover:bg-white/20 transition-colors flex items-center gap-2">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-3 h-3"
                        >
                            <RefreshCcw className="w-full h-full" />
                        </motion.div>
                        REPLAY ACTION
                    </button>
                </div>
            </div>
        </div>
    )
}

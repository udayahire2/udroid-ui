"use client"

import * as React from "react"
import { Check, Copy, Terminal } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface InstallCommandProps extends React.HTMLAttributes<HTMLDivElement> {
    command: string
    description?: string
}

export function InstallCommand({
    command,
    description,
    className,
    ...props
}: InstallCommandProps) {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(command)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className={cn("space-y-3", className)} {...props}>
            {description && (
                <p className="text-sm text-muted-foreground">{description}</p>
            )}
            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-center gap-3 bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 rounded-xl p-4 pl-5 shadow-2xl">
                    <Terminal className="h-5 w-5 text-zinc-400 flex-shrink-0" />
                    <code className="flex-1 font-mono text-sm text-zinc-100 overflow-x-auto whitespace-nowrap scrollbar-hide">
                        {command}
                    </code>
                    <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleCopy}
                        className="h-8 px-3 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 flex-shrink-0"
                    >
                        {copied ? (
                            <>
                                <Check className="h-4 w-4 mr-1.5" />
                                <span className="text-xs">Copied!</span>
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4 mr-1.5" />
                                <span className="text-xs">Copy</span>
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </div>
    )
}

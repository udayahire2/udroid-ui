"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Index } from "@/registry"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/ui/code-block"
import { Copy, Check, Eye, Code2, RefreshCw } from "lucide-react"
import { ComponentStage } from "@/components/component-stage"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    align?: "center" | "start" | "end"
    description?: string
    isHero?: boolean
}

export function ComponentPreview({
    name,
    description,
    children,
    className,
    align = "center",
    isHero = false,
    ...props
}: ComponentPreviewProps) {
    const config = Index[name]
    const [activeTab, setActiveTab] = React.useState("preview")
    const [copied, setCopied] = React.useState(false)
    const [key, setKey] = React.useState(0) // For remounting component

    if (!config) {
        return (
            <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-6 text-sm text-destructive">
                <p className="font-medium">Component not found</p>
                <p className="text-destructive/80 mt-1">
                    <code className="rounded bg-destructive/10 px-1.5 py-0.5 text-xs">{name}</code> does not exist in the registry.
                </p>
            </div>
        )
    }

    const Preview = config.component

    const handleCopy = async () => {
        await navigator.clipboard.writeText(config.code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleRefresh = () => {
        setKey(prev => prev + 1)
    }

    // If this is a hero preview, wrap in ComponentStage
    if (isHero) {
        return (
            <ComponentStage className={className}>
                <React.Suspense
                    fallback={
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                            <span className="text-sm">Loading...</span>
                        </div>
                    }
                >
                    <div key={key} className="relative z-10">
                        <Preview />
                    </div>
                </React.Suspense>
            </ComponentStage>
        )
    }

    return (
        <div
            className={cn("group relative my-8", className)}
            {...props}
        >
            {/* Optional Description */}
            {description && (
                <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            )}

            <Tabs value={activeTab} onValueChange={setActiveTab} className="relative">
                {/* Simple Controls */}
                <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
                    <TabsList className="h-8 bg-muted border border-border/40">
                        <TabsTrigger
                            value="preview"
                            className="text-xs gap-1.5 px-3 h-6 data-[state=active]:bg-background data-[state=active]:text-foreground"
                        >
                            <Eye className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Preview</span>
                        </TabsTrigger>
                        <TabsTrigger
                            value="code"
                            className="text-xs gap-1.5 px-3 h-6 data-[state=active]:bg-background data-[state=active]:text-foreground"
                        >
                            <Code2 className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Code</span>
                        </TabsTrigger>
                    </TabsList>

                    {activeTab === "preview" && (
                        <button
                            onClick={handleRefresh}
                            className="h-8 w-8 inline-flex items-center justify-center rounded-lg border border-border/40 bg-muted text-muted-foreground hover:text-foreground"
                            title="Remount component"
                        >
                            <RefreshCw className="h-3.5 w-3.5" />
                        </button>
                    )}

                    {activeTab === "code" && (
                        <button
                            onClick={handleCopy}
                            className="h-8 px-3 inline-flex items-center justify-center gap-1.5 rounded-lg border border-border/40 bg-muted text-xs font-medium text-muted-foreground hover:text-foreground"
                        >
                            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                            <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
                        </button>
                    )}
                </div>

                {/* Preview Panel */}
                <TabsContent value="preview" className="mt-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg border bg-black [&::-webkit-scrollbar]:hidden [scrollbar-width:none] [-ms-overflow-style:none]">
                    <div
                        className={cn(
                            "min-h-[350px] w-full p-8 sm:p-12 flex",
                            {
                                "items-center justify-center": align === "center",
                                "items-start justify-start": align === "start",
                                "items-end justify-end": align === "end",
                            }
                        )}
                    >
                        {/* Grid removed as per user request */}

                        <React.Suspense
                            fallback={
                                <div className="flex items-center justify-center w-full h-full min-h-[200px]">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                                        <span className="text-sm">Loading...</span>
                                    </div>
                                </div>
                            }
                        >
                            <div key={key} className="relative z-10">
                                <Preview />
                            </div>
                        </React.Suspense>
                    </div>
                </TabsContent>

                {/* Code Panel */}
                <TabsContent value="code" className="mt-0 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <CodeBlock
                        code={config.code}
                        hideHeader
                        className="my-0 bg-transparent"
                    />
                </TabsContent>
            </Tabs>
        </div>
    )
}

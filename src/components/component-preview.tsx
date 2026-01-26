import * as React from "react"
import { cn } from "@/lib/utils"
import { Index } from "@/registry"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CodeBlock } from "@/components/ui/code-block"

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
    name: string
    align?: "center" | "start" | "end"
    description?: string
}

export function ComponentPreview({
    name,
    children,
    className,
    align = "center",
    ...props
}: ComponentPreviewProps) {
    const config = Index[name]
    const [value, setValue] = React.useState("preview")

    if (!config) {
        return (
            <div className="text-sm text-red-500 bg-red-500/10 p-4 border border-red-500/20 rounded-lg">
                Component <code className="text-xs">{name}</code> not found in registry.
            </div>
        )
    }

    const Preview = config.component

    return (
        <div
            className={cn("group relative my-8 flex flex-col space-y-4", className)}
            {...props}
        >
            <Tabs value={value} onValueChange={setValue} className="relative w-full">
                {/* Lab Toolbar */}
                <div className="flex items-center justify-between px-1 mb-2">
                    <div className="flex items-center gap-2">
                        <TabsList className="h-9 p-1 bg-zinc-100/50 dark:bg-zinc-800/50 backdrop-blur-md rounded-lg border border-border/50">
                            <TabsTrigger
                                value="preview"
                                className="rounded-md px-3 text-xs font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                            >
                                Preview
                            </TabsTrigger>
                            <TabsTrigger
                                value="code"
                                className="rounded-md px-3 text-xs font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                            >
                                Code
                            </TabsTrigger>
                        </TabsList>
                    </div>
                </div>

                {/* Content Area */}
                <TabsContent value="preview" className="relative rounded-xl border border-border bg-zinc-50/50 dark:bg-zinc-950/50 overflow-hidden">
                    {/* Lab Background Pattern */}
                    <div className="absolute inset-0 z-0 opacity-[0.4] bg-[image:radial-gradient(#a1a1aa_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[image:radial-gradient(#27272a_1px,transparent_1px)]" />

                    <div
                        className={cn(
                            "preview relative z-10 flex min-h-[400px] w-full items-center justify-center p-10",
                            {
                                "items-center": align === "center",
                                "items-start": align === "start",
                                "items-end": align === "end",
                            }
                        )}
                    >
                        <React.Suspense fallback={<div className="text-sm text-muted-foreground animate-pulse">Loading preview...</div>}>
                            <Preview />
                        </React.Suspense>
                    </div>
                </TabsContent>

                <TabsContent value="code">
                    <div className="relative rounded-xl border border-border bg-zinc-950 overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 z-10">
                            <div className="h-2 w-2 rounded-full bg-red-500 inline-block mr-1.5" />
                            <div className="h-2 w-2 rounded-full bg-amber-500 inline-block mr-1.5" />
                            <div className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                        </div>
                        <CodeBlock code={config.code} className="p-6 pt-10 text-sm font-mono leading-relaxed" />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

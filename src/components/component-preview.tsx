import * as React from "react"
import { cn } from "@/lib/utils"
import { Index } from "@/registry"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useMDXComponents } from "@/components/mdx-components"

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
            <div className="text-sm text-muted-foreground p-4 border rounded-lg border-dashed">
                Component <code className="bg-muted px-1 py-0.5 rounded">{name}</code> not found in registry.
            </div>
        )
    }

    const Preview = config.component
    // Use the pre component from MDX components to get the premium styling
    // But we need to construct the props correctly
    const CodeBlock = useMDXComponents.pre

    return (
        <div
            className={cn("group relative my-4 flex flex-col space-y-2", className)}
            {...props}
        >
            <Tabs value={value} onValueChange={setValue} className="relative mr-auto w-full">
                <div className="flex items-center justify-between pb-3">
                    <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
                        <TabsTrigger
                            value="preview"
                            className="relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            Preview
                        </TabsTrigger>
                        <TabsTrigger
                            value="code"
                            className="relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                        >
                            Code
                        </TabsTrigger>
                    </TabsList>
                </div>
                <TabsContent value="preview" className="relative rounded-xl border border-white/[0.08] bg-white/[0.02]">
                    <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
                        <span className="text-[12px] text-white/45">Preview · Default variants</span>
                    </div>
                    <div
                        className={cn(
                            "preview flex min-h-[350px] w-full justify-center p-8",
                            {
                                "items-center": align === "center",
                                "items-start": align === "start",
                                "items-end": align === "end",
                            }
                        )}
                    >
                        <React.Suspense fallback={<div className="text-sm text-muted-foreground">Loading...</div>}>
                            <Preview />
                        </React.Suspense>
                    </div>
                </TabsContent>
                <TabsContent value="code">
                    <div className="flex flex-col space-y-4">
                        <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                            <CodeBlock className="language-tsx">
                                <code className="language-tsx">{config.code}</code>
                            </CodeBlock>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

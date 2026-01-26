import { Outlet, useLocation } from "react-router-dom";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { AppSidebar } from "@/components/app-sidebar";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/components/mdx-components";
import { AnimatePresence, motion } from "framer-motion";
import { Separator } from "@/components/ui/separator"

export default function DocsLayout() {
    const location = useLocation();

    return (
        <MDXProvider components={useMDXComponents}>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    {/* Sticky Header */}
                    <header className="flex h-14 shrink-0 items-center gap-2 border-b bg-background/80 backdrop-blur-md px-6 sticky top-0 z-20 transition-all">
                        <SidebarTrigger className="-ml-2 text-muted-foreground hover:text-foreground" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Docs</span>
                            <span className="text-muted-foreground/60">/</span>
                            <span className="font-medium text-foreground">Overview</span>
                        </div>
                    </header>

                    {/* Main Content */}
                    <div className="relative flex min-h-[calc(100vh-3.5rem)] w-full flex-col bg-background">
                        <div className="flex-1 w-full max-w-7xl mx-auto py-10 lg:py-12 px-6 lg:px-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={location.pathname}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="prose prose-zinc dark:prose-invert max-w-none"
                                >
                                    <Outlet />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Background Pattern */}
                        <GridPattern
                            width={40}
                            height={40}
                            x={-1}
                            y={-1}
                            className={cn(
                                "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                                "absolute inset-0 h-full w-full fill-muted/20 stroke-muted-foreground/20 -z-10",
                            )}
                        />
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </MDXProvider>
    );
}

// Helper for Component Showcase (Optional - can be extracted)
export function ComponentPreview({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <div className="my-8 rounded-xl border border-border/40 bg-muted/30 backdrop-blur-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-border/40 flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground uppercase">{title}</span>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20" />
                </div>
            </div>
            <div className="p-10 flex items-center justify-center min-h-[300px]">
                {children}
            </div>
        </div>
    )
}

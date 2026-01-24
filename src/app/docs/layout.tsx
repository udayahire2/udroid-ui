import { Outlet, useLocation } from "react-router-dom";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/ui/sidebar";
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/components/mdx-components";
import { AnimatePresence, motion } from "framer-motion";

export default function DocsLayout() {
    const location = useLocation();

    return (
        <MDXProvider components={useMDXComponents}>
            <div className="relative flex min-h-[calc(100vh-4rem)] w-full bg-background">
                <Sidebar />
                <div className="flex-1 w-full min-w-0 py-8 pr-6 pl-8">
                    <div className="mx-auto max-w-4xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={location.pathname}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Outlet />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <GridPattern
                    width={40}
                    height={40}
                    x={-1}
                    y={-1}
                    className={cn(
                        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                        "absolute inset-0 h-full w-full fill-neutral-100/20 stroke-neutral-200/40 dark:fill-neutral-800/20 dark:stroke-neutral-800/40 -z-10",
                    )}
                />

                <div className="absolute left-0 top-0 -z-10 h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
        </MDXProvider>
    );
}

import { cn } from "@/lib/utils"
import * as React from "react"

export function Steps({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "ml-4 mb-4 border-l border-dashed border-border pl-[1.58rem] [counter-reset:step]",
                className
            )}
            {...props}
        />
    )
}

export function Step({
    className,
    title,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & { title?: string }) {
    return (
        <div
            className={cn(
                "[counter-increment:step] before:absolute before:left-[-20px] before:top-1 before:h-2 before:w-2 before:rounded-full before:bg-muted-foreground/50 before:content-[''] relative mb-6 last:mb-0",
                className
            )}
            {...props}
        >
            {title && (
                <h3 className="font-heading mt-0 mb-2 scroll-m-20 text-lg font-semibold tracking-tight">
                    {title}
                </h3>
            )}
            {children}
        </div>
    )
}

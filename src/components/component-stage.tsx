import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ComponentStageProps {
    children: ReactNode;
    className?: string;
}

export function ComponentStage({ children, className }: ComponentStageProps) {
    return (
        <div className={cn(
            "relative w-full mb-12 overflow-hidden rounded-lg border border-border/40 bg-muted/30",
            className
        )}>
            {/* Content Container */}
            <div className="relative flex items-center justify-center min-h-[400px] p-12 md:p-16">
                <div className="flex items-center justify-center w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}

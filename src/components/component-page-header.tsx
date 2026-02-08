
import React from "react";
import { cn } from "@/lib/utils";
import { InstallCommand } from "./install-command";
import { Layers } from "lucide-react";

interface ComponentPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
    install?: string;
}

export function ComponentPageHeader({
    title,
    description,
    install,
    className,
    ...props
}: ComponentPageHeaderProps) {
    return (
        <div className={cn("space-y-6 mb-12", className)} {...props}>
            {/* Badge */}
            <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                    <Layers className="h-3.5 w-3.5" />
                    Component
                </span>
            </div>

            {/* Title with gradient */}
            <div className="space-y-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground">
                    {title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-[750px] leading-relaxed">
                    {description}
                </p>
            </div>

            {/* Install Command */}
            {install && (
                <InstallCommand 
                    command={install} 
                    description="Install this component to your project"
                    className="mt-6"
                />
            )}
        </div>
    );
}

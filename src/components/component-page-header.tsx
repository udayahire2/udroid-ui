
import React from "react";
import { cn } from "@/lib/utils";

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
        <div className={cn("space-y-4 mb-10", className)} {...props}>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-[750px]">
                {description}
            </p>
            {install && (
                <div className="flex items-center space-x-2 mt-4">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                        {install}
                    </code>
                </div>
            )}
        </div>
    );
}

"use client";

import { Button } from "@/components/button/button";

export default function ButtonPreviewSizes() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 w-full max-w-4xl py-12">
            <div className="flex flex-col items-center gap-2">
                <Button size="sm">Small (0.5px)</Button>
                <span className="text-xs text-muted-foreground">Low Travel</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button>Default (0.75px)</Button>
                <span className="text-xs text-muted-foreground">Standard</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Button size="lg">Large (1px)</Button>
                <span className="text-xs text-muted-foreground">Deep Travel</span>
            </div>
        </div>
    );
}

"use client";

import { Separator } from "@/components/separator";

export default function SeparatorPreviewHorizontal() {
    return (
        <div className="flex flex-col gap-4 p-6 border rounded-xl bg-card w-full max-w-md">
            <h2 className="font-semibold text-lg">Horizontal Variants</h2>

            <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Default</p>
                <Separator />
            </div>

            <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Muted</p>
                <Separator variant="muted" />
            </div>

            <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Dashed</p>
                <Separator variant="dashed" />
            </div>
        </div>
    );
}

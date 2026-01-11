"use client";

import { Separator } from "@/components/separator";

export default function SeparatorPreviewVertical() {
    return (
        <div className="flex gap-4 p-6 border rounded-xl bg-card h-32 items-center justify-center w-full max-w-md">
            <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium">Standard</span>
                <div className="flex h-10 items-center gap-4 text-sm">
                    <span>Blog</span>
                    <Separator orientation="vertical" />
                    <span>Docs</span>
                    <Separator orientation="vertical" />
                    <span>Source</span>
                </div>
            </div>
        </div>
    );
}

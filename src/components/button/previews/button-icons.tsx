"use client";

import { Button } from "@/components/button/button";
import { Settings, Bell, Plus } from "lucide-react";

export default function ButtonPreviewIcons() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-12 w-full max-w-4xl py-12">
            <div className="flex flex-col items-center gap-4">
                <Button size="icon-sm" variant="secondary" aria-label="Small">
                    <Settings />
                </Button>
                <code className="text-xs text-muted-foreground">icon-sm (32px)</code>
            </div>
            <div className="flex flex-col items-center gap-4">
                <Button size="icon-md" variant="secondary" aria-label="Medium">
                    <Bell />
                </Button>
                <code className="text-xs text-muted-foreground">icon-md (36px)</code>
            </div>
            <div className="flex flex-col items-center gap-4">
                <Button size="icon-lg" variant="secondary" aria-label="Large">
                    <Plus />
                </Button>
                <code className="text-xs text-muted-foreground">icon-lg (40px)</code>
            </div>
        </div>
    );
}

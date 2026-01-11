"use client";

import { Button } from "@/components/button/button";

export default function ButtonPreviewIdentity() {
    return (
        <div className="flex flex-col gap-8 items-center w-full py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-4xl">
                <div className="flex items-center justify-center">
                    <Button size="lg" className="w-48 h-14 text-base shadow-xl">
                        Commit Action
                    </Button>
                </div>
                <div className="space-y-4 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Rest:</strong> Subtle "Lip" highlight + Elevation.</p>
                    <p><strong className="text-foreground">Hover:</strong> Light intensifies, shadow grows.</p>
                    <p><strong className="text-foreground">Active:</strong> Mechanical depression (1px), light blocked (lip dims), shadow collapses.</p>
                </div>
            </div>
        </div>
    );
}

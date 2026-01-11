"use client";

import { Button } from "@/components/button/button";

export default function ButtonPreviewVariants() {
    return (
        <div className="flex flex-wrap gap-4 justify-center w-full max-w-4xl py-12">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
        </div>
    );
}

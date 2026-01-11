"use client";

import { Input } from "@/components/input/input";
import { Button } from "@/components/button/button";

export default function InputPreviewSizes() {
    return (
        <div className="grid gap-6 w-full max-w-4xl py-12">
            <div className="flex items-center justify-center gap-4">
                <span className="w-20 text-xs text-muted-foreground text-right">Small (32px)</span>
                <Input size="sm" placeholder="Email address" className="max-w-xs" />
                <Button size="sm">Action</Button>
            </div>
            <div className="flex items-center justify-center gap-4">
                <span className="w-20 text-xs text-muted-foreground text-right">Default (36px)</span>
                <Input placeholder="Email address" className="max-w-xs" />
                <Button>Action</Button>
            </div>
            <div className="flex items-center justify-center gap-4">
                <span className="w-20 text-xs text-muted-foreground text-right">Large (40px)</span>
                <Input size="lg" placeholder="Email address" className="max-w-xs" />
                <Button size="lg">Action</Button>
            </div>
        </div>
    );
}

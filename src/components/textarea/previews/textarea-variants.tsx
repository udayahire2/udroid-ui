"use client";

import { Textarea } from "@/components/textarea";

export default function TextareaPreviewVariants() {
    return (
        <div className="space-y-6 w-full max-w-lg">
            <div className="space-y-2">
                <label className="text-sm font-medium">Default</label>
                <Textarea placeholder="Type your message here..." />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Filled</label>
                <Textarea variant="filled" placeholder="Enter description..." />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Error State</label>
                <Textarea
                    variant="error"
                    defaultValue="Invalid input content"
                />
                <p className="text-xs text-red-500 font-medium pt-1">Please provide a valid reason.</p>
            </div>
        </div>
    );
}

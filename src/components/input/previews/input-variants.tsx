"use client";

import { Input } from "@/components/input/input";
import { AlertCircle } from "lucide-react";

export default function InputPreviewVariants() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl py-12">
            <div className="space-y-4">
                <Input placeholder="Default surface" />
                <Input variant="filled" placeholder="Filled variant" />
                <Input variant="error" placeholder="Error state" startContent={<AlertCircle className="text-destructive" />} />
                <Input disabled placeholder="Disabled input" />
            </div>
            <div className="flex flex-col justify-center space-y-4 px-8 text-sm text-muted-foreground">
                <p>
                    <strong className="text-foreground">Default:</strong> Clean, machined border.
                </p>
                <p>
                    <strong className="text-foreground">Filled:</strong> Higher contrast background.
                </p>
                <p>
                    <strong className="text-foreground">Error:</strong> Shake animation + red border.
                </p>
            </div>
        </div>
    );
}

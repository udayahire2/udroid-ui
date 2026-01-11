"use client";

import { RadioGroup, RadioGroupItem } from "@/components/radio";
import { Label } from "@/components/label";

export default function RadioPreviewCard() {
    return (
        <div className="flex flex-col items-center gap-8 p-12 w-full max-w-xl">
            <RadioGroup defaultValue="high-fi">
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors w-64 border border-transparent hover:border-border/50 cursor-pointer" onClick={() => document.getElementById('r-high')?.click()}>
                    <RadioGroupItem value="high-fi" id="r-high" variant="premium" />
                    <div className="flex flex-col gap-0.5">
                        <Label htmlFor="r-high" className="cursor-pointer font-medium">High Fidelity</Label>
                        <span className="text-xs text-muted-foreground">Lossless audio quality</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors w-64 border border-transparent hover:border-border/50 cursor-pointer" onClick={() => document.getElementById('r-balanced')?.click()}>
                    <RadioGroupItem value="balanced" id="r-balanced" variant="premium" />
                    <div className="flex flex-col gap-0.5">
                        <Label htmlFor="r-balanced" className="cursor-pointer font-medium">Balanced</Label>
                        <span className="text-xs text-muted-foreground">Standard streaming quality</span>
                    </div>
                </div>
            </RadioGroup>
        </div>
    );
}

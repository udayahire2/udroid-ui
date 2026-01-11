"use client";

import { RadioGroup, RadioGroupItem } from "@/components/radio";
import { Label } from "@/components/label";

export default function RadioPreviewVariants() {
    return (
        <div className="flex flex-col items-center gap-8 p-12 w-full max-w-md">
            <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="r1" />
                    <Label htmlFor="r1">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="r2" />
                    <Label htmlFor="r2">Compact</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id="r3" />
                    <Label htmlFor="r3">Condensed</Label>
                </div>
            </RadioGroup>
        </div>
    );
}

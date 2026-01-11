"use client";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/tooltip";
import { Button } from "@/components/button";

export default function TooltipPreviewPositions() {
    return (
        <TooltipProvider>
            <div className="flex gap-8 items-center justify-center py-12">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Hover Top</Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                        <p>Top Tooltip</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Hover Bottom</Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Bottom Tooltip</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button>Premium Dark</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="premium">
                        <p>Premium Dark Mode</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    );
}

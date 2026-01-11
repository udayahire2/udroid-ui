"use client";

import { Avatar } from "@/components/avatar/avatar";
import { User } from "lucide-react";

export default function AvatarPreviewVariants() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-16 w-full max-w-4xl py-12">
            <div className="flex flex-col items-center gap-4">
                <Avatar variant="default" size="lg" fallback={<User className="size-6" />} />
                <span className="text-xs text-muted-foreground">Default (Recessed)</span>
            </div>
            <div className="flex flex-col items-center gap-4">
                <Avatar variant="premium" size="lg" fallback={<User className="size-6" />} />
                <span className="text-xs text-muted-foreground">Premium (Detailed)</span>
            </div>
        </div>
    );
}

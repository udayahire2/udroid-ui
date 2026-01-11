"use client";

import { Avatar, AvatarBadge } from "@/components/avatar/avatar";

export default function AvatarPreviewSizes() {
    return (
        <div className="flex flex-wrap items-end justify-center gap-8 w-full max-w-4xl py-12">
            <div className="flex flex-col items-center gap-2">
                <Avatar size="sm" fallback="SM">
                    <AvatarBadge size="sm" status="online" />
                </Avatar>
                <span className="text-xs text-muted-foreground">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Avatar size="md" fallback="MD">
                    <AvatarBadge size="md" status="busy" />
                </Avatar>
                <span className="text-xs text-muted-foreground">md</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Avatar size="lg" fallback="LG">
                    <AvatarBadge size="lg" status="away" />
                </Avatar>
                <span className="text-xs text-muted-foreground">lg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
                <Avatar size="xl" fallback="XL">
                    <AvatarBadge size="xl" status="count"><span className="text-[10px]">3</span></AvatarBadge>
                </Avatar>
                <span className="text-xs text-muted-foreground">xl</span>
            </div>
        </div>
    );
}

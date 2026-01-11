"use client";

import { Avatar, AvatarGroup } from "@/components/avatar/avatar";

export default function AvatarPreviewGroups() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-16 w-full max-w-4xl py-12">
            <div className="flex flex-col gap-4 items-center">
                <span className="text-sm font-medium text-muted-foreground">Regular Stack</span>
                <AvatarGroup size="md">
                    <Avatar src="https://github.com/shadcn.png" fallback="CN" />
                    <Avatar src="https://github.com/vercel.png" fallback="VC" />
                    <Avatar src="https://github.com/nextjs.png" fallback="NJ" />
                </AvatarGroup>
            </div>

            <div className="flex flex-col gap-4 items-center">
                <span className="text-sm font-medium text-muted-foreground">With Limit (+2)</span>
                <AvatarGroup size="lg" limit={3}>
                    <Avatar src="https://github.com/shadcn.png" fallback="CN" />
                    <Avatar src="https://github.com/vercel.png" fallback="VC" />
                    <Avatar src="https://github.com/nextjs.png" fallback="NJ" />
                    <Avatar src="https://github.com/react.png" fallback="RC" />
                    <Avatar fallback="UD" />
                </AvatarGroup>
            </div>
        </div>
    );
}

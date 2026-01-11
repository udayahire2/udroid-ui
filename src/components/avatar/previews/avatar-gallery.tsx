"use client";

import { Avatar } from "@/components/avatar/avatar";

export default function AvatarPreviewGallery() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 w-full max-w-4xl py-12">
            <Avatar src="https://github.com/shadcn.png" fallback="CN" size="xl" />
            <Avatar src="https://github.com/vercel.png" fallback="VC" size="lg" />
            <Avatar src="https://github.com/nextjs.png" fallback="NJ" size="md" />
            <Avatar src="https://github.com/react.png" fallback="RC" size="sm" />
        </div>
    );
}

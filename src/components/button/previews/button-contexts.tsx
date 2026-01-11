"use client";

import { Button } from "@/components/button/button";
import { Bold, Italic, Underline, Share2, Search, Bell, Trash2, X } from "lucide-react";

export default function ButtonPreviewContexts() {
    return (
        <div className="grid gap-8 md:grid-cols-2 w-full max-w-4xl py-12">
            {/* Toolbar */}
            <div className="border rounded-xl bg-card p-6 space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">Dense Toolbar</h3>
                <div className="flex items-center gap-1 p-1 border rounded-lg bg-background w-fit">
                    <Button size="icon-sm" variant="ghost"> <Bold /> </Button>
                    <Button size="icon-sm" variant="ghost"> <Italic /> </Button>
                    <Button size="icon-sm" variant="ghost"> <Underline /> </Button>
                    <div className="w-px h-4 bg-border mx-1" />
                    <Button size="icon-sm" variant="ghost"> <Share2 /> </Button>
                </div>
            </div>

            {/* App Header */}
            <div className="border rounded-xl bg-card p-6 space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">App Header</h3>
                <div className="flex items-center justify-between p-4 border rounded-lg bg-background shadow-sm">
                    <span className="font-semibold px-2">Dashboard</span>
                    <div className="flex items-center gap-2">
                        <Button size="icon-md" variant="ghost"> <Search /> </Button>
                        <Button size="icon-md" variant="ghost"> <Bell /> </Button>
                        <div className="size-8 rounded-full bg-muted border ml-2" />
                    </div>
                </div>
            </div>

            {/* Destructive */}
            <div className="border rounded-xl bg-card p-6 space-y-4">
                <h3 className="text-sm font-medium text-muted-foreground">Destructive / Close</h3>
                <div className="flex gap-4">
                    <Button size="icon-md" variant="destructive"> <Trash2 /> </Button>
                    <Button size="icon-md" variant="outline"> <X /> </Button>
                </div>
            </div>
        </div>
    );
}

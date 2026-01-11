"use client";

import { Switch } from "@/components/switch";

export default function SwitchPreviewCard() {
    return (
        <div className="flex items-center justify-between p-5 rounded-2xl bg-zinc-950 dark:bg-black w-full max-w-sm shadow-2xl ring-1 ring-white/10 overflow-hidden relative transition-transform hover:scale-[1.01] duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent opacity-100 pointer-events-none" />

            <div className="flex flex-col items-start gap-1 relative z-10">
                <span className="font-semibold text-base text-white tracking-tight">ProMotion Display</span>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-indigo-200 bg-indigo-500/20 px-1.5 py-0.5 rounded">120Hz</span>
                    <span className="text-xs text-zinc-500">Ultra smooth visuals</span>
                </div>
            </div>
            <Switch id="premium-switch" variant="premium" defaultChecked className="relative z-20" />
        </div>
    );
}

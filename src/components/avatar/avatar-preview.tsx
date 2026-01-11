"use client";

import React from "react";
import { Avatar, AvatarBadge, AvatarGroup } from "@/components/avatar/avatar";
import { User, Sun, Moon } from "lucide-react";

export default function AvatarPreview() {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        // Check initial state
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        if (newIsDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div className="w-full bg-slate-50 p-10 dark:bg-background transition-colors duration-300">
            <div className="mx-auto max-w-2xl space-y-12">
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Avatar
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400">
                            The "Personal Token" – A machined recess for user identity. Now with accurate status indicators.
                        </p>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-500 transition-all hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                    >
                        {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
                    </button>
                </div>

                {/* SIZES & BADGES */}
                <section className="space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                        Sizes & Status
                    </h2>
                    <div className="flex items-end gap-6 rounded-xl border border-dashed border-slate-200 p-8 dark:border-slate-800">
                        <div className="flex flex-col items-center gap-2">
                            <Avatar size="sm" fallback="SM">
                                <AvatarBadge size="sm" status="online" />
                            </Avatar>
                            <span className="text-xs text-slate-400">sm</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Avatar size="md" fallback="MD">
                                <AvatarBadge size="md" status="busy" />
                            </Avatar>
                            <span className="text-xs text-slate-400">md</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Avatar size="lg" fallback="LG">
                                <AvatarBadge size="lg" status="away" />
                            </Avatar>
                            <span className="text-xs text-slate-400">lg</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Avatar size="xl" fallback="XL">
                                <AvatarBadge size="xl" status="count"><span className="text-[10px]">3</span></AvatarBadge>
                            </Avatar>
                            <span className="text-xs text-slate-400">xl</span>
                        </div>
                    </div>
                </section>

                {/* GROUPS */}
                <section className="space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                        Avatar Groups (Stacked)
                    </h2>
                    <div className="flex flex-wrap items-center gap-12 rounded-xl border border-dashed border-slate-200 p-8 dark:border-slate-800">
                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-slate-400">Regular Stack</span>
                            <AvatarGroup size="md">
                                <Avatar src="/images/avatar-man-2.jpg" fallback="M2" />
                                <Avatar src="/images/avatar-woman.jpg" fallback="WM" />
                                <Avatar src="/images/avatar-man-1.jpg" fallback="M1" />
                            </AvatarGroup>
                        </div>

                        <div className="flex flex-col gap-2">
                            <span className="text-xs text-slate-400">With Limit (+2)</span>
                            <AvatarGroup size="lg" limit={3}>
                                <Avatar src="/images/avatar-man-2.jpg" fallback="M2" />
                                <Avatar src="/images/avatar-woman.jpg" fallback="WM" />
                                <Avatar src="/images/avatar-man-1.jpg" fallback="M1" />
                                <Avatar src="/images/avatar-pixel.jpg" fallback="PX" />
                                <Avatar fallback="UD" />
                            </AvatarGroup>
                        </div>
                    </div>
                </section>

                {/* GALLERY */}
                <section className="space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                        Gallery (Uploaded)
                    </h2>
                    <div className="flex flex-wrap items-center gap-6 rounded-xl border border-dashed border-slate-200 p-8 dark:border-slate-800">
                        <Avatar src="/images/avatar-man-2.jpg" fallback="M2" size="xl" />
                        <Avatar src="/images/avatar-woman.jpg" fallback="WM" size="lg" />
                        <Avatar src="/images/avatar-man-1.jpg" fallback="M1" size="md" />
                        <Avatar src="/images/avatar-pixel.jpg" fallback="PX" size="sm" />
                    </div>
                </section>

                {/* VARIANTS */}
                <section className="space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                        Variants
                    </h2>
                    <div className="grid grid-cols-3 gap-6 rounded-xl border border-dashed border-slate-200 p-8 dark:border-slate-800">
                        <div className="flex flex-col items-center gap-4">
                            <Avatar variant="default" fallback={<User className="size-5" />} />
                            <span className="text-xs text-slate-400">Default (Recessed)</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Avatar variant="premium" fallback={<User className="size-5" />} />
                            <span className="text-xs text-slate-400">Premium</span>
                        </div>
                    </div>
                </section>

                {/* ANIMATION DEMO */}
                <section className="space-y-4">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                        Loading Sequence (Reload to see)
                    </h2>
                    <div className="rounded-xl border border-dashed border-slate-200 p-8 dark:border-slate-800">
                        <div className="flex items-center gap-4">
                            <Avatar
                                // Fake slow load by using a heavy image or just relying on network
                                src="/images/avatar-woman.jpg"
                                fallback={<span className="animate-pulse">...</span>}
                                size="lg"
                                delayMs={0} // Show fallback immediately
                            />
                            <div className="space-y-1">
                                <div className="h-2 w-24 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                                <div className="h-2 w-16 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

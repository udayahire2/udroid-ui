"use client";

import { Button } from "@/components/button/button";
import React from "react";
import {
    Bell,
    Settings,
    Trash2,
    Plus,
    Search,
    X,
    Bold,
    Italic,
    Underline,
    Share2,
    Mail,
    Loader2,
    ArrowRight,
    Sun,
    Moon
} from "lucide-react";

export default function ButtonPreview() {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
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
        <div className="flex flex-col items-center py-12 px-4 gap-12 bg-background text-foreground selection:bg-primary/20 transition-colors duration-300 w-full">
            <div className="text-center space-y-4 relative w-full max-w-5xl">
                <div className="absolute right-0 top-0">
                    <button
                        onClick={toggleTheme}
                        className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                    >
                        {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
                    </button>
                </div>
                <h1 className="text-4xl font-bold tracking-tight">UDX UI Button System</h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    From "Digital Keycaps" to System Icons. Precision physics, semantic lighting, and strict sizing.
                </p>
            </div>

            <div className="grid gap-20 w-full max-w-5xl">

                {/* --- PART 1: IDENTITY & TEXT BUTTONS --- */}

                {/* IDENTITY TEST */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-2 border-b border-border">
                        <div className="h-6 w-1 bg-primary rounded-full" />
                        <h2 className="text-xl font-semibold">1. The Digital Keycap (Identity)</h2>
                        <span className="text-xs text-muted-foreground ml-auto font-mono">cubic-bezier(0.4, 0, 0.2, 1)</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="p-12 border rounded-xl bg-card/30 flex items-center justify-center">
                            <Button size="lg" className="w-48 h-14 text-base shadow-xl">
                                Commit Action
                            </Button>
                        </div>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <p><strong className="text-foreground">Rest:</strong> Subtle "Lip" highlight + Elevation.</p>
                            <p><strong className="text-foreground">Hover:</strong> Light intensifies, shadow grows.</p>
                            <p><strong className="text-foreground">Active:</strong> Mechanical depression (1px), light blocked (lip dims), shadow collapses.</p>
                        </div>
                    </div>
                </section>

                {/* VARIANT HIERARCHY */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-2 border-b border-border">
                        <div className="h-6 w-1 bg-primary rounded-full" />
                        <h2 className="text-xl font-semibold">2. Text Variants</h2>
                    </div>
                    <div className="flex flex-wrap gap-4 p-8 border rounded-xl bg-card/30 justify-center">
                        <Button>Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="link">Link</Button>
                    </div>
                </section>

                {/* COMPOSITION */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-2 border-b border-border">
                        <div className="h-6 w-1 bg-primary rounded-full" />
                        <h2 className="text-xl font-semibold">3. Composition & Loading</h2>
                    </div>
                    <div className="flex flex-wrap gap-4 p-8 border rounded-xl bg-card/30 justify-center">
                        <Button>
                            <Mail className="mr-2" /> Login
                        </Button>
                        <Button variant="secondary">
                            Next Step <ArrowRight className="ml-2" />
                        </Button>
                        <Button disabled>
                            <Loader2 className="mr-2 animate-spin" />
                            Processing
                        </Button>
                    </div>
                </section>

                {/* SIZES (TEXT) */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-2 border-b border-border">
                        <div className="h-6 w-1 bg-primary rounded-full" />
                        <h2 className="text-xl font-semibold">4. Text Sizes (Variable Travel)</h2>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-8 p-8 border rounded-xl bg-card/30">
                        <div className="flex flex-col items-center gap-2">
                            <Button size="sm">Small (0.5px)</Button>
                            <span className="text-xs text-muted-foreground">Low Travel</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Button>Default (0.75px)</Button>
                            <span className="text-xs text-muted-foreground">Standard</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Button size="lg">Large (1px)</Button>
                            <span className="text-xs text-muted-foreground">Deep Travel</span>
                        </div>
                    </div>
                </section>

                {/* --- PART 2: SYSTEM ICONS --- */}

                {/* ICON SIZES */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-2 border-b border-border">
                        <div className="h-6 w-1 bg-primary rounded-full" />
                        <h2 className="text-xl font-semibold">5. Icon System (Square Physics)</h2>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-12 p-12 border rounded-xl bg-card/30">
                        <div className="flex flex-col items-center gap-4">
                            <Button size="icon-sm" variant="secondary" aria-label="Small">
                                <Settings />
                            </Button>
                            <code className="text-xs text-muted-foreground">icon-sm (32px)</code>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Button size="icon-md" variant="secondary" aria-label="Medium">
                                <Bell />
                            </Button>
                            <code className="text-xs text-muted-foreground">icon-md (36px)</code>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <Button size="icon-lg" variant="secondary" aria-label="Large">
                                <Plus />
                            </Button>
                            <code className="text-xs text-muted-foreground">icon-lg (40px)</code>
                        </div>
                    </div>
                </section>

                {/* REAL WORLD CONTEXTS */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-2 border-b border-border">
                        <div className="h-6 w-1 bg-primary rounded-full" />
                        <h2 className="text-xl font-semibold">6. Real Contexts</h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
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
                </section>

            </div>
        </div>
    );
}

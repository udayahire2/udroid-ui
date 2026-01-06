export function FigmaUI() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-8 text-center">
            <div className="space-y-8 max-w-3xl mx-auto">
                {/* Visual Icon Container */}
                <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl" />
                    <div className="relative w-full h-full flex items-center justify-center rounded-3xl bg-background border border-border/50 shadow-2xl">
                        {/* Figma SVG Logo */}

                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32" className="h-16 w-16">
                            <path fill="#f4511e" d="M12 4h4v8h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4" />
                            <path fill="#ff8a65" d="M20 12h-4V4h4a4 4 0 0 1 4 4a4 4 0 0 1-4 4" />
                            <rect width="8" height="8" x="16" y="12" fill="#29b6f6" rx="4" transform="rotate(180 20 16)" />
                            <path fill="#7c4dff" d="M12 12h4v8h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4" />
                            <path fill="#00e676" d="M12 20h4v4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4" />
                        </svg>
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/90 to-muted-foreground pb-2">
                        Figma to Code
                    </h1>

                    <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                        Implement your designs instantly.
                    </h2>
                </div>

                <div className="max-w-xl mx-auto space-y-6">
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                        This groundbreaking feature will allow you to directly translate your Figma designs into clean, production-ready code.
                    </p>

                    <div className="rounded-xl border border-primary/10 bg-primary/5 p-6 backdrop-blur-sm">
                        <p className="text-sm md:text-base text-foreground/80 leading-relaxed font-medium">
                            "As a solo developer, I am dedicating my full attention to building a robust core library first. This feature is part of our future roadmap and will be released in an upcoming update. Thank you for your patience and support."
                        </p>
                    </div>
                </div>

                <div className="pt-8 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/30 text-sm text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                        <span>Planned for Future Release</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

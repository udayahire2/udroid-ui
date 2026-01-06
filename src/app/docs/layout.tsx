export default function DocsLayout() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="space-y-6 max-w-2xl mx-auto">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8 text-primary animate-pulse"
                    >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                        <polyline points="14 2 14 8 20 8" />
                        <path d="M12 18v-4" />
                        <path d="M12 10h.01" />
                    </svg>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-muted-foreground">
                    Documentation Coming Soon
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    We're working hard on the library to bring you the best experience.<br />
                    Detailed documentation will be available shortly.
                </p>

                <div className="flex items-center justify-center gap-4 pt-4">
                    <div className="h-1 w-24 rounded bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                </div>
            </div>
        </div>
    );
}

import { cn } from "@/lib/utils";

export function FigmaUI() {
    return (
        <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-background text-foreground">
            <div className="space-y-4 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    Figma UI
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Coming Soon
                </p>
            </div>
        </div>
    );
}

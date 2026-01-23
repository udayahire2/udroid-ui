import { Outlet } from "react-router-dom";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function DocsLayout() {
    return (
        <div className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col overflow-hidden bg-background">
            {/* 
            <div className="z-10 flex flex-col items-center gap-6 text-center animate-in fade-in zoom-in-95 duration-500">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/20 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                    <Construction className="h-3 w-3" />
                    <span>Under Development</span>
                </div>

                <div className="max-w-[800px] space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                        Documentation <br className="hidden sm:block" />
                        <span className="text-muted-foreground/50">is being crafted.</span>
                    </h1>
                    <p className="mx-auto max-w-[500px] text-lg text-muted-foreground text-balance">
                        We are meticulously building the best experience for you.
                        Detailed guides and API references are coming soon.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/">
                        <Button variant="outline" size="lg" className="h-10 px-6 gap-2 group border-border/50 hover:bg-muted/50">
                            <MoveLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            Return Home
                        </Button>
                    </Link>
                </div>
            </div> 
            */}
            <div className="flex-1 w-full">
                <Outlet />
            </div>

            <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                className={cn(
                    "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
                    "absolute inset-0 h-full w-full fill-neutral-100/20 stroke-neutral-200/40 dark:fill-neutral-800/20 dark:stroke-neutral-800/40",
                )}
            />

            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    );
}

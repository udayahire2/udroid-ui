import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface DocNavigationProps {
    previous?: {
        title: string;
        href: string;
        category: string;
    } | null;
    next?: {
        title: string;
        href: string;
        category: string;
    } | null;
}

export function DocsNavigation({ previous, next }: DocNavigationProps) {
    if (!previous && !next) return null;

    return (
        <nav className="mt-16 pt-8 border-t border-border/40">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Previous Link */}
                {previous ? (
                    <Link
                        to={previous.href}
                        className="group flex flex-col p-4 rounded-lg border border-border/50 hover:border-border transition-colors duration-200"
                    >
                        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                            <ArrowLeft className="w-3.5 h-3.5" />
                            <span>Previous</span>
                        </div>
                        <div className="text-sm text-muted-foreground/70 mb-1">
                            {previous.category}
                        </div>
                        <div className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                            {previous.title}
                        </div>
                    </Link>
                ) : (
                    <div />
                )}

                {/* Next Link */}
                {next && (
                    <Link
                        to={next.href}
                        className="group flex flex-col p-4 rounded-lg border border-border/50 hover:border-border transition-colors duration-200 text-right md:items-end"
                    >
                        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                            <span>Next</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-sm text-muted-foreground/70 mb-1">
                            {next.category}
                        </div>
                        <div className="text-base font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                            {next.title}
                        </div>
                    </Link>
                )}
            </div>
        </nav>
    );
}


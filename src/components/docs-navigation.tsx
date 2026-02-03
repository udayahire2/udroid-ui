import { Link } from "react-router-dom";

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
        <div className="mt-16 pt-8 border-t border-border/40">
            <nav className="flex items-center justify-between text-sm">
                {previous ? (
                    <Link
                        to={previous.href}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        ← Previous: {previous.title}
                    </Link>
                ) : (
                    <div />
                )}

                {next ? (
                    <Link
                        to={next.href}
                        className="text-muted-foreground hover:text-foreground"
                    >
                        Next: {next.title} →
                    </Link>
                ) : null}
            </nav>
        </div>
    );
}


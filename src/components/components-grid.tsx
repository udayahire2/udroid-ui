import { Link } from "react-router-dom";
import { docsConfig } from "@/config/docs";
import { Copy, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/button/button";
import { useState } from "react";

export function ComponentsGrid() {
    const [copied, setCopied] = useState(false);

    // Get all component items from the config
    const componentItems = docsConfig.sidebarNav.find(
        section => section.title === "Components"
    )?.items || [];

    const handleCopyPage = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header Section */}
            <div className="mb-12">
                <div className="flex items-start justify-between mb-6">
                    <div>
                        <h1 className="text-5xl font-bold tracking-tight mb-4">
                            Components
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl">
                            Here you can find all the components available in the library.
                        </p>
                    </div>

                    {/* Top Right Actions */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCopyPage}
                            className="gap-2"
                        >
                            <Copy className="h-4 w-4" />
                            {copied ? "Copied!" : "Copy Page"}
                        </Button>
                        <Button variant="ghost" size="icon-sm">
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon-sm">
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {componentItems.map((component) => (
                    <Link
                        key={component.href}
                        to={component.href}
                        className="group relative p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 hover:border-border transition-all duration-200"
                    >
                        <h3 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                            {component.title}
                        </h3>
                    </Link>
                ))}
            </div>
        </div>
    );
}

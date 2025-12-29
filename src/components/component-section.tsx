import { Link } from "react-router-dom";
import { CardSpotlight } from "./ui/card-spotlight";
import { GridPattern } from "./ui/grid-pattern";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";

const components = [
    {
        title: "Navbar",
        description: "Responsive navigation headers with various styles.",
        href: "/docs/navbar",
        count: "+0",
    },
    {
        title: "Hero Section",
        description: "Eye-catching hero areas to showcase your product.",
        href: "/docs/hero",
        count: "+0",
    },
    {
        title: "Footer",
        description: "Clean and functional footers for your site.",
        href: "/docs/footer",
        count: "+0",
    },
    {
        title: "Forms",
        description: "Input fields, checkboxes, and validation layouts.",
        href: "/docs/forms",
        count: "+0",
    },
    {
        title: "Pricing",
        description: "Pricing tables and subscription cards.",
        href: "/docs/pricing",
        count: "+0",
    },
    {
        title: "Cards",
        description: "Versatile content containers for any data.",
        href: "/docs/cards",
        count: "+0",
    },
    {
        title: "Buttons",
        description: "Interactive buttons with different variants.",
        href: "/docs/buttons",
        count: "+0",
    },
    {
        title: "Inputs",
        description: "Text inputs, textareas, and select menus.",
        href: "/docs/inputs",
        count: "+0",
    },
];

export function ComponentSection() {
    return (
        <section className="relative w-full bg-background py-16 md:py-24 overflow-hidden">
            <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-50",
                )}
            />
            <div className="max-w-7xl relative mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="mb-16 text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Explore Components
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
                        A curated set of reusable, accessible UI building blocks for modern apps.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {components.map((component, index) => (
                        <Link
                            key={index}
                            to={component.href}
                            className="group block h-full"
                        >
                            <CardSpotlight
                                className="h-full p-6 bg-card border-border/50 
                                transition-all duration-200 ease-out
                                hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg dark:hover:shadow-2xl dark:hover:border-white/10
                                dark:bg-card dark:hover:bg-muted/10"
                            >
                                {/* Meta */}
                                <div className="flex justify-between items-start mb-4">
                                    {component.count && (
                                        <span className="relative z-10 inline-block text-xs font-medium text-emerald-500/90 transition-colors duration-200 group-hover:text-emerald-500">
                                            {component.count} components
                                        </span>
                                    )}
                                    <MoveRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 space-y-2">
                                    <h3 className="text-xl font-semibold tracking-tight transition-colors duration-200 group-hover:text-primary">
                                        {component.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-muted-foreground/80 transition-all duration-200 group-hover:text-muted-foreground group-hover:opacity-100">
                                        {component.description}
                                    </p>
                                </div>
                            </CardSpotlight>
                        </Link>
                    ))}
                </div>
            </div>
        </section >
    );
}


import { ArrowRight, Box, Grip, Laptop, MousePointer2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function DocsPage() {
    return (
        <div className="space-y-12 py-10">
            {/* Header */}
            <div className="space-y-4 text-center max-w-2xl mx-auto">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Component Catalog
                </h1>
                <p className="text-xl text-muted-foreground">
                    A visual directory of polished, interactive components.
                </p>
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Button Card */}
                <CatalogCard
                    title="Button"
                    description="Interactive element with physics and semantic states."
                    href="/docs/components/button"
                    icon={<MousePointer2 className="w-6 h-6" />}
                />

                {/* Input Card */}
                <CatalogCard
                    title="Input"
                    description="Text fields with validation and icon support."
                    href="/docs/components/input"
                    icon={<Grip className="w-6 h-6" />} // Placeholder icon
                />

                {/* Card Component */}
                <CatalogCard
                    title="Card"
                    description="Container for grouped content and actions."
                    href="/docs/components/card"
                    icon={<Box className="w-6 h-6" />}
                />

                {/* Dialog */}
                <CatalogCard
                    title="Dialog"
                    description="Modal overlays for focused tasks."
                    href="/docs/components/dialog"
                    icon={<Laptop className="w-6 h-6" />}
                />

                {/* More placeholders... */}
                <div className="p-6 rounded-xl border border-dashed border-border flex items-center justify-center text-muted-foreground bg-muted/20">
                    <span className="text-sm">More coming soon...</span>
                </div>

            </div>
        </div>
    )
}

function CatalogCard({ title, description, href, icon }: { title: string, description: string, href: string, icon: React.ReactNode }) {
    return (
        <Link to={href} className="group relative block p-px overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-200 via-transparent to-transparent dark:from-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative h-full bg-zinc-50 dark:bg-zinc-950/50 border border-border/50 rounded-2xl p-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                <div className="mb-4 h-10 w-10 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-border flex items-center justify-center text-foreground group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-2 flex items-center gap-2">
                    {title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                </p>
            </div>
        </Link>
    )
}

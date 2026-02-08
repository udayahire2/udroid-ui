import { Link } from "react-router-dom";
import { docsConfig } from "@/config/docs";
import { ComponentCard } from "@/components/ui/component-card";

export function ComponentsGrid() {
    const newest = [
        {
            title: "Next Reveal",
            subtitle: "Next Level",
            author: { name: "Daiwiik Harihar", initial: "D", avatar: "bg-teal-600" },
            preview: <div className="text-4xl font-bold tracking-tighter text-white">NEXT LEVEL</div>,
            href: "/docs/button"
        },
        {
            title: "Text Reveal",
            subtitle: "Text Reveal",
            author: { name: "Daiwiik Harihar", initial: "D", avatar: "bg-teal-600" },
            preview: <div className="text-4xl font-bold tracking-tight text-white">Theme Aware</div>,
            href: "/docs/input"
        },
        {
            title: "Kinetic Dots Loader",
            subtitle: "Loader",
            author: { name: "Daiwiik Harihar", initial: "D", avatar: "bg-teal-600" },
            preview: (
                <div className="flex gap-2">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className="w-3 h-3 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                </div>
            ),
            href: "/docs/avatar"
        }
    ]

    const popular = [
        {
            title: "Glowing Effect",
            subtitle: "Default",
            author: { name: "Aceternity UI", initial: "A", avatar: "bg-zinc-800" },
            preview: <div className="w-32 h-32 rounded-xl bg-linear-to-br from-purple-500 to-blue-500 blur-xl opacity-50" />,
            href: "/docs/dialog"
        },
        {
            title: "Spline Scene",
            subtitle: "Default",
            author: { name: "Serafim", initial: "S", avatar: "bg-orange-600" },
            preview: <div className="w-40 h-40 bg-zinc-900 rounded-full border border-white/10" />,
            href: "/docs/switch"
        },
        {
            title: "Display Cards",
            subtitle: "Default",
            author: { name: "Prism UI", initial: "P", avatar: "bg-indigo-600" },
            preview: <div className="p-4 bg-zinc-900 border border-white/10 rounded-lg text-[10px] text-white/40">Featured Product</div>,
            href: "/docs/card"
        }
    ]

    return (
        <div className="space-y-16">
            {/* Newest Section */}
            <section>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-sm font-semibold text-white tracking-wide">Newest</h2>
                    <Link to="#" className="text-[13px] text-zinc-500 hover:text-white flex items-center gap-1 transition-colors">
                        View all <ChevronRight className="w-3 h-3" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {newest.map((item, i) => (
                        <Link key={i} to={item.href}>
                            <ComponentCard {...item} />
                        </Link>
                    ))}
                </div>
            </section>

            {/* Popular Section */}
            <section>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-sm font-semibold text-white tracking-wide">Popular</h2>
                    <Link to="#" className="text-[13px] text-zinc-500 hover:text-white flex items-center gap-1 transition-colors">
                        View all <ChevronRight className="w-3 h-3" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {popular.map((item, i) => (
                        <Link key={i} to={item.href}>
                            <ComponentCard {...item} />
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

function ChevronRight({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6" /></svg>
    )
}

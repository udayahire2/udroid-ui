import { useRef } from "react";
import { Link } from "react-router-dom";
import { CardSpotlight } from "./ui/card-spotlight";
import { GridPattern } from "./ui/grid-pattern";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
    Layout,
    AppWindow,
    PanelBottom,
    FormInput,
    CreditCard,
    WalletCards,
    MousePointer2,
    Keyboard
} from "lucide-react";

const components = [
    {
        title: "Navbar",
        description: "Responsive navigation headers with various styles.",
        href: "/docs/navbar",
        icon: Layout,
        count: "5+",
    },
    {
        title: "Hero Section",
        description: "Eye-catching hero areas to showcase your product.",
        href: "/docs/hero",
        icon: AppWindow,
        count: "3+",
    },
    {
        title: "Footer",
        description: "Clean and functional footers for your site.",
        href: "/docs/footer",
        icon: PanelBottom,
        count: "4+",
    },
    {
        title: "Forms",
        description: "Input fields, checkboxes, and validation layouts.",
        href: "/docs/forms",
        icon: FormInput,
        count: "8+",
    },
    {
        title: "Pricing",
        description: "Pricing tables and subscription cards.",
        href: "/docs/pricing",
        icon: CreditCard,
        count: "3+",
    },
    {
        title: "Cards",
        description: "Versatile content containers for any data.",
        href: "/docs/cards",
        icon: WalletCards,
        count: "6+",
    },
    {
        title: "Buttons",
        description: "Interactive buttons with different variants.",
        href: "/docs/buttons",
        icon: MousePointer2,
        count: "10+",
    },
    {
        title: "Inputs",
        description: "Text inputs, textareas, and select menus.",
        href: "/docs/inputs",
        icon: Keyboard,
        count: "8+",
    },
];

export function ComponentSection() {
    const containerRef = useRef<HTMLElement>(null);

    return (
        <section ref={containerRef} className="relative w-full bg-background py-20 lg:py-32 overflow-hidden">
            <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-[0.3]",
                )}
            />
            <div className="max-w-7xl relative mx-auto px-4 md:px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, staggerChildren: 0.2 }}
                    className="mb-20 text-center space-y-4"
                >
                    <h2
                        className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                    >
                        Explore Components
                    </h2>
                    <p
                        className="mx-auto max-w-2xl text-muted-foreground md:text-lg"
                    >
                        A curated set of reusable, accessible UI building blocks for modern apps.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {components.map((component, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <Link
                                to={component.href}
                                className="group block h-full"
                            >
                                <div className="h-full">
                                    <CardSpotlight
                                        className="h-full p-8 bg-card/50 backdrop-blur-sm border-border/40 
                                transition-all duration-300 ease-out
                                hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5
                                dark:hover:border-white/10 relative overflow-hidden group"
                                        radius={250}
                                        color="#262626"
                                    >
                                        {/* Gradient Blob for extra premium feel on hover */}
                                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* Icon & Meta */}
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="p-3 rounded-2xl bg-primary/5 text-primary ring-1 ring-primary/10 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                                                    <component.icon className="w-6 h-6" />
                                                </div>
                                                {component.count && (
                                                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-muted/50 text-muted-foreground border border-border/50 group-hover:border-primary/20 group-hover:text-primary transition-colors">
                                                        {component.count}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="space-y-3 flex-grow">
                                                <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    {component.title}
                                                </h3>
                                                <p className="text-sm leading-relaxed text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                                                    {component.description}
                                                </p>
                                            </div>
                                        </div>
                                    </CardSpotlight>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
}

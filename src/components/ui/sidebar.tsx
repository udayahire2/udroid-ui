import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Sidebar() {
    const location = useLocation();
    const pathname = location.pathname;

    const items = [
        {
            title: "Getting Started",
            items: [
                {
                    title: "Introduction",
                    href: "/docs",
                },
                {
                    title: "Installation",
                    href: "/docs/installation",
                },
                {
                    title: "Theming",
                    href: "/docs/theming",
                }
            ],
        },
        {
            title: "Components",
            items: [
                {
                    title: "Button",
                    href: "/docs/components/button",
                },
                {
                    title: "Avatar",
                    href: "/docs/components/avatar",
                },
                {
                    title: "Card",
                    href: "/docs/components/card",
                },
                {
                    title: "Input",
                    href: "/docs/components/input",
                },
                {
                    title: "Separator",
                    href: "/docs/components/separator",
                },
                {
                    title: "Switch",
                    href: "/docs/components/switch",
                },
                {
                    title: "Textarea",
                    href: "/docs/components/textarea",
                },
                {
                    title: "Tooltip",
                    href: "/docs/components/tooltip",
                }
            ]
        }
    ];

    return (
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
            <nav className="h-full overflow-y-auto py-8 pr-6 pl-8 custom-scrollbar">
                {items.map((item, index) => (
                    <div key={index} className="pb-8">
                        <h4 className="mb-3 text-sm font-semibold tracking-tight text-foreground/90">
                            {item.title}
                        </h4>
                        {item.items?.length && (
                            <ul className="grid grid-flow-row auto-rows-max gap-1.5 text-sm">
                                {item.items.map((subItem, index) => {
                                    const isActive = pathname === subItem.href;
                                    return (
                                        <li key={index}>
                                            <Link
                                                to={subItem.href}
                                                className={cn(
                                                    "group flex w-full items-center rounded-md border border-transparent px-3 py-1.5 text-muted-foreground transition-all duration-200 hover:text-foreground",
                                                    isActive
                                                        ? "font-medium text-foreground"
                                                        : ""
                                                )}
                                            >
                                                <span className="relative truncate">
                                                    {subItem.title}
                                                </span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                ))}
            </nav>
        </aside>
    );
}

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
                }
            ]
        }
    ];

    return (
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-[260px] shrink-0 border-r border-white/[0.08] bg-black/95 backdrop-blur md:sticky md:block">
            <div className="h-full overflow-y-auto py-6 pr-4 pl-6 lg:py-8">
                {items.map((item, index) => (
                    <div key={index} className="pb-8">
                        <h4 className="mb-2 px-2 text-[13px] font-semibold text-white/90">
                            {item.title}
                        </h4>
                        {item.items?.length && (
                            <div className="grid grid-flow-row auto-rows-max text-sm gap-1">
                                {item.items.map((subItem, index) => (
                                    <Link
                                        key={index}
                                        to={subItem.href}
                                        className={cn(
                                            "group flex w-full items-center rounded-lg border border-transparent px-3 h-[36px] text-[14px] font-normal text-white/60 transition-colors hover:text-white/90",
                                            pathname === subItem.href
                                                ? "bg-white/[0.08] font-medium text-white"
                                                : ""
                                        )}
                                    >
                                        {subItem.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </aside>
    );
}

import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { docsConfig } from "@/config/docs";

export function Sidebar() {
    const location = useLocation();
    const pathname = location.pathname;

    const items = docsConfig;

    return (
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 md:sticky md:block">
            <nav className="h-full overflow-y-auto py-8 pr-6 pl-8 pb-20 custom-scrollbar">
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
                                        <li key={index} className="relative">
                                            {isActive && (
                                                <div className="absolute -left-4 top-1/2 h-4 w-1 -translate-y-1/2 rounded-full bg-primary" />
                                            )}
                                            <Link
                                                to={subItem.href}
                                                className={cn(
                                                    "group flex w-full items-center rounded-md border border-transparent px-2.5 py-1.5 text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-muted/50",
                                                    isActive
                                                        ? "font-medium text-foreground bg-muted/30"
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

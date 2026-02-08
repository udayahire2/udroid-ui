import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/header";
import { DocsNavigationIsland } from "@/components/docs-navigation-bar";
import { DocsNavigation } from "@/components/docs-navigation";
import { TableOfContents } from "@/components/table-of-contents";
import { getAdjacentDocs } from "@/config/docs";

export default function DocsLayout() {
    const location = useLocation();
    const { previous, next } = getAdjacentDocs(location.pathname);

    return (
        <div className="relative min-h-screen flex flex-col bg-background text-foreground">
            {/* Global Header */}
            <Header />

            {/* Floating Island Navigation */}
            <DocsNavigationIsland />

            {/* Main Content Area with Table of Contents */}
            <main className="relative flex-1 w-full pt-32 pb-16">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex gap-12 justify-center">
                        {/* Main Content - Centered */}
                        <article className="prose flex-1 min-w-0 max-w-3xl mx-auto xl:mx-0">
                            {/* MDX Content */}
                            <Outlet />

                            {/* Next/Previous Navigation */}
                            <DocsNavigation previous={previous} next={next} />
                        </article>

                        {/* Table of Contents - Right Sidebar */}
                        <TableOfContents className="shrink-0" />
                    </div>
                </div>
            </main>
        </div>
    );
}

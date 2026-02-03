import { Outlet, useLocation } from "react-router-dom";
import { Header } from "@/components/header";
import { DocsNavigationIsland } from "@/components/docs-navigation-bar";
import { DocsNavigation } from "@/components/docs-navigation";
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

            {/* Main Content Area - Full Width */}
            <main className="relative flex-1 w-full pt-32 pb-16">
                <div className="w-full max-w-5xl mx-auto px-6 md:px-8">
                    {/* MDX Content */}
                    <Outlet />

                    {/* Next/Previous Navigation */}
                    <DocsNavigation previous={previous} next={next} />
                </div>
            </main>
        </div>
    );
}

import { Outlet, useLocation } from "react-router-dom";
import { DocsSidebar } from "@/components/docs-sidebar";
import { DocsNavigation } from "@/components/docs-navigation";
import { getAdjacentDocs } from "@/config/docs";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";

export default function DocsLayout() {
    const location = useLocation();
    const { previous, next } = getAdjacentDocs(location.pathname);

    return (
        <SidebarProvider>
            <div className="flex h-screen w-full bg-black overflow-hidden font-sans antialiased">
                {/* Sidebar - Desktop */}
                <DocsSidebar />

                {/* Main Content Area - Inset Card Style */}
                <SidebarInset className="flex-1 bg-[#121212] m-2 md:m-3 md:ml-0 rounded-[2rem] border border-white/5 overflow-hidden flex flex-col">
                    {/* Navigation Top Bar (Internal to Card) - Now a flex child */}
                    <div className="h-16 px-4 md:px-8 flex items-center justify-between border-b border-white/5 bg-[#121212]/50 backdrop-blur-md shrink-0">
                        <div className="flex items-center gap-4">
                            <SidebarTrigger className="md:hidden text-white/60 hover:text-white" />
                            <div className="hidden md:flex items-center gap-4 text-sm font-medium text-white/60">
                                <span>Components</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="p-2 rounded-full hover:bg-white/5 transition-colors text-white/40 md:hidden">
                                <Search className="w-4 h-4" />
                            </button>
                            <div className="hidden md:flex items-center justify-center w-8 h-8">
                                <Search className="w-4 h-4 text-white/40" />
                            </div>
                        </div>
                    </div>

                    {/* Scrollable Content Area - Properly constrained */}
                    <div className="flex-1 min-h-0 overflow-y-scroll custom-scrollbar">
                        <div className="px-4 md:px-8 py-8">
                            <div className="max-w-[1200px] mx-auto">
                                <article className="prose prose-zinc prose-invert max-w-none">
                                    {/* MDX Content */}
                                    <div className="min-h-[50vh]">
                                        <Outlet />
                                    </div>

                                    {/* Next/Previous Navigation */}
                                    <DocsNavigation previous={previous} next={next} />
                                </article>
                            </div>
                        </div>
                    </div>
                </SidebarInset>
            </div>
        </SidebarProvider>
    );
}

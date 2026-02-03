import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import { getAdjacentDocs, docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,  
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

export function DocsNavigationIsland() {
  const location = useLocation();
  const { previous, next, current } = getAdjacentDocs(location.pathname);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!current) return null;

  return (
    <div
      className="fixed top-20 right-6 z-40 flex items-center gap-2"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Navigation Island */}
      <div
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-full border border-border/50",
          "bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80",
          "shadow-lg shadow-black/5 transition-all duration-500 ease-out",
          "hover:shadow-xl hover:shadow-black/10 hover:border-border/70",
          "transform-gpu", // Enable GPU acceleration
          isExpanded ? "gap-4 pr-4" : "gap-2",
          isMenuOpen && "ring-2 ring-ring/20" // Add ring when menu is open
        )}
      >
        {/* Menu Button (visible on hover) */}
        <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DropdownMenuTrigger asChild>
            <button
              aria-label="Menu"
              className={cn(
                "flex items-center justify-center h-9 w-9 rounded-full",
                "hover:bg-accent/50 active:bg-accent transition-all duration-300",
                "transform-gpu hover:scale-105 active:scale-95",
                "border border-transparent hover:border-border/30",
                "outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
                isExpanded 
                  ? "opacity-100 w-9 translate-x-0" 
                  : "opacity-0 w-0 -translate-x-4 overflow-hidden",
                isMenuOpen && "bg-accent/30 ring-1 ring-ring/20"
              )}
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="w-72 p-0 border-border/50 shadow-2xl"
            sideOffset={12}
            onWheel={(e: React.WheelEvent) => e.stopPropagation()}
            style={{
              animation: "slideInFromRight 0.2s ease-out",
            }}
          >
            <style>{`
              @keyframes slideInFromRight {
                from {
                  opacity: 0;
                  transform: translateX(8px) scale(0.95);
                }
                to {
                  opacity: 1;
                  transform: translateX(0) scale(1);
                }
              }
            `}</style>
            <div className="p-3 pb-2 bg-linear-to-b from-background to-background/95">
              <DropdownMenuLabel className="p-0 text-base font-semibold tracking-tight">
                Documentation
              </DropdownMenuLabel>
            </div>
            <DropdownMenuSeparator className="my-0" />

            <ScrollArea className="h-70">
              <div className="p-3 pt-2 space-y-1">
                {docsConfig.sidebarNav.map((section, sectionIdx) => (
                  <div 
                    key={sectionIdx} 
                    className="mb-4 last:mb-2"
                  >
                    <style>{`
                      @keyframes fadeInUp {
                        from {
                          opacity: 0;
                          transform: translateY(4px);
                        }
                        to {
                          opacity: 1;
                          transform: translateY(0);
                        }
                      }
                    `}</style>
                    <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground/80 uppercase tracking-wider">
                      {section.title}
                    </div>
                    <div className="space-y-1">
                      {section.items.map((item, itemIdx) => {
                        const isActive = location.pathname === item.href;
                        return (
                          <Link
                            key={item.href}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={cn(
                              "block px-2 py-2 text-sm rounded-md transition-all duration-200",
                              "transform-gpu hover:translate-x-1",
                              "outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-1",
                              isActive
                                ? "bg-primary/10 text-foreground font-medium ring-1 ring-primary/20"
                                : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                            )}
                            style={{
                              animation: `fadeIn 0.2s ease-out ${(sectionIdx * 0.05 + itemIdx * 0.02)}s both`,
                            }}
                          >
                            {item.title}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Previous Button */}
        {previous ? (
          <Link
            to={previous.href}
            className={cn(
              "flex items-center justify-center h-9 w-9 rounded-full",
              "hover:bg-accent/50 active:bg-accent transition-all duration-200",
              "transform-gpu hover:scale-110 active:scale-95",
              "border border-transparent hover:border-border/30",
              "group relative outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
              isExpanded ? "opacity-100" : "opacity-90"
            )}
            title={`Previous: ${previous.title}`}
          >
            <ChevronLeft className="h-4.5 w-4.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
          </Link>
        ) : (
          <div className="h-9 w-9 flex items-center justify-center opacity-20">
            <ChevronLeft className="h-4.5 w-4.5" />
          </div>
        )}

        {/* Current Component Name */}
        <div
          className={cn(
            "text-sm font-semibold text-foreground whitespace-nowrap overflow-hidden",
            "transition-all duration-500 ease-out transform-gpu",
            "bg-linear-to-r from-foreground/80 to-foreground bg-clip-text",
            isExpanded 
              ? "max-w-60 opacity-100 translate-x-0" 
              : "max-w-0 opacity-0 -translate-x-2"
          )}
        >
          {current.title}
        </div>

        {/* Next Button */}
        {next ? (
          <Link
            to={next.href}
            className={cn(
              "flex items-center justify-center h-9 w-9 rounded-full",
              "hover:bg-accent/50 active:bg-accent transition-all duration-200",
              "transform-gpu hover:scale-110 active:scale-95",
              "border border-transparent hover:border-border/30",
              "group relative outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2",
              isExpanded ? "opacity-100" : "opacity-90"
            )}
            title={`Next: ${next.title}`}
          >
            <ChevronRight className="h-4.5 w-4.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <div className="h-9 w-9 flex items-center justify-center opacity-20">
            <ChevronRight className="h-4.5 w-4.5" />
          </div>
        )}
      </div>
    </div>
  );
}
"use client";

import "../index.css";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/button/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import { Search, Sun, Moon, Github } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Link, useLocation } from "react-router-dom";
import { CommandMenu } from "@/components/command-menu";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const navLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Figma", href: "/figma" },
];

export function Header() {
  const scrolled = useScroll(10);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-transparent bg-background/60 backdrop-blur-xl transition-all duration-300 supports-[backdrop-filter]:bg-background/60",
        scrolled && "border-border/40 bg-background/80"
      )}
    >
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* LEFT: Logo & Desktop Nav */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink key={link.label} asChild className={cn(navigationMenuTriggerStyle(), "h-8 bg-transparent hover:bg-muted/50")}>
                      <Link
                        to={link.href}
                        className={cn(
                          "bg-transparent",
                          location.pathname === link.href && "text-foreground font-medium"
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-2 md:gap-2">

          {/* Search Trigger */}
          <div className="hidden md:flex items-center mr-2">
            <button
              onClick={() => setOpen(true)}
              className="group inline-flex h-9 items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 text-sm font-medium text-muted-foreground/60 shadow-sm transition-all hover:bg-white/[0.08] hover:text-foreground hover:border-white/10"
            >
              <Search className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="hidden lg:inline-flex text-xs tracking-wide">Search documentation...</span>
              <span className="inline-flex lg:hidden text-xs">Search...</span>
              <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded bg-white/5 border border-white/5 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex text-muted-foreground/50 group-hover:text-muted-foreground transition-colors">
                <span className="text-xs">⌘</span>K
              </kbd>
            </button>
            <CommandMenu open={open} setOpen={setOpen} />
          </div>

          <div className="flex items-center gap-1">
            <Link to="https://github.com/udayahire2" target="_blank" rel="noreferrer" className="hidden sm:flex">
              <Button variant="ghost" size="icon-sm" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <Github className="h-[1.1rem] w-[1.1rem]" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>

            <Link to="https://x.com/UdayAhire447195" target="_blank" rel="noreferrer" className="hidden sm:flex">
              <Button variant="ghost" size="icon-sm" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                <XIcon className="h-[1.1rem] w-[1.1rem] fill-current" />
                <span className="sr-only">X (Twitter)</span>
              </Button>
            </Link>

            <ModeToggle />

            <div className="md:hidden flex ml-1">
              <MobileNav />
            </div>

            {/* Mobile Search Icon (Separate from menu) */}
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setOpen(true)}
              className="h-8 w-8 md:hidden text-muted-foreground"
            >
              <Search className="h-[1.1rem] w-[1.1rem]" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative h-8 w-8 text-muted-foreground hover:text-foreground"
    >
      <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

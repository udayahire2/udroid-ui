"use client";

import "../index.css";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/mobile-nav";
import { Search, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Link } from "react-router-dom";
import { Github } from "lucide-react";
import { CommandMenu } from "@/components/command-menu";
import { useState } from "react";

export const navLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Components", href: "/components" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Figma", href: "/figma" },
];

export function Header() {
  const scrolled = useScroll(10);
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md transition-all",
        scrolled && "border-border/60 shadow-sm"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* LEFT */}
        <div className="flex items-center gap-8">
          <Link to="/" className="cursor-pointer text-lg font-medium tracking-tight font-sans-serif">
            LOGO
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-2 rounded-full border border-border/40 bg-muted/40 px-2 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-border hover:bg-muted/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline-block">Search</span>
            <kbd className="hidden h-5 items-center gap-1 rounded bg-background/50 px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex lg:inline-flex">
              <span className="text-xs">⌘</span>K
            </kbd>
          </button>
          <CommandMenu open={open} setOpen={setOpen} />

          <div className="flex items-center gap-2">
            <Link to="https://github.com/udayahire2" target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Github className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <ModeToggle />
            <Button variant="ghost" size="sm" className="text-sm">
              Sign in
            </Button>
            <Button size="sm" className="text-sm font-medium">
              Get started
            </Button>
          </div>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            className="h-9 w-9"
          >
            <Search className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Search</span>
          </Button>
          <ModeToggle />
          <MobileNav />
        </div>

      </nav>
    </header>
  );
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative h-9 w-9"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
}

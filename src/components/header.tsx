"use client";

import "@/index.css";
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
import { motion, AnimatePresence } from "framer-motion";

export const navLinks = [
  { label: "Docs", href: "/docs" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Figma", href: "/figma" },
];

export function Header() {
  const scrolled = useScroll(10);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);



  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 px-4 sm:pt-4"
    >
      <div
        className={cn(
          "relative flex items-center justify-between w-full max-w-6xl rounded-2xl border px-4 py-2.5 transition-all duration-500 ease-out backdrop-blur-md",
          scrolled
            ? "bg-background/80 border-border/40 shadow-none dark:shadow-xl ring-1 ring-black/5 dark:ring-white/5"
            : "bg-background/40 border-black/5 dark:border-white/5 shadow-none dark:shadow-md ring-1 ring-black/5 dark:ring-white/5"
        )}
      >

        {/* LEFT: Logo & Nav */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2 group relative z-10">
            <div className="transition-transform duration-300 group-hover:scale-105">
              <Logo />
            </div>
          </Link>

          {/* DESKTOP NAV: Engineered Tabs */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                to={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg",
                  location.pathname === link.href ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {/* Hover Background */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      className="absolute inset-0 rounded-lg bg-zinc-100 dark:bg-zinc-800 -z-10"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1, transition: { duration: 0.15 } }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                    />
                  )}
                </AnimatePresence>

                {/* Active State Indicator (Dot) */}
                {location.pathname === link.href && (
                  <motion.span
                    layoutId="activeDot"
                    className="absolute -bottom-[11px] left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-t-full bg-primary"
                  />
                )}

                <span className="relative z-10 tracking-tight">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>


        {/* RIGHT: Actions */}
        <div className="flex items-center gap-3">

          {/* Search Trigger - Command Center Style */}
          <button
            onClick={() => setOpen(true)}
            className="group hidden md:flex items-center gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 pl-3 pr-2 py-1.5 text-sm text-muted-foreground transition-all hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-foreground shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Search className="h-3.5 w-3.5 opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="text-xs font-medium opacity-70 group-hover:opacity-100">Search</span>
            </div>

            <kbd className="hidden lg:inline-flex h-5 items-center gap-0.5 rounded bg-background border border-border px-1.5 font-mono text-[10px] font-medium text-muted-foreground shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
              <span className="text-xs">⌘</span> K
            </kbd>
          </button>
          <CommandMenu open={open} setOpen={setOpen} />

          {/* Divider */}
          <div className="hidden sm:block h-6 w-px bg-border/50 mx-1" />

          {/* Icons Group */}
          <div className="flex items-center gap-1">
            <Link to="https://github.com/udayahire2" target="_blank" rel="noreferrer" className="hidden sm:flex">
              <Button variant="ghost" size="icon-sm" className="h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <Github className="h-[1.1rem] w-[1.1rem]" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>

            <Link to="https://x.com/UdayAhire447195" target="_blank" rel="noreferrer" className="hidden sm:flex">
              <Button variant="ghost" size="icon-sm" className="h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <XIcon className="h-[1rem] w-[1rem] fill-current" />
                <span className="sr-only">X (Twitter)</span>
              </Button>
            </Link>

            <ModeToggle />
          </div>

          {/* Mobile Mobile Nav */}
          <div className="md:hidden flex ml-1">
            <MobileNav />
          </div>

          {/* Mobile Search Icon */}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() => setOpen(true)}
            className="h-9 w-9 rounded-lg md:hidden text-muted-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 sm:hidden"
          >
            <Search className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </motion.header>
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
      className="relative h-9 w-9 rounded-lg text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
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

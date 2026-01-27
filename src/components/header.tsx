"use client";

import "@/index.css";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { Sun, Moon, Github, Command as CommandIcon, Twitter } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Link } from "react-router-dom";
import { CommandMenu } from "@/components/command-menu";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Header() {
  const scrolled = useScroll(10);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Refs
  const dockRef = useRef<HTMLDivElement>(null);

  // Initial Entrance Animation
  useGSAP(() => {
    gsap.fromTo(
      dockRef.current,
      { y: -100, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: "elastic.out(1, 0.75)" }
    );
  }, { scope: dockRef });

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div
        ref={dockRef}
        className="pointer-events-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          layout
          initial={{ borderRadius: 24 }}
          animate={{
            width: hovered ? "auto" : "auto",
            borderRadius: 24,
            transition: { type: "spring", stiffness: 350, damping: 30 }
          }}
          className={cn(
            "relative flex items-center p-1.5 gap-2 backdrop-blur-2xl border transition-all duration-300",
            // Glassmorphism & Depth
            "bg-background/70 shadow-2xl shadow-black/5 dark:shadow-black/20",
            // Scroll reaction
            scrolled ? "border-white/10 dark:border-white/5 bg-background/80" : "border-transparent bg-background/60",
            // Ring
            "ring-1 ring-black/5 dark:ring-white/5",
            hovered ? "scale-105 bg-background/90 border-white/20" : "scale-100"
          )}
        >
          {/* Left Zone: Brand */}
          <DockBrand />

          {/* Desktop Nav Links */}
          <DockNavLinks />

          {/* Divider */}
          <div className="w-px h-4 bg-border/40 mx-1" />

          {/* Center Zone: Command Input */}
          <DockCommandTrigger onClick={() => setOpen(true)} />

          {/* Divider */}
          <div className="w-px h-4 bg-border/40 mx-1" />

          {/* Right Zone: Actions */}
          <DockActions />

        </motion.div>
      </div>

      <CommandMenu open={open} setOpen={setOpen} />
    </header>
  );
}

import { LogoIcon } from "@/components/logo";

function DockBrand() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Link
      to="/"
      className="relative flex items-center gap-2 h-10 px-3 rounded-xl hover:bg-muted/50 transition-colors group"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <div className="relative z-10 flex items-center justify-center">
        <LogoIcon className="w-7 h-7 text-primary" />
      </div>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className="overflow-hidden flex flex-col justify-center leading-none whitespace-nowrap"
          >
            <span className="font-bold text-sm tracking-tight text-foreground leading-none">
              UDX
            </span>
            <span className="text-[9px] font-semibold tracking-[0.2em] text-muted-foreground leading-none uppercase mt-0.5">
              UI Kit
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}

function DockNavLinks() {
  const links = [
    { label: "Docs", href: "/docs" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Figma", href: "/figma" },
  ];

  return (
    <nav className="hidden md:flex items-center gap-1 mx-1">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          className="relative px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground rounded-lg hover:bg-muted/50 group"
        >
          <span className="relative z-10">{link.label}</span>
        </Link>
      ))}
    </nav>
  );
}

function DockCommandTrigger({ onClick }: { onClick: () => void }) {
  const placeholders = ["Search components...", "Find documentation...", "Open settings...", "Go to roadmap..."];
  const [index, setIndex] = useState(0);

  // Rotate placeholders
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 h-10 px-4 rounded-xl hover:bg-muted/50 transition-all duration-300 group md:w-[240px] w-auto text-left relative overflow-hidden"
    >
      <CommandIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />

      <div className="flex-1 relative h-5 overflow-hidden hidden md:block">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="absolute inset-0 text-sm text-muted-foreground/80 font-medium"
          >
            {placeholders[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      <span className="md:hidden text-sm text-muted-foreground font-medium">Search</span>

      <div className="hidden md:flex items-center gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
        <kbd className="h-5 flex items-center gap-0.5 rounded border border-border bg-muted/50 px-1.5 font-mono text-[10px] text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>
    </button>
  )
}

function DockActions() {
  return (
    <div className="flex items-center gap-1">
      <Link to="https://github.com/udayahire2" target="_blank" className="hidden sm:block">
        <DockIconButton icon={Github} tooltip="GitHub" />
      </Link>
      <Link to="https://x.com/UdayAhire447195" target="_blank" className="hidden sm:block">
        <DockIconButton icon={Twitter} tooltip="Twitter" />
      </Link>
      <ModeToggle />
    </div>
  )
}

function DockIconButton({ icon: Icon, tooltip, onClick }: { icon: any, tooltip: string, onClick?: () => void }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="w-10 h-10 flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors relative group"
    >
      <Icon className="w-4 h-4" />
      <span className="sr-only">{tooltip}</span>
    </motion.button>
  )
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <DockIconButton
      icon={theme === "dark" ? Moon : Sun}
      tooltip="Toggle Theme"
      onClick={toggleTheme}
    />
  );
}

// Override ModeToggle icon to handle dynamic switching inside the button if needed, 
// for now simpler is better for the dock item stability.

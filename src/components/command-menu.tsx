"use client";

import * as React from "react";
import { Command } from "cmdk";
import {
  Search,
  FileText,
  LayoutDashboard,
  Layers,
  Figma,
  Github,
  Instagram,
  Sun,
  Moon,
  Laptop,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CommandMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen]
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[640px] gap-0 overflow-hidden p-0 shadow-2xl bg-transparent border-0 sm:rounded-2xl [&>button]:hidden">

        {/* Futuristic Glass Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex flex-col w-full h-full bg-background/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden relative"
        >
          {/* Glowing Border Gradient */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl border border-primary/20 opacity-50" />

          {/* Input Area */}
          <Command className="flex-1 [&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:mt-4 [&_[cmdk-item]]:py-3 [&_[cmdk-item]]:px-4">

            <div className="flex items-center border-b border-white/5 px-4 py-1 relative z-10">
              <Search className="mr-3 h-5 w-5 shrink-0 text-muted-foreground opacity-70" />
              <Command.Input
                className="flex h-14 w-full rounded-md bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground/60 text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Type a command or search..."
              />
              <div className="flex items-center gap-1">
                <kbd className="hidden select-none rounded border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-mono font-medium text-muted-foreground opacity-100 sm:inline-block">
                  ESC
                </kbd>
              </div>
            </div>

            <Command.List className="max-h-[350px] overflow-y-auto overflow-x-hidden p-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
              <Command.Empty className="py-12 text-center text-sm text-muted-foreground">
                <p className="text-lg font-medium text-foreground mb-1">No results found.</p>
                <p>Try searching for 'Docs' or 'Components'.</p>
              </Command.Empty>

              <Command.Group heading="Navigation">
                <CommandItem icon={FileText} label="Documentation" shortcut="D" onSelect={() => runCommand(() => navigate("/docs"))} />
                <CommandItem icon={LayoutDashboard} label="Components" shortcut="C" onSelect={() => runCommand(() => navigate("/components"))} />
                <CommandItem icon={Layers} label="HeroUI" onSelect={() => runCommand(() => navigate("/hero-ui"))} />
                <CommandItem icon={Figma} label="Figma Kit" onSelect={() => runCommand(() => navigate("/figma-ui"))} />
              </Command.Group>

              <Command.Group heading="Social">
                <CommandItem icon={Github} label="GitHub" onSelect={() => runCommand(() => window.open("https://github.com/udroid", "_blank"))} />
                <CommandItem icon={Instagram} label="Instagram" onSelect={() => runCommand(() => window.open("https://instagram.com/npm.run.uday", "_blank"))} />
              </Command.Group>

              <Command.Group heading="Appearance">
                <CommandItem icon={Sun} label="Light Mode" onSelect={() => runCommand(() => setTheme("light"))} />
                <CommandItem icon={Moon} label="Dark Mode" onSelect={() => runCommand(() => setTheme("dark"))} />
                <CommandItem icon={Laptop} label="System Theme" onSelect={() => runCommand(() => setTheme("system"))} />
              </Command.Group>

            </Command.List>
          </Command>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

function CommandItem({
  icon: Icon,
  label,
  shortcut,
  onSelect
}: {
  icon: React.ElementType,
  label: string,
  shortcut?: string,
  onSelect: () => void
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className={cn(
        "group flex cursor-pointer select-none items-center rounded-lg px-4 py-3 text-sm text-muted-foreground outline-none aria-selected:bg-primary/10 aria-selected:text-primary transition-all duration-200 relative overflow-hidden",
      )}
    >
      {/* Active State Indicator (Left Border) */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary opacity-0 group-aria-selected:opacity-100 transition-opacity" />

      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/5 mr-3 group-aria-selected:border-primary/20 group-aria-selected:bg-primary/10 transition-colors">
        <Icon className="h-4 w-4 group-aria-selected:text-primary" />
      </div>

      <span className="flex-1 font-medium tracking-wide">{label}</span>

      {shortcut && (
        <span className="hidden sm:inline-block text-[10px] font-mono text-muted-foreground/50 border border-white/5 bg-white/5 px-1.5 py-0.5 rounded mr-2">
          {shortcut}
        </span>
      )}

      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-aria-selected:opacity-100 group-aria-selected:translate-x-0 text-primary" />
    </Command.Item>
  );
}

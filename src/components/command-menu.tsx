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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

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
      <DialogContent className="max-w-[640px] gap-0 overflow-hidden p-0 shadow-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-3xl rounded-2xl [&>button]:hidden ring-1 ring-white/5">
        <Command className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground/50 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:mt-4">

          {/* Custom Input Container */}
          <div className="relative border-b border-white/5 px-4 py-4 flex items-center gap-3 bg-white/[0.01]">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/40 pointer-events-none group-focus-within:text-white/80 transition-colors duration-300" />
              <Command.Input
                className="flex h-12 w-full rounded-xl border border-white/5 bg-black/20 py-3 pl-11 pr-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/30 focus:bg-black/40 focus:border-white/10 transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-50 settings-input-shadow"
                placeholder="Search documentation..."
              />
            </div>
            <div className="flex items-center gap-2">
              <kbd className="hidden h-7 select-none items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2.5 font-mono text-[10px] font-medium text-muted-foreground/60 opacity-100 sm:flex">
                <span className="text-xs">ESC</span>
              </kbd>
            </div>
          </div>

          <Command.List className="max-h-[380px] overflow-y-auto overflow-x-hidden p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Command.Empty className="py-12 text-center text-sm text-muted-foreground/50">No results found.</Command.Empty>

            <Command.Group heading="Links">
              <CommandItem icon={FileText} label="Docs" onSelect={() => runCommand(() => navigate("/docs"))} />
              <CommandItem icon={LayoutDashboard} label="Components" onSelect={() => runCommand(() => navigate("/components"))} />
              <CommandItem icon={Layers} label="HeroUI" onSelect={() => runCommand(() => navigate("/hero-ui"))} />
              <CommandItem icon={Figma} label="Figma UI" onSelect={() => runCommand(() => navigate("/figma-ui"))} />
            </Command.Group>

            <Command.Group heading="Social">
              <CommandItem icon={Github} label="GitHub" onSelect={() => runCommand(() => window.open("https://github.com/udroid", "_blank"))} />
              <CommandItem icon={Instagram} label="Instagram" onSelect={() => runCommand(() => window.open("https://instagram.com/npm.run.uday", "_blank"))} />
            </Command.Group>

            <Command.Group heading="Theme">
              <CommandItem icon={Sun} label="Light" onSelect={() => runCommand(() => setTheme("light"))} />
              <CommandItem icon={Moon} label="Dark" onSelect={() => runCommand(() => setTheme("dark"))} />
              <CommandItem icon={Laptop} label="System" onSelect={() => runCommand(() => setTheme("system"))} />
            </Command.Group>

          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function CommandItem({
  icon: Icon,
  label,
  onSelect
}: {
  icon: React.ElementType,
  label: string,
  onSelect: () => void
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className={cn(
        "group relative flex cursor-pointer select-none items-center rounded-lg px-3 py-3 text-sm outline-none transition-all duration-200 ease-out",
        "text-muted-foreground/80 hover:text-foreground",
        "data-[selected=true]:bg-white/[0.08] data-[selected=true]:text-white data-[selected=true]:shadow-sm",
        "active:scale-[0.98] active:bg-white/[0.12]"
      )}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-transparent bg-white/[0.02] mr-3 transition-colors group-data-[selected=true]:border-white/10 group-data-[selected=true]:bg-white/10">
        <Icon className="h-4 w-4 text-muted-foreground transition-colors group-data-[selected=true]:text-white" />
      </div>
      <span className="font-medium tracking-tight flex-1">{label}</span>

      {/* Subtle chevron or indicator could go here if needed, but keeping it minimal */}
      <span className="opacity-0 group-data-[selected=true]:opacity-100 transition-opacity text-white/20 text-xs tracking-widest uppercase font-mono mr-1">
        Go
      </span>
    </Command.Item>
  );
}

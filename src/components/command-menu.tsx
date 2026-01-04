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
      <DialogContent className="max-w-[640px] overflow-hidden p-0 shadow-2xl border border-white/10 bg-black/40 backdrop-blur-3xl rounded-xl [&>button]:hidden">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-muted-foreground/70 [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:mt-4 [&_[cmdk-group-heading]]:ml-3 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-3 [&_[cmdk-item]]:py-3 [&_[cmdk-item]]:h-[48px] [&_[cmdk-item]]:rounded-lg [&_[cmdk-item]]:transition-all [&_[cmdk-item]]:duration-200 [&_[cmdk-item]]:cursor-default [&_[cmdk-item]]:aria-selected:bg-white/10 [&_[cmdk-item]]:aria-selected:text-white [&_[cmdk-item]]:text-muted-foreground">

          {/* Custom Input Container */}
          <div className="relative border-b border-white/10 p-4 flex items-center gap-3">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50 pointer-events-none" />
              <Command.Input
                className="flex h-14 w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-12 pr-4 text-base text-white outline-none placeholder:text-white/40 focus:bg-white/10 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Search documentation..."
              />
            </div>
            <div className="flex items-center gap-2">
              <kbd className="hidden h-7 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-2 font-mono text-[10px] font-medium text-white/50 opacity-100 sm:flex">
                <span className="text-xs">ESC</span>
              </kbd>
            </div>
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">No results found.</Command.Empty>

            <Command.Group heading="Links">
              <CommandItem icon={FileText} label="Docs" onSelect={() => runCommand(() => navigate("/docs"))} />
              <CommandItem icon={LayoutDashboard} label="Components" onSelect={() => runCommand(() => navigate("/components"))} />
              <CommandItem icon={Layers} label="HeroUI" onSelect={() => runCommand(() => navigate("/hero-ui"))} />
              <CommandItem icon={Figma} label="Figma UI" onSelect={() => runCommand(() => navigate("/figma-ui"))} />
            </Command.Group>

            <Command.Group heading="Social">
              <CommandItem icon={Github} label="GitHub" onSelect={() => runCommand(() => window.open("https://github.com/udroid", "_blank"))} />
              <CommandItem icon={Instagram} label="Instagram @npm.run.uday" onSelect={() => runCommand(() => window.open("https://instagram.com/npm.run.uday", "_blank"))} />
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
        "group relative flex cursor-default select-none items-center rounded-lg px-3 py-2.5 text-sm outline-none",
        "data-[selected=true]:bg-[#1E293B] data-[selected=true]:text-white",
        "hover:bg-[#1A1A1A] active:bg-[#222222]",
        // Focus ring for keyboard accessibility
        "data-[selected=true]:ring-2 data-[selected=true]:ring-blue-500 data-[selected=true]:ring-offset-[-2px]"
      )}
    >
      <div className="flex h-8 w-8 items-center justify-center">
        <Icon className="h-[18px] w-[18px] text-[#9CA3AF] transition-colors group-data-[selected=true]:text-[#E5E7EB]" />
      </div>
      <span className="font-medium">{label}</span>
    </Command.Item>
  );
}

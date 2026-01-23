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
      <DialogContent className="max-w-[640px] gap-0 overflow-hidden p-0 shadow-2xl border border-zinc-800 bg-[#09090b] sm:rounded-xl [&>button]:hidden">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:mt-4">

          <div className="flex items-center border-b border-zinc-800 px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 text-zinc-500 opacity-50" />
            <Command.Input
              className="flex h-14 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-zinc-500 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Search documentation..."
            />
            <div className="flex items-center gap-1">
              <span className="hidden select-none rounded border border-zinc-700 bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-400 opacity-100 sm:inline-block">
                ESC
              </span>
            </div>
          </div>

          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden py-2 px-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Command.Empty className="py-6 text-center text-sm text-zinc-500">No results found.</Command.Empty>

            <Command.Group heading="Links">
              <CommandItem icon={FileText} label="Docs" onSelect={() => runCommand(() => navigate("/docs-working"))} />
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
        "group flex cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm text-zinc-400 outline-none hover:bg-zinc-800/50 hover:text-white data-[selected=true]:bg-zinc-800/50 data-[selected=true]:text-white transition-colors",
      )}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-800 bg-zinc-900 mr-2 group-hover:border-zinc-700 transition-colors">
        <Icon className="h-4 w-4" />
      </div>
      <span className="flex-1">{label}</span>
      <span className="hidden text-xs text-zinc-600 group-hover:text-zinc-500 group-data-[selected=true]:inline-block uppercase tracking-wider font-medium">
        Go
      </span>
    </Command.Item>
  );
}

"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/components/theme-provider";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, [setOpen]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="overflow-hidden p-0 shadow-2xl">
                <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
                    <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                        <Command.Input
                            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Type a command or search..."
                        />
                    </div>
                    <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden">
                        <Command.Empty>No results found.</Command.Empty>
                        <Command.Group heading="Links">
                            <Command.Item
                                onSelect={() => runCommand(() => navigate("/docs"))}
                                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <span>Docs</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => navigate("/components"))}
                                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <span>Components</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => navigate("/hero-ui"))}
                                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <span>HeroUI</span>
                            </Command.Item>
                        </Command.Group>
                        <Command.Group heading="Social">
                            <Command.Item
                                onSelect={() => runCommand(() => window.open("https://github.com/udroid", "_blank"))}
                                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <span>GitHub</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => window.open("https://twitter.com/mannupaaji", "_blank"))}
                                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <span>Instagram @npm.run.uday</span>
                            </Command.Item>
                        </Command.Group>
                        <Command.Group heading="Theme">
                            <Command.Item
                                onSelect={() => runCommand(() => setTheme("light"))}
                                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <span>Light</span>
                            </Command.Item>
                            <Command.Item
                                onSelect={() => runCommand(() => setTheme("dark"))}
                                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            >
                                <span>Dark</span>
                            </Command.Item>
                        </Command.Group>
                    </Command.List>
                </Command>
            </DialogContent>
        </Dialog>
    );
}

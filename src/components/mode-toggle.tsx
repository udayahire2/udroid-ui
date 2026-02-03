"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ModeToggleProps {
    className?: string;
}

export function ModeToggle({ className }: ModeToggleProps) {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className={cn(
                "w-10 h-10 flex items-center justify-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors relative group",
                className
            )}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme === "dark" ? "dark" : "light"}
                    initial={{ y: 10, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -10, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2, ease: "circOut" }}
                >
                    {theme === "dark" ? (
                        <Moon className="w-4 h-4" />
                    ) : (
                        <Sun className="w-4 h-4" />
                    )}
                </motion.div>
            </AnimatePresence>
            <span className="sr-only">Toggle Theme</span>
        </motion.button>
    );
}

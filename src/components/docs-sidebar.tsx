"use client"

import * as React from "react"
import { useLocation, Link } from "react-router-dom"
import { docsConfig } from "@/config/docs"
import { ChevronDown, ChevronRight, Search, Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarHeader,
    SidebarFooter,
} from "@/components/ui/sidebar"
import { LogoIcon } from "@/components/logo"


export function DocsSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const location = useLocation()
    const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
        "Main": true,
        "Components": true,
        "Getting Started": true
    })

    const toggleSection = (title: string) => {
        setOpenSections(prev => ({ ...prev, [title]: !prev[title] }))
    }

    return (
        <Sidebar className="border-r border-white/5 bg-black" {...props}>
            <SidebarHeader className="h-16 px-4 flex flex-row items-center justify-between border-b border-white/5">
                <Link to="/" className="flex items-center gap-2.5 group/logo">
                    <LogoIcon className="w-7 h-7 text-white transition-opacity group-hover/logo:opacity-80" />
                    <div className="flex flex-col gap-px -mt-0.5">
                        <span className="font-bold text-base tracking-tight text-white leading-none">
                            UDX
                        </span>
                        <span className="text-[9px] font-semibold tracking-[0.2em] text-zinc-500 leading-none uppercase">
                            UI Kit
                        </span>
                    </div>
                </Link>

                <button
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-zinc-900/50 border border-white/5 hover:bg-zinc-800 transition-colors group"
                    onClick={() => {/* Trigger Search Command Menu */ }}
                >
                    <Search className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300" />
                    <span className="text-[10px] font-bold text-zinc-600 group-hover:text-zinc-400 bg-zinc-950 px-1 py-0.5 rounded border border-white/5">⌘K</span>
                </button>
            </SidebarHeader>

            <SidebarContent className="px-2 pt-4 custom-scrollbar">
                {docsConfig.sidebarNav.map((section) => {
                    const isOpen = openSections[section.title] !== false
                    return (
                        <SidebarGroup key={section.title} className="py-1">
                            <SidebarGroupLabel
                                onClick={() => toggleSection(section.title)}
                                className="px-2 text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1 flex items-center justify-between cursor-pointer hover:text-zinc-400 transition-colors group/label"
                            >
                                {section.title}
                                {isOpen ? (
                                    <ChevronDown className="w-3 h-3 text-zinc-800 group-hover/label:text-zinc-500 transition-colors" />
                                ) : (
                                    <ChevronRight className="w-3 h-3 text-zinc-800 group-hover/label:text-zinc-500 transition-colors" />
                                )}
                            </SidebarGroupLabel>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <SidebarGroupContent>
                                            <SidebarMenu>
                                                {section.items.map((item) => {
                                                    const isActive = location.pathname === item.href
                                                    const count = Math.floor(Math.random() * 40) + 5

                                                    return (
                                                        <SidebarMenuItem key={item.href}>
                                                            <SidebarMenuButton
                                                                asChild
                                                                isActive={isActive}
                                                                className={cn(
                                                                    "h-8 px-2 gap-3 transition-all duration-200 rounded-lg group/item relative overflow-hidden",
                                                                    isActive
                                                                        ? "bg-zinc-800/80 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                                                                        : "text-zinc-500 hover:text-zinc-200 hover:bg-zinc-900/50"
                                                                )}
                                                            >
                                                                <Link to={item.href} className="flex items-center w-full">
                                                                    {/* Active Indicator Accent */}
                                                                    {isActive && (
                                                                        <motion.div
                                                                            layoutId="active-nav-indicator"
                                                                            className="absolute left-0 w-1 h-4 bg-white rounded-r-full"
                                                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                                                        />
                                                                    )}

                                                                    <span className="flex-1 text-[13px] font-medium tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                                                                        {item.title}
                                                                    </span>
                                                                    {section.title === "Components" && item.title !== "Overview" && (
                                                                        <span className={cn(
                                                                            "text-[10px] font-bold tabular-nums min-w-6 text-right transition-colors",
                                                                            isActive ? "text-white/60" : "text-zinc-700"
                                                                        )}>
                                                                            {count}
                                                                        </span>
                                                                    )}
                                                                </Link>
                                                            </SidebarMenuButton>
                                                        </SidebarMenuItem>
                                                    )
                                                })}
                                            </SidebarMenu>
                                        </SidebarGroupContent>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </SidebarGroup>
                    )
                })}
            </SidebarContent>

            <SidebarFooter className="p-4 border-t border-white/5 flex flex-row items-center justify-end">
                <ThemeToggle />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

function ThemeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">("dark")

    React.useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")
        root.classList.add(theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    return (
        <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer hover:bg-zinc-900 transition-all"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="w-4 h-4" />
            ) : (
                <Moon className="w-4 h-4" />
            )}
        </button>
    )
}

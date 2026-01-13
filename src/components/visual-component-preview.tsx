import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";
import { Switch } from "@/components/switch/switch";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/tooltip/tooltip";
import { Avatar, AvatarFallback, AvatarImage, AvatarGroup } from "@/components/avatar/avatar";
import avatar1 from '../assets/profile.png'
import avatar2 from '../assets/profile2.png'
import Avatar1 from '../assets/avatar1.png'
import Avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'
export function VisualComponentPreview() {
    return (
        <div className="relative w-full py-24 px-4 overflow-hidden">


            <div className="max-w-7xl mx-auto relative z-10 space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-white/60">
                        Production Ready.
                    </h2>
                    <p className="text-zinc-500 dark:text-muted-foreground text-lg max-w-2xl mx-auto">
                        A suite of polished components, ready to drop into your next project.
                    </p>
                </div>

                {/* Library Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Button */}
                    <LibraryCard title="Button" className="library-item md:col-span-2">
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            <Button>Default</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                        </div>
                    </LibraryCard>

                    {/* Inputs */}
                    <LibraryCard title="Input" className="library-item">
                        <div className="w-full max-w-xs space-y-4">
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input type="email" placeholder="example@udroid.com" />
                            </div>
                            <div className="space-y-2">
                                <Label>Password</Label>
                                <Input type="password" value="Password123" readOnly />
                            </div>
                        </div>
                    </LibraryCard>

                    {/* Switch */}
                    <LibraryCard title="Switch" className="library-item">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                                <Switch id="airplane-mode" />
                                <Label htmlFor="airplane-mode">Airplane Mode</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Switch id="wifi" defaultChecked />
                                <Label htmlFor="wifi">Wi-Fi</Label>
                            </div>
                        </div>
                    </LibraryCard>

                    {/* Tooltips */}
                    <LibraryCard title="Tooltip" className="library-item">
                        <TooltipProvider>
                            <div className="flex gap-4">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon-md">
                                            <span className="text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"/></svg></span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Add to library</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="secondary">Hover kar</Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <p>Bottom tooltip</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                    </LibraryCard>

                    {/* Avatar */}
                    <LibraryCard title="Avatar" className="library-item">
                        <div className="flex flex-col gap-6 items-center">
                            <div className="flex gap-4 items-center">
                                <Avatar>
                                    <AvatarImage src={avatar1} alt="kaise hai" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src={avatar2} alt="@udayahire2" />
                                    <AvatarFallback>UH</AvatarFallback>
                                </Avatar>
                            </div>
                            <AvatarGroup>
                                <Avatar>
                                    <AvatarImage src={Avatar3} alt="kalu jitesh" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src={Avatar2} alt="@udayahire2" />
                                    <AvatarFallback>UH</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src={Avatar4} alt="@udayahire2" />
                                    <AvatarFallback>+3</AvatarFallback>
                                </Avatar>
                            </AvatarGroup>
                        </div>
                    </LibraryCard>
                </div>
            </div>
        </div>
    );
}

function LibraryCard({ children, title, className }: { children: React.ReactNode, title: string, className?: string }) {
    return (
        <div className={cn(
            "relative flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300",
            className
        )}>
            <div className="border-b border-zinc-100 dark:border-zinc-800/50 bg-zinc-50/50 dark:bg-white/[0.02] px-4 py-3">
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{title}</span>
            </div>
            <div className="flex flex-col items-center justify-center p-6 md:p-10 min-h-[200px] bg-dots">
                {children}
            </div>
        </div>
    )
}

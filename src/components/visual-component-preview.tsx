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
import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import Avatar3 from '../assets/avatar3.png'
import Avatar4 from '../assets/avatar4.png'

export function VisualComponentPreview() {
    return (
        <div className="relative w-full py-24 sm:py-32 px-4 overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto relative z-10 space-y-24">
                <div className="text-center space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                        Production Ready.
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                        A suite of polished, accessible components. Use them as building blocks for your next big idea.
                    </p>
                </div>

                {/* Library Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

                    {/* Button */}
                    <LibraryCard title="Buttons" className="md:col-span-2">
                        <div className="flex flex-wrap gap-4 items-center justify-center">
                            <Button>Default</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                        </div>
                    </LibraryCard>

                    {/* Inputs */}
                    <LibraryCard title="Input">
                        <div className="w-full max-w-[280px] space-y-5">
                            <div className="space-y-2">
                                <Label className="text-xs uppercase tracking-wide text-muted-foreground">Email</Label>
                                <Input type="email" placeholder="example@udroid.com" />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-xs uppercase tracking-wide text-muted-foreground">Password</Label>
                                <Input type="password" value="Password123" readOnly />
                            </div>
                        </div>
                    </LibraryCard>

                    {/* Switch */}
                    <LibraryCard title="Switch">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between w-[200px]">
                                <Label htmlFor="airplane-mode" className="text-muted-foreground font-medium">Airplane Mode</Label>
                                <Switch id="airplane-mode" />
                            </div>
                            <div className="flex items-center justify-between w-[200px]">
                                <Label htmlFor="wifi" className="text-muted-foreground font-medium">Wi-Fi</Label>
                                <Switch id="wifi" defaultChecked />
                            </div>
                        </div>
                    </LibraryCard>

                    {/* Tooltips */}
                    <LibraryCard title="Tooltip">
                        <TooltipProvider>
                            <div className="flex gap-4">
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon-md">
                                            <span className="text-lg">+</span>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Add to library</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="secondary">Hover me</Button>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <p>Bottom tooltip</p>
                                    </TooltipContent>
                                </Tooltip>
                            </div>
                        </TooltipProvider>
                    </LibraryCard>

                    {/* Avatar */}
                    <LibraryCard title="Avatar">
                        <div className="flex flex-col gap-8 items-center">
                            <div className="flex gap-4 items-center">
                                <Avatar>
                                    <AvatarImage src={avatar1} alt="Avatar 1" />
                                    <AvatarFallback>U1</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src={avatar2} alt="Avatar 2" />
                                    <AvatarFallback>U2</AvatarFallback>
                                </Avatar>
                            </div>
                            <AvatarGroup>
                                <Avatar>
                                    <AvatarImage src={Avatar3} alt="Avatar 3" />
                                    <AvatarFallback>U3</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src={avatar2} alt="Avatar 2" />
                                    <AvatarFallback>U2</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src={Avatar4} alt="Avatar 4" />
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
            "group relative flex flex-col gap-4",
            className
        )}>
            {/* Subtle Header */}
            <div className="flex items-center gap-2 mb-2">
                <span className="h-px flex-1 bg-border/40 group-hover:bg-border/60 transition-colors" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{title}</span>
                <span className="h-px flex-1 bg-border/40 group-hover:bg-border/60 transition-colors" />
            </div>

            {/* Content Area - Clean, no heavy borders */}
            <div className="flex flex-col items-center justify-center p-8 md:p-12 rounded-2xl bg-muted/20 border border-border/20 group-hover:border-border/40 transition-all duration-300 min-h-[220px]">
                {children}
            </div>
        </div>
    )
}

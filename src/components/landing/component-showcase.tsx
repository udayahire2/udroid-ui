import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/button/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";


const categories = ["Forms", "Feedback", "Data Display", "Overlay"];

export function ComponentShowcase() {
    const [activeCategory, setActiveCategory] = useState("Forms");

    return (
        <section className="py-24 bg-muted/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-4">Component Depth</h2>
                        <p className="text-muted-foreground max-w-xl text-lg">
                            Production-grade components with built-in states, validations, and animations.
                        </p>
                    </div>

                    <div className="flex overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                        <nav className="flex space-x-1 p-1 bg-muted/50 rounded-xl">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === cat
                                        ? "bg-background shadow-sm text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="min-h-[400px] rounded-3xl border border-border/50 bg-background overflow-hidden relative">
                    <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none" />

                    <div className="p-8 lg:p-12 relative z-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-3xl mx-auto"
                            >
                                {activeCategory === "Forms" && <FormsShowcase />}
                                {activeCategory === "Feedback" && <FeedbackShowcase />}
                                {activeCategory === "Data Display" && <DataDisplayShowcase />}
                                {activeCategory === "Overlay" && <OverlayShowcase />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FormsShowcase() {
    return (
        <div className="w-full max-w-md mx-auto relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
            <Card className="relative border-border/50 bg-background/80 backdrop-blur-xl shadow-2xl">
                <CardHeader className="space-y-1 pb-6">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Edit Profile</CardTitle>
                        <div className="px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
                            Public
                        </div>
                    </div>
                    <CardDescription>Manage your public profile information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">First Name</Label>
                            <Input defaultValue="Tyler" className="bg-muted/30 border-white/5 focus-visible:ring-primary/50" />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Last Name</Label>
                            <Input defaultValue="Durden" className="bg-muted/30 border-white/5 focus-visible:ring-primary/50" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Email Address</Label>
                        <div className="relative">
                            <Input defaultValue="tyler@projectmayhem.org" className="bg-muted/30 border-white/5 pl-9 focus-visible:ring-primary/50" />
                            <div className="absolute left-3 top-2.5 text-muted-foreground">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between border-t border-border/40 mt-4">
                        <div className="space-y-0.5">
                            <Label className="text-sm">Two-Factor Auth</Label>
                            <p className="text-xs text-muted-foreground">Secure your account</p>
                        </div>
                        <Switch id="2fa" />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg shadow-primary/20 transition-all duration-300">
                        Save Changes
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

function FeedbackShowcase() {
    return (
        <div className="grid gap-4 w-full max-w-md mx-auto">
            {/* Success Toast */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-md flex items-center justify-between shadow-lg shadow-emerald-500/5"
            >
                <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 ring-1 ring-emerald-500/30">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm text-foreground">Project Deployed</h4>
                        <p className="text-xs text-muted-foreground">Your changes are live worldwide.</p>
                    </div>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-emerald-500/10 text-emerald-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </Button>
            </motion.div>

            {/* Error State */}
            <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 backdrop-blur-md flex items-center gap-4">
                <div className="h-8 w-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold text-sm">Build Failed</h4>
                    <p className="text-xs text-muted-foreground">Error compiling /src/app.tsx</p>
                </div>
                <Button variant="destructive" size="sm" className="h-7 text-xs px-3 shadow-lg shadow-red-500/20">Retry</Button>
            </div>

            {/* Upload Area */}
            <div className="group relative border-2 border-dashed border-border hover:border-primary/50 rounded-xl p-8 transition-colors bg-muted/5 hover:bg-muted/10 cursor-pointer text-center">
                <div className="mx-auto w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 mb-3">
                    <svg className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                </div>
                <h4 className="font-medium text-sm">Upload Assets</h4>
                <p className="text-xs text-muted-foreground mt-1">PNG, JPG, or SVG up to 10MB</p>
            </div>
        </div>
    )
}

function DataDisplayShowcase() {
    return (
        <Card className="w-full max-w-md mx-auto overflow-hidden border-border/50 bg-background/80 backdrop-blur-xl">
            <div className="p-4 border-b border-border/40 flex items-center justify-between">
                <div>
                    <h3 className="font-semibold">Recent Activity</h3>
                    <p className="text-xs text-muted-foreground">Real-time revenue updates</p>
                </div>
                <Button variant="outline" size="sm" className="h-7 text-xs">View All</Button>
            </div>
            <div className="divide-y divide-border/40">
                {[
                    { name: "Stripe", status: "Success", amount: "+$1,250.00", time: "Just now", color: "text-emerald-500" },
                    { name: "Server Cost", status: "Pending", amount: "-$85.00", time: "2m ago", color: "text-orange-500" },
                    { name: "Subscription", status: "Failed", amount: "$49.00", time: "1h ago", color: "text-red-500" },
                ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors group cursor-pointer">
                        <div className="flex items-center gap-3">
                            <div className={`h-9 w-9 rounded-full flex items-center justify-center ${i === 0 ? 'bg-indigo-500/10 text-indigo-500' : i === 1 ? 'bg-zinc-500/10 text-zinc-500' : 'bg-blue-500/10 text-blue-500'}`}>
                                <span className="font-bold text-xs">{item.name[0]}</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium leading-none group-hover:text-primary transition-colors">{item.name}</p>
                                <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className={`text-sm font-mono font-medium ${item.color.includes('emerald') ? 'text-emerald-500' : 'text-foreground'}`}>{item.amount}</p>
                            <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${i === 0 ? 'bg-emerald-500/10 text-emerald-500' : i === 1 ? 'bg-orange-500/10 text-orange-500' : 'bg-red-500/10 text-red-500'}`}>
                                {item.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-3 bg-muted/20 text-center">
                <p className="text-xs text-muted-foreground">Updated automatically every 30s</p>
            </div>
        </Card>
    )
}

function OverlayShowcase() {
    return (
        <div className="flex items-center justify-center h-[350px] relative">
            {/* Backdrop Simulation */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] rounded-2xl" />

            <Card className="w-[380px] shadow-2xl relative z-10 border-border/50 bg-background/90 backdrop-blur-xl scale-110 ring-1 ring-white/10">
                <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-full bg-red-500/10 text-red-500">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                        </div>
                        <CardTitle className="text-lg">Delete Project?</CardTitle>
                    </div>
                    <CardDescription>
                        This project will be permanently deleted along with all of its deployment history.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-red-500/5 border border-red-500/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm mb-6 flex gap-2 items-start">
                        <span className="font-bold text-xs mt-0.5">WARNING:</span>
                        This action cannot be undone.
                    </div>
                    <div className="flex gap-3 justify-end">
                        <Button variant="ghost">Cancel</Button>
                        <Button variant="destructive" className="bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/20">
                            Delete Project
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

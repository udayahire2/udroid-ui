import { Button } from "@/components/button/button";
import { Check, Copy, Github, Terminal } from "lucide-react";
import { useState } from "react";

import { motion } from "framer-motion";

interface ComponentPageHeaderProps {
    title: string;
    description: string;
    install: string;
}

export function ComponentPageHeader({ title, description, install }: ComponentPageHeaderProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(install);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="space-y-8 mb-12">
            {/* Title & Desc */}
            <div className="space-y-4">
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent"
                >
                    {title}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                >
                    {description}
                </motion.p>
            </div>

            {/* Actions Bar */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
                {/* Install Block */}
                <div
                    onClick={handleCopy}
                    className="group relative flex items-center gap-3 px-4 py-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 cursor-pointer transition-all hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700"
                >
                    <Terminal className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    <code className="text-sm font-mono text-foreground/80 group-hover:text-foreground transition-colors">
                        {install}
                    </code>
                    <div className="ml-2 pl-2 border-l border-zinc-300 dark:border-zinc-700">
                        {copied ? (
                            <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                            <Copy className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" />
                        )}
                    </div>
                </div>

                {/* Secondary Actions */}
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2 rounded-lg" asChild>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <Github className="w-4 h-4" />
                            View Source
                        </a>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}

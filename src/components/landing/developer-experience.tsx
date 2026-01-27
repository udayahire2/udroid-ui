import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy } from "lucide-react";

const codeSnippets = {
    react: `import { Button } from "@udx/ui";

export default function App() {
  return (
    <Button 
      variant="primary" 
      size="lg" 
      onClick={() => console.log("Clicked")}
    >
      Click me
    </Button>
  );
}`,
    next: `import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Button>Save Changes</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
  );
}`
};

export function DeveloperExperience() {
    const [framework, setFramework] = useState<"react" | "next">("react");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(codeSnippets[framework]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Content */}
                <div>
                    <h2 className="text-3xl font-bold tracking-tight mb-6">Developer First API</h2>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        Fully typed, accessible, and composable. Use standard React props and Tailwind utility classes for overrides.
                    </p>

                    <div className="space-y-4">
                        <FeatureItem title="Type-Safe" description="Full TypeScript support with exported types." />
                        <FeatureItem title="Headless Core" description="Powered by Radix UI primitives for reliable accessibility." />
                        <FeatureItem title="Zero Runtime" description="Styles are compiled at build time via Tailwind." />
                    </div>
                </div>

                {/* Right: Code Block */}
                <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-zinc-950 shadow-2xl">
                    {/* Window Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="flex bg-black/50 rounded-lg p-0.5">
                            <button
                                onClick={() => setFramework("react")}
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${framework === "react" ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                            >
                                React
                            </button>
                            <button
                                onClick={() => setFramework("next")}
                                className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${framework === "next" ? "bg-zinc-800 text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                            >
                                Next.js
                            </button>
                        </div>
                    </div>

                    {/* Code Content */}
                    <div className="p-6 overflow-x-auto relative group">
                        <button
                            onClick={handleCopy}
                            className="absolute top-4 right-4 p-2 rounded-md bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                        </button>

                        <pre className="font-mono text-sm leading-relaxed">
                            <code className="block text-zinc-300">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={framework}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        dangerouslySetInnerHTML={{
                                            __html: highlightCode(codeSnippets[framework])
                                        }}
                                    />
                                </AnimatePresence>
                            </code>
                        </pre>
                    </div>
                </div>

            </div>
        </section>
    );
}

function FeatureItem({ title, description }: { title: string, description: string }) {
    return (
        <div className="flex gap-3">
            <div className="flex-none mt-1">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                </div>
            </div>
            <div>
                <h4 className="font-medium text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
        </div>
    )
}

// Simple syntax highlighting simulation for speed
function highlightCode(code: string) {
    return code
        .replace(/import|from|export|default|function|return|const/g, '<span class="text-purple-400">$&</span>')
        .replace(/Button|div|span/g, '<span class="text-yellow-300">$&</span>')
        .replace(/"[^"]*"/g, '<span class="text-green-400">$&</span>');
}

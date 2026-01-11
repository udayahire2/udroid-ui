"use client";

import { CodeBlock } from "@/components/shikiEditor/code-block";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/button/button";
import { GridPattern } from "./ui/grid-pattern";
import { useState } from "react";
import { cn } from "@/lib/utils";

const componentsJsonCode = `{
  "registries": {
    "@udroid": "https://udroid.com/r/{name}.json"
  }
}`;

const installBlockCode = `
$ pnpm dlx shadcn add @udroid/hero-ui
`;

const mcpInitCode = `
$ pnpm dlx shadcn mcp init
`;

function CodeSnippet({ code, language, fileName, className }: { code: string; language: string, fileName?: string, className?: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={cn("relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm", className)}>
            {fileName ? (
                <div className="flex justify-between items-center border-b px-4 py-2 bg-muted/40">
                    <span className="text-xs font-medium text-muted-foreground">{fileName}</span>
                    <Button variant="ghost" size="icon-md" className="h-6 w-6 text-muted-foreground hover:text-foreground" onClick={handleCopy}>
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                </div>
            ) : (
                <div className="absolute right-2 top-2 z-10">
                    <Button variant="ghost" size="icon-md" className="h-6 w-6 text-muted-foreground hover:text-foreground bg-muted/10 hover:bg-muted/20 backdrop-blur-sm" onClick={handleCopy}>
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                </div>
            )}
            <div className="bg-[#0d1117] p-4 font-mono text-sm overflow-x-auto">
                <CodeBlock code={code} language={language} theme="github-dark" />
            </div>
        </div>
    );
}

export function DocsPage() {
    return (
        <div className="relative min-h-screen w-full bg-background text-foreground animate-in fade-in zoom-in-95 duration-500 overflow-hidden">
            <GridPattern
                width={50}
                height={50}
                x={-1}
                y={-1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-50",
                )}
            />
            <div className="container relative mx-auto max-w-4xl px-4 py-12 md:py-20 lg:py-24">
                {/* Page Title */}
                <div className="mb-12 space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Documentation
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        All documentation for UDROID will be documented in this page.
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Section: Setup UDROID Registry */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Setup UDROID Registry
                        </h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Add the UDROID registry namespace to your{" "}
                            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                                components.json
                            </code>
                            . Learn more about registry config from{" "}
                            <a
                                href="#"
                                className="font-medium underline underline-offset-4 hover:text-foreground inline-flex items-center gap-1"
                            >
                                shadcn registry docs <ArrowUpRight className="h-3 w-3" />
                            </a>
                        </p>

                        <div className="space-y-4">
                            <CodeSnippet code={componentsJsonCode} language="json" fileName="components.json" />
                        </div>
                    </section>

                    {/* Section: Usage */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">Usage</h2>
                        <p className="text-muted-foreground">
                            Install blocks via the shadcn CLI using the{" "}
                            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                                @udroid/&#123;name&#125;
                            </code>{" "}
                            syntax.
                        </p>

                        <CodeSnippet code={installBlockCode} language="bash" />

                        <p className="text-sm text-muted-foreground">
                            you can copy the cli command from each block on its category page.
                        </p>
                    </section>

                    {/* Section: Configure MCP */}
                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold tracking-tight">Configure MCP</h2>
                        <p className="text-muted-foreground">
                            Run the following command to configure the mcp server:
                        </p>

                        <CodeSnippet code={mcpInitCode} language="bash" />

                        <p className="text-sm text-muted-foreground">
                            you can copy the cli command from each block on its category page.
                        </p>
                    </section>

                    {/* Section: Need help? */}
                    <section className="space-y-4 border-t pt-8">
                        <h2 className="text-xl font-bold tracking-tight">Need help?</h2>
                        <p className="text-muted-foreground">
                            If you have any questions, suggestions, or issues, please don't hesitate to reach out on{" "}
                            <a
                                href="#"
                                className="font-medium underline underline-offset-4 hover:text-foreground inline-flex items-center gap-1"
                            >
                                X (Twitter) <ArrowUpRight className="h-3 w-3" />
                            </a>{" "}
                            or{" "}
                            <a
                                href="mailto:help@efferd.com"
                                className="font-medium underline underline-offset-4 hover:text-foreground"
                            >
                                Email
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

import { CodeBlock } from "./shikiEditor/code-block";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const exampleCode = `import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <div className="flex gap-4">
      <Button>Primary Button</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}

`;

export function DeveloperFirstSection() {
    return (
        <section className="relative w-full py-24 bg-background overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left Side: Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="inline-block text-sm font-medium text-primary tracking-wider uppercase">
                                Developer-first UI Library
                            </span>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                                Build UI faster with ready-to-use components
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                                UDROID is a lightweight React UI library built for real products.
                                No bloat, no unnecessary abstraction — just clean, accessible components
                                you can copy, customize, and ship.
                            </p>
                        </div>

                        <ul className="space-y-3">
                            {[
                                "Copy-paste friendly components",
                                "Accessible by default",
                                "Works with Tailwind and modern React"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground/80">
                                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary">
                                        <Check className="w-3 h-3" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="pt-2">
                            <Link
                                to="/docs/components/button"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium transition-transform hover:translate-x-1"
                            >
                                Browse components <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Right Side: Code Editor */}
                    <div className="relative group">
                        {/* Glow effect */}
                        

                        
                            {/* Code Area - Header Removed */}

                            <CodeBlock
                                code={exampleCode}
                                language="tsx"
                                theme="github-dark"
                                showLineNumbers={true}
                            />
                        </div>
                    

                </div>
            </div>
        </section>
    );
}

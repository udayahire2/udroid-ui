
import React from "react";
import { CodeBlock } from "@/components/ui/code-block";

const layoutComponents = {
    pre: (props: any) => <CodeBlock {...props} />,
    code: (props: any) => {
        // If it's inline code (no children.props), just render strictly inline
        if (typeof props.children === 'string') {
            return <code className="relative rounded-md bg-white/10 px-[0.4rem] py-[0.2rem] font-mono text-sm font-medium text-white ring-1 ring-inset ring-white/5" {...props} />
        }
        return <code {...props} />
    }
};

export function MDXContent({ component: Component }: { component: React.ComponentType<any> }) {
    return (
        <article className="prose prose-zinc dark:prose-invert max-w-none 
            prose-headings:font-semibold prose-headings:text-foreground
            prose-h1:text-4xl prose-h1:mb-8
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-border/40 prose-h2:pb-2
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:leading-7 prose-p:text-muted-foreground prose-p:mb-4 prose-p:max-w-[65ch]
            prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-ul:text-muted-foreground
            prose-li:mt-1
            prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-primary
            prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-muted prose-pre:border prose-pre:border-border/40 prose-pre:rounded-lg prose-pre:my-6
            prose-strong:text-foreground prose-strong:font-semibold
            prose-table:text-sm
            prose-th:border prose-th:border-border/40 prose-th:bg-muted prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold
            prose-td:border prose-td:border-border/40 prose-td:px-4 prose-td:py-2
        ">
            <Component components={layoutComponents} />
        </article>
    );
}


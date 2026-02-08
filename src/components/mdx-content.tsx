
import React from "react";
import { CodeBlock } from "@/components/ui/code-block";
import { Callout } from "@/components/ui/callout";
import { Steps, Step } from "@/components/ui/steps";

const layoutComponents = {
    pre: (props: any) => <CodeBlock {...props} />,
    code: (props: any) => {
        // If it's inline code (no children.props), just render strictly inline
        if (typeof props.children === 'string') {
            return <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" {...props} />
        }
        return <code {...props} />
    },
    Callout,
    Steps,
    Step,
};

export function MDXContent({ component: Component }: { component: React.ComponentType<any> }) {
    return (
        <article className="prose prose-zinc dark:prose-invert max-w-none 
            prose-headings:scroll-mt-20 prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-10 prose-h2:border-b prose-h2:pb-2
            prose-h3:text-xl prose-h3:mt-8
            prose-p:leading-7 prose-p:not-first:mt-6
            prose-a:font-medium prose-a:underline prose-a:underline-offset-4
            prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:font-semibold before:prose-code:content-none after:prose-code:content-none
        ">
            <Component components={layoutComponents} />
        </article>
    );
}

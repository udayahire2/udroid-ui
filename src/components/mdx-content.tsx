
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
        <article className="prose max-w-none dark:prose-invert">
            <Component components={layoutComponents} />
        </article>
    );
}

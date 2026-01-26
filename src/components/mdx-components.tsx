import * as React from "react"
import { cn } from "@/lib/utils"
// import { CopyButton } from "@/components/ui/copy-button"
import { ComponentPreview } from "@/components/component-preview"
import { SplitComponentPreview } from "@/components/split-component-preview"
import { ComponentPageHeader } from "@/components/docs/component-page-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import ShikiHighlighter from "react-shiki";
import { CodeBlock } from "@/components/ui/code-block"
import { Steps, Step } from "@/components/ui/steps"



export const useMDXComponents = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className={cn(
                "mt-2 scroll-m-20 text-4xl font-bold tracking-tight mb-4",
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={cn(
                "mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-4",
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className={cn(
                "mt-8 scroll-m-20 text-xl font-semibold tracking-tight mb-4",
                className
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={cn(
                "mt-8 scroll-m-20 text-lg font-semibold tracking-tight mb-4",
                className
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
            className={cn(
                "mt-8 scroll-m-20 text-base font-semibold tracking-tight mb-4",
                className
            )}
            {...props}
        />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
            className={cn(
                "mt-8 scroll-m-20 text-sm font-semibold tracking-tight mb-4",
                className
            )}
            {...props}
        />
    ),
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
        <a
            className={cn("font-medium underline underline-offset-4 decoration-primary/50 hover:decoration-primary transition-colors", className)}
            {...props}
        />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
            className={cn("text-base leading-7 text-muted-foreground/90 mb-6", className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2 text-[14px] leading-[22px] text-muted-foreground", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2 text-[14px] leading-[22px] text-muted-foreground", className)} {...props} />
    ),
    li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
        <li className={cn("", className)} {...props} />
    ),
    blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote
            className={cn(
                "mt-6 border-l-2 border-primary/30 pl-6 italic text-muted-foreground",
                className
            )}
            {...props}
        />
    ),
    img: ({
        className,
        alt,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={cn("rounded-md border bg-muted", className)} alt={alt} {...props} />
    ),
    hr: ({ ...props }) => <hr className="my-10 border-border" {...props} />,
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-y-auto rounded-lg border border-border">
            <table className={cn("w-full text-sm", className)} {...props} />
        </div>
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr
            className={cn("m-0 border-t border-border p-0 even:bg-muted/50 hover:bg-muted transition-colors", className)}
            {...props}
        />
    ),
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className={cn(
                "border-border px-4 py-3 text-left font-medium text-[13px] text-foreground [&[align=center]]:text-center [&[align=right]]:text-right bg-muted/50",
                className
            )}
            {...props}
        />
    ),
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className={cn(
                "border-border px-4 py-3 text-left text-[13px] text-muted-foreground [&[align=center]]:text-center [&[align=right]]:text-right",
                // Chip styling for inline code inside tables
                "[&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:bg-secondary [&_code]:text-[12px] [&_code]:font-normal [&_code]:text-foreground",
                className
            )}
            {...props}
        />
    ),
    pre: CodeBlock,
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
            className={cn(
                "relative rounded bg-secondary px-[0.3rem] py-[0.2rem] font-mono text-sm text-foreground",
                className
            )}
            {...props}
        />
    ),
    CodeBlock,
    Steps,
    Step,
    ComponentPreview,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    ComponentPageHeader,
    SplitComponentPreview,
}

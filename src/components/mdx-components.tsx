import * as React from "react"
import { cn } from "@/lib/utils"
import { CopyButton } from "@/components/ui/copy-button"
import { ComponentPreview } from "@/components/component-preview"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Helper to extract language from className
const extractLanguage = (className: string | undefined) => {
    if (!className) return "Text";
    const match = className.match(/language-(\w+)/);
    return match ? match[1].toUpperCase() : "Text";
};

export const useMDXComponents = {
    h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h1
            className={cn(
                "mt-2 scroll-m-20 text-[32px] leading-[40px] font-semibold tracking-[-0.02em] mb-2",
                className
            )}
            {...props}
        />
    ),
    h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h2
            className={cn(
                "mt-16 scroll-m-20 border-b-0 pb-0 text-[20px] leading-[28px] font-medium tracking-tight first:mt-0 mb-4",
                className
            )}
            {...props}
        />
    ),
    h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h3
            className={cn(
                "mt-10 scroll-m-20 text-[18px] font-medium tracking-tight mb-4",
                className
            )}
            {...props}
        />
    ),
    h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h4
            className={cn(
                "mt-8 scroll-m-20 text-base font-medium tracking-tight mb-4",
                className
            )}
            {...props}
        />
    ),
    h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h5
            className={cn(
                "mt-8 scroll-m-20 text-sm font-medium tracking-tight mb-4",
                className
            )}
            {...props}
        />
    ),
    h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
        <h6
            className={cn(
                "mt-8 scroll-m-20 text-sm font-medium tracking-tight mb-4",
                className
            )}
            {...props}
        />
    ),
    a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
        <a
            className={cn("font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white transition-colors", className)}
            {...props}
        />
    ),
    p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p
            className={cn("text-[14px] leading-[22px] text-white/60 mb-6", className)}
            {...props}
        />
    ),
    ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2 text-[14px] leading-[22px] text-white/60", className)} {...props} />
    ),
    ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className={cn("my-6 ml-6 list-decimal [&>li]:mt-2 text-[14px] leading-[22px] text-white/60", className)} {...props} />
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
    hr: ({ ...props }) => <hr className="my-10 border-white/10" {...props} />,
    table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
        <div className="my-6 w-full overflow-y-auto rounded-lg border border-white/5">
            <table className={cn("w-full text-sm", className)} {...props} />
        </div>
    ),
    tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
        <tr
            className={cn("m-0 border-t border-white/5 p-0 even:bg-white/[0.02] hover:bg-white/[0.04] transition-colors", className)}
            {...props}
        />
    ),
    th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <th
            className={cn(
                "border-white/5 px-4 py-3 text-left font-medium text-[13px] text-white/80 [&[align=center]]:text-center [&[align=right]]:text-right bg-white/[0.02]",
                className
            )}
            {...props}
        />
    ),
    td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
        <td
            className={cn(
                "border-white/5 px-4 py-3 text-left text-[13px] text-white/70 [&[align=center]]:text-center [&[align=right]]:text-right",
                // Chip styling for inline code inside tables
                "[&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:bg-white/10 [&_code]:text-[12px] [&_code]:font-normal [&_code]:text-white/90",
                className
            )}
            {...props}
        />
    ),
    pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
        const preRef = React.useRef<HTMLPreElement>(null);
        const [codeString, setCodeString] = React.useState("");
        const [language, setLanguage] = React.useState("TEXT");

        React.useEffect(() => {
            if (preRef.current) {
                setCodeString(preRef.current.innerText);
                // @ts-ignore
                const innerCode = props.children?.props;
                if (innerCode?.className) {
                    setLanguage(extractLanguage(innerCode.className));
                }
            }
        }, [props.children]);

        return (
            <div className="group relative mb-6 rounded-[10px] border border-white/[0.08] bg-[#0c0c0c]">
                {/* Header Bar */}
                <div className="flex h-[36px] items-center justify-between border-b border-white/[0.08] bg-white/[0.01] px-3">
                    <div className="flex items-center gap-2">
                        {/* Language Badge */}
                        <span className="font-mono text-[11px] font-medium text-white/40">
                            {language}
                        </span>
                    </div>
                    {/* Copy Button in Header */}
                    <CopyButton value={codeString} className="text-white/40 hover:text-white" />
                </div>

                {/* Content Area */}
                <pre
                    ref={preRef}
                    className={cn(
                        "overflow-x-auto p-4 font-mono text-[13px] leading-5 custom-scrollbar text-white/90",
                        // Force override inner code styles
                        "[&_code]:!bg-transparent [&_code]:!p-0 [&_code]:block [&_code]:min-w-full",
                        className
                    )}
                    {...props}
                />
            </div>
        );
    },
    code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <code
            className={cn(
                "relative rounded bg-white/10 px-[0.3rem] py-[0.2rem] font-mono text-sm text-white/80",
                className
            )}
            {...props}
        />
    ),
    ComponentPreview,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
}

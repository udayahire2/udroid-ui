export function Steps({ ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className="steps mb-12 ml-4 border-l border-border pl-8 [counter-reset:step]"
            {...props}
        />
    )
}

export function Step({ title, children, ...props }: React.ComponentProps<"div"> & { title: string }) {
    return (
        <div className="relative mt-8" {...props}>
            <div className="absolute -left-9 flex items-center justify-center rounded-full border bg-background h-8 w-8 text-sm font-semibold ring-4 ring-background">
                <span className="step-number" />
                <style>{`.step-number::after { content: counter(step); counter-increment: step; }`}</style>
            </div>
            <h3 className="mb-4 text-base font-semibold tracking-tight">
                {title}
            </h3>
            <div className="text-sm text-muted-foreground [&>h3]:step-steps-h3 [&>div.code-block]:mt-4">
                {children}
            </div>
        </div>
    )
}

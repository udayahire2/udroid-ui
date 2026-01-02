import * as React from "react"
import { cn } from "@/lib/utils"

const TabsContext = React.createContext<{
    value: string
    onValueChange: (value: string) => void
} | null>(null)

function Tabs({
    defaultValue,
    value,
    onValueChange,
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & {
    defaultValue?: string
    value?: string
    onValueChange?: (value: string) => void
}) {
    const [localValue, setLocalValue] = React.useState(defaultValue || "")
    const handleValueChange = React.useCallback(
        (val: string) => {
            setLocalValue(val)
            onValueChange?.(val)
        },
        [onValueChange]
    )
    const activeValue = value !== undefined ? value : localValue

    return (
        <TabsContext.Provider value={{ value: activeValue, onValueChange: handleValueChange }}>
            <div className={cn("", className)} {...props}>
                {children}
            </div>
        </TabsContext.Provider>
    )
}

function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "inline-flex h-10 items-center justify-center rounded-lg bg-secondary/50 p-1 text-muted-foreground select-none",
                className
            )}
            {...props}
        />
    )
}

function TabsTrigger({
    className,
    value,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
    const context = React.useContext(TabsContext)
    const isActive = context?.value === value

    return (
        <button
            type="button"
            onClick={() => context?.onValueChange(value)}
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                isActive
                    ? "bg-background text-foreground shadow-sm"
                    : "hover:bg-background/40 hover:text-foreground/80",
                className
            )}
            {...props}
        />
    )
}

function TabsContent({
    className,
    value,
    ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
    const context = React.useContext(TabsContext)
    if (context?.value !== value) return null

    return (
        <div
            className={cn(
                "mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 animate-in fade-in-0 zoom-in-95 duration-200",
                className
            )}
            {...props}
        />
    )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

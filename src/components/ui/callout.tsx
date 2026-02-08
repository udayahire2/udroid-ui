import { cn } from "@/lib/utils"
import { AlertTriangle, Info, CheckCircle2, XCircle } from "lucide-react"

interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
    icon?: string
    type?: "default" | "warning" | "danger" | "info" | "success"
}

export function Callout({
    children,
    className,
    icon,
    type = "default",
    ...props
}: CalloutProps) {
    return (
        <div
            className={cn(
                "my-6 flex items-start rounded-md border border-l-4 p-4",
                type === "default" && "border-border bg-muted/50",
                type === "info" && "border-blue-500/30 bg-blue-500/5 text-blue-900 dark:text-blue-200 border-l-blue-500",
                type === "warning" && "border-yellow-500/30 bg-yellow-500/5 text-yellow-900 dark:text-yellow-200 border-l-yellow-500",
                type === "danger" && "border-red-500/30 bg-red-500/5 text-red-900 dark:text-red-200 border-l-red-500",
                type === "success" && "border-green-500/30 bg-green-500/5 text-green-900 dark:text-green-200 border-l-green-500",
                className
            )}
            {...props}
        >
            <div className="mr-4 mt-0.5 select-none">
                {type === "info" && <Info className="h-5 w-5 text-blue-500" />}
                {type === "warning" && <AlertTriangle className="h-5 w-5 text-yellow-500" />}
                {type === "danger" && <XCircle className="h-5 w-5 text-red-500" />}
                {type === "success" && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                {type === "default" && icon && <span className="text-xl">{icon}</span>}
            </div>
            <div className="text-sm [&>p]:leading-relaxed [&>p:last-child]:mb-0">
                {children}
            </div>
        </div>
    )
}

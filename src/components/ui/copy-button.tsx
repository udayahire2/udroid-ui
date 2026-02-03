import * as React from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/button/button"

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    value: string
}

export function CopyButton({
    value,
    className,
    ...props
}: CopyButtonProps) {
    const [hasCopied, setHasCopied] = React.useState(false)

    React.useEffect(() => {
        if (hasCopied) {
            const timeout = setTimeout(() => {
                setHasCopied(false)
            }, 1200)
            return () => clearTimeout(timeout)
        }
    }, [hasCopied])

    return (
        <Button
            size="icon-md"
            variant="ghost"
            className={cn(
                "relative z-10 h-7 w-7 rounded-md text-zinc-50 hover:bg-white/10 [&_svg]:h-3.5 [&_svg]:w-3.5",
                className
            )}
            onClick={() => {
                navigator.clipboard.writeText(value)
                setHasCopied(true)
            }}
            {...props}
        >
            <span className="sr-only">Copy</span>
            {hasCopied ? <Check /> : <Copy />}
        </Button>
    )
}

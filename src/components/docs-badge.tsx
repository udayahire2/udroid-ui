import * as React from "react"
import { cn } from "@/lib/utils"
import { 
    BookOpen, 
    Code2, 
    Component, 
    FileCode2, 
    Lightbulb, 
    List, 
    Terminal,
    Type,
    Sparkles,
    Zap
} from "lucide-react"

const badgeVariants = {
    usage: {
        icon: Code2,
        label: "Usage",
        className: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
    },
    examples: {
        icon: Lightbulb,
        label: "Examples",
        className: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
    },
    api: {
        icon: FileCode2,
        label: "API Reference",
        className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
    },
    props: {
        icon: List,
        label: "Props",
        className: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20"
    },
    installation: {
        icon: Terminal,
        label: "Installation",
        className: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20"
    },
    component: {
        icon: Component,
        label: "Component",
        className: "bg-primary/10 text-primary border-primary/20"
    },
    guide: {
        icon: BookOpen,
        label: "Guide",
        className: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20"
    },
    types: {
        icon: Type,
        label: "Types",
        className: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20"
    },
    preview: {
        icon: Sparkles,
        label: "Preview",
        className: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20"
    },
    advanced: {
        icon: Zap,
        label: "Advanced",
        className: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
    }
}

type BadgeVariant = keyof typeof badgeVariants

interface DocsBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant: BadgeVariant
    size?: "sm" | "md" | "lg"
}

export function DocsBadge({ 
    variant, 
    size = "md",
    className,
    ...props 
}: DocsBadgeProps) {
    const config = badgeVariants[variant]
    const Icon = config.icon

    const sizeClasses = {
        sm: "px-2 py-0.5 text-xs gap-1",
        md: "px-3 py-1 text-sm gap-1.5",
        lg: "px-4 py-1.5 text-base gap-2"
    }

    const iconSizes = {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-5 w-5"
    }

    return (
        <div 
            className={cn(
                "inline-flex items-center rounded-full font-medium border",
                sizeClasses[size],
                config.className,
                className
            )}
            {...props}
        >
            <Icon className={iconSizes[size]} />
            <span>{config.label}</span>
        </div>
    )
}

// Export for use in MDX files
export { badgeVariants }

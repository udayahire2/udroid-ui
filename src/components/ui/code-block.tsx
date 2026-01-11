"use client"

import * as React from "react"
import { createHighlighter } from "shiki"
import { CopyButton } from "@/components/ui/copy-button"
import { useTheme } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    code?: string
    language?: string
}

export function CodeBlock({ code, children, language = "tsx", className }: CodeBlockProps) {
    const { resolvedTheme } = useTheme()
    const [content, setContent] = React.useState("")
    const [html, setHtml] = React.useState("")
    const [detectedLanguage, setDetectedLanguage] = React.useState(language)
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        let rawCode = ""
        let lang = language

        if (code) {
            rawCode = code.trim()
            lang = "tsx"
        } else if (children && React.isValidElement(children)) {
            const childProps = children.props as any
            if (childProps.children) {
                rawCode = String(childProps.children).trim()
            }
            const childClassName = childProps.className || className || ""
            const match = childClassName.match(/language-(\w+)/)
            if (match) {
                lang = match[1]
            }
        } else if (typeof children === 'string') {
            rawCode = children.trim()
        }

        setContent(rawCode)
        setDetectedLanguage(lang)
    }, [code, children, className, language])

    React.useEffect(() => {
        let isMounted = true;

        async function highlight() {
            if (!content) return

            setIsLoading(true)
            try {
                const highlighter = await createHighlighter({
                    themes: ['github-light', 'github-dark'],
                    langs: ['tsx', 'typescript', 'javascript', 'bash', 'css', 'html'],
                })

                if (!isMounted) return

                const theme = resolvedTheme === "light" ? "github-light" : "github-dark"
                const highlighted = highlighter.codeToHtml(content, {
                    lang: detectedLanguage,
                    theme: theme,
                    // We remove the default background so we can control it via CSS
                    transformers: [{
                        name: 'remove-bg',
                        pre(node) {
                            delete node.properties.style
                        }
                    }]
                })

                if (isMounted) {
                    setHtml(highlighted)
                    setIsLoading(false)
                }
            } catch (error) {
                console.error("Shiki highlight error:", error)
                if (isMounted) setIsLoading(false)
            }
        }

        highlight()

        return () => { isMounted = false }
    }, [content, detectedLanguage, resolvedTheme])

    if (!content) return null

    return (
        <div className={cn(
            "relative group rounded-xl border bg-card text-card-foreground overflow-hidden my-4 shadow-sm",
            "dark:bg-zinc-950 dark:border-zinc-900", // Premium dark mode tweak
            className
        )}>
            <div className="absolute right-4 top-4 z-10 opacity-0 transition-opacity group-hover:opacity-100">
                <CopyButton value={content} />
            </div>

            <div className={cn(
                "overflow-auto max-h-[650px] custom-scrollbar p-6", // Generous padding
                "text-[13px] font-mono leading-6", // Refined typography
                "[&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0", // Override Shiki defaults
                "[&_code]:!bg-transparent [&_code]:!p-0",
                isLoading && "opacity-50 blur-[1px] select-none"
            )}>
                {isLoading ? (
                    <pre>{content}</pre>
                ) : (
                    <div dangerouslySetInnerHTML={{ __html: html }} />
                )}
            </div>
        </div>
    )
}

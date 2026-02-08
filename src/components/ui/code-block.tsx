"use client"

import * as React from "react"
import { createHighlighter, type Highlighter } from "shiki"
import { CopyButton } from "@/components/ui/copy-button"
import { cn } from "@/lib/utils"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
    code?: string
    language?: string
    filename?: string
    showLineNumbers?: boolean
    maxHeight?: string | number
    hideHeader?: boolean
    className?: string
}

// Singleton highlighter instance
let highlighterPromise: Promise<Highlighter> | null = null
const SUPPORTED_LANGS = ['tsx', 'typescript', 'javascript', 'bash', 'css', 'html', 'json', 'python', 'jsx', 'ts', 'shell', 'markdown', 'md', 'yaml', 'yml'] as const
const THEME = 'github-dark'

function getHighlighter() {
    if (!highlighterPromise) {
        highlighterPromise = createHighlighter({
            themes: [THEME],
            langs: SUPPORTED_LANGS as any,
        })
    }
    return highlighterPromise
}

function extractCodeFromChildren(children: React.ReactNode): { code: string; language?: string } {
    if (!children) return { code: '' }
    if (typeof children === 'string') return { code: children.trim() }

    if (React.isValidElement(children)) {
        const childProps = children.props as any
        const code = childProps.children ? String(childProps.children).trim() : ''
        const language = childProps.className?.match(/language-(\w+)/)?.[1]
        return { code, language }
    }

    return { code: '' }
}

export function CodeBlock({
    code: codeProp,
    children,
    language: languageProp = "tsx",
    filename,
    showLineNumbers = false,
    maxHeight = 650,
    hideHeader = false,
    className,
    ...props
}: CodeBlockProps) {
    const [html, setHtml] = React.useState<string>("")
    const [isLoading, setIsLoading] = React.useState(true)

    const { code: extractedCode, language: extractedLanguage } = React.useMemo(() =>
        extractCodeFromChildren(children), [children]
    )

    const code = codeProp?.trim() || extractedCode
    const language = languageProp || extractedLanguage || 'tsx'

    React.useEffect(() => {
        if (!code) {
            setHtml("")
            setIsLoading(false)
            return
        }

        let isMounted = true

        const highlight = async () => {
            try {
                setIsLoading(true)
                const highlighter = await getHighlighter()

                if (!isMounted) return

                const highlighted = highlighter.codeToHtml(code, {
                    lang: SUPPORTED_LANGS.includes(language as any) ? language : 'text',
                    theme: THEME,
                    transformers: [
                        {
                            pre(node) {
                                delete node.properties.style
                                node.properties.class = 'flex bg-transparent p-0 m-0'
                            },
                            code(node) {
                                node.properties.class = 'flex-1 min-w-0 bg-transparent p-0 m-0'
                            }
                        }
                    ]
                })

                if (isMounted) {
                    setHtml(highlighted)
                    setIsLoading(false)
                }
            } catch (err) {
                console.error("Highlight error:", err)
                if (isMounted) {
                    setHtml(`<pre class="flex bg-transparent"><code class="flex-1">${escapeHtml(code)}</code></pre>`)
                    setIsLoading(false)
                }
            }
        }

        highlight()
        return () => { isMounted = false }
    }, [code, language])

    if (!code) return null

    const lines = code.split('\n')
    const maxHeightStyle = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight

    return (
        <div
            className={cn(
                "relative group my-6 overflow-hidden rounded-lg border bg-zinc-950 dark:bg-zinc-950",
                className
            )}
            {...props}
        >
            {/* Header - Only render if filename exists */}
            {!hideHeader && filename && (
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-zinc-400">
                            {filename}
                        </span>
                    </div>
                </div>
            )}

            {/* Copy Button (Floating) */}
            <div className={cn(
                "absolute right-4 top-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                !hideHeader && filename && "top-3"
            )}>
                <CopyButton
                    value={code}
                    className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-md transition-colors"
                />
            </div>

            {/* Code Container */}
            <div
                className={cn(
                    "relative overflow-auto p-4",
                    // Custom Scrollbar
                    "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2",
                    "[&::-webkit-scrollbar-track]:bg-transparent",
                    "[&::-webkit-scrollbar-thumb]:bg-zinc-700/50 [&::-webkit-scrollbar-thumb]:rounded-full",
                    "[&::-webkit-scrollbar-thumb]:hover:bg-zinc-700",
                    !hideHeader && filename ? "pt-4" : "pt-4"
                )}
                style={{ maxHeight: hideHeader ? maxHeightStyle : undefined }}
            >
                {isLoading ? (
                    <div className="space-y-2 animate-pulse">
                        {lines.slice(0, 5).map((_, i) => (
                            <div
                                key={i}
                                className="h-4 bg-zinc-800/50 rounded"
                                style={{ width: `${Math.random() * 40 + 40}%` }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="relative">
                        <div className="flex text-[14px] leading-6 font-mono">
                            {showLineNumbers && (
                                <div
                                    className="shrink-0 select-none text-right pr-4 text-zinc-600"
                                    aria-hidden="true"
                                >
                                    {lines.map((_, i) => (
                                        <div key={i}>{i + 1}</div>
                                    ))}
                                </div>
                            )}

                            <div className="flex-1 min-w-0">
                                <div
                                    dangerouslySetInnerHTML={{ __html: html }}
                                    className="[&_span]:!bg-transparent"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

function escapeHtml(text: string): string {
    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
}

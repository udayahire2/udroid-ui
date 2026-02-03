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
const THEME = 'github-dark-dimmed'

function getHighlighter() {
    if (!highlighterPromise) {
        highlighterPromise = createHighlighter({
            themes: [THEME],
            langs: SUPPORTED_LANGS,
        })
    }
    return highlighterPromise
}

function extractCodeFromChildren(children: React.ReactNode): { code: string; language?: string } {
    if (!children) return { code: '' }
    if (typeof children === 'string') return { code: children.trim() }
    
    if (React.isValidElement(children)) {
        const childProps = children.props as { children?: React.ReactNode; className?: string }
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
    maxHeight = 600,
    hideHeader = false,
    className,
    ...props
}: CodeBlockProps) {
    const [html, setHtml] = React.useState<string>("")
    const [isLoading, setIsLoading] = React.useState(true)

    const skeletonWidths = React.useMemo(() => Array.from({ length: 12 }, () => Math.random() * 40 + 60), [])

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
                    lang: SUPPORTED_LANGS.includes(language as typeof SUPPORTED_LANGS[number]) ? language : 'text',
                    theme: THEME,
                    transformers: [
                        {
                            pre(node) {
                                delete node.properties.style
                                node.properties.class = 'flex'
                            },
                            code(node) {
                                node.properties.class = 'flex-1 min-w-0'
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
                    setHtml(`<pre class="flex"><code class="flex-1">${escapeHtml(code)}</code></pre>`)
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
                "relative group rounded-lg bg-zinc-950 dark:bg-black border border-zinc-800/60 overflow-hidden my-6",
                className
            )} 
            {...props}
        >
            {/* Minimal Header */}
            {!hideHeader && (
                <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/60 bg-zinc-900/30">
                    <div className="flex items-center gap-2 min-w-0">
                        {filename ? (
                            <span className="text-xs font-medium text-zinc-400 truncate">
                                {filename}
                            </span>
                        ) : (
                            <span className="text-[11px] uppercase tracking-wider font-medium text-zinc-500">
                                {language}
                            </span>
                        )}
                    </div>
                    
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {filename && (
                            <span className="text-[11px] uppercase tracking-wider font-medium text-zinc-600 hidden sm:block">
                                {language}
                            </span>
                        )}
                        <CopyButton 
                            value={code} 
                            className="h-6 w-6 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 rounded-md"
                        />
                    </div>
                </div>
            )}

            {/* Code Container */}
            <div 
                className={cn(
                    "relative overflow-auto",
                    !hideHeader && "rounded-t-none",
                    // Custom scrollbar
                    "[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:h-2",
                    "[&::-webkit-scrollbar-track]:bg-transparent",
                    "[&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb]:rounded-full",
                    "hover:[&::-webkit-scrollbar-thumb]:bg-zinc-700",
                    "[scrollbar-width:thin] [scrollbar-color:rgb(63,63,70)_transparent]"
                )}
                style={{ maxHeight: hideHeader ? maxHeightStyle : undefined }}
            >
                {isLoading ? (
                    <div className="p-4 space-y-2 animate-pulse">
                        {lines.slice(0, 12).map((_, i) => (
                            <div 
                                key={i} 
                                className="h-4 bg-zinc-800/50 rounded w-full"
                                style={{ width: `${skeletonWidths[i]}%`, opacity: 1 - (i * 0.05) }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="relative">
                        {/* Line Numbers + Code Grid */}
                        <div className="flex text-[13px] leading-6">
                            {showLineNumbers && (
                                <div 
                                    className="sticky left-0 z-10 select-none text-right pr-4 pl-4 py-4 text-zinc-600 bg-zinc-950 dark:bg-black border-r border-zinc-800/40 font-mono text-xs"
                                    aria-hidden="true"
                                >
                                    {lines.map((_, i) => (
                                        <div key={i} className="leading-6">
                                            {i + 1}
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            <div className="flex-1 min-w-0 p-4 overflow-x-auto">
                                <div 
                                    dangerouslySetInnerHTML={{ __html: html }}
                                    className="[&_pre]:!bg-transparent [&_pre]:!m-0 [&_pre]:!p-0 [&_code]:!bg-transparent [&_code]:!p-0 font-mono"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Gradient Fade for overflow */}
            {maxHeight && (
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
        </div>
    )
}

function escapeHtml(text: string): string {
    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
}
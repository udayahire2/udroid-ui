"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Hash } from "lucide-react"

interface TableOfContentsProps extends React.HTMLAttributes<HTMLDivElement> {
    headings?: { id: string; text: string; level: number }[]
}

export function TableOfContents({
    headings,
    className,
    ...props
}: TableOfContentsProps) {
    const [activeId, setActiveId] = React.useState<string>("")

    // Extract headings from DOM if not provided
    const [extractedHeadings, setExtractedHeadings] = React.useState<
        { id: string; text: string; level: number }[]
    >([])

    React.useEffect(() => {
        if (headings) {
            setExtractedHeadings(headings)
            return
        }

        // Extract h2 and h3 headings from the page
        const article = document.querySelector("article.prose")
        if (!article) return

        const headingElements = article.querySelectorAll("h2, h3")
        const newHeadings: { id: string; text: string; level: number }[] = []

        headingElements.forEach((heading) => {
            // Get or create ID
            let id = heading.id
            if (!id) {
                id = heading.textContent?.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") || ""
                heading.id = id
            }

            newHeadings.push({
                id,
                text: heading.textContent || "",
                level: heading.tagName === "H2" ? 2 : 3,
            })
        })

        setExtractedHeadings(newHeadings)
    }, [headings])

    // Track active heading on scroll
    React.useEffect(() => {
        if (extractedHeadings.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id)
                    }
                })
            },
            { rootMargin: "-20% 0% -35% 0%" }
        )

        extractedHeadings.forEach((heading) => {
            const element = document.getElementById(heading.id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [extractedHeadings])

    const handleClick = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setActiveId(id)
        }
    }

    if (extractedHeadings.length === 0) return null

    return (
        <div
            className={cn(
                "hidden xl:block w-64 shrink-0",
                className
            )}
            {...props}
        >
            <div className="fixed top-32 w-64 max-h-[calc(100vh-10rem)] overflow-y-auto pr-4">
                <div className="flex items-center gap-2 mb-5 text-sm font-semibold text-foreground">
                    <Hash className="h-4 w-4 text-primary" />
                    On this page
                </div>
                <nav className="border-l border-border/40 pl-4">
                    <ul className="space-y-3">
                        {extractedHeadings.map((heading) => (
                            <li
                                key={heading.id}
                                className={cn(
                                    "text-sm transition-all duration-200",
                                    heading.level === 3 && "ml-3",
                                    activeId === heading.id
                                        ? "text-primary font-medium"
                                        : "text-muted-foreground hover:text-foreground"
                                )}
                            >
                                <button
                                    onClick={() => handleClick(heading.id)}
                                    className={cn(
                                        "text-left w-full transition-all duration-200",
                                        activeId === heading.id
                                            ? "translate-x-0.5"
                                            : "hover:translate-x-0.5"
                                    )}
                                >
                                    {heading.text}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

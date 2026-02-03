
export const docsConfig = {
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                { title: "Introduction", href: "/docs/introduction" },
                { title: "Installation", href: "/docs/installation" },
                { title: "Theming", href: "/docs/theming" },
            ],
        },
        {
            title: "Components",
            items: [
                { title: "Avatar", href: "/docs/avatar" },
                { title: "Button", href: "/docs/button" },
                { title: "Command", href: "/docs/command-menu" },
                { title: "Dialog", href: "/docs/dialog" },
                { title: "Input", href: "/docs/input" },
                { title: "Label", href: "/docs/label" },
                { title: "Radio Group", href: "/docs/radio-group" },
                { title: "Separator", href: "/docs/separator" },
                { title: "Switch", href: "/docs/switch" },
                { title: "Tooltip", href: "/docs/tooltip" },
                { title: "Textarea", href: "/docs/textarea" },
            ],
        },
    ],
}

export type DocsConfig = typeof docsConfig

// Helper to get all docs in linear order
export function getAllDocs() {
    return docsConfig.sidebarNav.flatMap(section =>
        section.items.map(item => ({
            ...item,
            category: section.title
        }))
    );
}

// Helper to get previous and next docs for navigation
export function getAdjacentDocs(currentHref: string) {
    const allDocs = getAllDocs();
    const currentIndex = allDocs.findIndex(doc => doc.href === currentHref);

    return {
        previous: currentIndex > 0 ? allDocs[currentIndex - 1] : null,
        next: currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null,
        current: allDocs[currentIndex] || null
    };
}

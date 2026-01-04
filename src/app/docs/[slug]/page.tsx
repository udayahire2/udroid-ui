import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/components/mdx-components";

export default function DocsSlugPage() {
    const params = useParams();
    const slug = params["*"];
    // Use a more specific glob pattern to include subdirectories, excluding introduction as it is handled by the index page
    const modules = import.meta.glob(['/src/docs/**/*.mdx', '!/src/docs/introduction.mdx']);

    // Create a mapping from slug to module path
    // e.g. "installation" -> "/src/docs/installation.mdx"
    // e.g. "components/button" -> "/src/docs/components/button.mdx"
    const slugToPath = useMemo(() => {
        const map: Record<string, string> = {};
        for (const path in modules) {
            // Remove /src/docs/ prefix and .mdx suffix to match slug
            // path is like /src/docs/installation.mdx or /src/docs/components/button.mdx
            const relativePath = path.replace('/src/docs/', '').replace('.mdx', '');
            map[relativePath] = path;
        }
        return map;
    }, [modules]);

    const [ValidationComponent, setComponent] = useState<any>(null);

    useEffect(() => {
        if (!slug) return;

        const path = slugToPath[slug];

        if (path && modules[path]) {
            modules[path]().then((mod: any) => {
                setComponent(() => mod.default);
            }).catch(console.error);
        } else {
            console.log("Not found:", slug);
            setComponent(null);
        }

    }, [slug, modules, slugToPath]);

    if (!ValidationComponent) {
        return <div>Not Found</div>;
    }

    return (
        <div className="mdx w-full max-w-[1100px] mx-auto pb-20">
            <MDXProvider components={useMDXComponents}>
                <ValidationComponent />
            </MDXProvider>
        </div>
    );
}

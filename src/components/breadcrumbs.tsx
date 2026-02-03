import { useLocation } from "react-router-dom";
import { getAdjacentDocs } from "@/config/docs";

export function Breadcrumbs() {
    const location = useLocation();
    const { current } = getAdjacentDocs(location.pathname);

    if (!current) return null;

    return (
        <div className="text-sm text-muted-foreground">
            Library / {current.category} / <span className="text-foreground">{current.title}</span>
        </div>
    );
}

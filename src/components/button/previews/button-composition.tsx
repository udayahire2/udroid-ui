"use client";

import { Button } from "@/components/button/button";
import { Mail, ArrowRight, Loader2 } from "lucide-react";

export default function ButtonPreviewComposition() {
    return (
        <div className="flex flex-wrap gap-4 justify-center w-full max-w-4xl py-12">
            <Button>
                <Mail className="mr-2" /> Login
            </Button>
            <Button variant="secondary">
                Next Step <ArrowRight className="ml-2" />
            </Button>
            <Button disabled>
                <Loader2 className="mr-2 animate-spin" />
                Processing
            </Button>
        </div>
    );
}

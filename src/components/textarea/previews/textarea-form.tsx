"use client";

import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";

export default function TextareaPreviewForm() {
    return (
        <div className="rounded-lg border border-slate-200 p-6 dark:border-slate-800 w-full max-w-lg bg-card">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="bio" className="text-sm font-medium">Biography</label>
                    <Textarea
                        id="bio"
                        variant="filled"
                        placeholder="Tell us about yourself"
                        rows={3}
                        autoGrow
                        className="min-h-[80px]"
                    />
                </div>
                <div className="flex justify-end">
                    <Button size="sm">Save Changes</Button>
                </div>
            </div>
        </div>
    );
}

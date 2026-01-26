"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    squares?: [number, number][]; // Initial squares
    className?: string;
    squaresClassName?: string;
}

export function InteractiveGridPattern({
    width = 40,
    height = 40,
    squares = [],
    className,
    squaresClassName,
    ...props
}: InteractiveGridPatternProps) {
    const [hoveredSquare, setHoveredSquare] = useState<[number, number] | null>(
        null
    );

    return (
        <svg
            className={cn(
                "absolute inset-0 h-full w-full border-0 pointer-events-auto",
                className
            )}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                // prevent highlighting if mouse leaves the area
                if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
                    setHoveredSquare(null);
                    return;
                }
                const col = Math.floor(x / width);
                const row = Math.floor(y / height);
                setHoveredSquare([col, row]);
            }}
            onMouseLeave={() => setHoveredSquare(null)}
            {...props}
        >
            <defs>
                <pattern
                    id="interactive-grid-pattern"
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={-1}
                    y={-1}
                >
                    <path
                        d={`M.5 ${height}V.5H${width}`}
                        fill="none"
                        stroke="currentColor"
                        strokeOpacity="0.3"
                        className="text-neutral-500 dark:text-neutral-400"
                    />
                </pattern>
            </defs>

            {/* Base Grid */}
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#interactive-grid-pattern)" />

            {/* Hovered Square with Motion */}
            <AnimatePresence>
                {hoveredSquare && (
                    <motion.rect
                        key={`${hoveredSquare[0]}-${hoveredSquare[1]}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        x={hoveredSquare[0] * width}
                        y={hoveredSquare[1] * height}
                        width={width}
                        height={height}
                        className={cn(
                            "fill-primary/20 stroke-primary/50", // Uses theme primary color
                            squaresClassName
                        )}
                        strokeWidth={1}
                    />
                )}
            </AnimatePresence>
        </svg>
    );
}

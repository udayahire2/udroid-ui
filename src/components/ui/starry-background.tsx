"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

interface StarryBackgroundProps {
    className?: string;
    count?: number;
}

export function StarryBackground({ className, count = 50 }: StarryBackgroundProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Create stars
        const stars: HTMLDivElement[] = [];
        const container = containerRef.current;

        // Clear existing stars if any (though usually this runs once on mount)
        container.innerHTML = "";

        for (let i = 0; i < count; i++) {
            const star = document.createElement("div");
            star.className = "absolute rounded-full bg-zinc-900 dark:bg-white pointer-events-none mix-blend-screen dark:mix-blend-normal";

            // Random properties
            const size = Math.random() * 2 + 1; // 1px to 3px
            const top = Math.random() * 100;
            const left = Math.random() * 100;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.top = `${top}%`;
            star.style.left = `${left}%`;
            star.style.opacity = "0"; // Start invisible for animation
            // star.style.boxShadow = `0 0 ${size * 2}px rgba(255, 255, 255, 0.8)`;

            container.appendChild(star);
            stars.push(star);
        }

        // Animate stars using GSAP
        const ctx = gsap.context(() => {
            stars.forEach((star) => {
                gsap.to(star, {
                    opacity: "random(0.3, 1)", // Fade in/out to random opacity
                    scale: "random(0.5, 1.5)", // Pulse size
                    duration: "random(1, 3)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: "random(0, 5)", // Randomize start times
                });
            });
        }, containerRef);

        return () => ctx.revert(); // Cleanup GSAP animations
    }, [count]);

    return (
        <motion.div
            ref={containerRef}
            className={`absolute inset-0 z-0 overflow-hidden ${className}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        />
    );
}

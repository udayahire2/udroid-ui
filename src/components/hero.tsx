import { useRef, useState } from "react";
import { Avatar } from "@/components/avatar/avatar";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import { Button } from "@/components/button/button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { StarryBackground } from "@/components/ui/starry-background";

// QA Note: Extracted for performance and cleaner tree
function MagneticBadge({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const transform = useTransform(
    [xSpring, ySpring],
    ([latestX, latestY]) => `translate(${latestX}px, ${latestY}px)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.2);
    y.set(distanceY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="inline-block" // Ensure it takes only needed space
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i udx-ui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full min-h-screen py-32 md:py-48 flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-background">

      {/* Background Grids - Reduced Opacity for Contrast */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background/50 pointer-events-none" />
      <StarryBackground className="absolute inset-0 -z-10 opacity-70 dark:opacity-50 pointer-events-none" count={80} />

      <InteractiveGridPattern
        className="absolute inset-0 -z-10 h-full w-full opacity-60 dark:opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_60%,transparent_100%)]"
        width={40}
        height={40}
        squares={[[15, 15], [20, 20], [25, 15]]}
        squaresClassName="hover:fill-primary/20 dark:hover:fill-primary/20"
      />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 }, // Fixed: Initial should be 0 for stagger to look right
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
          }
        }}
      >

        {/* Top Badge */}
        <motion.div variants={fadeInUp} className="mb-2">
          <MagneticBadge>
            <div
              role="button"
              tabIndex={0}
              className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary/50 transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <span className="absolute inset-[-1000%] animate-[spin_1s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffffff_50%,#000000_100%)] opacity-100" />
              <div className="inline-flex h-full w-full items-center gap-2 rounded-full bg-zinc-950 px-4 py-1.5 text-sm font-medium backdrop-blur-3xl text-white border border-white/10 group relative">
                {/* Shimmer effect */}
                <div className="absolute inset-0 flex translate-x-[-100%] animate-[shimmer_2s_infinite] group-hover:animate-none pointer-events-none">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
                </div>

                <div className="flex -space-x-2 relative z-10">
                  <Avatar className="h-5 w-5 border-2 border-zinc-900 ring-1 ring-white/10" src={profile} fallback="CN" />
                  <Avatar className="h-5 w-5 border-2 border-zinc-900 ring-1 ring-white/10" src={profile2} fallback="AB" />
                </div>
                <div className="h-3 w-px bg-white/20 mx-1 relative z-10" aria-hidden="true" />
                <span className="text-xs font-medium text-zinc-300 relative z-10">
                  Trusted by <span className="text-white font-semibold tracking-wide">1,000+</span> developers
                </span>
                <div className="h-3 w-px bg-white/20 mx-1 relative z-10" aria-hidden="true" />
                <span className="flex items-center gap-1 text-xs font-semibold text-white/90 hover:text-white transition-colors relative z-10">
                  v2.0 Released <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
                </span>
              </div>
            </div>
          </MagneticBadge>
        </motion.div>


        {/* Main Heading */}
        <motion.h1
          className="relative text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter pb-4 leading-[0.9] flex flex-wrap justify-center gap-x-[0.2em] gap-y-2 select-none"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } }
          }}
          aria-label="Support both Dark and Light modes."
        >
          {["Support", "both"].map((word, i) => (
            <motion.span
              key={i}
              variants={fadeInUp}
              className="text-foreground relative"
              aria-hidden="true"
            >
              {word}
            </motion.span>
          ))}

          <motion.span
            variants={fadeInUp}
            className="relative inline-block"
            aria-hidden="true"
          >
            <span className="bg-gradient-to-tr from-zinc-800 via-zinc-200 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer relative z-10">
              Dark
            </span>
          </motion.span>

          <motion.span
            variants={fadeInUp}
            className="text-foreground font-light italic"
            aria-hidden="true"
          >
            &
          </motion.span>

          <motion.span
            variants={fadeInUp}
            className="relative inline-block"
            aria-hidden="true"
          >
            <span className="bg-gradient-to-tr from-amber-200 via-orange-400 to-amber-200 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer relative z-10">
              Light
            </span>
          </motion.span>

          <motion.span
            variants={fadeInUp}
            className="text-foreground"
            aria-hidden="true"
          >
            modes.
          </motion.span>
        </motion.h1>

        {/* Sub Description */}
        <motion.p
          variants={fadeInUp}
          className="max-w-2xl text-lg sm:text-xl text-muted-foreground/80 leading-relaxed tracking-wide"
        >
          Clean, reusable UI components designed to save time. Built for speed, optimized for performance, and styled for the future.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <Button
            asChild
            size="lg"
            className="group relative h-12 w-full sm:w-auto px-8 text-base font-semibold tracking-wide  bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-[0_0_20px_-10px_rgba(var(--primary),0.3)]"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Get Started with UDX UI"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </motion.button>
          </Button>

          {/* Secondary CTA */}
          <Button
            asChild
            variant="ghost"
            size="lg"
            className="group h-12 w-full sm:w-auto px-6 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            onClick={handleCopy}
            aria-label={copied ? "Command copied" : "Copy install command"}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-zinc-500">$ npm i udx-ui</span>
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" aria-hidden="true" />
              ) : (
                <Copy className="w-4 h-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" aria-hidden="true" />
              )}
            </motion.button>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

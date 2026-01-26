import { useRef, useState } from "react";
import { Avatar } from "@/components/avatar/avatar";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion";

function MagneticBadge({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }; // Fast and bouncy
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const transform = useTransform(
    [xSpring, ySpring],
    ([latestX, latestY]) => `translate(${latestX}px, ${latestY}px)`
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * 0.2); // Move 20% of distance
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
      style={{ transform }} // Apply transform directly
    >
      {children}
    </motion.div>
  );
}
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import { Button } from "@/components/button/button";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { StarryBackground } from "@/components/ui/starry-background";


export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // Mouse move effect for spotlight
  // Mouse move effect for spotlight - REMOVED for cleaner look
  // const mouseX = useMotionValue(0);
  // const mouseY = useMotionValue(0);
  // ... (removed spotlight logic)

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i udx-ui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-32 md:py-48 flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-background">

      {/* Background Grids */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background/50" />
      <StarryBackground className="absolute inset-0 -z-10 opacity-70 dark:opacity-50" count={80} />

      <InteractiveGridPattern
        className="absolute inset-0 -z-10 h-full w-full opacity-60 dark:opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_40%,#000_60%,transparent_100%)]"
        width={40}
        height={40}
        squares={[[15, 15], [20, 20], [25, 15]]}
        squaresClassName="hover:fill-primary/20 dark:hover:fill-primary/20"
      />


      {/* Intelligent Search Light Effect - REMOVED */}
      {/* <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full opacity-30 pointer-events-none -z-10 mix-blend-screen dark:mix-blend-screen"
      /> */}


      <motion.div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center gap-8 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
          }
        }}
      >

        {/* Top Badge */}
        <motion.div variants={fadeInUp} className="mb-2">
          <MagneticBadge>
            <div className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none transition-transform duration-300 hover:scale-105 cursor-pointer">
              <span className="absolute inset-[-1000%] animate-[spin_1s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#ffffff_50%,#000000_100%)] opacity-100" />
              <div className="inline-flex h-full w-full items-center gap-2 rounded-full bg-zinc-950 px-4 py-1.5 text-sm font-medium backdrop-blur-3xl text-white border border-white/10 group relative">
                {/* Shimmer effect */}
                <div className="absolute inset-0 flex translate-x-[-100%] animate-[shimmer_2s_infinite] group-hover:animate-none">
                  <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
                </div>

                <div className="flex -space-x-2 relative z-10">
                  <Avatar className="h-5 w-5 border-2 border-zinc-900 ring-1 ring-white/10" src={profile} fallback="CN" />
                  <Avatar className="h-5 w-5 border-2 border-zinc-900 ring-1 ring-white/10" src={profile2} fallback="AB" />
                </div>
                <div className="h-3 w-px bg-white/20 mx-1 relative z-10" />
                <span className="text-xs font-medium text-zinc-300 relative z-10">
                  Trusted by <span className="text-white font-semibold tracking-wide">1,000+</span> developers
                </span>
                <div className="h-3 w-px bg-white/20 mx-1 relative z-10" />
                <a
                  href="#"
                  className="flex items-center gap-1 text-xs font-semibold text-white/90 hover:text-white transition-colors relative z-10"
                >
                  v2.0 Released <ArrowUpRight className="h-3 w-3" />
                </a>
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
        >
          {["Support", "both"].map((word, i) => (
            <motion.span
              key={i}
              variants={fadeInUp}
              className="text-foreground relative"
            >
              {word}
            </motion.span>
          ))}

          <motion.span
            variants={fadeInUp}
            className="relative inline-block"
          >
            <span className="bg-gradient-to-tr from-zinc-800 via-zinc-200 to-zinc-500 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer relative z-10">
              Dark
            </span>
          </motion.span>

          <motion.span
            variants={fadeInUp}
            className="text-foreground font-light italic"
          >
            &
          </motion.span>

          <motion.span
            variants={fadeInUp}
            className="relative inline-block"
          >
            <span className="bg-gradient-to-tr from-amber-200 via-orange-400 to-amber-200 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer relative z-10">
              Light
            </span>
          </motion.span>

          <motion.span
            variants={fadeInUp}
            className="text-foreground"
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
          className="flex flex-col sm:flex-row items-center gap-6 mt-10 w-full sm:w-auto"
        >
          {/* Primary CTA - Pro Tech Button */}
          <Button
            asChild
            size="lg"
            className="group relative h-14 w-full sm:w-auto px-10 text-base font-bold tracking-wider uppercase rounded-none bg-primary text-primary-foreground overflow-hidden border border-primary transition-all shadow-[0_0_20px_-5px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_-5px_rgba(var(--primary),0.5)]"
          >
            <motion.button
              whileHover="hover"
              initial="initial"
              className="relative overflow-hidden"
            >
              {/* Tech Corners / Brackets */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-[3px] border-l-[3px] border-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[3px] border-r-[3px] border-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              {/* Slanted Sweep Effect */}
              <motion.div
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: "100%" }
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-white/20 skew-x-12"
              />

              <span className="relative z-10 flex items-center justify-center gap-3">
                Get Started
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </motion.button>
          </Button>

          {/* Secondary CTA - Clean Terminal Block */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group relative h-14 w-full sm:w-auto px-8 font-mono text-sm rounded-none border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950/50 hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all font-normal overflow-hidden"
            onClick={handleCopy}
          >
            <motion.button
              whileHover="hover"
              initial="initial"
            >
              {/* Scanline / Glitch Bar */}
              <motion.div
                variants={{
                  initial: { top: "-100%" },
                  hover: { top: "100%" }
                }}
                transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                className="absolute inset-x-0 h-[20%] bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100"
              />

              {/* Terminal Content */}
              <div className="flex items-center">
                <span className="mr-4 text-zinc-400 dark:text-zinc-600 group-hover:text-primary transition-colors">$</span>

                <span className="mr-6 text-zinc-700 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-zinc-100 transition-colors">
                  npm i udx-ui
                </span>

                {/* Copy Feedback */}
                <div className="relative w-4 h-4">
                  {copied ? (
                    <Check className="absolute inset-0 w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="absolute inset-0 w-4 h-4 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors" />
                  )}
                </div>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border border-black/5 dark:border-white/0 group-hover:border-black/10 dark:group-hover:border-white/10 transition-colors pointer-events-none" />
            </motion.button>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

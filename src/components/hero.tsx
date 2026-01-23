import { useRef, useState, useEffect } from "react";
import { Avatar } from "@/components/avatar/avatar";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import { Button } from "@/components/button/button";


export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  // Mouse move effect for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Center the spotlight on the cursor
      // We subtract half the spotlight size (approx 300px) to center it
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i udx-ui");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section ref={containerRef} className="relative w-full py-16 md:py-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-border/40 bg-background/50">

      {/* Background Grids */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background" />
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Intelligent Search Light Effect */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full opacity-40 pointer-events-none -z-10 mix-blend-screen dark:mix-blend-screen"
      />


      <motion.div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center gap-5 max-w-4xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 1 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >

        {/* Top Badge */}
        <motion.div
          variants={fadeInUp}
          className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-70" />
          <div className="inline-flex h-full w-full items-center gap-2 rounded-full bg-zinc-950 px-3 py-1 text-sm font-medium backdrop-blur-3xl text-white border border-white/10">
            <div className="flex -space-x-2">
              <Avatar className="h-5 w-5 border-2 border-zinc-900 ring-1 ring-white/10" src={profile} fallback="CN" />
              <Avatar className="h-5 w-5 border-2 border-zinc-900 ring-1 ring-white/10" src={profile2} fallback="AB" />
            </div>
            <div className="h-3 w-px bg-white/20 mx-1" />
            <span className="text-xs font-medium text-zinc-400">
              Trusted by <span className="text-zinc-100 font-semibold">1,000+</span> developers
            </span>
            <div className="h-3 w-px bg-white/20 mx-1" />
            <a
              href="#"
              className="flex items-center gap-0.5 text-xs font-semibold text-white/90 hover:text-white transition-colors"
            >
              See What's New <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </motion.div>


        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight pb-2 flex flex-wrap justify-center gap-x-3 gap-y-1"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
        >
          {["Support", "both"].map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="text-foreground"
            >
              {word}
            </motion.span>
          ))}

          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="relative inline-block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 dark:from-indigo-400 dark:via-cyan-400 dark:to-indigo-400 bg-clip-text text-transparent blur-lg opacity-20 animate-pulse" />
            <span className="bg-gradient-to-r from-zinc-800 via-zinc-500 to-zinc-800 dark:from-white dark:via-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              Dark
            </span>
          </motion.span>

          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-foreground"
          >
            and
          </motion.span>

          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="relative inline-block"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 dark:from-yellow-200 dark:via-amber-400 dark:to-yellow-200 bg-clip-text text-transparent blur-lg opacity-20 animate-pulse" />
            <span className="bg-gradient-to-r from-zinc-700 via-zinc-400 to-zinc-700 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
              Light
            </span>
          </motion.span>

          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
              visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-foreground"
          >
            modes.
          </motion.span>
        </motion.h1>

        {/* Sub Description */}
        <motion.p
          variants={fadeInUp}
          className="max-w-2xl text-base sm:text-xl text-muted-foreground leading-relaxed"
        >
          Clean, reusable UI components designed to save time and reduce design effort.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
        >
          <Button
            size="lg"
            className="h-12 w-full sm:w-auto px-8 text-base"
          >
            Get Started
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleCopy}
            className="h-12 w-full sm:w-auto px-6 font-mono text-sm text-muted-foreground hover:text-foreground"
          >
            <span className="mr-2">npm i udx-ui</span>
            {copied ? (
              <Check className="h-4 w-4 text-emerald-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

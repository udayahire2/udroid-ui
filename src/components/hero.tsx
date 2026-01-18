import { useRef } from "react";
import { Avatar } from "@/components/avatar/avatar";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
import { Button } from "@/components/button/button";
import { cn } from "@/lib/utils";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Staggered fade-in for content
    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        y: 10,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-16 md:py-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b border-border/40 bg-background/50">

      {/* Background Grids */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background" />
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Search Light Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[100px] rounded-full opacity-20 pointer-events-none -z-10" />


      <div ref={contentRef} className="relative z-10 flex flex-col items-center gap-5 max-w-4xl mx-auto">

        {/* Top Badge */}
        <div className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#fff_10%,#0000_50%)]" />
          <div className="inline-flex h-full w-full items-center gap-2 rounded-full bg-zinc-950/90 px-3 py-1 text-sm font-medium backdrop-blur-3xl dark:text-white border border-white/10">
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
        </div>


        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground pb-2">
          Build faster with <br className="hidden sm:block" />
          <span className="text-foreground">Mastery</span> UI.
        </h1>

        {/* Sub Description */}
        <p className="max-w-2xl text-base sm:text-xl text-muted-foreground leading-relaxed">
          A comprehensive, production-ready component library designed for speed and aesthetics.
          Accessible, customizable, and engineered for the modern web.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <Button size="lg" className="h-12 px-8 text-base shadow-[0_0_20px_-5px_rgba(var(--primary),0.3)] w-full sm:w-auto">
            Get Started
          </Button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative group flex items-center justify-between gap-3 h-12 px-4 rounded-lg border border-border/60 bg-muted/30 w-full sm:w-auto min-w-[200px] transition-colors hover:border-border/80 hover:bg-muted/50">
              <code className="text-sm font-mono text-muted-foreground font-medium">
                npm i udx-ui
              </code>
              <button
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText("npm i udx-ui");
                }}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy command</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { CodeBlock } from "./shikiEditor/code-block";
import { Avatar } from "@/components/ui/avatar";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subHeadingRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(badgeRef.current, {
      y: -20,
      opacity: 0,
      duration: 0.8,
    })
      .from(subHeadingRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
      }, "-=0.4")
      .from(headingRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
      }, "-=0.6")
      .from(descRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
      }, "-=0.8")
      .from(ctaRef.current, {
        y: 20,
        opacity: 0,
        duration: 1,
      }, "-=0.8");

    // Interactive Hover Effects for Buttons
    const buttons = ctaRef.current?.children;
    if (buttons) {
      Array.from(buttons).forEach((btn) => {
        const button = btn as HTMLElement;
        button.addEventListener("mouseenter", () => {
          gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        });
        button.addEventListener("mouseleave", () => {
          gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
      });
    }
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-10 md:py-22 flex gap-3 flex-col items-center justify-center text-center px-1 overflow-hidden">
      {/* Top Badge */}
      <div
        ref={badgeRef}
        className="inline-flex items-center rounded-full border border-border/40 bg-background/50 backdrop-blur-sm p-1 pr-4"
      >
        <span className="px-3 text-xs font-medium text-muted-foreground">
          Added Figma Sync
        </span>
        <div className="h-4 w-px bg-border/60 mx-1" />
        <a
          href="#"
          className="flex items-center gap-1 text-xs font-medium text-foreground hover:text-primary transition-colors"
        >
          View Changelog <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>

      {/* Sub Heading with Avatars */}
      <div
        ref={subHeadingRef}
        className="flex items-center justify-center gap-2  text-xl sm:text-2xl md:text-3xl text-muted-foreground"
      >
        <span className="font-normal tracking-tight text-muted-foreground">
          Premium
        </span>
        <div className="flex -space-x-3">
          <Avatar className="h-10 w-10 border-2 border-background" src={profile} fallback="CN" />
          <Avatar className="h-10 w-10 border-2 border-background" src={profile2} fallback="AB" />
        </div>
        <div
          className="group relative hidden sm:flex items-center gap-2 rounded-full border border-border/40 bg-zinc-900/50 hover:bg-zinc-900/80 px-4 py-1.5 text-sm font-medium transition-all hover:border-border/60 hover:shadow-[0_0_20px_-12px_rgba(255,255,255,0.3)]"
        >
          <span className="text-muted-foreground font-mono select-none">$</span>
          <CodeBlock
            code="npm install udroid-ui"
            language="bash"
            showLineNumbers={false}
            className="!bg-transparent invisible text-[0px] [&_pre]:visible [&_pre]:!bg-transparent [&_pre]:!p-0 [&_pre]:!m-0 [&_pre]:!font-mono [&_pre]:!text-sm [&_code]:!bg-transparent font-mono"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-white/10 pointer-events-none" />
        </div>
      </div>

      {/* Main Heading */}
      <h1
        ref={headingRef}
        className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl text-foreground leading-[1.1]"
      >
        A modern React UI component library.
        <br className="hidden md:block" />
        Build interfaces faster.
      </h1>

      <p
        ref={descRef}
        className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed"
      >
        Carefully crafted, accessible components designed for real production
        applications.
      </p>


      {/* CTA Buttons */}
      <div
        ref={ctaRef}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <div
          className="bg-white content-stretch flex items-center justify-center px-[18px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer"
        >
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap">
            <p className="leading-[normal]">Read Docs</p>
          </div>
        </div>

        <div
          className="bg-black content-stretch flex items-center justify-center px-[18px] py-[12px] relative rounded-[12px] shrink-0 cursor-pointer"
        >
          <div
            aria-hidden="true"
            className="absolute border border-[rgba(255,255,255,0.07)] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#a1a1a1] text-[17px] text-center text-nowrap">
            <p className="leading-[normal]">View Component</p>
          </div>
        </div>
      </div>
    </section>
  );
}

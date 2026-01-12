import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type FeatureType = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

export function FeatureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header Animation
    gsap.from(headerRef.current, {
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Staggered Grid Animation
    const cards = gsap.utils.toArray<HTMLElement>(".feature-card");
    gsap.from(cards, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.7)", // Bouncy effect
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="mx-auto w-full max-w-7xl space-y-12 py-16 px-4">
      <div ref={headerRef} className="mx-auto max-w-3xl text-center space-y-4">
        <h2 className="text-balance font-bold text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          Engineered for Perfection.
        </h2>
        <p className="mt-4 text-balance text-muted-foreground text-lg md:text-xl">
          A convergence of design and engineering. Built on the bleeding edge for those who demand the best.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  feature,
  className,
  ...props
}: React.ComponentProps<"div"> & { feature: FeatureType }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(
    () => {
      xTo.current = gsap.quickTo(cardRef.current, "x", {
        duration: 0.4,
        ease: "power3",
      });
      yTo.current = gsap.quickTo(cardRef.current, "y", {
        duration: 0.4,
        ease: "power3",
      });
    },
    { scope: cardRef }
  );

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, { scale: 1.02, duration: 0.3, ease: "power2.out" });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !xTo.current || !yTo.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    const repulsionFactor = -0.15;

    xTo.current(mouseX * repulsionFactor);
    yTo.current(mouseY * repulsionFactor);
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
    if (xTo.current && yTo.current) {
      xTo.current(0);
      yTo.current(0);
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "feature-card relative overflow-hidden bg-background/50 p-8 h-full transition-colors hover:bg-background/80 will-change-transform",
        className
      )}
      {...props}
    >
      <div className="-mt-4 -ml-20 mask-[radial-gradient(farthest-side_at_top,white,transparent)] pointer-events-none absolute top-0 left-1/2 size-full opacity-50">
        <GridPattern
          className="absolute inset-0 size-full stroke-foreground/10"
          height={40}
          width={40}
          x={5}
        />
      </div>

      <div className="relative z-10 pointer-events-none">
        <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-white/5 p-3 text-white ring-1 ring-white/10 shadow-lg shadow-white/5">
          {feature.icon}
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {feature.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

const features: FeatureType[] = [
  {
    title: "Next.js 14",
    icon: (
      <svg viewBox="0 0 180 180" className="w-10 h-10 fill-white">
        <mask height="180" id="mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#mask0_408_134)">
          <circle cx="90" cy="90" data-circle="true" fill="black" r="90" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)" />
          <rect fill="url(#paint1_linear_408_134)" height="72" width="12" x="115" y="54" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    description: "Server Components & Streaming. The future of React, available today.",
  },
  {
    title: "GSAP",
    icon: (<svg viewBox="0 0 24 24" className="w-10 h-10 text-green-400 fill-current"><path d="M9.83 7.59c.817.005 1.437.238 1.842.692c.383.431.567 1.054.547 1.85l-.014.061a.16.16 0 0 1-.148.095h-1.659a.2.2 0 0 1-.199-.195q.002-.634-.39-.71l-.12-.011c-.342 0-.564.211-.57.579c-.007.41.225.783.885 1.423c.868.816 1.217 1.539 1.2 2.493c-.027 1.544-1.077 2.543-2.673 2.543c-.815 0-1.438-.219-1.853-.649c-.42-.437-.612-1.078-.572-1.906a.17.17 0 0 1 .049-.112a.16.16 0 0 1 .112-.045h1.716a.2.2 0 0 1 .069.017a.17.17 0 0 1 .083.098q.008.03.002.06c-.019.298.034.521.151.645a.4.4 0 0 0 .311.121c.317 0 .503-.225.51-.615c.006-.337-.102-.634-.682-1.232c-.751-.734-1.424-1.492-1.403-2.684a2.48 2.48 0 0 1 .774-1.781c.514-.482 1.216-.737 2.032-.737m-5.783.028c.747-.006 1.334.224 1.742.685c.432.487.651 1.221.652 2.182a.16.16 0 0 1-.161.158H4.479a.13.13 0 0 1-.084-.036a.13.13 0 0 1-.035-.085c-.014-.623-.188-.946-.532-.984l-.071-.004c-.69.001-1.097.938-1.313 1.458a5.5 5.5 0 0 0-.426 2.301c.015.366.074.88.42 1.093c.308.189.747.064 1.013-.146c.265-.209.479-.571.569-.901q.02-.07.001-.098q-.01-.011-.032-.015l-.504-.004a.18.18 0 0 1-.129-.06a.1.1 0 0 1-.025-.05a.1.1 0 0 1 0-.056l.316-1.374a.18.18 0 0 1 .157-.134v-.003h3.035l.021.001c.079.01.135.084.134.164v.004l-.316 1.371c-.017.078-.095.135-.184.135h-.381a.064.064 0 0 0-.061.046c-.352 1.194-.829 2.016-1.458 2.509c-.536.42-1.195.616-2.077.616c-.792 0-1.326-.255-1.779-.758c-.598-.666-.845-1.754-.695-3.067c.27-2.463 1.546-4.948 4.004-4.948m16.969.132c2.01 0 3.014.912 2.983 2.711c-.037 2.108-1.321 3.658-3.254 4.016q-.413.073-.833.068l-.934-.004a.06.06 0 0 0-.058.057q0 .015.008.029a.1.1 0 0 0 .022.021l.794.414q.098.053.076.164l-.207.933c-.017.078-.08.123-.171.123h-1.703a.2.2 0 0 1-.071-.015a.2.2 0 0 1-.058-.044a.12.12 0 0 1-.025-.107l1.896-8.241c.019-.086.1-.124.172-.124zm-3.743.012a.2.2 0 0 1 .051.033a.2.2 0 0 1 .034.052a.2.2 0 0 1 .011.059l-.011 8.213a.14.14 0 0 1-.003.058a.14.14 0 0 1-.081.091a.14.14 0 0 1-.064.013h-1.813a.16.16 0 0 1-.111-.045a.2.2 0 0 1-.033-.051a.2.2 0 0 1-.012-.06l.039-.797c.002-.087 0-.111-.051-.117l-.068-.002h-1.714c-.124 0-.133.011-.177.125l-.356.857q-.048.09-.192.09h-1.795c-.109 0-.187-.108-.146-.209l3.718-8.199c.025-.049.063-.123.149-.123h2.566q.03 0 .059.012M15.5 9.985c-.008-.032-.034-.029-.055.013a1 1 0 0 0-.04.093l-1.284 3.183l-.016.048q-.002.01-.001.019l.007.017a.04.04 0 0 0 .015.012a.04.04 0 0 0 .017.006l1.072.014c.119-.01.125-.016.137-.137c.002-.043.154-3.231.148-3.268m4.612-.403a.06.06 0 0 0-.04.017a.06.06 0 0 0-.018.04a.06.06 0 0 0 .03.051l.842.445c.042.023.043.063.029.132c-.007.031-.54 2.375-.539 2.377c.003.003.019.011.099.011h.036c.895-.036 1.383-1.094 1.401-2.121c.009-.555-.18-.896-.523-.946l-.071-.006z" /></svg>),
    description: "Cinematic Interactions. Choreographed motion that feels alive.",
  },
  {
    title: "Framer Motion",
    icon: (<svg viewBox="0 0 24 24" className="w-10 h-10"><path fill="currentColor" d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" /></svg>),
    description: "Fluid Gestures. Natural, physics-based movements.",
  },
  {
    title: "Tailwind CSS",
    icon: (<svg viewBox="0 0 24 24" className="w-10 h-10 text-sky-400 fill-current"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" /></svg>),
    description: "Utility-First Precision. Styling without compromise.",
  },
];

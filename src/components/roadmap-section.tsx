import { useRef } from "react";
import { CheckCircle2, Circle, Clock, ArrowRight } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  date: string;
  status: "completed" | "in-progress" | "upcoming";
}

const roadmapData: RoadmapItem[] = [
  {
    id: "1",
    title: "Project Inception",
    description: "Initial concept, research, and design system setup.",
    date: "Q4 2025",
    status: "completed",
  },
  {
    id: "2",
    title: "Core Components",
    description:
      "Building the foundational UI elements (Avatar ,Button, Input, TextArea, Separator, Switch, TextArea, Tooltip).",
    date: "Jan 2026",
    status: "completed",
  },
  {
    id: "3",
    title: "Working on Library Package",
    description:
      "Setup the Library package for Docs Section",
    date: "Jan 2026",
    status: "in-progress",
  },
  {
    id: "4",
    title: "Documentation v1",
    description:
      "Comprehensive docs with interactive examples and code snippets.",
    date: "Not Fixed",
    status: "upcoming",
  },
  {
    id: "5",
    title: "Community Launch",
    description: "Public release and community engagement initiatives.",
    date: "Not Fixed",
    status: "upcoming",
  },
];

export function RoadmapSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-32 pb-24 bg-background overflow-hidden"
      id="roadmap"
    >
      {/* Subtle background gradient - very minimal */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-transparent pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Clean Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-muted/30 mb-6">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
            </span>
            <span className="text-xs font-medium text-muted-foreground tracking-wide">ROADMAP</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Product Roadmap
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Our journey to build the ultimate UI library. Here's what we've accomplished and what's ahead.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Clean Timeline */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 md:translate-x-0 h-full z-0">
            <svg
              className="w-full h-full overflow-visible"
              preserveAspectRatio="none"
              viewBox="0 0 1 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="roadmap-gradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              {/* Base Track */}
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100%"
                vectorEffect="non-scaling-stroke"
                className="stroke-border"
                strokeWidth="1"
              />
              {/* Animated Progress */}
              <motion.line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100%"
                vectorEffect="non-scaling-stroke"
                stroke="url(#roadmap-gradient)"
                strokeWidth="2"
                style={{ pathLength: scaleY }}
              />
            </svg>
          </div>

          <div className="space-y-12 md:space-y-16">
            {roadmapData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className={cn(
                    "relative flex items-center md:justify-between group",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />

                  {/* Timeline Node - Minimal */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border-2 border-background bg-card z-10 shadow-sm transition-all duration-300 group-hover:scale-110">
                    {item.status === "completed" && (
                      <div className="rounded-full bg-green-500/10 p-1.5">
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-500" strokeWidth={2.5} />
                      </div>
                    )}
                    {item.status === "in-progress" && (
                      <div className="relative flex items-center justify-center w-full h-full">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-primary/20 animate-ping"></span>
                        <div className="rounded-full bg-primary/10 p-1.5 relative">
                          <Clock className="w-5 h-5 text-primary" strokeWidth={2.5} />
                        </div>
                      </div>
                    )}
                    {item.status === "upcoming" && (
                      <div className="rounded-full bg-muted p-1.5">
                        <Circle className="w-5 h-5 text-muted-foreground/50" strokeWidth={2} />
                      </div>
                    )}
                  </div>

                  {/* Content Card - Clean & Typography Focused */}
                  <div className="w-full md:w-5/12 pl-16 md:pl-0">
                    <div
                      className={cn(
                        "relative p-6 md:p-7 rounded-2xl border transition-all duration-300",
                        "bg-card/50 backdrop-blur-sm",
                        "hover:bg-card/80 hover:shadow-lg hover:-translate-y-0.5",
                        // Clean border
                        item.status === "in-progress"
                          ? "border-primary/30 shadow-sm shadow-primary/5"
                          : "border-border/50 hover:border-border"
                      )}
                    >
                      {/* Status Badge - Minimal */}
                      {item.status === "in-progress" && (
                        <div className="absolute -top-3 right-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-background border border-primary/30 text-xs font-medium text-primary shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            In Progress
                          </span>
                        </div>
                      )}

                      {/* Date & Arrow */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                          {item.date}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                      </div>

                      {/* Title - Typography Focus */}
                      <h3
                        className={cn(
                          "text-xl md:text-2xl font-semibold mb-2.5 tracking-tight transition-colors duration-200",
                          item.status === "in-progress"
                            ? "text-foreground"
                            : "text-foreground group-hover:text-primary"
                        )}
                      >
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

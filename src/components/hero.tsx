import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

export function TypographyH1() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="flex flex-col mx-auto max-w-7xl text-center px-4">
        {/* Top row - Single Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center rounded-full border border-border/40 bg-muted/30 px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-muted/50">
            <span className="font-medium px-2">Added New Blocks</span>
            <div className="h-4 w-[1px] bg-border/60 mx-1" />
            <a
              href="#"
              className="flex items-center gap-1 px-2 font-medium hover:text-foreground transition-colors"
            >
              View Changelog <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Sub heading */}
        <h3 className="flex flex-wrap items-center justify-center gap-2 text-xl font-medium text-muted-foreground sm:text-2xl md:text-3xl mb-3">
          Beautiful
          <Avatar className="h-8 w-8 border-2 border-background">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-foreground font-bold">
            shadcn/ui
          </span>
          Blocks
        </h3>

        {/* Main heading */}
        {/* Main heading */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-foreground">
          The Opinionated UI System <br className="hidden md:block" />
          for <span className="text-muted-foreground">Frontend Engineers.</span>
        </h1>

        {/* Description */}
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg leading-relaxed mb-8">
          Ship accessible, animated interfaces with strong defaults.
          Built on Radix UI, designed for speed, and free of prop-soup.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="outline" size="default" className="h-10 px-6 rounded-full border-border/50 bg-background/50 backdrop-blur-sm">
            Explore
          </Button>
          <Button size="default" className="h-10 px-6 rounded-full bg-foreground text-background hover:opacity-90">
            Get full Access
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import profile from "../assets/profile.png";
import profile2 from "../assets/profile2.png";
export function Hero() {
  return (
    <section className="w-full py-10 md:py-22 flex gap-3 flex-col items-center justify-center text-center px-1   ">
      {/* Top Badge */}
      <div className="inline-flex items-center rounded-full border border-border/40 bg-background/50 backdrop-blur-sm p-1 pr-4">
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
      <div className="flex items-center justify-center gap-2  text-xl sm:text-2xl md:text-3xl text-muted-foreground">
        <span className="font-normal tracking-tight text-muted-foreground">
          Premium
        </span>
        <div className="flex -space-x-3">
          <Avatar className="h-10 w-10 border-2 border-background">
            <AvatarImage src={profile} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="h-10 w-10 border-2 border-background">
            <AvatarImage src={profile2} className="object-cover" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </div>
        <span className="font-medium tracking-tight text-foreground">
          Component Library
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl  text-foreground leading-[1.1]">
        Build Beautiful Interfaces. <span className="text-sky-300">Fast.</span> <br className="hidden md:block" />
        Without Compromising on Design.
      </h1>

      <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
        Carefully designed components for Premium, accessible, production-ready interfaces.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          size="lg"
          className="h-fit px-3  py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-medium text-1xl"
        >
          Get Started
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-fit px-3 py-2 rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground font-medium text-1xl"
        >
          View Component
        </Button>
      </div>
    </section>
  );
}

import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Zap, Settings2, Code2, Palette, Figma } from "lucide-react";
import type React from "react";
// import acenternity from "../assets/image.png";
type FeatureType = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

export function FeatureSection() {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-medium text-2xl md:text-4xl lg:text-5xl">
          Build faster. Ship better.
        </h2>
        <p className="mt-4 text-balance text-muted-foreground text-sm md:text-base">
          A component system that respects your time and your code quality.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border">
        <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
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
  return (
    <div
      className={cn("relative overflow-hidden bg-background p-6", className)}
      {...props}
    >
      <div className="-mt-2 -ml-20 mask-[radial-gradient(farthest-side_at_top,white,transparent)] pointer-events-none absolute top-0 left-1/2 size-full">
        <GridPattern
          className="absolute inset-0 size-full stroke-foreground/20"
          height={40}
          width={40}
          x={5}
        />
      </div>

      <div className="text-foreground/75">{feature.icon}</div>

      <h3 className="mt-10 text-sm md:text-base">{feature.title}</h3>
      <p className="relative z-20 mt-2 font-light text-muted-foreground text-xs">
        {feature.description}
      </p>
    </div>
  );
}

const features: FeatureType[] = [
  {
    title: "Motion Built-In",
    icon: <Zap className="size-6" strokeWidth={1} />,
    description: "Micro-interactions baked in, not added as an afterthought.",
  },
  {
    title: "Opinionated Defaults",
    icon: <Settings2 className="size-6" strokeWidth={1} />,
    description: "Spend less time configuring and more time shipping.",
  },
  {
    title: "Minimal API",
    icon: <Code2 className="size-6" strokeWidth={1} />,
    description: "Powerful components without the configuration fatigue.",
  },
  {
    title: "Token-Based Theming",
    icon: <Palette className="size-6" strokeWidth={1} />,
    description: "Seamless dark mode and branding via CSS variables.",
  },
  {
    title: "Accessible Core",
    icon: (
      <svg
        width="76" // Keeping Radix logo as it represents the core
        height="24"
        viewBox="0 0 76 24"
        fill="currentcolor"
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-auto"
      >
        <path d="M43.9022 20.0061H46.4499C46.2647 19.0375 46.17 18.1161 46.17 17.0058V12.3753C46.17 9.25687 44.3893 7.72127 41.1943 7.72127C38.3003 7.72127 36.3324 9.23324 36.0777 11.8083H38.9254C39.0181 10.698 39.8052 9.96561 41.1017 9.96561C42.4446 9.96561 43.3243 10.6743 43.3243 12.1391V12.7061L39.8052 13.1077C37.4206 13.3912 35.5684 14.3834 35.5684 16.7931C35.5684 18.9666 37.2353 20.2659 39.5274 20.2659C41.4027 20.2659 42.9845 19.4863 43.6401 18.1161C43.6689 18.937 43.9022 20.0061 43.9022 20.0061ZM40.3377 18.1634C39.157 18.1634 38.5087 17.5727 38.5087 16.6278C38.5087 15.3757 39.4579 15.0922 40.7082 14.9268L43.3243 14.6197V15.352C43.3243 17.242 41.8658 18.1634 40.3377 18.1634ZM56.2588 20.0061H59.176V3H56.2125V9.96561C55.6569 8.76075 54.3141 7.72127 52.4851 7.72127C49.3058 7.72127 47.099 10.2963 47.099 14.0054C47.099 17.7381 49.3058 20.2896 52.4851 20.2896C54.2678 20.2896 55.68 19.2973 56.2588 18.0925V20.0061ZM56.282 14.218C56.282 16.5569 55.1938 18.0689 53.3185 18.0689C51.3969 18.0689 50.1856 16.486 50.1856 14.0054C50.1856 11.5485 51.3969 9.94198 53.3185 9.94198C55.1938 9.94198 56.282 11.454 56.282 13.7928V14.218ZM60.9066 5.97304H64.0553V3.01996H60.9066V5.97304ZM60.9992 20.0061H63.9627V8.00476H60.9992V20.0061ZM67.6638 20.0061L70.6041 15.8954L73.5212 20.0061H76.9246L72.3636 13.7219L76.5542 8.00476H73.3823L70.7661 11.7138L68.1731 8.00476H64.7697L69.0066 13.8637L64.4919 20.0061H67.6638Z"></path>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.9132 20V14.0168H28.7986L32.4513 20H35.7006L31.6894 13.5686C33.5045 12.986 35.0955 11.507 35.0955 9.01961C35.0955 5.7479 32.7994 4 28.9571 4H22V20H24.9132ZM24.9132 6.35294V11.6863H28.821C31.0395 11.6863 32.1599 10.7675 32.1599 9.01961C32.1599 7.27171 30.9395 6.35294 28.621 6.35294H24.9132Z"
        ></path>
        <path d="M7 23C3.13401 23 0 19.6422 0 15.5C0 11.3578 3.13401 8 7 8V23Z"></path>
        <path d="M7 0H0V7H7V0Z"></path>
        <path d="M11.5 7C13.433 7 15 5.433 15 3.5C15 1.567 13.433 0 11.5 0C9.56704 0 8 1.567 8 3.5C8 5.433 9.56704 7 11.5 7Z"></path>
      </svg>
    ),
    description: "Powered by Radix UI for robust screen reader support.",
  },
  {
    title: "Figma Consistency",
    icon: <Figma className="size-6" strokeWidth={1} />,
    description: "Code components that perfectly match design intent.",
  },
];

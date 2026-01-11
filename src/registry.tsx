import { Button } from "@/components/button/button"
import ButtonPreviewIdentity from "@/components/button/previews/button-identity"
import ButtonPreviewVariants from "@/components/button/previews/button-variants"
import ButtonPreviewComposition from "@/components/button/previews/button-composition"
import ButtonPreviewSizes from "@/components/button/previews/button-sizes"
import ButtonPreviewIcons from "@/components/button/previews/button-icons"
import ButtonPreviewContexts from "@/components/button/previews/button-contexts"
import InputPreviewSizes from "@/components/input/previews/input-sizes"
import InputPreviewVariants from "@/components/input/previews/input-variants"
import AvatarPreviewSizes from "@/components/avatar/previews/avatar-sizes"
import AvatarPreviewGroups from "@/components/avatar/previews/avatar-groups"
import AvatarPreviewVariants from "@/components/avatar/previews/avatar-variants"
import AvatarPreviewGallery from "@/components/avatar/previews/avatar-gallery"
import SwitchPreviewVariants from "@/components/switch/previews/switch-variants"
import SwitchPreviewCard from "@/components/switch/previews/switch-card"
import TextareaPreviewVariants from "@/components/textarea/previews/textarea-variants"
import TextareaPreviewForm from "@/components/textarea/previews/textarea-form"
import RadioPreviewVariants from "@/components/radio/previews/radio-variants"
import RadioPreviewCard from "@/components/radio/previews/radio-card"
import TooltipPreviewPositions from "@/components/tooltip/previews/tooltip-positions"
import SeparatorPreviewHorizontal from "@/components/separator/previews/separator-horizontal"
import SeparatorPreviewVertical from "@/components/separator/previews/separator-vertical"
import { Mail, Loader2, ChevronRight } from "lucide-react"
export const Index: Record<string, any> = {
  "switch-variants": {
    component: () => <SwitchPreviewVariants />,
    code: `import { useState } from "react";
import { Switch } from "@/components/switch";
import { Label } from "@/components/label";
import { Plane, Bluetooth, Bell, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SwitchPreviewVariants() {
    const [airplaneMode, setAirplaneMode] = useState(false);
    const [bluetooth, setBluetooth] = useState(true);
    const [notifications, setNotifications] = useState(false);

    const getRowClasses = (isActive: boolean) => {
        return cn(
            "flex items-center justify-between p-4 rounded-xl border transition-all duration-300 group",
            isActive
                ? "border-primary/10 bg-primary/5 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] dark:bg-white/5 dark:border-white/10"
                : "border-transparent hover:bg-muted/30"
        );
    };

    return (
        <div className="flex flex-col gap-2 w-full max-w-md">
            <div className={getRowClasses(airplaneMode)}>
                <div className="flex items-center gap-3">
                    <Plane className={cn("size-4 transition-colors", airplaneMode ? "text-primary" : "text-muted-foreground/60 group-hover:text-foreground/80")} />
                    <Label htmlFor="airplane-mode" className={cn("font-medium text-sm cursor-pointer transition-colors", airplaneMode ? "text-primary" : "text-foreground/90")}>Airplane Mode</Label>
                </div>
                <Switch id="airplane-mode" checked={airplaneMode} onCheckedChange={setAirplaneMode} />
            </div>

            <div className={getRowClasses(bluetooth)}>
                <div className="flex items-center gap-3">
                    <Bluetooth className={cn("size-4 transition-colors", bluetooth ? "text-blue-500" : "text-muted-foreground/60 group-hover:text-foreground/80")} />
                    <Label htmlFor="bluetooth" className="font-medium text-sm cursor-pointer text-foreground/90">Bluetooth</Label>
                </div>
                <Switch id="bluetooth" checked={bluetooth} onCheckedChange={setBluetooth} />
            </div>

            <div className={getRowClasses(notifications)}>
                <div className="flex items-center gap-3">
                    <Bell className={cn("size-4 transition-colors", notifications ? "text-amber-500" : "text-muted-foreground/60 group-hover:text-foreground/80")} />
                    <Label htmlFor="notifications" className="font-medium text-sm cursor-pointer text-foreground/90">Notifications</Label>
                </div>
                <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
            </div>

             <div className="flex items-center justify-between p-4 rounded-xl border border-transparent opacity-40 cursor-not-allowed select-none grayscale">
                <div className="flex items-center gap-3">
                    <Shield className="size-4 text-muted-foreground/80" />
                    <div className="flex flex-col">
                        <Label htmlFor="disabled-setting" className="font-medium text-sm text-muted-foreground">Secure Boot</Label>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground/80">Locked by Admin</span>
                    </div>
                </div>
                <Switch id="disabled-setting" disabled checked />
            </div>
        </div>
    );
}`
  },
  "switch-card": {
    component: () => <SwitchPreviewCard />,
    code: `import { Switch } from "@/components/switch";

export default function SwitchPreviewCard() {
    return (
        <div className="flex items-center justify-between p-5 rounded-2xl bg-zinc-950 dark:bg-black w-full max-w-sm shadow-2xl ring-1 ring-white/10 overflow-hidden relative transition-transform hover:scale-[1.01] duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent opacity-100 pointer-events-none" />

            <div className="flex flex-col items-start gap-1 relative z-10">
                <span className="font-semibold text-base text-white tracking-tight">ProMotion Display</span>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-indigo-200 bg-indigo-500/20 px-1.5 py-0.5 rounded">120Hz</span>
                    <span className="text-xs text-zinc-500">Ultra smooth visuals</span>
                </div>
            </div>
            <Switch id="premium-switch" variant="premium" defaultChecked className="relative z-20" />
        </div>
    );
}`
  },
  "textarea-variants": {
    component: () => <TextareaPreviewVariants />,
    code: `import { Textarea } from "@/components/textarea";

export default function TextareaPreviewVariants() {
    return (
        <div className="space-y-6 w-full max-w-lg">
            <div className="space-y-2">
                <label className="text-sm font-medium">Default</label>
                <Textarea placeholder="Type your message here..." />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Filled</label>
                <Textarea variant="filled" placeholder="Enter description..." />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium">Error State</label>
                <Textarea
                    variant="error"
                    defaultValue="Invalid input content"
                />
                <p className="text-xs text-red-500 font-medium pt-1">Please provide a valid reason.</p>
            </div>
        </div>
    );
}`
  },
  "textarea-form": {
    component: () => <TextareaPreviewForm />,
    code: `import { Textarea } from "@/components/textarea";
import { Button } from "@/components/button";

export default function TextareaPreviewForm() {
    return (
        <div className="rounded-lg border border-slate-200 p-6 dark:border-slate-800 w-full max-w-lg bg-card">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="bio" className="text-sm font-medium">Biography</label>
                    <Textarea
                        id="bio"
                        variant="filled"
                        placeholder="Tell us about yourself"
                        rows={3}
                        autoGrow
                        className="min-h-[80px]"
                    />
                </div>
                <div className="flex justify-end">
                    <Button size="sm">Save Changes</Button>
                </div>
            </div>
        </div>
    );
}`
  },
  "radio-variants": {
    component: () => <RadioPreviewVariants />,
    code: `import { RadioGroup, RadioGroupItem } from "@/components/radio";
import { Label } from "@/components/label";

export default function RadioPreviewVariants() {
    return (
        <div className="flex flex-col items-center gap-8 p-12 w-full max-w-md">
            <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="r1" />
                    <Label htmlFor="r1">Comfortable</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="r2" />
                    <Label htmlFor="r2">Compact</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-three" id="r3" />
                    <Label htmlFor="r3">Condensed</Label>
                </div>
            </RadioGroup>
        </div>
    );
}`
  },
  "radio-card": {
    component: () => <RadioPreviewCard />,
    code: `import { RadioGroup, RadioGroupItem } from "@/components/radio";
import { Label } from "@/components/label";

export default function RadioPreviewCard() {
    return (
        <div className="flex flex-col items-center gap-8 p-12 w-full max-w-xl">
            <RadioGroup defaultValue="high-fi">
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors w-64 border border-transparent hover:border-border/50 cursor-pointer" onClick={() => document.getElementById('r-high')?.click()}>
                    <RadioGroupItem value="high-fi" id="r-high" variant="premium" />
                    <div className="flex flex-col gap-0.5">
                        <Label htmlFor="r-high" className="cursor-pointer font-medium">High Fidelity</Label>
                        <span className="text-xs text-muted-foreground">Lossless audio quality</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors w-64 border border-transparent hover:border-border/50 cursor-pointer" onClick={() => document.getElementById('r-balanced')?.click()}>
                    <RadioGroupItem value="balanced" id="r-balanced" variant="premium" />
                    <div className="flex flex-col gap-0.5">
                        <Label htmlFor="r-balanced" className="cursor-pointer font-medium">Balanced</Label>
                        <span className="text-xs text-muted-foreground">Standard streaming quality</span>
                    </div>
                </div>
            </RadioGroup>
        </div>
    );
}`
  },
  "tooltip-positions": {
    component: () => <TooltipPreviewPositions />,
    code: `import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/tooltip";
import { Button } from "@/components/button";

export default function TooltipPreviewPositions() {
    return (
        <TooltipProvider>
            <div className="flex gap-8 items-center justify-center py-12">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Hover Top</Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                        <p>Top Tooltip</p>
                    </TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Hover Bottom</Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Bottom Tooltip</p>
                    </TooltipContent>
                </Tooltip>

                 <Tooltip>
                    <TooltipTrigger asChild>
                        <Button>Premium Dark</Button>
                    </TooltipTrigger>
                    <TooltipContent variant="premium">
                        <p>Premium Dark Mode</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    );
}`
  },
  "separator-horizontal": {
    component: () => <SeparatorPreviewHorizontal />,
    code: `import { Separator } from "@/components/separator";

export default function SeparatorPreviewHorizontal() {
    return (
        <div className="flex flex-col gap-4 p-6 border rounded-xl bg-card w-full max-w-md">
            <h2 className="font-semibold text-lg">Horizontal Variants</h2>

            <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Default</p>
                <Separator />
            </div>

            <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Muted</p>
                <Separator variant="muted" />
            </div>

            <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Dashed</p>
                <Separator variant="dashed" />
            </div>
        </div>
    );
}`
  },
  "separator-vertical": {
    component: () => <SeparatorPreviewVertical />,
    code: `import { Separator } from "@/components/separator";

export default function SeparatorPreviewVertical() {
    return (
        <div className="flex gap-4 p-6 border rounded-xl bg-card h-32 items-center justify-center w-full max-w-md">
            <div className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium">Standard</span>
                <div className="flex h-10 items-center gap-4 text-sm">
                    <span>Blog</span>
                    <Separator orientation="vertical" />
                    <span>Docs</span>
                    <Separator orientation="vertical" />
                    <span>Source</span>
                </div>
            </div>
        </div>
    );
}`
  },
  "button-identity": {
    component: () => <ButtonPreviewIdentity />,
    code: `import { Button } from "@/components/button/button"

export default function ButtonPreviewIdentity() {
  return (
    <div className="flex flex-col gap-8 items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-4xl">
        <div className="flex items-center justify-center">
          <Button size="lg" className="w-48 h-14 text-base shadow-xl">
            Commit Action
          </Button>
        </div>
        <div className="space-y-4 text-sm text-muted-foreground">
          <p><strong className="text-foreground">Rest:</strong> Subtle "Lip" highlight + Elevation.</p>
          <p><strong className="text-foreground">Hover:</strong> Light intensifies, shadow grows.</p>
          <p><strong className="text-foreground">Active:</strong> Mechanical depression (1px), light blocked (lip dims), shadow collapses.</p>
        </div>
      </div>
    </div>
  )
}`
  },
  "button-variants": {
    component: () => <ButtonPreviewVariants />,
    code: `import { Button } from "@/components/button/button"

export default function ButtonPreviewVariants() {
  return (
    <div className="flex flex-wrap gap-4 justify-center w-full max-w-4xl">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}`
  },
  "button-composition": {
    component: () => <ButtonPreviewComposition />,
    code: `import { Button } from "@/components/button/button"
import { Mail, ArrowRight, Loader2 } from "lucide-react"

export default function ButtonPreviewComposition() {
  return (
    <div className="flex flex-wrap gap-4 justify-center w-full max-w-4xl">
      <Button>
        <Mail className="mr-2" /> Login
      </Button>
      <Button variant="secondary">
        Next Step <ArrowRight className="ml-2" />
      </Button>
      <Button disabled>
        <Loader2 className="mr-2 animate-spin" />
        Processing
      </Button>
    </div>
  )
}`
  },
  "button-sizes": {
    component: () => <ButtonPreviewSizes />,
    code: `import { Button } from "@/components/button/button"

export default function ButtonPreviewSizes() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 w-full max-w-4xl">
      <div className="flex flex-col items-center gap-2">
        <Button size="sm">Small (0.5px)</Button>
        <span className="text-xs text-muted-foreground">Low Travel</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button>Default (0.75px)</Button>
        <span className="text-xs text-muted-foreground">Standard</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button size="lg">Large (1px)</Button>
        <span className="text-xs text-muted-foreground">Deep Travel</span>
      </div>
    </div>
  )
}`
  },
  "button-icons": {
    component: () => <ButtonPreviewIcons />,
    code: `import { Button } from "@/components/button/button"
import { Settings, Bell, Plus } from "lucide-react"

export default function ButtonPreviewIcons() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-12 w-full max-w-4xl">
      <div className="flex flex-col items-center gap-4">
        <Button size="icon-sm" variant="secondary" aria-label="Small">
          <Settings />
        </Button>
        <code className="text-xs text-muted-foreground">icon-sm (32px)</code>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Button size="icon-md" variant="secondary" aria-label="Medium">
          <Bell />
        </Button>
        <code className="text-xs text-muted-foreground">icon-md (36px)</code>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Button size="icon-lg" variant="secondary" aria-label="Large">
          <Plus />
        </Button>
        <code className="text-xs text-muted-foreground">icon-lg (40px)</code>
      </div>
    </div>
  )
}`
  },
  "button-contexts": {
    component: () => <ButtonPreviewContexts />,
    code: `import { Button } from "@/components/button/button"
import { Bold, Italic, Underline, Share2, Search, Bell, Trash2, X } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar/avatar"

export default function ButtonPreviewContexts() {
  return (
    <div className="grid gap-8 md:grid-cols-2 w-full max-w-4xl">
      {/* Toolbar */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Dense Toolbar</h3>
        <div className="flex items-center gap-1 p-1 border rounded-lg bg-background w-fit">
          <Button size="icon-sm" variant="ghost"> <Bold /> </Button>
          <Button size="icon-sm" variant="ghost"> <Italic /> </Button>
          <Button size="icon-sm" variant="ghost"> <Underline /> </Button>
          <div className="w-px h-4 bg-border mx-1" />
          <Button size="icon-sm" variant="ghost"> <Share2 /> </Button>
        </div>
      </div>

      {/* App Header */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">App Header</h3>
        <div className="flex items-center justify-between p-4 border rounded-lg bg-background shadow-sm">
          <span className="font-semibold px-2">Dashboard</span>
          <div className="flex items-center gap-2">
            <Button size="icon-md" variant="ghost"> <Search /> </Button>
            <Button size="icon-md" variant="ghost"> <Bell /> </Button>
            <Avatar className="ml-2 size-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {/* Destructive */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Destructive / Close</h3>
        <div className="flex gap-4">
          <Button size="icon-md" variant="destructive"> <Trash2 /> </Button>
          <Button size="icon-md" variant="outline"> <X /> </Button>
        </div>
      </div>
    </div>
  )
}`
  },
  "button-with-icon": {
    component: () => (
      <div className="flex gap-2">
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button variant="secondary">
          Next Step <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    ),
    code: `import { Button } from "@/components/button/button"
import { Mail, ChevronRight } from "lucide-react"

export function ButtonWithIcon() {
  return (
    <div className="flex gap-2">
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
      <Button variant="secondary">
        Next Step <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}
`
  },
  "button-loading": {
    component: () => (
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    ),
    code: `import { Button } from "@/components/button/button"
import { Loader2 } from "lucide-react"

export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  )
}
`
  },

  "input-sizes": {
    component: () => <InputPreviewSizes />,
    code: `import { Input } from "@/components/input/input"
import { Button } from "@/components/button/button"

export default function InputPreviewSizes() {
  return (
    <div className="grid gap-6 w-full max-w-4xl">
      <div className="flex items-center justify-center gap-4">
        <span className="w-20 text-xs text-muted-foreground text-right">Small (32px)</span>
        <Input size="sm" placeholder="Email address" className="max-w-xs" />
        <Button size="sm">Action</Button>
      </div>
      <div className="flex items-center justify-center gap-4">
        <span className="w-20 text-xs text-muted-foreground text-right">Default (36px)</span>
        <Input placeholder="Email address" className="max-w-xs" />
        <Button>Action</Button>
      </div>
      <div className="flex items-center justify-center gap-4">
        <span className="w-20 text-xs text-muted-foreground text-right">Large (40px)</span>
        <Input size="lg" placeholder="Email address" className="max-w-xs" />
        <Button size="lg">Action</Button>
      </div>
    </div>
  )
}`
  },
  "input-variants": {
    component: () => <InputPreviewVariants />,
    code: `import { Input } from "@/components/input/input"
import { AlertCircle } from "lucide-react"

export default function InputPreviewVariants() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
      <div className="space-y-4">
        <Input placeholder="Default surface" />
        <Input variant="filled" placeholder="Filled variant" />
        <Input variant="error" placeholder="Error state" startContent={<AlertCircle className="text-destructive" />} />
        <Input disabled placeholder="Disabled input" />
      </div>
      <div className="flex flex-col justify-center space-y-4 px-8 text-sm text-muted-foreground">
        <p><strong className="text-foreground">Default:</strong> Clean, machined border.</p>
        <p><strong className="text-foreground">Filled:</strong> Higher contrast background.</p>
        <p><strong className="text-foreground">Error:</strong> Shake animation + red border.</p>
      </div>
    </div>
  )
}`
  },
  "avatar-sizes": {
    component: () => <AvatarPreviewSizes />,
    code: `import { Avatar, AvatarBadge } from "@/components/avatar/avatar"

export default function AvatarPreviewSizes() {
  return (
    <div className="flex flex-wrap items-end justify-center gap-8 w-full max-w-4xl">
      <div className="flex flex-col items-center gap-2">
        <Avatar size="sm" fallback="SM">
          <AvatarBadge size="sm" status="online" />
        </Avatar>
        <span className="text-xs text-muted-foreground">sm</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="md" fallback="MD">
          <AvatarBadge size="md" status="busy" />
        </Avatar>
        <span className="text-xs text-muted-foreground">md</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="lg" fallback="LG">
          <AvatarBadge size="lg" status="away" />
        </Avatar>
        <span className="text-xs text-muted-foreground">lg</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Avatar size="xl" fallback="XL">
          <AvatarBadge size="xl" status="count"><span className="text-[10px]">3</span></AvatarBadge>
        </Avatar>
        <span className="text-xs text-muted-foreground">xl</span>
      </div>
    </div>
  )
}`
  },
  "avatar-groups": {
    component: () => <AvatarPreviewGroups />,
    code: `import { Avatar, AvatarGroup } from "@/components/avatar/avatar"

export default function AvatarPreviewGroups() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-16 w-full max-w-4xl">
      <div className="flex flex-col gap-4 items-center">
        <span className="text-sm font-medium text-muted-foreground">Regular Stack</span>
        <AvatarGroup size="md">
          <Avatar src="https://github.com/shadcn.png" fallback="CN" />
          <Avatar src="https://github.com/vercel.png" fallback="VC" />
          <Avatar src="https://github.com/nextjs.png" fallback="NJ" />
        </AvatarGroup>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <span className="text-sm font-medium text-muted-foreground">With Limit (+2)</span>
        <AvatarGroup size="lg" limit={3}>
          <Avatar src="https://github.com/shadcn.png" fallback="CN" />
          <Avatar src="https://github.com/vercel.png" fallback="VC" />
          <Avatar src="https://github.com/nextjs.png" fallback="NJ" />
          <Avatar src="https://github.com/react.png" fallback="RC" />
          <Avatar fallback="UD" />
        </AvatarGroup>
      </div>
    </div>
  )
}`
  },
  "avatar-variants": {
    component: () => <AvatarPreviewVariants />,
    code: `import { Avatar } from "@/components/avatar/avatar"
import { User } from "lucide-react"

export default function AvatarPreviewVariants() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-16 w-full max-w-4xl">
      <div className="flex flex-col items-center gap-4">
        <Avatar variant="default" size="lg" fallback={<User className="size-6" />} />
        <span className="text-xs text-muted-foreground">Default (Recessed)</span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Avatar variant="premium" size="lg" fallback={<User className="size-6" />} />
        <span className="text-xs text-muted-foreground">Premium (Detailed)</span>
      </div>
    </div>
  )
}`
  },
  "avatar-gallery": {
    component: () => <AvatarPreviewGallery />,
    code: `import { Avatar } from "@/components/avatar/avatar"

export default function AvatarPreviewGallery() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 w-full max-w-4xl">
      <Avatar src="https://github.com/shadcn.png" fallback="CN" size="xl" />
      <Avatar src="https://github.com/vercel.png" fallback="VC" size="lg" />
      <Avatar src="https://github.com/nextjs.png" fallback="NJ" size="md" />
      <Avatar src="https://github.com/react.png" fallback="RC" size="sm" />
    </div>
  )
}`
  },

}

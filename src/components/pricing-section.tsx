import { Check } from "lucide-react";

export function PricingSection() {
    const features = [
        "Lifetime access & updates",
        "Shadcn CLI",
        "Unlimited Projects",
        "Commercial License",
        "Priority Support",
    ];

    return (
        <section className="relative w-full bg-background py-24 text-foreground overflow-hidden transition-colors duration-300">
            {/* Grid Background Pattern */}
            <div className="absolute inset-0 z-0 flex justify-center pointer-events-none">
                <div className="h-full w-full max-w-7xl grid grid-cols-12 gap-4 opacity-10">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="h-full border-r border-dashed border-border last:border-r-0" />
                    ))}
                </div>
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="mb-16 flex flex-col items-center text-center space-y-4">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Join Early, Save Big
                    </h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-lg">
                        Get full access to UDROID Pro forever — no subscriptions, no hidden fees. Just one payment.
                    </p>
                </div>

                {/* Pricing Card */}
                <div className="mx-auto max-w-md rounded-3xl border border-border bg-card p-8 shadow-2xl transition-colors duration-300">
                    <div className="mb-6 flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-card-foreground">UDROID Pro</h3>
                        <div className="flex gap-2">
                            <span className="rounded-full border border-border bg-muted/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                                Early Access
                            </span>
                            <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                                67% OFF
                            </span>
                        </div>
                    </div>

                    <div className="mb-2 flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-card-foreground">$49.17</span>
                        <span className="text-lg text-muted-foreground line-through">$149</span>
                    </div>
                    <p className="mb-8 text-sm text-muted-foreground">One-Time Payment</p>

                    <button className="mb-8 w-full rounded-full bg-foreground py-3 text-sm font-semibold text-background transition hover:opacity-90">
                        Get Access
                    </button>

                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-foreground">
                                    <Check className="h-3 w-3" />
                                </div>
                                <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

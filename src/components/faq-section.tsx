import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqItems = [
    {
        question: "Can I use UDX UI in production?",
        answer:
            "Yes. UDX UI is open-source and designed for real production use. You can use it freely in personal projects, client work, and commercial applications."
    },
    {
        question: "Is UDX UI React-only?",
        answer:
            "Yes. UDX UI is built specifically for React, with a strong focus on modern patterns, composability, and performance. Other frameworks may be explored later, but React is the priority."
    },
    {
        question: "Who is behind UDX UI?",
        answer:
            "UDX UI is built and maintained by Uday Ahire as an independent product, with a strong focus on production-quality engineering and long-term usability."
    },
    {
        question: "How does UDX UI handle accessibility?",
        answer:
            "Accessibility is a first-class concern. Components follow established WAI-ARIA patterns, support keyboard navigation, and are designed to work reliably with screen readers."
    },
    {
        question: "Will more components be added?",
        answer:
            "Yes. UDX UI is actively evolving. Components are released gradually, only after they meet quality, accessibility, and API stability standards."
    },
];

export function FAQSection() {
    return (
        <section className="relative w-full py-24 sm:py-32 px-4 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Header & Info */}
                    <div className="space-y-8 lg:sticky lg:top-24">
                        <div className="space-y-6">
                            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-foreground">
                                Frequently<br className="hidden sm:block" /> Asked Questions
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                                Everything you need to know about the product and billing. Can’t find the answer you’re looking for?
                            </p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <a href="https://www.linkedin.com/in/uday-ahire-0855b22b4/" target="_blank" rel="noreferrer" className="text-foreground font-medium hover:underline underline-offset-4 decoration-border w-fit transition-all flex items-center gap-2 group">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                udayahire2
                            </a>
                            <p className="text-muted-foreground text-sm">
                                or DM directly on <a href="https://x.com/UdayAhire447195" target="_blank" rel="noreferrer" className="text-foreground hover:underline font-medium">X (Twitter)</a>
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Accordion List */}
                    <div className="w-full">
                        {faqItems.map((item, index) => (
                            <FAQItem key={index} question={item.question} answer={item.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn(
            "border-b border-border/40 transition-all duration-500",
            isOpen ? "border-foreground/20 pb-2" : "hover:border-foreground/20"
        )}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-start justify-between py-6 text-left focus:outline-none group"
            >
                <span className={cn(
                    "text-lg sm:text-xl font-medium tracking-tight pr-8 transition-colors duration-200",
                    isOpen ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                )}>
                    {question}
                </span>
                <span className={cn(
                    "flex-shrink-0 ml-4 mt-1 transition-transform duration-500 text-foreground relative h-5 w-5",
                    isOpen ? "rotate-45" : "rotate-0"
                )}>
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
                </span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.25, delay: 0.1 }
                        }}
                    >
                        <div className="pb-8 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

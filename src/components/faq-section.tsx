import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
    {
        question: "Can I use UDROID for my projects?",
        answer:
            "Haan. UDROID ke saare components abhi free hain aur tum unhe personal aur client projects dono mein bina kisi restriction ke use kar sakte ho."
    },
    {
        question: "Is UDROID free?",
        answer:
            "Haan, abhi UDROID 100% free hai. Mera focus hai ek open aur accessible component library banana jo bina kisi friction ke use ho sake."
    },
    {
        question: "Who is building UDROID?",
        answer:
            "UDROID ek solo-built project hai. Main akela hi iske design, development aur maintenance par kaam kar raha hoon."
    },
    {
        question: "Do you support accessibility?",
        answer:
            "Haan. Components ko accessibility ko dhyaan mein rakh kar design kiya ja raha hai, jaise proper focus states, keyboard navigation aur readable contrast."
    },
    {
        question: "Will you add more components in the future?",
        answer:
            "Haan. Main step by step naye components add kar raha hoon. Kyunki project solo hai, isliye updates quality-focused aur gradual rahenge."
    },
    {
        question: "Will UDROID stay free in the future?",
        answer:
            "Core components hamesha free rahenge. Future mein kuch advanced ya optional features add ho sakte hain, lekin basic usage free hi rahega."
    },
    {
        question: "Can I give feedback or request a component?",
        answer:
            "Bilkul. Feedback aur component suggestions ka direct impact roadmap par padta hai. Tum directly reach out kar sakte ho."
    }
];


export function FAQSection() {
    return (
        <section className="bg-background py-24 text-foreground transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid gap-12 md:grid-cols-2">
                    {/* Left Column: Heading */}
                    <div className="space-y-4">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Frequently<br />Asked Questions
                        </h2>
                        <p className="text-lg text-muted-foreground mr-1">
                            Can't find what you're looking for? reach out anytime via email at <a href="mailto:mail@udroid.com" className="text-foreground underline decoration-muted-foreground underline-offset-4 hover:decoration-foreground">mail@udroid.com</a> or DM me directly on <span className="font-bold text-foreground">X (Twitter)</span>
                        </p>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="divide-y divide-border border-t border-border">
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
        <div className="py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between text-left font-medium transition-colors hover:text-muted-foreground"
            >
                <span>{question}</span>
                <ChevronDown
                    className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}
            >
                <p className="text-muted-foreground">{answer}</p>
            </div>
        </div>
    );
}

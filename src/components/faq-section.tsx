import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
    {
        question: "Can I use UDROID for client projects?",
        answer: "Yes, you can use UDROID for client projects. Our commercial license covers unlimited client projects."
    },
    {
        question: "Can I share my account with others?",
        answer: "No, accounts are per-user. However, we offer team plans for collaborative environments."
    },
    {
        question: "Do you support team collaboration?",
        answer: "Yes, our team plans include collaborative features such as shared projects and role-based access control."
    },
    {
        question: "When will you add more blocks?",
        answer: "We release new blocks and components every week. You can also vote on our roadmap for what you want to see next."
    },
    {
        question: "What can I expect from UDROID in the future?",
        answer: "We are working on AI-generated layouts, advanced interactivity controls, and integrations with popular CMS platforms."
    },
    {
        question: "Will I get free updates after purchase?",
        answer: "Yes! The 'Pro' access is a one-time payment that includes lifetime updates to our component library."
    },
    {
        question: "Can I get a refund?",
        answer: "We offer a 14-day money-back guarantee if you are not satisfied with UDROID, no questions asked."
    }
];

export function FAQSection() {
    return (
        <section className="bg-background py-24 text-foreground transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
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

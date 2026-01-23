import { Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="w-full bg-background/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto border-x border-t border-border/40 flex flex-col items-center justify-between gap-4 py-8 md:h-20 md:flex-row md:py-0 px-4 md:px-8">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built by{" "}
                        <a
                            href="https://www.linkedin.com/in/uday-ahire-0855b22b4/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
                        >
                            Uday Ahire
                        </a>
                        . The source code is available on{" "}
                        <a
                            href="https://github.com/udayahire2"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4 hover:text-foreground transition-colors"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        to="https://github.com/udayahire2"
                        target="_blank"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/uday-ahire-0855b22b4/"
                        target="_blank"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

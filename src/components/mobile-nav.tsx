import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/button/button";
import { cn } from "@/lib/utils";
import { XIcon, Github, Menu } from "lucide-react";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { navLinks } from "@/components/header";
import { AnimatePresence, motion, type Variants } from "framer-motion";

function MenuTwoLineIcon({ className, ...props }: React.ComponentProps<"svg">) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={className}
			{...props}
		>
			<line x1="4" x2="20" y1="9" y2="9" />
			<line x1="4" x2="20" y1="15" y2="15" />
		</svg>
	);
}

const containerVariants: Variants = {
	hidden: { opacity: 0, scale: 0.98, filter: "blur(10px)" },
	show: {
		opacity: 1,
		scale: 1,
		filter: "blur(0px)",
		transition: {
			duration: 0.3,
			ease: [0.32, 0.72, 0, 1],
			staggerChildren: 0.08,
			delayChildren: 0.1
		},
	},
	exit: {
		opacity: 0,
		scale: 0.98,
		filter: "blur(10px)",
		transition: {
			duration: 0.2,
			ease: "easeIn",
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 15, rotateX: -5 },
	show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
	exit: { opacity: 0, y: -10 },
};

function XTwitterIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
			<path
				fill="currentColor"
				d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
			/>
		</svg>
	);
}

export function MobileNav() {
	const [open, setOpen] = useState(false);
	const { isMobile } = useMediaQuery();

	// 🚫 Disable body scroll when open
	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	// Close on resize to desktop
	useEffect(() => {
		if (!isMobile && open) {
			setOpen(false);
		}
	}, [isMobile, open]);

	return (
		<>
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden relative z-50 transition-colors"
				variant="ghost"
				size="icon-sm"
				onClick={() => setOpen(!open)}
			>
				{open ? (
					<XIcon className="h-5 w-5" />
				) : (
					<MenuTwoLineIcon className="h-5 w-5" />
				)}
			</Button>

			{createPortal(
				<AnimatePresence>
					{open && (
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate="show"
							exit="exit"
							className={cn(
								"fixed inset-0 z-40 flex flex-col overflow-hidden bg-background/95 backdrop-blur-2xl md:hidden supports-[backdrop-filter]:bg-background/80",
								"pt-24 px-6 pb-12" // Padding to push content down below header
							)}
							id="mobile-menu"
						>
							{/* Decorative gradient blob */}
							<div className="absolute -top-[20%] -right-[20%] w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

							<div className="flex flex-col h-full relative z-10">
								<nav className="grid gap-y-6">
									{navLinks.map((link) => (
										<motion.div
											variants={itemVariants}
											key={link.label}
										>
											<Link
												className={cn(
													"group flex items-center justify-between text-2xl font-semibold tracking-tight transition-colors hover:text-primary",
												)}
												to={link.href}
												onClick={() => setOpen(false)}
											>
												{link.label}
												<span className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-muted-foreground text-lg">
													→
												</span>
											</Link>
											<div className="h-px bg-border/40 mt-4 w-full" />
										</motion.div>
									))}
								</nav>

								<motion.div
									variants={itemVariants}
									className="mt-auto flex flex-col gap-6"
								>
									<div className="flex items-center gap-4">
										<Link to="https://github.com/udayahire2" target="_blank" className="flex-1">
											<Button variant="outline" className="w-full gap-2">
												<Github className="h-4 w-4" />
												GitHub
											</Button>
										</Link>
										<Link to="https://x.com/UdayAhire447195" target="_blank" className="flex-1">
											<Button variant="outline" className="w-full gap-2">
												<XTwitterIcon className="h-3 w-3 fill-current" />
												Twitter
											</Button>
										</Link>
									</div>

									<Button size="lg" className="w-full text-base font-semibold">
										Get Started
									</Button>
								</motion.div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>,
				document.body
			)}
		</>
	);
}

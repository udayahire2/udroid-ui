import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/button/button";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/components/header";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { docsConfig } from "@/config/docs";

// --- CUSTOM ANIMATED HAMBURGER ---
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
	const variant = isOpen ? "opened" : "closed";
	const top = {
		closed: { rotate: 0, translateY: 0 },
		opened: { rotate: 45, translateY: 6 },
	};
	const center = {
		closed: { opacity: 1 },
		opened: { opacity: 0 },
	};
	const bottom = {
		closed: { rotate: 0, translateY: 0 },
		opened: { rotate: -45, translateY: -6 },
	};
	const lineProps = {
		stroke: "currentColor",
		strokeWidth: 2,
		strokeLinecap: "round" as const,
		vectorEffect: "non-scaling-stroke",
		initial: "closed",
		animate: variant,
		transition: { type: "spring", stiffness: 260, damping: 20 } as const,
	};

	return (
		<svg
			viewBox="0 0 24 24"
			overflow="visible"
			preserveAspectRatio="none"
			width="24"
			height="24"
			className="w-6 h-6"
		>
			<motion.line x1="4" x2="20" y1="6" y2="6" variants={top} {...lineProps} />
			<motion.line x1="4" x2="20" y1="12" y2="12" variants={center} {...lineProps} />
			<motion.line x1="4" x2="20" y1="18" y2="18" variants={bottom} {...lineProps} />
		</svg>
	);
}

const containerVariants: Variants = {
	hidden: { opacity: 0, y: -20, filter: "blur(10px)" },
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 0.4,
			ease: [0.16, 1, 0.3, 1], // Ease Out Expo
			staggerChildren: 0.05,
			delayChildren: 0.1
		},
	},
	exit: {
		opacity: 0,
		y: -10,
		filter: "blur(5px)",
		transition: {
			duration: 0.2,
			ease: "easeIn",
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, x: -20 },
	show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
	exit: { opacity: 0, x: -10 },
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
				className="md:hidden relative z-50 transition-colors bg-transparent hover:bg-transparent"
				variant="ghost"
				size="icon-sm"
				onClick={() => setOpen(!open)}
			>
				<div className="text-foreground">
					<HamburgerIcon isOpen={open} />
				</div>
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
							<div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />
							<div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] pointer-events-none opacity-40" />


							<div className="flex flex-col h-full relative z-10 font-sans">
								<nav className="grid gap-y-6">
									{navLinks.map((link) => (
										<motion.div
											variants={itemVariants}
											key={link.label}
										>
											<Link
												className={cn(
													"group flex items-center gap-3 text-3xl font-medium tracking-tight transition-colors hover:text-primary",
												)}
												to={link.href}
												onClick={() => setOpen(false)}
											>
												{link.label}
												{/* Futurisic Arrow */}
												<span className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-primary text-2xl font-light">
													—›
												</span>
											</Link>
										</motion.div>
									))}

									{/* Docs Sidebar Items in Mobile Menu */}
									{useLocation().pathname.startsWith("/docs") && (
										<motion.div
											variants={itemVariants}
											className="mt-6 border-t border-border/40 pt-6"
										>
											<p className="mb-4 text-xs font-bold text-muted-foreground uppercase tracking-[0.2em]">
												Documentation
											</p>
											<div className="space-y-6 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
												{docsConfig.map((section, index) => (
													<div key={index} className="space-y-3">
														<h4 className="text-sm font-semibold text-foreground tracking-wide">
															{section.title}
														</h4>
														<div className="grid grid-cols-1 gap-2 pl-3 border-l border-border/40">
															{section.items.map((item, idx) => (
																<Link
																	key={idx}
																	to={item.href}
																	onClick={() => setOpen(false)}
																	className="text-base text-muted-foreground hover:text-primary transition-colors block py-0.5"
																>
																	{item.title}
																</Link>
															))}
														</div>
													</div>
												))}
											</div>
										</motion.div>
									)}
								</nav>

								<motion.div
									variants={itemVariants}
									className="mt-auto flex flex-col gap-6"
								>
									<div className="flex items-center gap-4">
										<Link to="https://github.com/udayahire2" target="_blank" className="flex-1">
											<Button variant="outline" className="w-full gap-2 border-primary/20 hover:bg-primary/10">
												<Github className="h-4 w-4" />
												GitHub
											</Button>
										</Link>
										<Link to="https://x.com/UdayAhire447195" target="_blank" className="flex-1">
											<Button variant="outline" className="w-full gap-2 border-primary/20 hover:bg-primary/10">
												<XTwitterIcon className="h-3 w-3 fill-current" />
												Twitter
											</Button>
										</Link>
									</div>

									<Button size="lg" className="w-full text-lg font-medium rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
										Get Started Now
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

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { navLinks } from "@/components/header";
import { AnimatePresence, motion } from "framer-motion";

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

const containerVariants = {
	hidden: { opacity: 0, y: -20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.2,
			ease: "easeOut",
			staggerChildren: 0.05,
		},
	},
	exit: {
		opacity: 0,
		y: -10,
		transition: {
			duration: 0.15,
			ease: "easeIn",
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 10 },
	show: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 0 },
};

export function MobileNav() {
	const [open, setOpen] = React.useState(false);
	const { isMobile } = useMediaQuery();

	// 🚫 Disable body scroll when open
	React.useEffect(() => {
		if (open && isMobile) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		// Cleanup on unmount too
		return () => {
			document.body.style.overflow = "";
		};
	}, [open, isMobile]);

	return (
		<>
			<Button
				aria-controls="mobile-menu"
				aria-expanded={open}
				aria-label="Toggle menu"
				className="md:hidden"
				onClick={() => setOpen(!open)}
				size="icon"
				variant="ghost"
			>
				{open ? (
					<XIcon className="size-5" />
				) : (
					<MenuTwoLineIcon className="size-5" />
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
								"fixed top-16 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden",
								"bg-background/95 backdrop-blur-md supports-backdrop-filter:bg-background/60"
							)}
							id="mobile-menu"
						>
							<div className="flex size-full flex-col p-6">
								<div className="grid gap-y-4">
									{navLinks.map((link) => (
										<motion.div
											variants={itemVariants}
											key={link.label}
										>
											<Link
												className={buttonVariants({
													variant: "ghost",
													className: "justify-start text-base font-medium w-full",
												})}
												to={link.href}
												onClick={() => setOpen(false)}
											>
												{link.label}
											</Link>
										</motion.div>
									))}
								</div>
								<motion.div
									variants={itemVariants}
									className="mt-auto flex flex-col gap-3 pb-8"
								>
									<Button className="w-full" variant="outline">
										Sign In
									</Button>
									<Button className="w-full">Get Started</Button>
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

"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LinkCardProps {
    title: string;
    url: string;
    icon: LucideIcon | React.ComponentType<{ className?: string }>;
    color?: string;
    className?: string;
    index: number;
}

export function LinkCard({ title, url, icon: Icon, color, className, index }: LinkCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
            <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "relative flex items-center p-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:bg-accent/50 hover:border-accent hover:shadow-lg group overflow-hidden",
                    className
                )}
            >
                <div className={cn("p-2.5 rounded-lg bg-background border border-border mr-4 transition-colors group-hover:bg-accent group-hover:text-accent-foreground", color)}>
                    <Icon className="w-5 h-5" />
                </div>

                <span className="font-medium text-lg text-foreground group-hover:text-primary transition-colors">
                    {title}
                </span>

                <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-muted-foreground">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M7 17L17 7" />
                        <path d="M7 7h10v10" />
                    </svg>
                </div>
            </Link>
        </motion.div>
    );
}

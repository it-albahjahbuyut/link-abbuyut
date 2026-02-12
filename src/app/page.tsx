"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Linkedin,
  MessageCircle,
  Mail,
  Globe,
} from "lucide-react";
import Image from "next/image";
import { LinkCard } from "@/components/link-card";
import ModernBackground from "@/components/modern-background";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const links = [
  {
    title: "Instagram",
    url: "https://instagram.com/moh.fahrezi",
    icon: Instagram,
    color: "text-pink-500",
  },
  {
    title: "YouTube",
    url: "https://youtube.com/@fahrezi93",
    icon: Youtube,
    color: "text-red-500",
  },
  {
    title: "WhatsApp",
    url: "https://wa.me/6281234567890",
    icon: WhatsAppIcon,
    color: "text-green-500",
  },
  {
    title: "Email",
    url: "mailto:hello@fahrezi.tech",
    icon: Mail,
    color: "text-blue-500",
  },
  {
    title: "Website",
    url: "https://fahrezi.tech",
    icon: Globe,
    color: "text-indigo-500",
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/mohammad-fahrezi",
    icon: Linkedin,
    color: "text-blue-600",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen w-full relative flex items-center justify-center p-4 overflow-hidden selection:bg-primary/30">

      <ModernBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md mx-auto"
      >
        <div className="flex flex-col items-center mb-8 text-center space-y-4">
          <motion.div
            variants={itemVariants}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-background shadow-2xl bg-muted">
              <Image
                src="/fahrezi_white_logo.webp"
                alt="Fahrezi Tech Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 border-2 border-background rounded-full" title="Available for work"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">
              Mohammad Fahrezi
            </h1>
            <p className="text-muted-foreground max-w-[280px] mx-auto leading-relaxed text-sm">
              Full Stack Developer | Graphic Designer
              <br />
              Building digital experiences that matter.
            </p>
          </motion.div>
        </div>


        <motion.div variants={containerVariants} className="space-y-4 w-full px-2">
          {links.map((link, index) => (
            <LinkCard
              key={link.title}
              {...link}
              index={index}
            />
          ))}
        </motion.div>

        <motion.footer
          variants={itemVariants}
          className="mt-12 text-center text-sm text-muted-foreground font-medium"
        >
          <p>© {new Date().getFullYear()} Farezi. All rights reserved.</p>
        </motion.footer>

      </motion.div>
    </main>
  );
}

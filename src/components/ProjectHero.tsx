"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectHeroProps {
  title: string;
  role: string;
  dateRange: string;
  techStack: string[];
  metric?: string;
}

export default function ProjectHero({ title, role, dateRange, techStack, metric }: ProjectHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <Link href="/projects" className="text-emerald text-sm hover:underline mb-4 inline-block">
        ← Back to Projects
      </Link>
      <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
      <p className="text-emerald text-lg font-medium mb-1">{role}</p>
      <p className="text-muted text-sm mb-6">{dateRange}</p>

      {metric && (
        <div className="bg-emerald/10 border border-emerald/20 rounded-lg px-5 py-3 mb-6 inline-block">
          <p className="text-emerald font-bold text-lg">{metric}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {techStack.map((t) => (
          <span key={t} className="text-xs px-3 py-1 rounded-full bg-surface text-muted border border-emerald/10">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

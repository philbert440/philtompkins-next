"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TypingHero from "@/components/TypingHero";
import StatsBar from "@/components/StatsBar";
import CareerTimeline from "@/components/CareerTimeline";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero */}
      <section className="py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Phil Tompkins
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl text-emerald font-medium"
          >
            Builder of Things
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted"
          >
            Scaling Teams and Technology
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted leading-relaxed max-w-lg"
          >
            Engineering leader, startup founder, and hands-on builder with 15+ years of experience
            across enterprise IT and the startup ecosystem. Currently leading Web App Security and
            PCI product engineering at Tenable.
          </motion.p>

          <TypingHero />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <Link
              href="/projects"
              className="px-6 py-3 bg-emerald text-white rounded-lg font-medium hover:bg-emerald-dark transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 border border-emerald text-emerald rounded-lg font-medium hover:bg-emerald/10 transition-colors"
            >
              About Me
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <Image
            src="/images/self.jpg"
            alt="Phil Tompkins"
            width={300}
            height={300}
            className="rounded-2xl shadow-2xl shadow-emerald/10"
            priority
          />
        </motion.div>
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Career Timeline */}
      <CareerTimeline />
    </div>
  );
}

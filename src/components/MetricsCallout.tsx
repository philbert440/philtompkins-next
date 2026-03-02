"use client";

import { motion } from "framer-motion";

interface MetricsCalloutProps {
  metrics: string[];
}

export default function MetricsCallout({ metrics }: MetricsCalloutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12"
    >
      {metrics.map((m) => (
        <div
          key={m}
          className="bg-surface border border-emerald/10 rounded-lg px-4 py-3 text-sm text-emerald font-medium"
        >
          {m}
        </div>
      ))}
    </motion.div>
  );
}

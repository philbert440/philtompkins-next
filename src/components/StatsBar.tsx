"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years in Tech" },
  { value: 5, suffix: "", label: "Companies" },
  { value: 50000, suffix: "+", label: "Users Migrated" },
  { value: 3, suffix: "", label: "Startups" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  const display = target >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 0)}k` : count.toString();
  const finalDisplay = target >= 1000 && count >= target ? `${(target / 1000).toFixed(0)},000` : display;

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-emerald">
      {target >= 1000 ? (count >= target ? "50,000" : `${Math.floor(count / 1000)},${String(count % 1000).padStart(3, "0")}`) : count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-12 border-y border-emerald/20"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <CountUp target={s.value} suffix={s.suffix} />
            <p className="text-muted text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

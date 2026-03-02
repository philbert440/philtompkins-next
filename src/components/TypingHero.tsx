"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = "> builder of things since '04";

export default function TypingHero() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="mt-4 font-[family-name:var(--font-fira)] text-emerald text-sm md:text-base bg-surface rounded-lg px-4 py-3 inline-block"
    >
      <span>{displayed}</span>
      <span
        className={`inline-block w-[2px] h-[1.1em] bg-emerald ml-[1px] align-middle ${
          done ? "animate-pulse" : ""
        }`}
      />
    </motion.div>
  );
}

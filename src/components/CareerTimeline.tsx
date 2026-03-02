"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const timeline = [
  { year: "2024", company: "Tenable", desc: "Web App Security & PCI engineering", href: "/projects" },
  { year: "2021", company: "Branding Brand / Shipcode", desc: "Real-time collaborative app builder", href: "/projects/shipcode" },
  { year: "2014", company: "Adapify", desc: "Co-founded startup, SaaS platforms & AI", href: "/projects/adapify" },
  { year: "2011", company: "Microsoft", desc: "Enterprise cloud, Netflix, Sands Casino, 3M, Nielsen", href: "/projects/microsoft" },
  { year: "2009", company: "Pheon Technologies Group", desc: "Multi-touch devices using FTIR", href: "/projects/pheon-tech" },
];

export default function CareerTimeline() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold mb-12">Career Timeline</h2>
      <div className="relative ml-4 md:ml-8">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-emerald/30" />

        <div className="space-y-10">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative pl-10"
            >
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-emerald border-4 border-background" />

              <Link href={item.href} className="group block">
                <span className="text-emerald text-sm font-mono">{item.year}</span>
                <h3 className="text-lg font-bold mt-0.5 group-hover:text-emerald transition-colors">
                  {item.company}
                </h3>
                <p className="text-muted text-sm">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

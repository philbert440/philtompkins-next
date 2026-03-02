import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rebuilding My Portfolio with Next.js 16 — Phil Tompkins",
  description: "Why I moved from VitePress to Next.js 16 and how the new stack came together.",
};

export default function RebuildingMyPortfolioPost() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <p className="text-emerald text-sm font-mono mb-2">February 17, 2026</p>
      <h1 className="text-4xl font-bold mb-8">Rebuilding My Portfolio with Next.js 16</h1>

      <div className="prose prose-invert prose-emerald max-w-none space-y-6 text-muted leading-relaxed">
        <p>
          My old portfolio was a VitePress site. It did the job — markdown files, fast builds, zero
          config. But I kept bumping into its walls. I wanted richer interactivity, proper app-like
          routing, and the ability to drop in React components wherever I needed them. VitePress is
          great for docs; it&apos;s not great for a site that&apos;s supposed to represent what I can
          actually build.
        </p>

        <p>
          So I rewrote the whole thing in Next.js 16. Not a migration — a clean-sheet rebuild. The
          stack is Next.js 16 with the App Router, Tailwind CSS 4, and Fira Code as the monospace
          font throughout. The entire site runs in dark mode with an emerald accent color. I&apos;ve
          always preferred dark interfaces and the green-on-dark palette felt right for a site that
          leans into a terminal aesthetic.
        </p>

        <p>
          The hero section is styled like a terminal prompt — blinking cursor, monospace type,
          command-line feel. It sets the tone immediately: this is a site built by someone who lives
          in the terminal. Below that is an interactive career timeline that walks through my
          professional history from Microsoft through Adapify and Branding Brand. Each entry
          animates in as you scroll, which brings me to the next piece of the stack.
        </p>

        <p>
          Framer Motion handles all the animations. Page transitions, scroll-triggered reveals, hover
          states on project cards — it&apos;s all Framer Motion. I kept the animations subtle and
          purposeful. Nothing flies across the screen. Elements fade up, slide in, and settle into
          place. The goal was to make the site feel alive without making it feel like a tech demo.
        </p>

        <p>
          The old VitePress site had an AI chat widget powered by Documate and Grok. You could ask
          it questions about my experience and it would pull answers from my site content. It worked
          surprisingly well. I haven&apos;t rebuilt that for this version yet, but it&apos;s on the
          list. The plan is to wire up something similar — maybe with a different model backend — so
          visitors can have a conversation with my portfolio instead of just reading it.
        </p>

        <p>
          I should be transparent: this site was partly built with AI assistance. I used OpenClaw
          with Claude to help scaffold components, write copy, and iterate on design decisions. I
          still made every architectural choice and wrote plenty of code by hand, but AI
          pair-programming is part of how I work now. As an engineering leader, I think it&apos;s
          important to actually use the tools I advocate for my teams to adopt.
        </p>

        <p>
          This isn&apos;t meant to be a blog in the traditional sense. I&apos;m not going to publish
          on a schedule or chase engagement. But occasionally I build something worth writing about,
          and having a place to put those notes feels right. If you&apos;re reading this, thanks for
          stopping by.
        </p>
      </div>
    </div>
  );
}

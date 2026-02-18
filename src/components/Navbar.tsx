"use client";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";
import { Github, Twitter, Youtube, Linkedin, Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/philbert440", icon: Github, label: "GitHub" },
  { href: "https://x.com/philbert440", icon: Twitter, label: "X" },
  { href: "https://www.youtube.com/philbert440", icon: Youtube, label: "YouTube" },
  { href: "https://www.linkedin.com/in/philtompkins", icon: Linkedin, label: "LinkedIn" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-surface">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-emerald font-bold text-lg">
          PT
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-muted hover:text-emerald transition-colors text-sm"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 ml-4 border-l border-surface pl-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-emerald transition-colors"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
          <button
            onClick={toggle}
            className="ml-2 text-muted hover:text-emerald transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-surface px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-muted hover:text-emerald transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-emerald transition-colors"
              >
                <s.icon size={16} />
              </a>
            ))}
            <button
              onClick={toggle}
              className="text-muted hover:text-emerald transition-colors"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

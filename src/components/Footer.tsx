import { Github, Twitter, Youtube, Linkedin } from "lucide-react";

const socials = [
  { href: "https://github.com/philbert440", icon: Github, label: "GitHub" },
  { href: "https://x.com/philbert440", icon: Twitter, label: "X" },
  { href: "https://www.youtube.com/philbert440", icon: Youtube, label: "YouTube" },
  { href: "https://www.linkedin.com/in/philtompkins", icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-surface py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} Phil Tompkins. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
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
      </div>
    </footer>
  );
}

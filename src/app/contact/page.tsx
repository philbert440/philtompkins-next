import type { Metadata } from "next";
import { Github, Twitter, Youtube, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Phil Tompkins",
  description: "Get in touch with Phil Tompkins.",
};

const socials = [
  { href: "https://github.com/philbert440", icon: Github, label: "GitHub", handle: "@philbert440" },
  { href: "https://x.com/philbert440", icon: Twitter, label: "X (Twitter)", handle: "@philbert440" },
  { href: "https://www.youtube.com/philbert440", icon: Youtube, label: "YouTube", handle: "philbert440" },
  { href: "https://www.linkedin.com/in/philtompkins", icon: Linkedin, label: "LinkedIn", handle: "philtompkins" },
];

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <p className="text-muted mb-4 leading-relaxed">
        If you found this site you probably already have my contact information.
      </p>
      <p className="text-muted mb-4 leading-relaxed">
        Text or Call for the quickest response, email skimmed daily.
      </p>
      <p className="text-muted mb-12 leading-relaxed">
        If you don&apos;t have my contact info yet but want it, try reaching out on LinkedIn or X via the links below.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-surface hover:bg-surface-hover rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-emerald/20 group"
          >
            <s.icon size={24} className="text-emerald" />
            <div>
              <p className="font-bold group-hover:text-emerald transition-colors">{s.label}</p>
              <p className="text-muted text-sm">{s.handle}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

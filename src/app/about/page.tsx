import type { Metadata } from "next";
import ContentSection from "@/components/ContentSection";

export const metadata: Metadata = {
  title: "About — Phil Tompkins",
  description: "Learn about Phil Tompkins — his story, journey, and hobbies.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-muted mb-12 leading-relaxed">
        I&apos;m a 37-year-old U.S. citizen with a passion for leading technical teams and building scalable, impactful solutions. With a Bachelor of Science in Management Information Systems, I&apos;ve spent a decade and a half navigating the dynamic worlds of enterprise IT and startups, honing my expertise in technology and leadership. I&apos;m driven by curiosity, innovation, and a desire to create meaningful systems. I have a wife, two children, a Great Pyrenees named Bear, and a cat named Eevee, and enjoy balancing a fulfilling family life with my professional ambitions.
      </p>

      <ContentSection title="Early Life">
        <p>Born on September 18, 1987, in Corning, NY, I grew up as the second eldest of six brothers in a supportive family. A natural tinkerer, I often disassembled household electronics—like the family VCR—to understand how they worked, occasionally reformatting the family computer in my quest to learn. My childhood was filled with outdoor adventures, building tree forts, and embracing the freedom of the 1990s.</p>
      </ContentSection>

      <ContentSection title="Entrepreneurial Beginnings">
        <p>At 17, I moved out and launched my first business, building custom computers and earning $20,000 in my first year. This experience sparked my entrepreneurial drive but underscored the need for further education to scale a company effectively. In high school, I also built a website to sell Magic: The Gathering cards and organized after-school tournaments, showcasing my early knack for blending technology and business.</p>
      </ContentSection>

      <ContentSection title="Education">
        <p>I earned a Bachelor of Science in Management Information Systems from a college in Roanoke, VA. During this time, I balanced full-time work with my studies, forging lifelong friendships and tackling ambitious projects. One notable endeavor involved repurposing an LCD matrix from a TV to create a multi-touch table and using a projector to build a multi-touch wall in my apartment—an early testament to my innovative spirit.</p>
      </ContentSection>

      <ContentSection title="Professional Journey">
        <p>My career spans enterprise IT and the fast-paced startup ecosystem. At Microsoft, I gained firsthand experience contributing to large-scale enterprise IT organizations, sharpening my technical and strategic skills. Later, in the startup world, I founded Adapify and led a team at Branding Brand to develop Shipcode, working across diverse technology stacks. These experiences strengthened my ability to lead teams, adapt to challenges, and deliver scalable solutions.</p>
      </ContentSection>

      {/* Hobbies */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8">Hobbies</h2>
        <p className="text-muted mb-8">These are the things I like to do in my free time, there are way too many and never enough time.</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-surface rounded-xl p-6">
            <h3 className="text-lg font-bold text-emerald mb-2">🎸 Bass Guitar</h3>
            <p className="text-muted text-sm">Not great or anything but I enjoy it.</p>
          </div>
          <div className="bg-surface rounded-xl p-6">
            <h3 className="text-lg font-bold text-emerald mb-2">⌨️ Custom Keyboards</h3>
            <p className="text-muted text-sm">Been getting into that in recent years.</p>
          </div>
          <div className="bg-surface rounded-xl p-6">
            <h3 className="text-lg font-bold text-emerald mb-2">🕹️ HOTAS Chair Setup</h3>
            <p className="text-muted text-sm">And other Flight sim type games as well.</p>
          </div>
          <div className="bg-surface rounded-xl p-6">
            <h3 className="text-lg font-bold text-emerald mb-2">🖨️ 3D Printing and Making Stuff</h3>
            <p className="text-muted text-sm">Sourced and built a Voron Switchwire. You can find most of the things I&apos;ve made on <a href="https://www.printables.com/@philbert440" target="_blank" rel="noopener noreferrer" className="text-emerald hover:underline">Printables</a>. Recently added a Bambu H2C to the workshop.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

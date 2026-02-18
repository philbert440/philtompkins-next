import type { Metadata } from "next";
import ContentSection from "@/components/ContentSection";
import ProjectHero from "@/components/ProjectHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Pheon Technologies Group — Phil Tompkins",
  description: "Phil Tompkins' work on multi-touch devices using FTIR technology.",
};

export default function PheonTechPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <ProjectHero
        title="Pheon Technologies Group"
        role="Founder"
        dateRange="2009 — 2011"
        techStack={["FTIR", "Community Core Vision", "IR LEDs", "PS3 Eye Cam"]}
        metric="Built multi-touch devices from scratch"
      />

      <AnimatedSection>
        <ContentSection title="Building Multi-Touch Devices">
          <p>In 2009, I saw a Microsoft Research video of a touch screen table with infinite points of contact. After seeing that and deciding that I needed one in my apartment. I found NUI (Natural User Interface) group and open source project made up of a couple hundred other like minded individuals around the work attempting to build something similar. Community Core Vision was the software to enable multi touch devices using FTIR (Frustrated Total Internal Reflection). This was achieved by placing infrared led strips around the edges of an enlightened acrylic panel, to flood the panel with light. Whenever anything came in contact with the surface that would reflect to the other side where there was a modified PS3 eye cam with an infrared filter to visually pick up the blobs of light being reflected, then Community Core Vision would translate those light blobs into touch input. I also helped with organizing a group buy for a manufacturing run of enlightened acrylic panels for building the devices.</p>
          <p>At the time I dismantled my HDTV to pull the LCD matrix out of it, fun fact: LCD doesn&apos;t block infrared light so it&apos;s kind of the perfect solution to putting image/screen just under the panel that is recognizing the user input from the surface and with a little bit of software and calibration the whole thing works seamlessly.</p>
        </ContentSection>
      </AnimatedSection>
    </div>
  );
}

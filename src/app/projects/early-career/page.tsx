import type { Metadata } from "next";
import ContentSection from "@/components/ContentSection";
import ProjectHero from "@/components/ProjectHero";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Early Career — Phil Tompkins",
  description: "Phil Tompkins' early career including 1901 Group, Genworth, Phil-Tech, and more.",
};

export default function EarlyCareerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <ProjectHero
        title="Early Career"
        role="Various Roles"
        dateRange="2004 — 2011"
        techStack={["Network Security", "Automation", "Support"]}
        metric="$20k first year revenue (Phil-Tech)"
      />

      <AnimatedSection>
        <p className="text-muted mb-12 leading-relaxed">
          Below is a summary of jobs I did during and before college from summer gigs in high school to starting with my first job in the tech industry.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <ContentSection title="1901 Group">
          <p>At this managed services startup in Virginia Tech&apos;s Corporate Research Center, I dove into network security, gaining hands-on experience in a dynamic, tech-driven environment.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Genworth Financial">
          <p>My first official role in the tech industry, working as a Level 2 Software Applications Support and Development specialist. I built automation scripts, wrote documentation, and bridged communication between frontline support and system administrators.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Phil-Tech">
          <p>My first entrepreneurial venture, a sole proprietorship focused on freelance tech consulting and building/selling custom computers. In my first year, I earned $20,000, which inspired me to pursue a bachelor&apos;s degree to further my education.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Phil's MTG Cards">
          <p>As a high school freshman and sophomore, I ran an unofficial business buying Magic: The Gathering card collections on eBay, selling them to classmates, and hosting after-school tournaments. I also built my first website, enabling a few online sales.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Early Jobs">
          <p>Before entering the tech world, I held various roles, including barista at Starbucks, factory worker at a Pepsi plant, customer service representative at HSN, electronics salesperson, and team member at several fast-food restaurants.</p>
        </ContentSection>
      </AnimatedSection>
    </div>
  );
}

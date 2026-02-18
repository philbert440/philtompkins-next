import type { Metadata } from "next";
import ContentSection from "@/components/ContentSection";
import ProjectHero from "@/components/ProjectHero";
import MetricsCallout from "@/components/MetricsCallout";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Microsoft — Phil Tompkins",
  description: "Phil Tompkins' experience at Microsoft including enterprise cloud migrations and notable incidents.",
};

export default function MicrosoftPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <ProjectHero
        title="Microsoft"
        role="Premier Field Engineer"
        dateRange="2011 — 2014"
        techStack={["Azure", "Office 365", "ADFS", "AzureAD", "PowerShell"]}
        metric="50,000+ person migration (Nielsen)"
      />

      <MetricsCallout metrics={[
        "50,000 person migration (Nielsen)",
        "12,000 person migration (Novell)",
        "Worked with FBI/Treasury/Homeland Security",
      ]} />

      <AnimatedSection>
        <p className="text-muted mb-12 leading-relaxed">
          I managed to make a name for myself as someone who could handle complexity well and move quickly, and there were a handful of crazy projects and situations that I was brought into get resolved and across the finish line.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <ContentSection title="How I Ended Up at Microsoft">
          <p>After finishing college I really wanted to work at Google, after applying to different positions about 15 times, I finally got an interview and made it all the way through the process was flown out to Google HQ for a final interview. The interview went great but it was between me and one other person and unfortunately they picked the other person. The hiring manager sent me some other positions they had open that I would be a good fit for, but I decided to apply for a job at Microsoft while I waited to start the Google process again. As luck would have it November 2011 I was offered the position at Microsoft on the first attempt, and given my recent excitement and interest in MultiTouch devices, and Microsoft just having acquired Perceptive Pixel and now becoming the sole patent holder for the tech, I decided to go with them and see if I could eventually get over to that team and help push it out into the market and see the concept for Pheon Technologies make it to reality.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Steve Ballmer and Perceptive Pixel">
          <p>While there and going through initial training and learning the ropes at MSFT. I pursued the goal of finding out what was going to happen with the Perceptive Pixel acquisition, even getting as far as pitching and discussing my ideas for bringing the tech to market with Steve Ballmer, CEO at the time. We went back and forth over text messages, but he ultimately let me know that they would probably just sit on the IP until someone else does something with it and then charge them licensing fees. With that in mind coming directly from the CEO I decided that was a dead end and instead decided to focus my career on this cloud thing that really started taking off.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Enterprise Cloud Work">
          <p>While working at Microsoft I worked with many enterprise organizations deploying cloud infrastructure, handling complex migrations, troubleshooting critical issues, and architecting solutions at scale.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Sands Casino Hack Response">
          <p>FBI, Treasury, Homeland Security, a handful of Microsoft&apos;s top Security people and me. Responded to a major security incident requiring coordination across federal agencies and Microsoft&apos;s security team.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Nokia Acquisition">
          <p>Led the migration effort for the parts of Nokia that Microsoft didn&apos;t buy and MSIT came in and absorbed what&apos;s left.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Adobe Email Down">
          <p>I was called in to quickly migrate Adobe to the cloud after their on-prem email servers failed and caused their corporate email to be down for multiple days.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Netflix in 2013">
          <p>Worked with Netflix IT team through setup, configuration, and deployment of Office 365, AzureAD, and ADFS.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="3M Azure Cloud Storage and OneDrive">
          <p>Worked with key stakeholder to plan, prep, and migrate 3M&apos;s data to Azure Cloud Storage and OneDrive.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Nielsen 50,000 Person Cloud Migration">
          <p>Continued to develop automation scripts and smoothly transitioned a 50,000-user organization from on-premises to cloud infrastructure.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Novell 12,000 Person Cloud Migration">
          <p>Planned, prepped, and scripted solutions to seamlessly migrate a 12,000-user organization from on-premises systems to cloud-based infrastructure.</p>
        </ContentSection>
      </AnimatedSection>
    </div>
  );
}

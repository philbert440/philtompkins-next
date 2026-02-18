import type { Metadata } from "next";
import ContentSection from "@/components/ContentSection";
import ProjectHero from "@/components/ProjectHero";
import MetricsCallout from "@/components/MetricsCallout";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Adapify — Phil Tompkins",
  description: "Phil Tompkins co-founded Adapify, a startup building SaaS platforms across multiple verticals.",
};

export default function AdapifyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <ProjectHero
        title="Adapify Inc"
        role="Co-Founder & CEO"
        dateRange="2014 — Present"
        techStack={["SaaS", "AI", "Payments", "D2C"]}
        metric="5 MVPs built across multiple verticals"
      />

      <MetricsCallout metrics={[
        "$20k first year revenue (Phil-Tech predecessor)",
        "5 MVPs built",
      ]} />

      <AnimatedSection>
        <p className="text-muted mb-12 leading-relaxed">
          Adapify is a startup, founded in March of 2014 along with 3 friends Josh Lee, Jeff Sheets, and Neil Wood.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <ContentSection title="We Evolve Us — The Early Years">
          <p>Initially we began building a concept local social network for organizing and crowdfunding community projects. After quickly realizing the cost of development and operations, and the primary user base being made up of volunteer organizations and small non profits with very little revenue we had to pivot, and find a profitable business model.</p>
          <p>The team quickly put together 5 MVPs for SaaS platforms for different industry segments based on what had been built so far and picked up a pilot customer for each. A marketing agency, a co-working space, a youth sports club, a lawn and garden retailer, local city parks and rec department. We found traction with the youth sports team handling payments, scheduling, team assignments, and facilities management. Also we had found an interesting side project with the lawn and garden business, that eventually lead to RxSoil.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Adapify Sports">
          <p>We built a platform that handled the full lifecycle of youth sports operations — from seasonal registration and payment processing to automated team assignments based on age, skill level, and geographic location. Coaches could manage rosters, schedule practices and games, and communicate with parents through the app. The facilities management module tracked field availability, maintenance schedules, and booking conflicts. We onboarded several local clubs and leagues as pilot customers, processing thousands in registration payments.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="RxSoil">
          <p>RxSoil grew out of a side project with a lawn and garden retailer. Customers would send in soil samples, and we&apos;d analyze the results and provide customized recommendations for amendments, fertilizers, and planting strategies. The original version used a rule-based algorithm with decision trees, but we rebuilt it using generative AI to produce natural language recommendations that were more detailed, easier to understand, and personalized to the customer&apos;s specific soil conditions, climate zone, and gardening goals. The AI-powered version significantly improved customer satisfaction and repeat testing rates.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Home Test Pro">
          <p>Home Test Pro extended our laboratory testing model from soil into water and air quality. Homeowners could order test kits, collect samples, and ship them to partner labs for analysis. Results were delivered through our platform with clear explanations of what each measurement meant and whether levels were safe. When issues were detected — lead in water, high radon levels, mold spores — the platform provided actionable remediation steps and could connect users with local service providers. This was our most commercially promising product line in the D2C space.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="Laboratory SaaS">
          <p>We built a white-label SaaS platform that enabled laboratories to offer direct-to-consumer testing services. Labs could customize the ordering flow, manage sample intake and chain of custody, publish results through branded portals, and handle billing. The platform abstracted away the complexity of LIMS integration and provided a consumer-friendly frontend that labs could deploy without building their own software. This was the infrastructure layer that powered both RxSoil and Home Test Pro.</p>
        </ContentSection>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <ContentSection title="We Evolve Us (Community Platform)">
          <p>Local Social Network for crowdfunding and collaboration to make communities great. The original vision that started it all.</p>
        </ContentSection>
      </AnimatedSection>
    </div>
  );
}

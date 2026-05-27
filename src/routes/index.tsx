import { createFileRoute } from "@tanstack/react-router";

// Import components
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { StoryVideo } from "@/components/site/StoryVideo"; // 1. Import your new component
import { ActionImpact } from "@/components/site/ActionImpact";
import { Campaigns } from "@/components/site/Campaigns";
import { CommunityStories } from "@/components/site/CommunityStories";
import { Programs } from "@/components/site/Programs";
import { PromisesSection } from "@/components/site/PromisesSection";
import { SolveSection } from "@/components/site/SolveSection";
import { FAQSection } from "@/components/site/FAQSection";
import { Transparency } from "@/components/site/Transparency";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { Ticker } from "@/components/site/Ticker";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-dvh bg-[#0A0909] text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <Ticker />
      <SolveSection />
      {/* 2. Replace the component you want to remove (e.g., Transparency) with StoryVideo */}
      <StoryVideo /> 
      <Programs />
      <CommunityStories />
      <PromisesSection />
      <FAQSection />
      <Contact />
      <Footer />
    </main>
  );
}
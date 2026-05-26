import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Ticker } from "@/components/site/Ticker";
import { Impact } from "@/components/site/Impact";
import { Campaigns } from "@/components/site/Campaigns";
import { Programs } from "@/components/site/Programs";
import { Stories } from "@/components/site/Stories";
import { Donate } from "@/components/site/Donate";
import { Events } from "@/components/site/Events";
import { Transparency } from "@/components/site/Transparency";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "She Can! Foundation — Empowering Every Girl to Rise" },
      {
        name: "description",
        content:
          "PAN-India NGO affiliated with NITI Aayog. Education, menstrual health, skills and economic empowerment for underprivileged women across India.",
      },
      { property: "og:title", content: "She Can! Foundation" },
      {
        property: "og:description",
        content: "Empowering every girl to rise beyond limitations — across India.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <Nav />
      <Hero />
      <Ticker />
      <Impact />
      <Campaigns />
      <Programs />
      <Stories />
      <Donate />
      <Events />
      <Transparency />
      <Contact />
      <Footer />
    </main>
  );
}

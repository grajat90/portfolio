import { Header } from "@/components/header/header";
import { HeroSection } from "@/components/hero/hero-section";
import { ExperienceSection } from "@/components/experience/experience-section";
import { SkillsSection } from "./components/skills/skills-section";
import { ContactCard } from "./components/contact/contact-card";

export default function App() {
  return (
    <main
      className="h-full flex flex-col items-center md:justify-center bg-background overflow-x-hidden"
      role="main"
    >
      <Header />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactCard />
    </main>
  );
}

import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { TestimonialSection } from "../components/TestimonialSection";
import { DemoShowcase } from "../components/DemoShowcase";
import { ResponsiveShowcase } from "../components/ResponsiveShowcase";
import { ClientReviewsSection } from "../components/ClientReviewsSection";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f23] to-[#1a0a2e]">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <DemoShowcase />
      <ResponsiveShowcase />
      <ClientReviewsSection />
    </div>
  );
}
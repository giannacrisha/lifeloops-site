import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { ProblemSection } from "./ProblemSection";
import { SolutionSection } from "./SolutionSection";
import { HowItWorks } from "./HowItWorks";
import { ProductPreview } from "./ProductPreview";
import { WaitlistSection } from "./WaitlistSection";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <ProductPreview />
        <WaitlistSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

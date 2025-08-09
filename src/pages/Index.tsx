import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StoryboardSection from "@/components/StoryboardSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <StoryboardSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;

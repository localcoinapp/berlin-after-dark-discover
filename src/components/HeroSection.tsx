import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, MapPin } from "lucide-react";
import berlinHero from "@/assets/berlin-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${berlinHero})` }}
      >
        <div className="absolute inset-0 bg-club-dark/80" />
      </div>
      
      {/* Animated Background Effects */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-neon-cyan/20 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-neon-pink/20 rounded-full blur-2xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <MapPin className="w-8 h-8 text-neon-cyan" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              Discover Berlin
            </h1>
          </div>
          
          {/* Tagline */}
          <p className="text-xl md:text-3xl font-semibold text-foreground/90 mb-6">
            Berlin's Underground Culture
          </p>
          <p className="text-lg md:text-2xl text-muted-foreground mb-8">
            Meets Local Commerce
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Connect with Berlin's authentic culture. From underground techno clubs to hidden local gems, 
            discover exclusive deals, book experiences, and chat directly with local merchants.
          </p>
          
          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-card/50 backdrop-blur-sm border border-neon-purple/30 rounded-lg p-6 hover:border-neon-purple transition-all duration-300">
              <Smartphone className="w-8 h-8 text-neon-purple mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">One App</h3>
              <p className="text-sm text-muted-foreground">Everything Berlin in your pocket</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-neon-cyan/30 rounded-lg p-6 hover:border-neon-cyan transition-all duration-300">
              <MapPin className="w-8 h-8 text-neon-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Local Only</h3>
              <p className="text-sm text-muted-foreground">Support authentic Berlin businesses</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-neon-pink/30 rounded-lg p-6 hover:border-neon-pink transition-all duration-300">
              <ArrowRight className="w-8 h-8 text-neon-pink mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">AI Powered</h3>
              <p className="text-sm text-muted-foreground">Break language barriers effortlessly</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button variant="glow" size="xl" className="animate-glow-pulse">
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="underground" size="xl">
              For Merchants
            </Button>
          </div>
          
          {/* Coming Soon Badge */}
          <div className="inline-block bg-gradient-neon px-6 py-2 rounded-full text-sm font-semibold text-dark-concrete mt-8">
            Coming Soon 2024
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
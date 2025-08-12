import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, MapPin } from "lucide-react";
import berlinHero from "@/assets/berlin-hero.jpg";
import berlinBanner from "@/assets/berlin-banner.jpg";
import { useI18n } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useI18n();
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
              {t('hero.brand')}
            </h1>
          </div>
          
          {/* Responsive Banner replacing tagline text */}
          <div className="mx-auto max-w-4xl">
            <img
              src={berlinBanner}
              alt="Berlin hero banner with the Berlin Wall graffiti and the Fernsehturm TV Tower"
              width={1536}
              height={864}
              className="w-full h-auto rounded-xl border border-border/40 shadow-[var(--shadow-neon)]"
              loading="eager"
            />
          </div>
          
          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-card/50 backdrop-blur-sm border border-neon-purple/30 rounded-lg p-6 hover:border-neon-purple transition-all duration-300">
              <Smartphone className="w-8 h-8 text-neon-purple mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">{t('hero.features.one.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('hero.features.one.desc')}</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-neon-cyan/30 rounded-lg p-6 hover:border-neon-cyan transition-all duration-300">
              <MapPin className="w-8 h-8 text-neon-cyan mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">{t('hero.features.two.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('hero.features.two.desc')}</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-neon-pink/30 rounded-lg p-6 hover:border-neon-pink transition-all duration-300">
              <ArrowRight className="w-8 h-8 text-neon-pink mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">{t('hero.features.three.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('hero.features.three.desc')}</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button asChild variant="glow" size="xl" className="animate-glow-pulse">
              <a href="#waitlist">
                {t('hero.ctaWaitlist')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="underground" size="xl">
              <a href="#merchant">{t('hero.ctaMerchants')}</a>
            </Button>
          </div>
          
          <div className="inline-block bg-gradient-neon px-6 py-2 rounded-full text-sm font-semibold text-dark-concrete mt-8">
            {t('hero.badge')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
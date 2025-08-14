import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, MapPin } from "lucide-react";
import streetArtHero from "@/assets/berlin-street-art-hero.jpg";
import { useI18n } from "@/lib/i18n";

const HeroSection = () => {
  const { t } = useI18n();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${streetArtHero})` }}
      >
        <div className="absolute inset-0 bg-charcoal/70" />
      </div>
      
      {/* Text Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Street Art Background Effects */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-spray-orange/15 rounded-none blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-rust-red/15 rounded-none blur-2xl animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-chalk-white/10 rounded-none blur-xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center space-x-3 mb-8">
            <MapPin className="w-8 h-8 text-spray-orange" />
            <h1 className="text-4xl md:text-6xl font-bold font-display text-white">
              {t('hero.brand')}
            </h1>
          </div>
          
          {/* Hero Tagline */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl md:text-3xl font-light font-display text-white mb-4">
              {t('hero.tagline1')}
            </h2>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              {t('hero.description')}
            </p>
          </div>
          
          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-card/30 backdrop-blur-sm border border-spray-orange/40 rounded-none p-6 hover:border-spray-orange hover:shadow-[var(--shadow-spray)] transition-all duration-300">
              <Smartphone className="w-8 h-8 text-spray-orange mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">{t('hero.features.one.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('hero.features.one.desc')}</p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-chalk-white/40 rounded-none p-6 hover:border-chalk-white hover:shadow-[var(--shadow-concrete)] transition-all duration-300">
              <MapPin className="w-8 h-8 text-chalk-white mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">{t('hero.features.two.title')}</h3>
              <p className="text-sm text-muted-foreground">{t('hero.features.two.desc')}</p>
            </div>
            <div className="bg-card/30 backdrop-blur-sm border border-rust-red/40 rounded-none p-6 hover:border-rust-red hover:shadow-[var(--shadow-stencil)] transition-all duration-300">
              <ArrowRight className="w-8 h-8 text-rust-red mx-auto mb-3" />
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
          
          <div className="inline-block bg-gradient-street px-6 py-2 rounded-none text-sm font-semibold text-charcoal mt-8">
            {t('hero.badge')}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
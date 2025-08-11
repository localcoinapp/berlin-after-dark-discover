import storyboard1 from "@/assets/storyboard-1.jpg";
import storyboard2 from "@/assets/storyboard-2.jpg";
import storyboard3 from "@/assets/storyboard-3.jpg";

import { useI18n } from "@/lib/i18n";

const StoryboardSection = () => {
  const { t } = useI18n();
  const storySteps = [
    {
      image: storyboard1,
      title: t("story.step1Title"),
      description: t("story.step1Desc"),
      step: "01"
    },
    {
      image: storyboard2,
      title: t("story.step2Title"),
      description: t("story.step2Desc"),
      step: "02"
    },
    {
      image: storyboard3,
      title: t("story.step3Title"),
      description: t("story.step3Desc"),
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-graffiti-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            {t('story.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('story.subtitle')}
          </p>
        </div>

        <div className="space-y-16">
          {storySteps.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
            >
              {/* Image */}
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-neon rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="relative w-full h-80 object-cover rounded-2xl border border-border/50 group-hover:border-neon-purple/50 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-6xl font-bold bg-gradient-neon bg-clip-text text-transparent">
                    {step.step}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-block bg-card/50 backdrop-blur-sm border border-neon-cyan/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('story.ctaTitle')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('story.ctaSubtitle')}
            </p>
            <div className="bg-gradient-neon px-6 py-3 rounded-full text-dark-concrete font-semibold inline-block">
              {t('story.ctaBadge')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryboardSection;
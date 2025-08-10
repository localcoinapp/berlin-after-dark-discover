import { Card } from "@/components/ui/card";
import { 
  Users, 
  MessageCircle, 
  CreditCard, 
  Shield, 
  Globe, 
  Zap,
  Music,
  Coffee,
  Calendar
} from "lucide-react";
import { useI18n } from "@/lib/i18n";

const FeaturesSection = () => {
  const { t } = useI18n();
  const userFeatures = [
    {
      icon: <Music className="w-6 h-6" />,
      title: t("features.user.undergroundTitle"),
      description: t("features.user.undergroundDesc"),
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: t("features.user.localDealsTitle"),
      description: t("features.user.localDealsDesc"),
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: t("features.user.bookPayTitle"),
      description: t("features.user.bookPayDesc"),
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: t("features.user.directChatTitle"),
      description: t("features.user.directChatDesc"),
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("features.user.multiLanguageTitle"),
      description: t("features.user.multiLanguageDesc"),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("features.user.touristSafeTitle"),
      description: t("features.user.touristSafeDesc"),
    },
  ];

  const merchantFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("features.merchant.freeTitle"),
      description: t("features.merchant.freeDesc"),
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("features.merchant.reachTitle"),
      description: t("features.merchant.reachDesc"),
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: t("features.merchant.paymentsTitle"),
      description: t("features.merchant.paymentsDesc"),
    },
  ];

  return (
    <section className="py-20 bg-gradient-underground">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            {t('features.usersTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.usersSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {userFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-neon-purple/50 transition-all duration-300 group hover:shadow-[var(--shadow-neon)]"
            >
              <div className="text-neon-purple group-hover:text-neon-cyan transition-colors duration-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent mb-6">
            {t('features.merchantsTitle')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.merchantsSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {merchantFeatures.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-neon-cyan/50 transition-all duration-300 group hover:shadow-[var(--shadow-cyan)]"
            >
              <div className="text-neon-cyan group-hover:text-neon-pink transition-colors duration-300 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-lg">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
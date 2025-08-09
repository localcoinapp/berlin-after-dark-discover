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

const FeaturesSection = () => {
  const userFeatures = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Underground Events",
      description: "Exclusive access to Berlin's hidden techno clubs and secret parties"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Local Deals",
      description: "Discover authentic restaurants, bars, and shops with special offers"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Book & Pay",
      description: "Pre-book experiences and pay securely within the app"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Direct Chat",
      description: "Communicate directly with merchants and event organizers"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language",
      description: "AI-powered translation breaks down language barriers"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Tourist Safe",
      description: "Verified merchants and transparent pricing prevent scams"
    }
  ];

  const merchantFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Free to Start",
      description: "No sign-up fees, just small commission on successful transactions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Reach Tourists",
      description: "Connect with thousands of visitors looking for authentic experiences"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Easy Payments",
      description: "No expensive POS systems needed - get paid through the app"
    }
  ];

  return (
    <section className="py-20 bg-gradient-underground">
      <div className="container mx-auto px-6">
        {/* For Users */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            For Explorers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive deep into Berlin's underground culture with features designed for the curious traveler
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

        {/* For Merchants */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent mb-6">
            For Local Merchants
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Grow your business by connecting with tourists and locals who appreciate authentic Berlin culture
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
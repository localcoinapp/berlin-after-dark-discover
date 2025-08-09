import storyboard1 from "@/assets/storyboard-1.jpg";
import storyboard2 from "@/assets/storyboard-2.jpg";
import storyboard3 from "@/assets/storyboard-3.jpg";

const StoryboardSection = () => {
  const storySteps = [
    {
      image: storyboard1,
      title: "Discover",
      description: "Maria opens the Discover Berlin app on Kreuzberg's streets. Instantly, she sees local restaurants, underground clubs, and unique experiences nearby.",
      step: "01"
    },
    {
      image: storyboard2,
      title: "Connect",
      description: "At Berghain's entrance, Maria and her friends show their pre-booked tickets from the app. No lines, no confusion - just seamless entry to Berlin's most exclusive venues.",
      step: "02"
    },
    {
      image: storyboard3,
      title: "Experience",
      description: "Later at a local restaurant in Prenzlauer Berg, they order traditional Berlin dishes through the app, chatting with the chef about ingredients in perfect German thanks to AI translation.",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-graffiti-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            Your Berlin Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow Maria's authentic Berlin experience from tourist to local insider
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
              Ready to Discover Berlin Like a Local?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of explorers already on the waitlist
            </p>
            <div className="bg-gradient-neon px-6 py-3 rounded-full text-dark-concrete font-semibold inline-block">
              Coming Soon - Get Early Access
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryboardSection;
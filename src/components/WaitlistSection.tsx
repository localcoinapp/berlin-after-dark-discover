import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Send, Store } from "lucide-react";

const WaitlistSection = () => {
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [merchantForm, setMerchantForm] = useState({
    name: "",
    email: "",
    business: "",
    message: ""
  });

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    
    toast.success("Welcome to the Discover Berlin waitlist!");
    setWaitlistEmail("");
  };

  const handleMerchantSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!merchantForm.email || !merchantForm.name) return;
    
    // In a real app, this would send to localcoinapp@gmail.com
    toast.success("Thanks for your interest! We'll be in touch soon.");
    setMerchantForm({ name: "", email: "", business: "", message: "" });
  };

  return (
    <section className="py-20 bg-gradient-club">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Be part of Berlin's next chapter in local commerce and cultural discovery
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Waitlist for Users */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-neon-purple/50 transition-all duration-300">
            <div className="text-center mb-8">
              <Mail className="w-12 h-12 text-neon-purple mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Early Access Waitlist
              </h3>
              <p className="text-muted-foreground">
                Be among the first to experience authentic Berlin
              </p>
            </div>

            <form onSubmit={handleWaitlistSubmit} className="space-y-6">
              <div>
                <Label htmlFor="waitlist-email" className="text-foreground">
                  Email Address
                </Label>
                <Input
                  id="waitlist-email"
                  type="email"
                  placeholder="your@email.com"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="mt-2 bg-input/50 border-border/50 focus:border-neon-purple transition-colors"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                variant="club" 
                size="lg" 
                className="w-full"
              >
                Join Waitlist
                <Send className="ml-2 w-4 h-4" />
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                Get notified when we launch in Berlin
              </p>
            </form>
          </Card>

          {/* Merchant Contact */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-neon-cyan/50 transition-all duration-300">
            <div className="text-center mb-8">
              <Store className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Merchant Partnership
              </h3>
              <p className="text-muted-foreground">
                Grow your Berlin business with us
              </p>
            </div>

            <form onSubmit={handleMerchantSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="merchant-name" className="text-foreground">
                    Name
                  </Label>
                  <Input
                    id="merchant-name"
                    type="text"
                    placeholder="Your name"
                    value={merchantForm.name}
                    onChange={(e) => setMerchantForm({...merchantForm, name: e.target.value})}
                    className="mt-2 bg-input/50 border-border/50 focus:border-neon-cyan transition-colors"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="merchant-email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="merchant-email"
                    type="email"
                    placeholder="business@email.com"
                    value={merchantForm.email}
                    onChange={(e) => setMerchantForm({...merchantForm, email: e.target.value})}
                    className="mt-2 bg-input/50 border-border/50 focus:border-neon-cyan transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="business-name" className="text-foreground">
                  Business Name
                </Label>
                <Input
                  id="business-name"
                  type="text"
                  placeholder="Your business"
                  value={merchantForm.business}
                  onChange={(e) => setMerchantForm({...merchantForm, business: e.target.value})}
                  className="mt-2 bg-input/50 border-border/50 focus:border-neon-cyan transition-colors"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">
                  Tell us about your business
                </Label>
                <Textarea
                  id="message"
                  placeholder="What makes your Berlin business special?"
                  value={merchantForm.message}
                  onChange={(e) => setMerchantForm({...merchantForm, message: e.target.value})}
                  className="mt-2 bg-input/50 border-border/50 focus:border-neon-cyan transition-colors"
                  rows={4}
                />
              </div>
              
              <Button 
                type="submit" 
                variant="underground" 
                size="lg" 
                className="w-full"
              >
                Get Partnership Info
                <Send className="ml-2 w-4 h-4" />
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                We'll send details to localcoinapp@gmail.com
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
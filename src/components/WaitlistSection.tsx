import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Send, Store } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { supabase } from "@/integrations/supabase/client";

const WaitlistSection = () => {
  const { t } = useI18n();
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [merchantForm, setMerchantForm] = useState({
    name: "",
    email: "",
    business: "",
    message: ""
  });
  const [submittingWaitlist, setSubmittingWaitlist] = useState(false);
  const [submittingMerchant, setSubmittingMerchant] = useState(false);

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    
    setSubmittingWaitlist(true);
    const { error } = await supabase
      .from('waitlist_signups')
      .insert([{ email: waitlistEmail, source: 'waitlist_form' }]);

    if (error) {
      toast.error('Failed to join waitlist. Please try again.');
    } else {
      toast.success(t('toast.waitlistSuccess'));
      setWaitlistEmail("");
    }
    setSubmittingWaitlist(false);
  };

  const handleMerchantSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!merchantForm.email || !merchantForm.name) return;

    setSubmittingMerchant(true);
    const { error } = await supabase
      .from('merchant_inquiries')
      .insert([{ 
        name: merchantForm.name,
        email: merchantForm.email,
        business: merchantForm.business || null,
        message: merchantForm.message || null,
      }]);

    if (error) {
      toast.error('Failed to send inquiry. Please try again.');
    } else {
      toast.success(t('toast.merchantSuccess'));
      setMerchantForm({ name: "", email: "", business: "", message: "" });
    }
    setSubmittingMerchant(false);
  };

  return (
    <section className="py-20 bg-gradient-club">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-neon bg-clip-text text-transparent mb-6">
            {t('waitlist.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('waitlist.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Waitlist for Users */}
          <Card id="waitlist" className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-neon-purple/50 transition-all duration-300">
            <div className="text-center mb-8">
              <Mail className="w-12 h-12 text-neon-purple mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {t('waitlist.waitlistTitle')}
              </h3>
              <p className="text-muted-foreground">
                {t('waitlist.waitlistSubtitle')}
              </p>
            </div>

            <form onSubmit={handleWaitlistSubmit} className="space-y-6">
              <div>
                <Label htmlFor="waitlist-email" className="text-foreground">
                  {t('waitlist.emailLabel')}
                </Label>
                <Input
                  id="waitlist-email"
                  type="email"
                  placeholder={t('waitlist.emailPlaceholder')}
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
                disabled={submittingWaitlist}
              >
                {t('waitlist.joinButton')}
                <Send className="ml-2 w-4 h-4" />
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                {t('waitlist.note')}
              </p>
            </form>
          </Card>

          {/* Merchant Contact */}
          <Card id="merchant" className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-neon-cyan/50 transition-all duration-300">
            <div className="text-center mb-8">
              <Store className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {t('merchant.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('merchant.subtitle')}
              </p>
            </div>

            <form onSubmit={handleMerchantSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="merchant-name" className="text-foreground">
                    {t('merchant.name')}
                  </Label>
                  <Input
                    id="merchant-name"
                    type="text"
                    placeholder={t('merchant.namePlaceholder')}
                    value={merchantForm.name}
                    onChange={(e) => setMerchantForm({...merchantForm, name: e.target.value})}
                    className="mt-2 bg-input/50 border-border/50 focus:border-neon-cyan transition-colors"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="merchant-email" className="text-foreground">
                    {t('merchant.email')}
                  </Label>
                  <Input
                    id="merchant-email"
                    type="email"
                    placeholder={t('merchant.emailPlaceholder')}
                    value={merchantForm.email}
                    onChange={(e) => setMerchantForm({...merchantForm, email: e.target.value})}
                    className="mt-2 bg-input/50 border-border/50 focus:border-neon-cyan transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="business-name" className="text-foreground">
                  {t('merchant.businessName')}
                </Label>
                <Input
                  id="business-name"
                  type="text"
                  placeholder={t('merchant.businessPlaceholder')}
                  value={merchantForm.business}
                  onChange={(e) => setMerchantForm({...merchantForm, business: e.target.value})}
                  className="mt-2 bg-input/50 border-border/50 focus:border-neon-cyan transition-colors"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">
                  {t('merchant.messageLabel')}
                </Label>
                <Textarea
                  id="message"
                  placeholder={t('merchant.messagePlaceholder')}
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
                disabled={submittingMerchant}
              >
                {t('merchant.button')}
                <Send className="ml-2 w-4 h-4" />
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                {t('merchant.note')}
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
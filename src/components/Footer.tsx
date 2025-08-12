import { MapPin, Mail, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-club-dark border-t border-border/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-neon-cyan" />
              <h3 className="text-xl font-bold bg-gradient-neon bg-clip-text text-transparent">
              {t('footer.brand')}
              </h3>
            </div>
            <p className="text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">{t('footer.contact')}</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>localcoinapp@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>{t('footer.city')}</span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">{t('footer.missionTitle')}</h4>
            <p className="text-muted-foreground text-sm">
              {t('footer.missionBody')}
            </p>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8 text-center space-y-3">
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <a href="/impressum" className="hover:underline">Impressum</a>
            <a href="/datenschutz" className="hover:underline">Datenschutz</a>
            <a href="/agb" className="hover:underline">AGB</a>
            <a href="/cookies" className="hover:underline">Cookies</a>
          </nav>
          <p className="text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { MapPin, Mail, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-club-dark border-t border-border/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-neon-cyan" />
              <h3 className="text-xl font-bold bg-gradient-neon bg-clip-text text-transparent">
                Discover Berlin
              </h3>
            </div>
            <p className="text-muted-foreground">
              Connecting Berlin's underground culture with authentic local commerce.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>localcoinapp@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>Berlin, Germany</span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Our Mission</h4>
            <p className="text-muted-foreground text-sm">
              Promoting local communities and authentic Berlin businesses while helping tourists 
              discover the real culture of our city.
            </p>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Discover Berlin. Supporting local Berlin businesses since day one.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
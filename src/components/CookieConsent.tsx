import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "cookieConsent";

type Consent = "accepted" | "rejected";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) setVisible(true);
  }, []);

  const setConsent = (value: Consent) => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="container mx-auto px-4 pb-6">
        <div className="bg-card/95 backdrop-blur border border-border shadow-xl rounded-xl p-4 md:p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-sm text-foreground/90">
              <p className="font-semibold mb-1">Cookies & Datenschutz</p>
              <p className="text-muted-foreground">
                Wir verwenden nur notwendige Cookies, um die grundlegende Funktionalität zu
                gewährleisten. Details in unserer {" "}
                <a href="/cookies" className="underline hover:opacity-80">Cookie-Richtlinie</a>.
              </p>
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="secondary" onClick={() => setConsent("rejected")}>Ablehnen</Button>
              <Button onClick={() => setConsent("accepted")}>Akzeptieren</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

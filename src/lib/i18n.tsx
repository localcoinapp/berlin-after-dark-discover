import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from "react";

export type Lang = "en" | "de";

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof translations["en"]) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = "db-lang";

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem(STORAGE_KEY) as Lang) || "en");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const t = useMemo(() => {
    const dict = translations[lang];
    return (key: keyof typeof dict) => dict[key] ?? (key as string);
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};

export const translations = {
  en: {
    // Hero
    "hero.ctaWaitlist": "Join Waitlist",
    "hero.ctaMerchants": "For Merchants",

    // Waitlist section
    "waitlist.title": "Join the Movement",
    "waitlist.description": "Be part of Berlin's next chapter in local commerce and cultural discovery",
    "waitlist.waitlistTitle": "Early Access Waitlist",
    "waitlist.waitlistSubtitle": "Be among the first to experience authentic Berlin",
    "waitlist.emailLabel": "Email Address",
    "waitlist.emailPlaceholder": "your@email.com",
    "waitlist.joinButton": "Join Waitlist",
    "waitlist.note": "Get notified when we launch in Berlin",

    // Merchant section
    "merchant.title": "Merchant Partnership",
    "merchant.subtitle": "Grow your Berlin business with us",
    "merchant.name": "Name",
    "merchant.email": "Email",
    "merchant.businessName": "Business Name",
    "merchant.messageLabel": "Tell us about your business",
    "merchant.messagePlaceholder": "What makes your Berlin business special?",
    "merchant.button": "Get Partnership Info",
    "merchant.note": "We'll send details to localcoinapp@gmail.com",
    "merchant.namePlaceholder": "Your name",
    "merchant.emailPlaceholder": "business@email.com",
    "merchant.businessPlaceholder": "Your business",

    // Toasts
    "toast.waitlistSuccess": "Welcome to the Discover Berlin waitlist!",
    "toast.merchantSuccess": "Thanks for your interest! We'll be in touch soon.",
  },
  de: {
    // Hero
    "hero.ctaWaitlist": "Warteliste",
    "hero.ctaMerchants": "Für Händler",

    // Waitlist section
    "waitlist.title": "Mach mit",
    "waitlist.description": "Sei Teil von Berlins nächstem Kapitel für lokalen Handel und kulturelle Entdeckung",
    "waitlist.waitlistTitle": "Früher Zugang – Warteliste",
    "waitlist.waitlistSubtitle": "Gehöre zu den Ersten, die authentisches Berlin erleben",
    "waitlist.emailLabel": "E-Mail-Adresse",
    "waitlist.emailPlaceholder": "deine@email.de",
    "waitlist.joinButton": "Zur Warteliste",
    "waitlist.note": "Erhalte eine Benachrichtigung zum Start in Berlin",

    // Merchant section
    "merchant.title": "Partnerschaft für Händler",
    "merchant.subtitle": "Wachse mit uns – für dein Berliner Business",
    "merchant.name": "Name",
    "merchant.email": "E-Mail",
    "merchant.businessName": "Firmenname",
    "merchant.messageLabel": "Erzähl uns von deinem Unternehmen",
    "merchant.messagePlaceholder": "Was macht dein Berliner Business besonders?",
    "merchant.button": "Infos zur Partnerschaft erhalten",
    "merchant.note": "Wir senden Details an localcoinapp@gmail.com",
    "merchant.namePlaceholder": "Dein Name",
    "merchant.emailPlaceholder": "firma@email.de",
    "merchant.businessPlaceholder": "Dein Unternehmen",

    // Toasts
    "toast.waitlistSuccess": "Willkommen auf der Discover Berlin Warteliste!",
    "toast.merchantSuccess": "Danke für dein Interesse! Wir melden uns bald.",
  },
} as const;

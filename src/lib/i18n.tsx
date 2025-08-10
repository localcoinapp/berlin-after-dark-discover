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
    "hero.brand": "Discover Berlin",
    "hero.tagline1": "Berlin's Underground Culture",
    "hero.tagline2": "Meets Local Commerce",
    "hero.description": "Connect with Berlin's authentic culture. From underground techno clubs to hidden local gems, discover exclusive deals, book experiences, and chat directly with local merchants.",
    "hero.features.one.title": "One App",
    "hero.features.one.desc": "Everything Berlin in your pocket",
    "hero.features.two.title": "Local Only",
    "hero.features.two.desc": "Support authentic Berlin businesses",
    "hero.features.three.title": "AI Powered",
    "hero.features.three.desc": "Break language barriers effortlessly",
    "hero.badge": "Coming Soon 2024",

    // Features section
    "features.usersTitle": "For Explorers",
    "features.usersSubtitle": "Dive deep into Berlin's underground culture with features designed for the curious traveler",
    "features.user.undergroundTitle": "Underground Events",
    "features.user.undergroundDesc": "Exclusive access to Berlin's hidden techno clubs and secret parties",
    "features.user.localDealsTitle": "Local Deals",
    "features.user.localDealsDesc": "Discover authentic restaurants, bars, and shops with special offers",
    "features.user.bookPayTitle": "Book & Pay",
    "features.user.bookPayDesc": "Pre-book experiences and pay securely within the app",
    "features.user.directChatTitle": "Direct Chat",
    "features.user.directChatDesc": "Communicate directly with merchants and event organizers",
    "features.user.multiLanguageTitle": "Multi-Language",
    "features.user.multiLanguageDesc": "AI-powered translation breaks down language barriers",
    "features.user.touristSafeTitle": "Tourist Safe",
    "features.user.touristSafeDesc": "Verified merchants and transparent pricing prevent scams",

    "features.merchantsTitle": "For Local Merchants",
    "features.merchantsSubtitle": "Grow your business by connecting with tourists and locals who appreciate authentic Berlin culture",
    "features.merchant.freeTitle": "Free to Start",
    "features.merchant.freeDesc": "No sign-up fees, just small commission on successful transactions",
    "features.merchant.reachTitle": "Reach Tourists",
    "features.merchant.reachDesc": "Connect with thousands of visitors looking for authentic experiences",
    "features.merchant.paymentsTitle": "Easy Payments",
    "features.merchant.paymentsDesc": "No expensive POS systems needed - get paid through the app",

    // Storyboard
    "story.title": "Your Berlin Journey",
    "story.subtitle": "Follow Maria's authentic Berlin experience from tourist to local insider",
    "story.step1Title": "Discover",
    "story.step1Desc": "Maria opens the Discover Berlin app on Kreuzberg's streets. Instantly, she sees local restaurants, underground clubs, and unique experiences nearby.",
    "story.step2Title": "Connect",
    "story.step2Desc": "At Berghain's entrance, Maria and her friends show their pre-booked tickets from the app. No lines, no confusion - just seamless entry to Berlin's most exclusive venues.",
    "story.step3Title": "Experience",
    "story.step3Desc": "Later at a local restaurant in Prenzlauer Berg, they order traditional Berlin dishes through the app, chatting with the chef about ingredients in perfect German thanks to AI translation.",
    
    "story.ctaTitle": "Ready to Discover Berlin Like a Local?",
    "story.ctaSubtitle": "Join thousands of explorers already on the waitlist",
    "story.ctaBadge": "Coming Soon - Get Early Access",

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
    "hero.brand": "Discover Berlin",
    "hero.tagline1": "Berlins Underground-Kultur",
    "hero.tagline2": "trifft lokalen Handel",
    "hero.description": "Verbinde dich mit Berlins authentischer Kultur. Von Underground-Techno-Clubs bis zu versteckten Kiez-Perlen – entdecke exklusive Angebote, buche Erlebnisse und chatte direkt mit lokalen Anbietern.",
    "hero.features.one.title": "Eine App",
    "hero.features.one.desc": "Alles über Berlin in deiner Hosentasche",
    "hero.features.two.title": "Nur lokal",
    "hero.features.two.desc": "Unterstütze echte Berliner Betriebe",
    "hero.features.three.title": "KI-gestützt",
    "hero.features.three.desc": "Sprachbarrieren mühelos überwinden",
    "hero.badge": "Bald verfügbar 2024",

    // Features section
    "features.usersTitle": "Für Entdecker",
    "features.usersSubtitle": "Tauche ein in Berlins Underground-Kultur – Funktionen für neugierige Reisende",
    "features.user.undergroundTitle": "Underground-Events",
    "features.user.undergroundDesc": "Exklusiver Zugang zu versteckten Techno-Clubs und Secret-Partys",
    "features.user.localDealsTitle": "Lokale Angebote",
    "features.user.localDealsDesc": "Entdecke authentische Restaurants, Bars und Shops mit Specials",
    "features.user.bookPayTitle": "Buchen & Bezahlen",
    "features.user.bookPayDesc": "Erlebnisse vorab buchen und sicher in der App bezahlen",
    "features.user.directChatTitle": "Direkter Chat",
    "features.user.directChatDesc": "Kommuniziere direkt mit Anbietern und Veranstaltern",
    "features.user.multiLanguageTitle": "Mehrsprachig",
    "features.user.multiLanguageDesc": "KI-Übersetzung beseitigt Sprachbarrieren",
    "features.user.touristSafeTitle": "Sicher für Touristen",
    "features.user.touristSafeDesc": "Verifizierte Anbieter und transparente Preise verhindern Betrug",

    "features.merchantsTitle": "Für lokale Händler",
    "features.merchantsSubtitle": "Wachse, indem du Touristen und Locals erreichst, die authentische Berliner Kultur schätzen",
    "features.merchant.freeTitle": "Kostenlos starten",
    "features.merchant.freeDesc": "Keine Anmeldegebühren, nur geringe Provision bei erfolgreichen Transaktionen",
    "features.merchant.reachTitle": "Touristen erreichen",
    "features.merchant.reachDesc": "Verbinde dich mit tausenden Besuchern auf der Suche nach echten Erlebnissen",
    "features.merchant.paymentsTitle": "Einfache Zahlungen",
    "features.merchant.paymentsDesc": "Keine teuren Kassensysteme – Bezahlung direkt in der App",

    // Storyboard
    "story.title": "Deine Berlin-Reise",
    "story.subtitle": "Verfolge Marias Weg – vom Tourist zur Insiderin des echten Berlins",
    "story.step1Title": "Entdecken",
    "story.step1Desc": "Maria öffnet die Discover Berlin App in Kreuzberg. Sofort sieht sie lokale Restaurants, Underground-Clubs und besondere Erlebnisse in der Nähe.",
    "story.step2Title": "Verbinden",
    "story.step2Desc": "Am Berghain-Eingang zeigen Maria und Freunde ihre vorab gebuchten Tickets aus der App. Keine Schlange, keine Verwirrung – einfach reibungsloser Eintritt.",
    "story.step3Title": "Erleben",
    "story.step3Desc": "Später in einem Restaurant in Prenzlauer Berg bestellen sie Berliner Klassiker über die App und chatten dank KI-Übersetzung auf perfektem Deutsch mit dem Koch.",

    "story.ctaTitle": "Bereit, Berlin wie ein Local zu entdecken?",
    "story.ctaSubtitle": "Tritt der Warteliste mit tausenden Entdeckern bei",
    "story.ctaBadge": "Bald verfügbar – Früher Zugang",

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

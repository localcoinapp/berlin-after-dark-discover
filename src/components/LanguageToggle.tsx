import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const LanguageToggle = () => {
  const { lang, setLang } = useI18n();

  return (
    <div className="fixed top-4 right-4 z-50 bg-card/60 backdrop-blur-sm border border-border rounded-full p-1 shadow-sm">
      <div className="flex items-center gap-1">
        <Button
          size="sm"
          variant={lang === "en" ? "default" : "secondary"}
          className="rounded-full"
          onClick={() => setLang("en")}
          aria-pressed={lang === "en"}
          aria-label="Switch to English"
        >
          EN
        </Button>
        <Button
          size="sm"
          variant={lang === "de" ? "default" : "secondary"}
          className="rounded-full"
          onClick={() => setLang("de")}
          aria-pressed={lang === "de"}
          aria-label="Auf Deutsch umschalten"
        >
          DE
        </Button>
      </div>
    </div>
  );
};

export default LanguageToggle;

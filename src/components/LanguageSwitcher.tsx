import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={language === 'en' ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage('en')}
        className="w-12"
      >
        EN
      </Button>
      <Button
        variant={language === 'tr' ? "default" : "outline"}
        size="sm"
        onClick={() => setLanguage('tr')}
        className="w-12"
      >
        TR
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
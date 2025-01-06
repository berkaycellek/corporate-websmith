import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark wavy background with overlay */}
      <div className="absolute inset-0 bg-[#0B0F17]">
        {/* Wavy overlay elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] transform rotate-12 bg-gradient-to-br from-slate-900 via-slate-800 to-transparent rounded-[100%] animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[200%] h-[200%] top-[-45%] left-[-45%] transform -rotate-12 bg-gradient-to-br from-slate-900 via-slate-800 to-transparent rounded-[100%] animate-[spin_30s_linear_infinite]" />
          <div className="absolute w-[200%] h-[200%] top-[-40%] left-[-40%] transform rotate-6 bg-gradient-to-br from-slate-800 via-slate-900 to-transparent rounded-[100%] animate-[spin_35s_linear_infinite]" />
        </div>
        
        {/* Glass card effect */}
        <div className="absolute inset-0 backdrop-blur-[1px] bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-white/5 backdrop-blur-sm rounded-full animate-fadeIn text-white/90">
            {t('hero.badge')}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn text-white/90" style={{ animationDelay: "0.2s" }}>
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20" asChild>
              <a href="#portfolio">{t('hero.portfolio')}</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/5 backdrop-blur-sm text-white border-white/20 hover:bg-white/10" asChild>
              <a href="#contact">{t('hero.contact')}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
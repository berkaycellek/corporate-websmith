import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern gradient background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 dark:from-gray-900 dark:via-blue-950 dark:to-slate-900" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm dark:bg-white/5 rounded-full animate-fadeIn text-white">
            {t('hero.badge')}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn text-white" style={{ animationDelay: "0.2s" }}>
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-200 dark:text-gray-300 mb-8 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
            <Button size="lg" className="bg-white text-blue-950 hover:bg-gray-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20" asChild>
              <a href="#portfolio">{t('hero.portfolio')}</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 dark:border-white dark:hover:bg-white/20 shadow-lg" asChild>
              <a href="#contact">{t('hero.contact')}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
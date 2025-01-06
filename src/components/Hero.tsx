import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark smoky background with waves */}
      <div className="absolute inset-0 bg-slate-950">
        {/* Animated wave patterns */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="absolute w-full transform-gpu"
              style={{
                height: '200%',
                top: `${index * -15}%`,
                background: `linear-gradient(180deg, 
                  rgba(45, 212, 191, 0) 0%,
                  rgba(45, 212, 191, ${0.02 + index * 0.01}) 45%,
                  rgba(45, 212, 191, 0) 100%)`,
                transform: `rotate(${index * 3}deg) scale(1.5)`,
                transformOrigin: 'center',
                animation: `wave${index} ${15 + index * 2}s infinite ease-in-out`,
                opacity: 0.5,
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              }}
            />
          ))}
        </div>

        {/* Smoky overlay elements */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, index) => (
            <div
              key={`smoke-${index}`}
              className="absolute rounded-full mix-blend-overlay filter blur-3xl"
              style={{
                width: `${400 + index * 100}px`,
                height: `${400 + index * 100}px`,
                left: `${15 + index * 25}%`,
                top: `${15 + index * 15}%`,
                background: `radial-gradient(circle, 
                  rgba(45, 212, 191, 0.08) 0%,
                  rgba(45, 212, 191, 0.03) 50%,
                  rgba(45, 212, 191, 0) 100%)`,
                animation: `blob ${8 + index * 2}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-slate-800/95 backdrop-blur-sm" />
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
            <Button size="lg" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20" asChild>
              <a href="#portfolio">{t('hero.portfolio')}</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 dark:border-white/20 dark:hover:bg-white/20 shadow-lg" asChild>
              <a href="#contact">{t('hero.contact')}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
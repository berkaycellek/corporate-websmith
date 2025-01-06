import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dark wavy background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>
            <path
              d="M0,500 C200,600 300,300 500,500 C700,700 800,400 1000,500 L1000,1000 L0,1000 Z"
              fill="url(#gradient)"
              opacity="0.3"
            >
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                values="
                  M0,500 C200,600 300,300 500,500 C700,700 800,400 1000,500 L1000,1000 L0,1000 Z;
                  M0,500 C200,400 300,700 500,500 C700,300 800,600 1000,500 L1000,1000 L0,1000 Z;
                  M0,500 C200,600 300,300 500,500 C700,700 800,400 1000,500 L1000,1000 L0,1000 Z"
              />
            </path>
          </svg>
        </div>
      </div>
      
      {/* Animated gradient orbs with adjusted colors */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-slate-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
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
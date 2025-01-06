import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/' + (sectionId ? '#' + sectionId : ''));
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a 
            onClick={() => navigate('/')} 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/80 transition-all duration-300 cursor-pointer"
          >
            Berkay Cellek
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              onClick={() => handleNavigation('about')} 
              className="relative group cursor-pointer"
            >
              <span className="text-foreground hover:text-primary transition-colors">{t('nav.about')}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              onClick={() => handleNavigation('services')} 
              className="relative group cursor-pointer"
            >
              <span className="text-foreground hover:text-primary transition-colors">{t('nav.services')}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              onClick={() => handleNavigation('portfolio')} 
              className="relative group cursor-pointer"
            >
              <span className="text-foreground hover:text-primary transition-colors">Projelerimiz</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              onClick={() => handleNavigation('blog')} 
              className="relative group cursor-pointer"
            >
              <span className="text-foreground hover:text-primary transition-colors">{t('nav.blog')}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
            <LanguageSwitcher />
            <ThemeToggle />
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleNavigation('contact')}
            >
              {t('nav.contact')}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fadeIn bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <a
                onClick={() => handleNavigation('about')}
                className="text-foreground hover:text-primary hover:bg-accent px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                {t('nav.about')}
              </a>
              <a
                onClick={() => handleNavigation('services')}
                className="text-foreground hover:text-primary hover:bg-accent px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                {t('nav.services')}
              </a>
              <a
                onClick={() => handleNavigation('portfolio')}
                className="text-foreground hover:text-primary hover:bg-accent px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                {t('nav.portfolio')}
              </a>
              <a
                onClick={() => handleNavigation('blog')}
                className="text-foreground hover:text-primary hover:bg-accent px-4 py-2 rounded-lg transition-colors cursor-pointer"
              >
                {t('nav.blog')}
              </a>
              <div className="px-4">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => handleNavigation('contact')}
                >
                  {t('nav.contact')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
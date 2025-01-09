import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-950 opacity-95" />
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
      
      <div className="relative container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              Berkay Cellek
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.about.description')}
            </p>
            <p className="text-sm text-purple-300 font-medium italic">
              {t('footer.about.quote')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              {t('footer.quickLinks.title')}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  Projelerimiz
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
              {t('footer.connect.title')}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.connect.description')}
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-purple-800/50 transition-colors duration-300"
                asChild
              >
                <a href="https://github.com/berkaycellek" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-gray-300 hover:text-white transition-colors duration-300" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-purple-800/50 transition-colors duration-300"
                asChild
              >
                <a href="https://linkedin.com/in/berkaycellek" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-gray-300 hover:text-white transition-colors duration-300" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-purple-800/50 transition-colors duration-300"
                asChild
              >
                <a href="mailto:contact@berkaycellek.com">
                  <Mail className="h-5 w-5 text-gray-300 hover:text-white transition-colors duration-300" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800/30 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Berkay Cellek. {t('footer.rights')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
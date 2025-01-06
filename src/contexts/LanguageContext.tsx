import React, { createContext, useContext, useState } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'hero.title': 'Passionate About Creating Beautiful Digital Solutions',
    'hero.subtitle': 'With years of experience in web development, I specialize in creating modern, responsive websites that help businesses grow their online presence.',
    'about.title': 'About Me',
    'services.title': 'What I Can Do For You',
    'portfolio.title': 'Featured Projects',
    'contact.title': 'Get in Touch',
  },
  tr: {
    'nav.about': 'Hakkımda',
    'nav.services': 'Hizmetler',
    'nav.portfolio': 'Portfolyo',
    'nav.contact': 'İletişim',
    'hero.title': 'Güzel Dijital Çözümler Yaratmaya Tutkulu',
    'hero.subtitle': 'Web geliştirme alanındaki yılların deneyimiyle, işletmelerin çevrimiçi varlıklarını büyütmelerine yardımcı olan modern, duyarlı web siteleri oluşturmada uzmanım.',
    'about.title': 'Hakkımda',
    'services.title': 'Sizin İçin Neler Yapabilirim',
    'portfolio.title': 'Öne Çıkan Projeler',
    'contact.title': 'İletişime Geçin',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
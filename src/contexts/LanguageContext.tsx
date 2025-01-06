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
    'nav.blog': 'Blog',
    'hero.badge': 'Professional Web Development',
    'hero.title': 'Creating Digital Experiences That Matter',
    'hero.subtitle': 'Transforming ideas into elegant, functional websites that drive results for businesses worldwide.',
    'hero.portfolio': 'View Portfolio',
    'hero.contact': 'Get in Touch',
    'about.badge': 'About Me',
    'about.title': 'Passionate About Creating Beautiful Digital Solutions',
    'about.description': 'With years of experience in web development, I specialize in creating modern, responsive websites that help businesses grow their online presence.',
    'about.modern.title': 'Modern Design',
    'about.modern.description': 'Creating beautiful, intuitive interfaces that engage users and drive results.',
    'about.code.title': 'Clean Code',
    'about.code.description': 'Writing maintainable, scalable code that stands the test of time.',
    'about.ux.title': 'User Experience',
    'about.ux.description': 'Focusing on creating seamless experiences that users love.',
    'services.badge': 'Services',
    'services.title': 'What I Can Do For You',
    'services.subtitle': 'Delivering exceptional web solutions that transform your digital presence and drive results',
    'services.webdesign.title': 'Web Design',
    'services.webdesign.description': 'Crafting visually stunning and user-centric websites that perfectly capture your brand\'s essence and leave a lasting impression on visitors.',
    'services.development.title': 'Development',
    'services.development.description': 'Building robust, scalable web solutions using cutting-edge technologies and best practices to ensure optimal performance and maintainability.',
    'services.responsive.title': 'Responsive Design',
    'services.responsive.description': 'Creating seamless experiences across all devices with fluid, adaptive layouts that maintain functionality and visual appeal from desktop to mobile.',
    'portfolio.badge': 'Portfolio',
    'portfolio.title': 'Featured Projects',
    'portfolio.subtitle': 'Showcasing some of my best work in web development',
    'portfolio.egepaslanmaz.description': 'My first client project - A corporate website for a stainless steel manufacturing company.',
    'portfolio.visitSite': 'Visit Site',
    'contact.badge': "Let's Connect",
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have a project in mind? Let\'s work together to create something extraordinary.',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.toast.title': 'Message sent!',
    'contact.toast.description': 'Thank you for your message. I\'ll get back to you soon.',
    'footer.about.description': 'Crafting digital experiences and bringing ideas to life through modern web development.',
    'footer.about.quote': 'Transforming visions into digital reality, one pixel at a time. Let\'s create something extraordinary together.',
    'footer.quickLinks.title': 'Quick Links',
    'footer.connect.title': 'Connect',
    'footer.connect.description': 'Ready to bring your digital dreams to life? Let\'s collaborate and create something amazing together.',
    'footer.rights': 'All rights reserved.',
    'blog.badge': 'Latest Posts',
    'blog.title': 'From Our Blog',
    'blog.subtitle': 'Stay updated with our latest insights and developments in web technology',
    'projects.badge': 'Our Projects',
    'projects.title': 'Our Latest Projects',
    'projects.subtitle': 'Check out our recently completed projects',
    'projects.viewProject': 'View Project',
  },
  tr: {
    'nav.about': 'Hakkımda',
    'nav.services': 'Hizmetler',
    'nav.portfolio': 'Portfolyo',
    'nav.contact': 'İletişim',
    'nav.blog': 'Blog',
    'hero.badge': 'Profesyonel Web Geliştirme',
    'hero.title': 'Önem Taşıyan Dijital Deneyimler Yaratıyoruz',
    'hero.subtitle': 'Fikirleri dünya çapındaki işletmeler için sonuç getiren zarif ve işlevsel web sitelerine dönüştürüyoruz.',
    'hero.portfolio': 'Portfolyoyu Görüntüle',
    'hero.contact': 'İletişime Geç',
    'about.badge': 'Hakkımda',
    'about.title': 'Güzel Dijital Çözümler Yaratmaya Tutkulu',
    'about.description': 'İşletmelerin çevrimiçi varlıklarını büyütmelerine yardımcı olan modern, duyarlı web siteleri oluşturmada uzmanım.',
    'about.modern.title': 'Modern Tasarım',
    'about.modern.description': 'Kullanıcıları cezbeden ve sonuç getiren güzel, sezgisel arayüzler oluşturuyorum.',
    'about.code.title': 'Temiz Kod',
    'about.code.description': 'Zamanın testinden geçen, sürdürülebilir ve ölçeklenebilir kod yazıyorum.',
    'about.ux.title': 'Kullanıcı Deneyimi',
    'about.ux.description': 'Kullanıcıların sevdiği kusursuz deneyimler yaratmaya odaklanıyorum.',
    'services.badge': 'Hizmetler',
    'services.title': 'Sizin İçin Neler Yapabilirim',
    'services.subtitle': 'Dijital varlığınızı dönüştüren ve sonuç getiren olağanüstü web çözümleri sunuyoruz',
    'services.webdesign.title': 'Web Tasarımı',
    'services.webdesign.description': 'Markanızın özünü mükemmel şekilde yansıtan ve ziyaretçiler üzerinde kalıcı bir etki bırakan, görsel açıdan etkileyici ve kullanıcı odaklı web siteleri tasarlıyoruz.',
    'services.development.title': 'Geliştirme',
    'services.development.description': 'Optimal performans ve sürdürülebilirliği sağlamak için en son teknolojileri ve en iyi uygulamaları kullanarak sağlam, ölçeklenebilir web çözümleri oluşturuyoruz.',
    'services.responsive.title': 'Duyarlı Tasarım',
    'services.responsive.description': 'Masaüstünden mobile kadar işlevselliği ve görsel çekiciliği koruyan akıcı, uyarlanabilir düzenlerle tüm cihazlarda kusursuz deneyimler yaratıyoruz.',
    'portfolio.badge': 'Portfolyo',
    'portfolio.title': 'Öne Çıkan Projeler',
    'portfolio.subtitle': 'Web geliştirme alanındaki en iyi çalışmalarımdan bazıları',
    'portfolio.egepaslanmaz.description': 'İlk müşteri projem - Paslanmaz çelik üretim şirketi için kurumsal web sitesi.',
    'portfolio.visitSite': 'Siteyi Ziyaret Et',
    'contact.badge': 'İletişime Geçin',
    'contact.title': 'İletişime Geçin',
    'contact.subtitle': 'Aklınızda bir proje mi var? Birlikte olağanüstü bir şey yaratalım.',
    'contact.form.name': 'Adınız',
    'contact.form.email': 'E-posta Adresiniz',
    'contact.form.message': 'Mesajınız',
    'contact.form.submit': 'Mesaj Gönder',
    'contact.toast.title': 'Mesaj gönderildi!',
    'contact.toast.description': 'Mesajınız için teşekkürler. En kısa sürede size geri döneceğim.',
    'footer.about.description': 'Modern web geliştirme ile dijital deneyimler yaratıyor ve fikirleri hayata geçiriyoruz.',
    'footer.about.quote': 'Dijital gerçekliği, bir piksel bir piksel dönüştürüyoruz. Birlikte olağanüstü bir şey yaratalım.',
    'footer.quickLinks.title': 'Hızlı Bağlantılar',
    'footer.connect.title': 'Bağlantı',
    'footer.connect.description': 'Dijital hayallerinizi hayata geçirmeye hazır mısınız? Birlikte harika bir şeyler yaratalım.',
    'footer.rights': 'Tüm hakları saklıdır.',
    'blog.badge': 'Son Yazılar',
    'blog.title': 'Blogumuzdan',
    'blog.subtitle': 'Web teknolojilerindeki son gelişmeler ve içgörülerimizle güncel kalın',
    'projects.badge': 'Projelerimiz',
    'projects.title': 'Son Projelerimiz',
    'projects.subtitle': 'Başarıyla tamamladığımız son projelerimizi inceleyin',
    'projects.viewProject': 'Projeyi İncele',
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

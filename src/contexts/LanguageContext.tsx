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
    'about.badge': 'About Us',
    'about.title': 'Crafting Digital Excellence Through Innovation',
    'about.description': 'We specialize in delivering cutting-edge web solutions that combine innovative design with powerful functionality to help businesses thrive in the digital age.',
    'about.modern.title': 'Innovative Design',
    'about.modern.description': 'Creating stunning, user-centric interfaces that captivate and engage your audience effectively.',
    'about.code.title': 'Technical Excellence',
    'about.code.description': 'Developing robust, scalable solutions using the latest technologies and best practices.',
    'about.ux.title': 'User Experience',
    'about.ux.description': 'Delivering seamless, intuitive experiences that delight users and drive business growth.',
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
    'common.back': 'Back',
    'services.code.title': 'Technical Excellence',
    'services.code.description': 'In the modern web development world, technical excellence is the foundation of successful projects. We deliver high-performance and scalable solutions using the latest technologies and best practices.',
    'services.code.process': 'Code quality, security, and performance optimization are among our priorities in every project. With our test-driven development approach and continuous integration processes, we develop reliable and sustainable applications.',
    'services.ux.title': 'User Experience',
    'services.ux.description': 'User experience (UX) is at the heart of modern web design. We understand user needs and expectations to design intuitive and easy-to-use interfaces.',
    'services.ux.process': 'In every project, we aim to maximize user satisfaction through user research, usability testing, and continuous feedback loops.',
    'services.webdesign.image1Alt': 'Modern Web Design',
    'services.webdesign.image2Alt': 'Web Development Setup',
    'services.webdesign.image3Alt': 'Modern Web Design Process',
    'services.webdesign.image4Alt': 'User Experience Design',
    'services.webdesign.features.title': 'Technical Features',
    'services.webdesign.features.responsive': 'Responsive Design - Perfect display on all devices',
    'services.webdesign.features.seo': 'SEO Friendly Structure - Rank higher in search engines',
    'services.webdesign.features.performance': 'Fast Loading Times - Optimized performance',
    'services.webdesign.features.ui': 'Modern UI/UX - User-friendly interfaces',
    'services.webdesign.features.browser': 'Cross-Browser Compatibility - Seamless operation across all browsers',
    'services.webdesign.process.title': 'Our Design Process',
    'services.webdesign.process.step1': 'Needs Analysis and Planning',
    'services.webdesign.process.step2': 'Wireframe and Prototype Creation',
    'services.webdesign.process.step3': 'Visual Design and UI Development',
    'services.webdesign.process.step4': 'Responsive Design Implementation',
    'services.webdesign.process.step5': 'Testing and Optimization',
    'services.webdesign.process.step6': 'Launch and Support',
    'services.webdesign.consultation.title': 'Free Consultation',
    'services.webdesign.consultation.description': "Let's determine the best solution for your project together. Get in touch now!",
    'services.webdesign.consultation.cta': 'Contact Us',
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
    'about.badge': 'Hakkımızda',
    'about.title': 'İnovasyon ile Dijital Mükemmelliği Şekillendiriyoruz',
    'about.description': 'Yenilikçi tasarımı güçlü işlevsellikle birleştirerek işletmelerin dijital çağda başarılı olmasına yardımcı olan modern web çözümleri sunuyoruz.',
    'about.modern.title': 'Yenilikçi Tasarım',
    'about.modern.description': 'Hedef kitlenizi etkili bir şekilde cezbeden ve bağlayan etkileyici, kullanıcı odaklı arayüzler yaratıyoruz.',
    'about.code.title': 'Teknik Mükemmellik',
    'about.code.description': 'En son teknolojileri ve en iyi uygulamaları kullanarak sağlam, ölçeklenebilir çözümler geliştiriyoruz.',
    'about.ux.title': 'Kullanıcı Deneyimi',
    'about.ux.description': 'Kullanıcıları memnun eden ve işletme büyümesini destekleyen kusursuz, sezgisel deneyimler sunuyoruz.',
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
    'common.back': 'Geri Dön',
    'services.code.title': 'Teknik Mükemmellik',
    'services.code.description': 'Modern web geliştirme dünyasında teknik mükemmellik, başarılı projelerin temelidir. En son teknolojileri ve en iyi uygulamaları kullanarak, yüksek performanslı ve ölçeklenebilir çözümler sunuyoruz.',
    'services.code.process': 'Her projede kod kalitesi, güvenlik ve performans optimizasyonu önceliklerimiz arasındadır. Test odaklı geliştirme yaklaşımımız ve sürekli entegrasyon süreçlerimizle, güvenilir ve sürdürülebilir uygulamalar geliştiriyoruz.',
    'services.ux.title': 'Kullanıcı Deneyimi',
    'services.ux.description': 'Kullanıcı deneyimi (UX) modern web tasarımının kalbinde yer alır. Kullanıcı ihtiyaçlarını ve beklentilerini anlayarak sezgisel ve kullanımı kolay arayüzler tasarlıyoruz.',
    'services.ux.process': 'Her projede kullanıcı memnuniyetini artırmayı hedefliyoruz.',
    'services.webdesign.image1Alt': 'Modern Web Tasarımı',
    'services.webdesign.image2Alt': 'Web Geliştirme Ortamı',
    'services.webdesign.image3Alt': 'Modern Web Tasarım Süreci',
    'services.webdesign.image4Alt': 'Kullanıcı Deneyimi Tasarımı',
    'services.webdesign.features.title': 'Teknik Özellikler',
    'services.webdesign.features.responsive': 'Responsive Tasarım - Tüm cihazlarda mükemmel görünüm',
    'services.webdesign.features.seo': 'SEO Dostu Yapı - Arama motorlarında üst sıralarda yer alın',
    'services.webdesign.features.performance': 'Hızlı Yükleme Süreleri - Optimize edilmiş performans',
    'services.webdesign.features.ui': 'Modern UI/UX - Kullanıcı dostu arayüzler',
    'services.webdesign.features.browser': 'Cross-Browser Uyumluluk - Tüm tarayıcılarda sorunsuz çalışma',
    'services.webdesign.process.title': 'Tasarım Sürecimiz',
    'services.webdesign.process.step1': 'İhtiyaç Analizi ve Planlama',
    'services.webdesign.process.step2': 'Wireframe ve Prototip Oluşturma',
    'services.webdesign.process.step3': 'Görsel Tasarım ve UI Geliştirme',
    'services.webdesign.process.step4': 'Responsive Tasarım Uygulaması',
    'services.webdesign.process.step5': 'Test ve Optimizasyon',
    'services.webdesign.process.step6': 'Lansman ve Destek',
    'services.webdesign.consultation.title': 'Ücretsiz Danışmanlık',
    'services.webdesign.consultation.description': 'Projeniz için en uygun çözümü birlikte belirleyelim. Hemen iletişime geçin!',
    'services.webdesign.consultation.cta': 'İletişime Geçin',
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

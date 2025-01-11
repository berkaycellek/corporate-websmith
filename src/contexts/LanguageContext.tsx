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
    'services.modern.title': 'Innovative Design',
    'services.modern.description': 'In modern web design, simplicity and functionality are at the forefront. We design clean and understandable interfaces to maximize user experience. In each project, we strengthen your brand\'s digital presence by using the latest technologies and design trends.',
    'services.modern.process': 'Our design process begins with user-focused research and is shaped by continuous feedback. By adopting responsive design principles, we create websites that look and work perfectly on every device. Our minimalist approach ensures content is in the foreground while enriching the user experience with modern animations and transitions.',
    'services.modern.brand': 'In each project, we create unique designs that reflect your brand\'s identity. Following current design trends, we develop timeless and impressive websites. We carefully plan every detail from typography selection to color palette, from grid system to white space usage.',
    'services.modern.approach': 'Our sustainable design approach ensures your project\'s long-term success. We offer both aesthetic and functional solutions, considering technical details such as SEO-friendly structure, fast loading times, and easy maintainability.',
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
    'services.modern.title': 'Yenilikçi Tasarım',
    'services.modern.description': 'Modern web tasarımında sadelik ve işlevsellik ön plandadır. Kullanıcı deneyimini en üst düzeye çıkarmak için temiz ve anlaşılır arayüzler tasarlıyoruz. Her projede, en son teknolojileri ve tasarım trendlerini kullanarak, markanızın dijital varlığını güçlendiriyoruz.',
    'services.modern.process': 'Tasarım sürecimiz, kullanıcı odaklı araştırma ile başlar ve sürekli geri bildirimlerle şekillenir. Responsive tasarım prensiplerini benimseyerek, her cihazda mükemmel görünen ve çalışan web siteleri oluşturuyoruz. Minimalist yaklaşımımız, içeriğin ön planda olmasını sağlarken, modern animasyonlar ve geçişler ile kullanıcı deneyimini zenginleştiriyoruz.',
    'services.modern.brand': 'Her projede, markanızın kimliğini yansıtan özgün tasarımlar oluşturuyoruz. Güncel tasarım trendlerini takip ederek, zamansız ve etkileyici web siteleri geliştiriyoruz. Tipografi seçiminden renk paletine, grid sisteminden beyaz alan kullanımına kadar her detayı özenle planlıyoruz.',
    'services.modern.approach': 'Sürdürülebilir tasarım yaklaşımımız, projenizin uzun vadede başarılı olmasını sağlar. SEO dostu yapı, hızlı yükleme süreleri ve kolay bakım yapılabilirlik gibi teknik detayları da göz önünde bulundurarak, hem estetik hem de fonksiyonel çözümler sunuyoruz.',
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

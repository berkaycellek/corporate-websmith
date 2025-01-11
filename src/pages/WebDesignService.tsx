import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const WebDesignService = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 pt-20">
        <Button
          variant="ghost"
          className="mb-6 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('common.back')}
        </Button>
        
        <h1 className="text-4xl font-bold mb-8 text-center dark:text-white">
          {t('services.webdesign.title')}
        </h1>

        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Modern Web Design"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Web Development Setup"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <p className="text-lg mb-8">
            {t('services.webdesign.description')}
          </p>

          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt="Modern Web Design Process"
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Teknik Özellikler</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Responsive Tasarım - Tüm cihazlarda mükemmel görünüm</li>
            <li>SEO Dostu Yapı - Arama motorlarında üst sıralarda yer alın</li>
            <li>Hızlı Yükleme Süreleri - Optimize edilmiş performans</li>
            <li>Modern UI/UX - Kullanıcı dostu arayüzler</li>
            <li>Cross-Browser Uyumluluk - Tüm tarayıcılarda sorunsuz çalışma</li>
          </ul>

          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt="User Experience Design"
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Tasarım Sürecimiz</h2>
          <ol className="list-decimal pl-6 mb-8">
            <li>İhtiyaç Analizi ve Planlama</li>
            <li>Wireframe ve Prototip Oluşturma</li>
            <li>Görsel Tasarım ve UI Geliştirme</li>
            <li>Responsive Tasarım Uygulaması</li>
            <li>Test ve Optimizasyon</li>
            <li>Lansman ve Destek</li>
          </ol>

          <div className="bg-primary/5 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-4">Ücretsiz Danışmanlık</h3>
            <p className="mb-4">
              Projeniz için en uygun çözümü birlikte belirleyelim. Hemen iletişime geçin!
            </p>
            <Button 
              onClick={() => navigate('/#contact')}
              className="bg-primary hover:bg-primary/90"
            >
              İletişime Geçin
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignService;
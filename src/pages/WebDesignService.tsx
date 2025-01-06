import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const WebDesignService = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
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
        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <p className="text-lg mb-6">
            {t('services.webdesign.description')}
          </p>

          <h2 className="text-2xl font-semibold mb-4">Sunduğumuz Web Tasarım Hizmetleri</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Kurumsal Web Sitesi Tasarımı</li>
            <li className="mb-2">E-ticaret Sitesi Tasarımı</li>
            <li className="mb-2">Blog ve Kişisel Web Sitesi Tasarımı</li>
            <li className="mb-2">Landing Page Tasarımı</li>
            <li className="mb-2">Web Uygulama Arayüz Tasarımı</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Teknik Özellikler</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Responsive Tasarım - Tüm cihazlarda mükemmel görüntüleme</li>
            <li className="mb-2">Modern UI/UX - Kullanıcı dostu ve çağdaş arayüz tasarımı</li>
            <li className="mb-2">SEO Dostu Yapı - Arama motorlarında üst sıralarda yer alma</li>
            <li className="mb-2">Hızlı Yükleme Süreleri - Optimize edilmiş performans</li>
            <li className="mb-2">Cross-Browser Uyumluluk - Tüm modern tarayıcılarda sorunsuz çalışma</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Tasarım Sürecimiz</h2>
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-3">İhtiyaç Analizi ve Planlama</li>
            <li className="mb-3">Wireframe ve Prototip Oluşturma</li>
            <li className="mb-3">Görsel Tasarım ve UI Geliştirme</li>
            <li className="mb-3">Responsive Tasarım Uygulaması</li>
            <li className="mb-3">Test ve Optimizasyon</li>
            <li className="mb-3">Lansman ve Destek</li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4">Neden Bizi Seçmelisiniz?</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">10+ Yıllık Sektör Deneyimi</li>
            <li className="mb-2">100+ Başarılı Proje</li>
            <li className="mb-2">Uzman Tasarım Ekibi</li>
            <li className="mb-2">Modern Teknolojiler</li>
            <li className="mb-2">7/24 Teknik Destek</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebDesignService;
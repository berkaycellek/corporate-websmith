import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const ResponsiveService = () => {
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
          {t('services.responsive.title')}
        </h1>

        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="Responsive Design Development"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Team Collaboration"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <p className="text-lg mb-8">
            {t('services.responsive.description')}
          </p>

          <h2 className="text-2xl font-semibold mb-4">Responsive Tasarım Hizmetlerimiz</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Mobil Öncelikli Tasarım Yaklaşımı</li>
            <li>Tüm Cihazlarda Uyumlu Arayüzler</li>
            <li>Performans Optimizasyonu</li>
            <li>Progressive Web Apps (PWA)</li>
            <li>Cross-Platform Uyumluluk</li>
          </ul>

          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
              alt="Modern Development Setup"
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Teknik Özellikler</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Fluid Grid Sistemleri - Esnek ve uyarlanabilir layout yapısı</li>
            <li>Responsive Medya - Görüntü ve videoların otomatik optimizasyonu</li>
            <li>Breakpoint Yönetimi - Tüm ekran boyutları için özel tasarımlar</li>
            <li>CSS Flexbox ve Grid - Modern layout teknolojileri</li>
            <li>Touch-Friendly Tasarım - Dokunmatik cihazlar için optimize edilmiş</li>
          </ul>

          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Coding Environment"
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Geliştirme Sürecimiz</h2>
          <ol className="list-decimal pl-6 mb-8">
            <li>Cihaz ve Kullanıcı Analizi</li>
            <li>Responsive Wireframe Tasarımı</li>
            <li>Mobil Öncelikli Geliştirme</li>
            <li>Cross-Device Testing</li>
            <li>Performans Optimizasyonu</li>
            <li>Sürekli İyileştirme ve Bakım</li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4">Neden Responsive Tasarım Önemli?</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Mobil Kullanıcı Deneyimini İyileştirme</li>
            <li>SEO Performansını Artırma</li>
            <li>Dönüşüm Oranlarını Yükseltme</li>
            <li>Bakım Maliyetlerini Düşürme</li>
            <li>Marka İmajını Güçlendirme</li>
          </ul>

          <div className="bg-primary/5 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-4">Ücretsiz Danışmanlık</h3>
            <p className="mb-4">
              Projenizin responsive tasarım ihtiyaçlarını birlikte değerlendirelim. Hemen iletişime geçin!
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

export default ResponsiveService;
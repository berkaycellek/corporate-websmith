import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const DevelopmentService = () => {
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
          {t('services.development.title')}
        </h1>

        <div className="max-w-3xl mx-auto prose dark:prose-invert">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
              alt="Software Development"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Developer Workspace"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <p className="text-lg mb-6">
            {t('services.development.description')}
          </p>

          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="Code Development"
              className="rounded-lg shadow-lg w-full h-48 object-cover mb-8"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Geliştirme Sürecimiz</h2>
          <ol className="list-decimal pl-6 mb-8">
            <li className="mb-4">
              <strong>Analiz ve Planlama</strong>
              <p>Projenizin gereksinimlerini detaylı olarak analiz eder, en uygun teknoloji stack'ini belirler ve geliştirme sürecini planlarız.</p>
            </li>
            <li className="mb-4">
              <strong>Tasarım ve Prototipleme</strong>
              <p>Kullanıcı deneyimini ön planda tutarak, modern ve işlevsel bir tasarım oluşturur, interaktif prototipler hazırlarız.</p>
            </li>
            <li className="mb-4">
              <strong>Geliştirme ve Test</strong>
              <p>En son teknolojileri kullanarak, güvenli ve performanslı uygulamalar geliştiririz. Her aşamada kapsamlı testler gerçekleştiririz.</p>
            </li>
            <li className="mb-4">
              <strong>Deployment ve Bakım</strong>
              <p>Uygulamanızı güvenli bir şekilde yayına alır, sürekli izleme ve bakım hizmetleri sunarız.</p>
            </li>
          </ol>

          <h2 className="text-2xl font-semibold mb-4">Öne Çıkan Özelliklerimiz</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>Modern ve güvenli kod mimarisi</li>
            <li>Yüksek performans optimizasyonu</li>
            <li>Responsive ve kullanıcı dostu tasarımlar</li>
            <li>SEO uyumlu geliştirme</li>
            <li>7/24 teknik destek</li>
            <li>Düzenli bakım ve güncelleme hizmetleri</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Neden Bizi Seçmelisiniz?</h2>
          <ul className="list-disc pl-6 mb-8">
            <li>10+ yıllık sektör deneyimi</li>
            <li>100+ başarılı proje</li>
            <li>Uzman geliştirici ekibi</li>
            <li>Güncel teknoloji kullanımı</li>
            <li>Rekabetçi fiyatlandırma</li>
            <li>Hızlı teslimat süreleri</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-3">Ücretsiz Danışmanlık</h3>
            <p className="mb-4">Projeniz için en uygun çözümü birlikte belirleyelim. Hemen iletişime geçin!</p>
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentService;
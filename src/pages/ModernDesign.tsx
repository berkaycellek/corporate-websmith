import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const ModernDesign = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <Button
          onClick={() => navigate(-1)}
          className="mb-8"
          variant="outline"
        >
          ← Geri Dön
        </Button>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 dark:text-white">
            {t('about.modern.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t('about.modern.description')}
          </p>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>Tasarım Yaklaşımımız</h2>
            <p>
              Modern web tasarımında en son trendleri ve teknolojileri kullanarak, 
              markanızı en iyi şekilde yansıtan çözümler üretiyoruz. Her proje için 
              özel olarak tasarlanmış, kullanıcı dostu ve etkileyici arayüzler 
              oluşturuyoruz.
            </p>
            
            <h2>Özelliklerimiz</h2>
            <ul>
              <li>Responsive Tasarım</li>
              <li>Modern UI/UX Prensipleri</li>
              <li>Performans Odaklı Geliştirme</li>
              <li>SEO Dostu Yapı</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ModernDesign;
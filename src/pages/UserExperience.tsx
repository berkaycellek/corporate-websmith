import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const UserExperience = () => {
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
            {t('about.ux.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t('about.ux.description')}
          </p>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>UX Yaklaşımımız</h2>
            <p>
              Kullanıcı deneyimi tasarımında, hedef kitlenizin ihtiyaçlarını 
              ve beklentilerini merkeze alıyoruz. Kullanıcı araştırmaları ve 
              testlerle desteklenen, veri odaklı kararlar alıyoruz.
            </p>
            
            <h2>UX Süreçlerimiz</h2>
            <ul>
              <li>Kullanıcı Araştırması</li>
              <li>Wireframing & Prototyping</li>
              <li>Kullanılabilirlik Testleri</li>
              <li>İteratif Tasarım Süreci</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserExperience;
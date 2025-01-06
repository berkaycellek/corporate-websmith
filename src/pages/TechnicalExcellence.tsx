import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

const TechnicalExcellence = () => {
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
            {t('about.code.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t('about.code.description')}
          </p>
          
          <div className="prose dark:prose-invert max-w-none">
            <h2>Teknik Uzmanlığımız</h2>
            <p>
              En son teknolojileri ve geliştirme pratiklerini kullanarak, 
              yüksek performanslı ve ölçeklenebilir web uygulamaları geliştiriyoruz. 
              Kod kalitesi ve maintainability bizim için en önemli kriterlerdir.
            </p>
            
            <h2>Teknolojilerimiz</h2>
            <ul>
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Node.js</li>
              <li>Modern Backend Teknolojileri</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TechnicalExcellence;
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
          <h2 className="text-2xl font-semibold mb-4">Özellikler</h2>
          <ul>
            <li>Responsive Tasarım</li>
            <li>Modern UI/UX</li>
            <li>SEO Dostu Yapı</li>
            <li>Hızlı Yükleme Süreleri</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WebDesignService;
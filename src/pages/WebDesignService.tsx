import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const WebDesignService = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/#contact');
  };

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
              alt={t('services.webdesign.image1Alt')}
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt={t('services.webdesign.image2Alt')}
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>

          <p className="text-lg mb-8">
            {t('services.webdesign.description')}
          </p>

          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              alt={t('services.webdesign.image3Alt')}
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            {t('services.webdesign.features.title')}
          </h2>
          <ul className="list-disc pl-6 mb-8">
            <li>{t('services.webdesign.features.responsive')}</li>
            <li>{t('services.webdesign.features.seo')}</li>
            <li>{t('services.webdesign.features.performance')}</li>
            <li>{t('services.webdesign.features.ui')}</li>
            <li>{t('services.webdesign.features.browser')}</li>
          </ul>

          <div className="relative mb-12">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              alt={t('services.webdesign.image4Alt')}
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            {t('services.webdesign.process.title')}
          </h2>
          <ol className="list-decimal pl-6 mb-8">
            <li>{t('services.webdesign.process.step1')}</li>
            <li>{t('services.webdesign.process.step2')}</li>
            <li>{t('services.webdesign.process.step3')}</li>
            <li>{t('services.webdesign.process.step4')}</li>
            <li>{t('services.webdesign.process.step5')}</li>
            <li>{t('services.webdesign.process.step6')}</li>
          </ol>

          <div className="bg-primary/5 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-semibold mb-4">
              {t('services.webdesign.consultation.title')}
            </h3>
            <p className="mb-4">
              {t('services.webdesign.consultation.description')}
            </p>
            <Button 
              onClick={handleContactClick}
              className="bg-primary hover:bg-primary/90"
            >
              {t('services.webdesign.consultation.cta')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignService;
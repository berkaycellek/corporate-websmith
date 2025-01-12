import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";

const TechnicalExcellence = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mt-16 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('common.back')}
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Technical Excellence"
                className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
            
            <h1 className="text-3xl font-bold mb-6 dark:text-white">
              {t('services.code.title')}
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {t('services.code.description')}
              </p>
              <p>
                {t('services.code.process')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExcellence;
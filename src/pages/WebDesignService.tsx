import { useLanguage } from "@/contexts/LanguageContext";

const WebDesignService = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
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
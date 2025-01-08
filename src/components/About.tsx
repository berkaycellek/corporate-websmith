import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";
import { Share2 } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const sections = [
    {
      title: t('about.modern.title'),
      description: t('about.modern.description'),
      path: '/modern-design',
      icon: "🎨"
    },
    {
      title: t('about.code.title'),
      description: t('about.code.description'),
      path: '/technical-excellence',
      icon: "💻"
    },
    {
      title: t('about.ux.title'),
      description: t('about.ux.description'),
      path: '/user-experience',
      icon: "✨"
    },
  ];

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const text = t('about.title');

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
    }
  };

  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-full">
            {t('about.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            {t('about.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {t('about.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sections.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all transform hover:-translate-y-1 cursor-pointer"
              onClick={() => navigate(item.path)}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t dark:border-gray-800 pt-8">
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-lg font-semibold dark:text-white">Bu Sayfayı Paylaş</h4>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('linkedin')}
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                Facebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
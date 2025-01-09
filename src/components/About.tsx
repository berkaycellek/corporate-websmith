import { useLanguage } from "@/contexts/LanguageContext";
import { useNavigate } from "react-router-dom";

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

        <div className="grid md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
};

export default About;
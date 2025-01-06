import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-full">
            {t('about.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            {t('about.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t('about.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: t('about.modern.title'),
              description: t('about.modern.description'),
            },
            {
              title: t('about.code.title'),
              description: t('about.code.description'),
            },
            {
              title: t('about.ux.title'),
              description: t('about.ux.description'),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
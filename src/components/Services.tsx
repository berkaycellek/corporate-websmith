import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Layout, Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Layout,
      title: t('services.webdesign.title'),
      description: t('services.webdesign.description'),
    },
    {
      icon: Code,
      title: t('services.development.title'),
      description: t('services.development.description'),
    },
    {
      icon: Smartphone,
      title: t('services.responsive.title'),
      description: t('services.responsive.description'),
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-full">
            {t('services.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            {t('services.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow border-0 bg-white dark:bg-gray-800"
            >
              <CardHeader>
                <service.icon className="w-12 h-12 mb-4 text-gray-700 dark:text-gray-300" />
                <CardTitle className="dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
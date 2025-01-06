import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();
  
  const portfolioItems = [
    {
      title: "Ege Paslanmaz",
      description: t('portfolio.egepaslanmaz.description'),
      image: "/lovable-uploads/c1c1c7be-8289-4f5f-8e99-a34c6a76ee23.png",
      link: "https://egepaslanmaz.com",
    },
  ];

  return (
    <section id="portfolio" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-full">
            {t('portfolio.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            {t('portfolio.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden border-0 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="dark:text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <Button asChild variant="outline" className="dark:text-gray-300 dark:hover:text-white">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {t('portfolio.visitSite')} <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
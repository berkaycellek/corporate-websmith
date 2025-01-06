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
    <section id="portfolio" className="relative py-20 overflow-hidden">
      {/* Background with modern gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 opacity-90" />
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full text-white">
            {t('portfolio.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {t('portfolio.title')}
          </h2>
          <p className="text-gray-200">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden border-0 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 mb-4">{item.description}</p>
                <Button 
                  variant="outline" 
                  className="text-white border-white/20 hover:bg-white/10 backdrop-blur-sm w-full"
                  asChild
                >
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2"
                  >
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Ege Paslanmaz",
      description: "My first client project - A corporate website for a stainless steel manufacturing company.",
      image: "/lovable-uploads/egepaslanmaz-portfolio.png",
      link: "https://egepaslanmaz.com",
    },
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-100 rounded-full">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-gray-600">
            Showcasing some of my best work in web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden border-0 bg-white hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button asChild variant="outline">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Site <ExternalLink className="w-4 h-4" />
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
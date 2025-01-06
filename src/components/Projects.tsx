import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Projects = () => {
  const { t, language } = useLanguage();
  
  const projects = [
    {
      title: "Proje 1",
      description: language === 'tr' ? 
        "Proje açıklaması buraya gelecek" : 
        "Project description will be here",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Proje 2",
      description: language === 'tr' ? 
        "Proje açıklaması buraya gelecek" : 
        "Project description will be here",
      image: "/placeholder.svg",
      link: "#",
    },
    {
      title: "Proje 3",
      description: language === 'tr' ? 
        "Proje açıklaması buraya gelecek" : 
        "Project description will be here",
      image: "/placeholder.svg",
      link: "#",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-full">
            {language === 'tr' ? 'Projelerimiz' : 'Our Projects'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            {language === 'tr' ? 'Son Projelerimiz' : 'Our Latest Projects'}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {language === 'tr' 
              ? 'Başarıyla tamamladığımız son projelerimizi inceleyin' 
              : 'Check out our recently completed projects'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-0 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="dark:text-white">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <Button asChild variant="outline" className="dark:text-gray-300 dark:hover:text-white">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {language === 'tr' ? 'Projeyi İncele' : 'View Project'} <ExternalLink className="w-4 h-4" />
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

export default Projects;
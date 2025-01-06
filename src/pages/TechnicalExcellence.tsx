import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TechnicalExcellence = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Geri Dön
        </Button>

        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
            alt="Technical Excellence"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-3xl font-bold mb-6 dark:text-white">
            Teknik Mükemmellik
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              En son teknolojileri kullanarak güvenilir ve ölçeklenebilir web çözümleri
              geliştiriyoruz. Performans ve güvenlik önceliklerimiz arasında yer alıyor.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Kod kalitesi ve sürdürülebilirlik konusunda taviz vermeden, uzun vadeli
              çözümler sunuyoruz. Modern geliştirme pratiklerini takip ederek, projenizin
              geleceğe hazır olmasını sağlıyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExcellence;
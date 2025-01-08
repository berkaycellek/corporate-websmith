import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const TechnicalExcellence = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mt-16 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Geri Dön
          </Button>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                alt="Technical Excellence"
                className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
            
            <h1 className="text-3xl font-bold mb-6 dark:text-white">
              Teknik Mükemmellik
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Modern web geliştirme dünyasında teknik mükemmellik, başarılı projelerin temelidir. 
                En son teknolojileri ve en iyi uygulamaları kullanarak, yüksek performanslı ve 
                ölçeklenebilir çözümler sunuyoruz.
              </p>
              <p>
                Her projede kod kalitesi, güvenlik ve performans optimizasyonu önceliklerimiz 
                arasındadır. Test odaklı geliştirme yaklaşımımız ve sürekli entegrasyon 
                süreçlerimizle, güvenilir ve sürdürülebilir uygulamalar geliştiriyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExcellence;
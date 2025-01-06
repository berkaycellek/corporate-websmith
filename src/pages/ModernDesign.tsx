import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ModernDesign = () => {
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
            src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
            alt="Modern Design"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-3xl font-bold mb-6 dark:text-white">
            Yenilikçi Tasarım
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Modern web tasarımında sadelik ve işlevsellik ön plandadır. Kullanıcı deneyimini
              en üst düzeye çıkarmak için temiz ve anlaşılır arayüzler tasarlıyoruz.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Her projede, markanızın kimliğini yansıtan özgün tasarımlar oluşturuyoruz.
              Güncel tasarım trendlerini takip ederek, zamansız ve etkileyici web siteleri
              geliştiriyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernDesign;
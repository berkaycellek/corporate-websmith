import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const UserExperience = () => {
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
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="User Experience"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-3xl font-bold mb-6 dark:text-white">
            Kullanıcı Deneyimi
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Kullanıcı deneyimi tasarımında sezgisel ve kolay kullanılabilir arayüzler
              oluşturuyoruz. Her detayı düşünerek, ziyaretçilerinizin web sitenizde keyifli
              bir deneyim yaşamasını sağlıyoruz.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Kullanıcı geri bildirimlerini değerlendirerek, sürekli iyileştirmeler yapıyor
              ve en iyi deneyimi sunmak için çalışıyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExperience;
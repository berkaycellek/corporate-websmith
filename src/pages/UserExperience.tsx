import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";

const UserExperience = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <div className="py-12">
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
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="User Experience"
                className="w-full h-[400px] object-cover rounded-lg mb-8 shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
            
            <h1 className="text-3xl font-bold mb-6 dark:text-white">
              Kullanıcı Deneyimi
            </h1>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Kullanıcı deneyimi (UX), modern web tasarımının kalbinde yer alır. 
                Kullanıcıların ihtiyaçlarını ve beklentilerini anlayarak, sezgisel ve 
                kullanımı kolay arayüzler tasarlıyoruz.
              </p>
              <p>
                Her projede kullanıcı araştırması, kullanılabilirlik testleri ve 
                sürekli geri bildirim döngüleriyle, kullanıcı memnuniyetini en üst 
                düzeye çıkarmayı hedefliyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExperience;
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
              Kullanıcı deneyimi (UX), modern web tasarımının kalbinde yer alır. Biz, her projeye 
              kullanıcı odaklı bir yaklaşımla başlıyor, hedef kitlenizin ihtiyaçlarını, davranışlarını 
              ve tercihlerini derinlemesine analiz ediyoruz. Bu anlayış, tasarım sürecimizin temelini 
              oluşturuyor.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Kullanıcı arayüzü tasarımında (UI) en son trendleri ve best practice'leri takip ederek, 
              görsel açıdan etkileyici ancak aynı zamanda kullanımı kolay arayüzler oluşturuyoruz. 
              Renk seçimlerinden tipografiye, buton yerleşimlerinden navigasyon yapısına kadar her 
              detayı özenle planlıyoruz.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Erişilebilirlik (accessibility) konusunda WCAG standartlarını takip ediyor, web sitelerimizi 
              her kullanıcının rahatça kullanabilmesini sağlıyoruz. Görme engelli kullanıcılar için 
              screen reader uyumluluğu, klavye navigasyonu ve yüksek kontrast modları gibi özellikleri 
              standart olarak sunuyoruz.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Kullanıcı davranışlarını analiz etmek için heat mapping, kullanıcı yolculuğu analizi 
              ve A/B testleri gibi modern araçları kullanıyoruz. Bu veriler ışığında sürekli 
              iyileştirmeler yaparak, conversion oranlarını artırıyor ve kullanıcı memnuniyetini 
              en üst seviyede tutuyoruz.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Mobil öncelikli tasarım yaklaşımımızla (mobile-first design), responsive web tasarımının 
              ötesine geçiyor, her cihazda mükemmel çalışan ve görünen arayüzler oluşturuyoruz. 
              Sayfa yükleme hızları, interaktif elementlerin performansı ve genel kullanıcı deneyimi 
              sürekli olarak optimize ediliyor.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Mikro etkileşimler ve animasyonlarla kullanıcı deneyimini zenginleştiriyor, ancak 
              bunu yaparken performans ve kullanılabilirliği göz ardı etmiyoruz. Her eklediğimiz 
              özellik, kullanıcıya değer katmak ve deneyimi iyileştirmek amacını taşıyor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserExperience;
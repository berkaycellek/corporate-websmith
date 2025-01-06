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
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
            alt="Technical Excellence"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-3xl font-bold mb-6 dark:text-white">
            Teknik Mükemmellik
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Modern web geliştirme dünyasında teknik mükemmellik, başarılı projelerin temelidir. 
              En son teknolojileri ve framework'leri kullanarak, yüksek performanslı ve ölçeklenebilir 
              web çözümleri geliştiriyoruz. Her projede, clean code prensiplerini ve en iyi 
              yazılım geliştirme pratiklerini uyguluyoruz.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Güvenlik ve performans optimizasyonu önceliklerimiz arasında. Modern web güvenlik 
              standartlarını takip ederek, uygulamalarımızı olası tehditlere karşı koruyoruz. 
              Sayfa yükleme hızları, SEO optimizasyonu ve kullanıcı deneyimi için kritik öneme 
              sahip performans metriklerini sürekli izliyor ve iyileştiriyoruz.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Mikroservis mimarisi, containerization ve cloud teknolojileri gibi modern altyapı 
              çözümlerini projelerimize entegre ediyoruz. Bu sayede, uygulamalarımız kolayca 
              ölçeklenebiliyor ve yüksek kullanıcı yüklerini sorunsuz karşılayabiliyor. CI/CD 
              pipeline'ları ile sürekli entegrasyon ve deployment süreçlerini otomatize ederek, 
              hızlı ve güvenilir yazılım geliştirme döngüleri oluşturuyoruz.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Test odaklı geliştirme (TDD) yaklaşımını benimseyerek, kodumuzun güvenilirliğini 
              ve sürdürülebilirliğini garanti altına alıyoruz. Unit testler, entegrasyon testleri 
              ve end-to-end testler ile yazılımımızın her katmanını test ediyor, hata payını 
              minimize ediyoruz.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Açık kaynak teknolojileri ve community best practice'leri yakından takip ediyor, 
              sürekli kendimizi geliştiriyoruz. Teknoloji stack'imizi güncel tutarak, müşterilerimize 
              her zaman en iyi ve en modern çözümleri sunuyoruz. Code review süreçleri ve pair 
              programming pratikleri ile ekip içi bilgi paylaşımını ve kod kalitesini artırıyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalExcellence;
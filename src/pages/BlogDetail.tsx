import { useParams, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const BlogDetail = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = language === 'en' ? 'Check out this awesome blog post!' : 'Bu harika blog yazısına göz atın!';
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        break;
    }
    
    toast.success(language === 'en' ? 'Shared successfully!' : 'Başarıyla paylaşıldı!');
  };

  const getBlogPost = () => {
    const posts = language === 'en' ? [
      {
        id: "1",
        title: "Modern Web Development Trends",
        date: "2024-03-15",
        content: `The landscape of web development is constantly evolving, bringing new possibilities and challenges. Modern web development is characterized by several key trends that are shaping how we build and deliver digital experiences.

        Progressive Web Apps (PWAs) continue to gain traction, offering native-like experiences through web applications. The rise of headless CMS solutions is changing how we manage and deliver content. Meanwhile, the adoption of WebAssembly is opening new frontiers in web performance.
        
        Developers are increasingly embracing serverless architectures and edge computing to build more scalable and performant applications. The focus on web accessibility and inclusive design has never been stronger, ensuring digital experiences are available to everyone.`,
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "2",
        title: "The Impact of AI on Web Design",
        date: "2024-03-10",
        content: `Artificial Intelligence is revolutionizing the way we approach web design and development. From automated testing to intelligent design systems, AI is becoming an integral part of the web development workflow.

        AI-powered tools are helping designers create more personalized user experiences, while machine learning algorithms are optimizing performance and user engagement. The integration of chatbots and virtual assistants is enhancing user interaction and support.
        
        As AI technology continues to advance, we can expect even more innovative applications in web design, from predictive analytics to automated content generation.`,
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "3",
        title: "Building Responsive Websites",
        date: "2024-03-05",
        content: `Creating websites that work seamlessly across all devices is no longer optional – it's essential. Responsive web design has evolved from a trend to a fundamental requirement in modern web development.

        The key to successful responsive design lies in understanding fluid grids, flexible images, and media queries. Mobile-first design approaches ensure optimal experiences across all screen sizes.
        
        Performance optimization plays a crucial role in responsive design, ensuring fast loading times and smooth interactions regardless of device or network conditions.`,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      },
    ] : [
      {
        id: "1",
        title: "Modern Web Geliştirme Trendleri",
        date: "2024-03-15",
        content: `Web geliştirme dünyası sürekli evrim geçiriyor ve beraberinde yeni olanaklar ve zorluklar getiriyor. Modern web geliştirme, dijital deneyimleri nasıl oluşturduğumuzu ve sunduğumuzu şekillendiren birkaç önemli trendle karakterize ediliyor.

        Progressive Web Apps (PWA'lar) web uygulamaları aracılığıyla yerel uygulama benzeri deneyimler sunarak popülerlik kazanmaya devam ediyor. Headless CMS çözümlerinin yükselişi, içeriği nasıl yönettiğimizi ve sunduğumuzu değiştiriyor. Bu arada, WebAssembly'nin benimsenmesi web performansında yeni ufuklar açıyor.
        
        Geliştiriciler, daha ölçeklenebilir ve performanslı uygulamalar oluşturmak için sunucusuz mimarileri ve edge computing'i giderek daha fazla benimsiyor. Web erişilebilirliği ve kapsayıcı tasarıma odaklanma hiç bu kadar güçlü olmamıştı.`,
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "2",
        title: "Yapay Zekanın Web Tasarımına Etkisi",
        date: "2024-03-10",
        content: `Yapay Zeka, web tasarımı ve geliştirmeye yaklaşımımızı kökten değiştiriyor. Otomatik testlerden akıllı tasarım sistemlerine kadar, yapay zeka web geliştirme iş akışının ayrılmaz bir parçası haline geliyor.

        Yapay zeka destekli araçlar, tasarımcıların daha kişiselleştirilmiş kullanıcı deneyimleri yaratmasına yardımcı olurken, makine öğrenimi algoritmaları performansı ve kullanıcı etkileşimini optimize ediyor. Chatbot'ların ve sanal asistanların entegrasyonu, kullanıcı etkileşimini ve desteğini geliştiriyor.
        
        Yapay zeka teknolojisi geliştikçe, tahmine dayalı analizlerden otomatik içerik oluşturmaya kadar web tasarımında daha yenilikçi uygulamalar göreceğiz.`,
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "3",
        title: "Duyarlı Web Siteleri Oluşturma",
        date: "2024-03-05",
        content: `Tüm cihazlarda sorunsuz çalışan web siteleri oluşturmak artık isteğe bağlı değil – zorunlu. Duyarlı web tasarımı, modern web geliştirmede bir trendden temel bir gereksinime dönüştü.

        Başarılı duyarlı tasarımın anahtarı, akışkan ızgaraları, esnek görselleri ve medya sorgularını anlamakta yatıyor. Mobil öncelikli tasarım yaklaşımları, tüm ekran boyutlarında optimal deneyimler sağlıyor.
        
        Performans optimizasyonu, cihaz veya ağ koşullarından bağımsız olarak hızlı yükleme süreleri ve sorunsuz etkileşimler sağlayarak duyarlı tasarımda çok önemli bir rol oynuyor.`,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      },
    ];

    return posts.find(post => post.id === id);
  };

  const post = getBlogPost();

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-2xl font-bold text-center">
            {language === 'en' ? 'Blog post not found' : 'Blog yazısı bulunamadı'}
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2" />
            {language === 'en' ? 'Back' : 'Geri Dön'}
          </Button>
          <Card className="max-w-4xl mx-auto overflow-hidden border-0 bg-white dark:bg-gray-800">
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'tr-TR')}
                </div>
                <h1 className="text-3xl font-bold mb-4 dark:text-white">{post.title}</h1>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Share Section */}
              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-sm mb-6">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {language === 'en' ? 'Share This Post' : 'Bu Yazıyı Paylaş'}
                  </span>
                </div>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => handleShare('twitter')}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900"
                  >
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleShare('facebook')}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900"
                  >
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleShare('linkedin')}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900"
                  >
                    LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
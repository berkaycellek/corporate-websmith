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
        content: `Modern web development is constantly evolving with new technologies and approaches. We focus on creating efficient, scalable, and user-friendly solutions that meet today's digital needs.`,
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "2",
        title: "The Impact of AI on Web Design",
        date: "2024-03-10",
        content: `Artificial Intelligence is revolutionizing the way we approach web design and development. From automated testing to intelligent design systems, AI is becoming an integral part of the web development workflow.`,
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "3",
        title: "Building Responsive Websites",
        date: "2024-03-05",
        content: `Creating websites that work seamlessly across all devices is no longer optional – it's essential. Responsive web design has evolved from a trend to a fundamental requirement in modern web development.`,
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      },
    ] : [
      {
        id: "1",
        title: "Modern Web Geliştirme Trendleri",
        date: "2024-03-15",
        content: `Modern web geliştirme, yeni teknolojiler ve yaklaşımlarla sürekli gelişiyor. Günümüzün dijital ihtiyaçlarını karşılayan verimli, ölçeklenebilir ve kullanıcı dostu çözümler yaratmaya odaklanıyoruz.`,
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "2",
        title: "Yapay Zekanın Web Tasarımına Etkisi",
        date: "2024-03-10",
        content: `Yapay Zeka, web tasarımı ve geliştirmeye yaklaşımımızı kökten değiştiriyor. Otomatik testlerden akıllı tasarım sistemlerine kadar, yapay zeka web geliştirme iş akışının ayrılmaz bir parçası haline geliyor.`,
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "3",
        title: "Duyarlı Web Siteleri Oluşturma",
        date: "2024-03-05",
        content: `Tüm cihazlarda sorunsuz çalışan web siteleri oluşturmak artık isteğe bağlı değil – zorunlu. Duyarlı web tasarımı, modern web geliştirmede bir trendden temel bir gereksinime dönüştü.`,
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

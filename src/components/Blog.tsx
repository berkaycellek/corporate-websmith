import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Blog = () => {
  const { t, language } = useLanguage();

  const blogPosts = language === 'en' ? [
    {
      id: "1",
      title: "Modern Web Development Trends",
      date: "2024-03-15",
      description: "Exploring the latest trends in web development and how they shape the future of digital experiences.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: "The Impact of AI on Web Design",
      date: "2024-03-10",
      description: "How artificial intelligence is revolutionizing the way we approach web design and development.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: "Building Responsive Websites",
      date: "2024-03-05",
      description: "Best practices and techniques for creating websites that work seamlessly across all devices.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
  ] : [
    {
      id: "1",
      title: "Modern Web Geliştirme Trendleri",
      date: "2024-03-15",
      description: "Web geliştirmedeki en son trendleri ve bunların dijital deneyimlerin geleceğini nasıl şekillendirdiğini keşfediyoruz.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "2",
      title: "Yapay Zekanın Web Tasarımına Etkisi",
      date: "2024-03-10",
      description: "Yapay zekanın web tasarımı ve geliştirme yaklaşımımızı nasıl devrimleştirdiğini inceliyoruz.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "3",
      title: "Duyarlı Web Siteleri Oluşturma",
      date: "2024-03-05",
      description: "Tüm cihazlarda sorunsuz çalışan web siteleri oluşturmak için en iyi uygulamalar ve teknikler.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-gray-100 dark:bg-gray-800 dark:text-gray-200 rounded-full">
            {t('blog.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            {t('blog.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-0 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {new Date(post.date).toLocaleDateString(language === 'en' ? 'en-US' : 'tr-TR')}
                </div>
                <CardTitle className="dark:text-white">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
                <Link to={`/blog/${post.id}`}>
                  <Button variant="ghost" className="group dark:text-gray-300 dark:hover:text-white">
                    {language === 'en' ? 'Read More' : 'Devamını Oku'} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
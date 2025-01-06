import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Blog = () => {
  const { t } = useLanguage();

  const blogPosts = [
    {
      title: "Modern Web Development Trends",
      date: "2024-03-15",
      description: "Exploring the latest trends in web development and how they shape the future of digital experiences.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "The Impact of AI on Web Design",
      date: "2024-03-10",
      description: "How artificial intelligence is revolutionizing the way we approach web design and development.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Building Responsive Websites",
      date: "2024-03-05",
      description: "Best practices and techniques for creating websites that work seamlessly across all devices.",
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
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-0 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <CardTitle className="dark:text-white">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
                <Button variant="ghost" className="group dark:text-gray-300 dark:hover:text-white">
                  Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;